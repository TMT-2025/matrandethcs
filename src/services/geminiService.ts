import { GoogleGenAI, Type } from "@google/genai";
import { ExamData, ExamMatrixRow } from "../types/exam";
import { SectionCountsConfig, DEFAULT_SECTION_COUNTS } from "../types/matrix";

export const getStoredApiKey = (): string => {
  return localStorage.getItem('gemini_api_key') || 
         (import.meta as any).env?.VITE_GEMINI_API_KEY || 
         (window as any).process?.env?.GEMINI_API_KEY || 
         '';
};

export const setStoredApiKey = (key: string): void => {
  if (key) {
    localStorage.setItem('gemini_api_key', key.trim());
  } else {
    localStorage.removeItem('gemini_api_key');
  }
};

export const generateExam = async (
  grade: string, 
  topics: string[], 
  details: string, 
  sectionCounts: SectionCountsConfig = DEFAULT_SECTION_COUNTS,
  existingMatrix?: ExamMatrixRow[],
  matrixImageBase64?: string,
  modelName: string = 'gemini-3.8-flash'
): Promise<ExamData> => {
  const customApiKey = getStoredApiKey();

  // 1. Thử gọi qua Backend Server trước
  try {
    const res = await fetch('/api/generate-exam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(customApiKey ? { 'x-gemini-api-key': customApiKey } : {})
      },
      body: JSON.stringify({
        grade,
        topics,
        details,
        sectionCounts,
        existingMatrix,
        matrixImageBase64,
        modelName,
        apiKey: customApiKey || undefined
      })
    });

    if (res.ok) {
      const result = await res.json();
      if (result.success && result.data) {
        return result.data as ExamData;
      }
    }
  } catch (backendErr) {
    console.warn("Backend server chưa khởi động hoặc lỗi, tự động chuyển sang chế độ gọi trực tiếp phía Client...", backendErr);
  }

  // 2. Chế độ dự phòng gọi trực tiếp từ trình duyệt
  const apiKey = customApiKey || (import.meta as any).env?.VITE_API_KEY || (process as any)?.env?.API_KEY;
  if (!apiKey) {
    throw new Error("Chưa cấu hình Google Gemini API Key! Vui lòng bấm vào nút 'Cấu hình Gemini Key' ở góc phải màn hình hoặc cấu hình trong file .env.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const selectedModel = modelName || 'gemini-3.8-flash';
  const topicStr = topics.join(', ');

  const systemInstruction = `
Bạn là chuyên gia khảo thí và biên soạn đề kiểm tra môn Khoa học tự nhiên (KHTN) cấp THCS (Lớp 6, 7, 8, 9) theo Chương trình Giáo dục phổ thông 2018 (Công văn 7991/BGDĐT-GDTrH và Thông tư 22/2021/TT-BGDĐT).
Nhiệm vụ của bạn: Biên soạn đề kiểm tra chất lượng cao bám sát 100% Ma trận và Bản đặc tả cho KHỐI ${grade} với các chương/chủ đề: "${topicStr}".

CẤU TRÚC ĐỀ THI LUÔN THEO 4 PHẦN CHUẨN:
1. PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN:
   - Gồm đúng ${sectionCounts.part1Count} câu hỏi (mỗi câu 4 phương án A, B, C, D, chỉ 1 phương án đúng).
   - Mỗi câu trả lời đúng được 0,25 điểm. Tổng điểm: ${(sectionCounts.part1Count * 0.25).toFixed(2)} điểm.
   - Phân bổ: 60% mức độ Nhận biết, 40% mức độ Thông hiểu. Cân đối giữa các phân môn Vật lí, Hoá học, Sinh học.

2. PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI:
   - Gồm đúng ${sectionCounts.part2Count} câu hỏi (mỗi câu gồm 1 ngữ cảnh khoa học/thực nghiệm/đời sống và 4 lệnh hỏi a, b, c, d).
   - Mỗi câu tối đa 1,0 điểm (quy tắc chuẩn Bộ GD&ĐT: Đúng 1 lệnh = 0,1đ; Đúng 2 lệnh = 0,25đ; Đúng 3 lệnh = 0,5đ; Đúng cả 4 lệnh = 1,0đ).
   - Ngữ cảnh phải gắn liền với thực nghiệm, quy trình thí nghiệm, bảng số liệu, hiện tượng tự nhiên hoặc ứng dụng đời sống.

3. PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN:
   - Gồm đúng ${sectionCounts.part3Count} câu hỏi.
   - Học sinh tự tính toán hoặc suy luận để điền con số kết quả (hoặc thuật ngữ ngắn gọn), không có gợi ý phương án.
   - Rất thích hợp cho các bài toán: tính nồng độ dung dịch (C%, CM), khối lượng, tốc độ, quãng đường, thời gian, nhiệt lượng, công, công suất, áp suất, khối lượng riêng, số lượng nucleotide, tỉ lệ kiểu gen/kiểu hình...

4. PHẦN IV. TỰ LUẬN:
   - Gồm đúng ${sectionCounts.part4Count} câu hỏi (Mức độ Vận dụng và Vận dụng cao).
   - Tổng điểm: ${(10.0 - (sectionCounts.part1Count * 0.25 + sectionCounts.part2Count * 1.0 + sectionCounts.part3Count * 0.5)).toFixed(2)} điểm.
   - Dành cho: Viết PTHH và giải thích hiện tượng thực tế; vẽ sơ đồ đường truyền ánh sáng / sơ đồ mạch điện; giải bài tập lai di truyền; phân tích tác động môi trường hoặc đề xuất giải pháp bảo vệ sức khoẻ/môi trường.
   - BẮT BUỘC: Cung cấp hướng dẫn chấm chi tiết từng bước kèm biểu điểm cụ thể trong trường 'solution'.

YÊU CẦU ĐẶC BIỆT VỀ NỘI DUNG VÀ THỰC TIỄN:
- TẤT CẢ các câu hỏi, bối cảnh, tình huống PHẢI GẮN LIỀN VỚI THỰC TIỄN CUỘC SỐNG, gần gũi với lứa tuổi học sinh THCS.
- Ngôn ngữ: Toàn bộ viết bằng Tiếng Việt chuẩn mực, danh pháp hoá học theo chuẩn GDPT 2018 (IUPAC: ví dụ Oxygen, Hydrogen, Copper, Iron(III) oxide...).
- Điền đầy đủ explanation (lời giải thích/hướng dẫn giải) cho từng câu.
`;

  const examSchema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING },
      grade: { type: Type.STRING },
      examType: { type: Type.STRING },
      part1: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctIndex: { type: Type.INTEGER },
            domain: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ["question", "options", "correctIndex"]
        }
      },
      part2: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            context: { type: Type.STRING },
            statements: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  isTrue: { type: Type.BOOLEAN },
                  explanation: { type: Type.STRING }
                },
                required: ["text", "isTrue"]
              }
            },
            domain: { type: Type.STRING }
          },
          required: ["context", "statements"]
        }
      },
      part3: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            answer: { type: Type.STRING },
            domain: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ["question", "answer"]
        }
      },
      part4: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            points: { type: Type.NUMBER },
            domain: { type: Type.STRING },
            solution: { type: Type.STRING }
          },
          required: ["question", "points", "solution"]
        }
      },
      matrix: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            topic: { type: Type.STRING },
            domain: { type: Type.STRING },
            recognition: { type: Type.INTEGER },
            understanding: { type: Type.INTEGER },
            application: { type: Type.INTEGER },
            highApplication: { type: Type.INTEGER }
          },
          required: ["topic", "recognition", "understanding", "application", "highApplication"]
        }
      }
    },
    required: ["title", "grade", "part1", "part2", "part3", "part4", "matrix"]
  };

  let userPrompt = `Hãy tạo Đề kiểm tra KHTN ${grade} gồm đúng ${sectionCounts.part1Count} câu Phần I, ${sectionCounts.part2Count} câu Phần II, ${sectionCounts.part3Count} câu Phần III, và ${sectionCounts.part4Count} câu Phần IV.
Các chương/chủ đề được chọn: ${topicStr}.
${details || ''}
${existingMatrix ? `\nMa trận phân bổ tham chiếu: ${JSON.stringify(existingMatrix)}` : ''}
`;

  const response = await ai.models.generateContent({
    model: selectedModel,
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: examSchema,
      temperature: 0.2
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("Không nhận được phản hồi từ AI");
  }

  const examData = JSON.parse(text);
  examData.id = `exam_${Date.now()}`;
  examData.createdAt = Date.now();
  examData.sectionCounts = sectionCounts;

  return examData as ExamData;
};
