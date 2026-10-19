import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle } from "docx";
import saveAs from "file-saver";
import { ExamData } from "../types/exam";

const parseScientificText = (text: string, baseOptions: any = {}): TextRun[] => {
  if (!text) return [];
  const parts: TextRun[] = [];
  // Regex for scientific & chemical text:
  // e.g. charges (2+, 3+, -), superscripts (m^2, m^3, s^2), subscripts (H2O, CO2, Fe2O3, etc.)
  const regex = /([a-zA-Z\d\)])(\d*[\+\-])|([spdf])(\d+)|([a-zA-Z\)])(\d+)|(\^)(\d+)/g;
  
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(new TextRun({ ...baseOptions, text: text.substring(lastIndex, match.index) }));
    }

    const charBefore = match[1] || match[3] || match[5] || '';
    if (charBefore) {
      parts.push(new TextRun({ ...baseOptions, text: charBefore }));
    }

    const value = match[2] || match[4] || match[6] || match[8];
    if (match[2] || match[4] || match[7]) { // Charge or Superscript
      parts.push(new TextRun({ ...baseOptions, text: value, superScript: true }));
    } else { // Atom count / Subscript
      parts.push(new TextRun({ ...baseOptions, text: value, subScript: true }));
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(new TextRun({ ...baseOptions, text: text.substring(lastIndex) }));
  }

  return parts.length > 0 ? parts : [new TextRun({ ...baseOptions, text: text })];
};

export const downloadExamDoc = async (data: ExamData, isAnswerKey: boolean) => {
  const children: any[] = [];
  const spacing = isAnswerKey ? { before: 100, after: 0 } : { before: 240, after: 60 };

  const noBorder = {
    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  };

  const p1Count = data.part1?.length || 16;
  const p2Count = data.part2?.length || 3;
  const p3Count = data.part3?.length || 2;
  const p4Count = data.part4?.length || 2;

  const p1Pts = (p1Count * 0.25).toFixed(2).replace('.', ',');
  const p2Pts = (p2Count * 1.0).toFixed(2).replace('.', ',');
  const p3Pts = (p3Count * 0.5).toFixed(2).replace('.', ',');
  const p4PtsNum = Math.max(0.5, 10.0 - (p1Count * 0.25 + p2Count * 1.0 + p3Count * 0.5));
  const p4Pts = p4PtsNum.toFixed(2).replace('.', ',');

  // Header Table
  children.push(new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: noBorder,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            borders: noBorder,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "SỞ GIÁO DỤC VÀ ĐÀO TẠO VĨNH LONG", bold: true, size: 21 })]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "TRƯỜNG THCS-THPT PHAN VĂN TRỊ", bold: true, underline: {}, size: 22 })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            borders: noBorder,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: `ĐỀ KIỂM TRA MÔN KHOA HỌC TỰ NHIÊN ${data.grade || ''}`, bold: true, size: 22 })]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: data.examType || "KIỂM TRA ĐỊNH KÌ", bold: true, size: 21 })]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "NĂM HỌC 2026 – 2027", size: 21 })]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "Thời gian làm bài: 60 phút (không kể phát đề)", italics: true, size: 20 })]
              })
            ]
          })
        ]
      })
    ]
  }));

  children.push(new Paragraph({
    text: (data.title || `ĐỀ KIỂM TRA KHOA HỌC TỰ NHIÊN ${data.grade}`).toUpperCase() + (isAnswerKey ? " - ĐÁP ÁN & HƯỚNG DẪN CHẤM" : ""),
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 260 },
  }));

  // PART 1
  children.push(new Paragraph({ 
    children: [new TextRun({ text: `PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (${p1Count} câu - ${p1Pts} điểm)`, bold: true })], 
    spacing 
  }));
  children.push(new Paragraph({
    children: [new TextRun({ text: `Thí sinh trả lời từ câu 1 đến câu ${p1Count}. Mỗi câu hỏi thí sinh chỉ chọn một phương án. Mỗi câu đúng được 0,25 điểm.`, italics: true, size: 20 })],
    spacing: { before: 40, after: 100 }
  }));

  const labels1 = ["A", "B", "C", "D"];
  data.part1.forEach((q, idx) => {
    children.push(new Paragraph({ 
      children: [new TextRun({ text: `Câu ${idx + 1}. `, bold: true }), ...parseScientificText(q.question)], 
      spacing: { before: 60 } 
    }));
    q.options.forEach((opt, oIdx) => {
      const isCorrect = isAnswerKey && oIdx === q.correctIndex;
      const cleanOpt = opt.replace(/^[A-D][\.\)]\s*/i, '').replace(/^\.\s*/, '');
      children.push(new Paragraph({
        children: [
          new TextRun({ text: `${labels1[oIdx]}. `, bold: isCorrect, italics: isCorrect, underline: isCorrect ? {} : undefined }),
          ...parseScientificText(cleanOpt, { italics: isCorrect, underline: isCorrect ? {} : undefined, bold: false })
        ],
        indent: { left: 450 },
        spacing: { before: 0, after: 0 }
      }));
    });
  });

  // PART 2
  children.push(new Paragraph({ 
    children: [new TextRun({ text: `PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI (${p2Count} câu - ${p2Pts} điểm)`, bold: true })], 
    spacing: { before: 200, after: 40 } 
  }));
  children.push(new Paragraph({
    children: [new TextRun({ text: `Thí sinh trả lời từ câu 1 đến câu ${p2Count}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.`, italics: true, size: 20 })],
    spacing: { before: 0, after: 100 }
  }));

  const labels2 = ["a", "b", "c", "d"];
  data.part2.forEach((sc, idx) => {
    children.push(new Paragraph({ 
      children: [new TextRun({ text: `Câu ${idx + 1}. `, bold: true }), ...parseScientificText(sc.context)], 
      spacing: { before: 100 } 
    }));
    sc.statements.forEach((st, sIdx) => {
      const isTrueMark = isAnswerKey && st.isTrue;
      const cleanText = st.text.replace(/^[a-d][\.\)]\s*/i, '').replace(/^\.\s*/, '');
      children.push(new Paragraph({
        children: [
          new TextRun({ text: `${labels2[sIdx]}) `, bold: true, italics: isTrueMark, underline: isTrueMark ? {} : undefined }),
          ...parseScientificText(cleanText, { italics: isTrueMark, underline: isTrueMark ? {} : undefined, bold: false }),
          ...(isAnswerKey ? [new TextRun({ text: ` [${st.isTrue ? "ĐÚNG" : "SAI"}]`, bold: true, color: st.isTrue ? "008800" : "CC0000" })] : [])
        ],
        indent: { left: 450 },
        spacing: { before: 0, after: 20 }
      }));
    });
  });

  // PART 3
  children.push(new Paragraph({ 
    children: [new TextRun({ text: `PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (${p3Count} câu - ${p3Pts} điểm)`, bold: true })], 
    spacing: { before: 200, after: 40 } 
  }));
  children.push(new Paragraph({
    children: [new TextRun({ text: `Thí sinh trả lời từ câu 1 đến câu ${p3Count}. Thí sinh tự điền con số kết quả tính toán hoặc thuật ngữ khoa học vào ô tương ứng.`, italics: true, size: 20 })],
    spacing: { before: 0, after: 100 }
  }));

  data.part3.forEach((q, idx) => {
    children.push(new Paragraph({ 
      children: [new TextRun({ text: `Câu ${idx + 1}. `, bold: true }), ...parseScientificText(q.question)], 
      spacing: { before: 100 } 
    }));
    if (isAnswerKey) {
      children.push(new Paragraph({ 
        children: [
          new TextRun({ text: "Đáp số / Thuật ngữ: ", bold: true, italics: true }), 
          new TextRun({ text: `${q.answer}`, bold: true, color: "0000FF" })
        ], 
        indent: { left: 450 } 
      }));
      if (q.explanation) {
        children.push(new Paragraph({
          children: [
            new TextRun({ text: "Hướng dẫn giải: ", bold: true, italics: true, color: "666666" }),
            ...parseScientificText(q.explanation, { italics: true, color: "666666" })
          ],
          indent: { left: 450 },
          spacing: { before: 40, after: 80 }
        }));
      }
    } else {
      children.push(new Paragraph({ 
        children: [
          new TextRun({ text: "Trả lời: ", bold: true, italics: true }),
          new TextRun({ text: "..........................................................." })
        ], 
        indent: { left: 450 },
        spacing: { before: 40, after: 40 }
      }));
    }
  });

  // PART 4
  if (data.part4 && data.part4.length > 0) {
    children.push(new Paragraph({ 
      children: [new TextRun({ text: `PHẦN IV. TỰ LUẬN (${p4Count} câu - ${p4Pts} điểm)`, bold: true })], 
      spacing: { before: 200, after: 40 } 
    }));

    data.part4.forEach((q, idx) => {
      const pts = (q.points || (p4PtsNum / p4Count)).toFixed(2).replace('.', ',');
      children.push(new Paragraph({ 
        children: [
          new TextRun({ text: `Câu ${idx + 1} (${pts} điểm). `, bold: true }), 
          ...parseScientificText(q.question)
        ], 
        spacing: { before: 100 } 
      }));

      if (isAnswerKey) {
        if (q.solution) {
          const lines = q.solution.split('\n');
          children.push(new Paragraph({
            children: [
              new TextRun({ text: "Hướng dẫn giải & Thang điểm:", bold: true, italics: true, color: "006600" })
            ],
            indent: { left: 450 },
            spacing: { before: 40, after: 20 }
          }));
          lines.forEach(line => {
            children.push(new Paragraph({
              children: [
                ...parseScientificText(line, { italics: true, color: "333333" })
              ],
              indent: { left: 700 },
              spacing: { before: 0, after: 20 }
            }));
          });
        }
      } else {
        children.push(new Paragraph({
          children: [new TextRun({ text: "Bài làm:", italics: true, color: "888888" })],
          indent: { left: 450 },
          spacing: { before: 40, after: 20 }
        }));
        for (let i = 0; i < 4; i++) {
          children.push(new Paragraph({
            children: [new TextRun({ text: "..........................................................................................................................................................................", color: "CCCCCC" })],
            indent: { left: 450 },
            spacing: { before: 0, after: 30 }
          }));
        }
      }
    });
  }

  children.push(new Paragraph({
    text: "--- HẾT ---",
    alignment: AlignmentType.CENTER,
    spacing: { before: 300, after: 100 }
  }));

  const doc = new Document({
    sections: [{ 
      properties: { 
        page: { 
          margin: { top: 720, bottom: 720, left: 720, right: 720 } 
        } 
      }, 
      children 
    }],
  });
  const blob = await Packer.toBlob(doc);
  const cleanTitle = (data.title || `De_Kiem_Tra_KHTN_${data.grade}`).replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, '_');
  saveAs(blob, `${isAnswerKey ? 'DapAn' : 'DeThi'}_${cleanTitle}.docx`);
};
