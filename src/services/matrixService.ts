import { 
  Grade, Chapter, MatrixData, MatrixRow, CognitiveLevel, ExamType, 
  SectionCountsConfig, DEFAULT_SECTION_COUNTS,
  SubjectRatioConfig, getDefaultSubjectRatio 
} from '../types/matrix';
import { sortChaptersByCurriculum, sortLessonsByNumber } from '../constants/curriculum';

export function getSubdiscipline(domain?: string, chapterName?: string, lessonName?: string): 'physics' | 'chemistry' | 'biology' {
  const d = (domain || '').toLowerCase();
  const c = (chapterName || '').toLowerCase();
  const l = (lessonName || '').toLowerCase();

  // Sinh học: Tế bào, thực vật, động vật, vi sinh vật, di truyền, biến dị, tiến hoá, sinh thái học, cơ thể người...
  if (
    d.includes('vật sống') || 
    c.includes('tế bào') || c.includes('sinh vật') || c.includes('di truyền') || 
    c.includes('tiến hoá') || c.includes('sinh thái') || c.includes('cơ thể') || 
    c.includes('thực vật') || c.includes('động vật') || c.includes('quang hợp') || 
    c.includes('hô hấp') || c.includes('hệ vận động') || c.includes('tuần hoàn') || 
    c.includes('thần kinh') || c.includes('nội tiết') || c.includes('nhiễm sắc thể') || 
    c.includes('dna') || c.includes('gene') || c.includes('vi sinh vật') || c.includes('nấm') ||
    l.includes('tế bào') || l.includes('quang hợp') || l.includes('hô hấp') || l.includes('di truyền') ||
    l.includes('dna') || l.includes('gene') || l.includes('sinh thái') || l.includes('thực vật') || l.includes('động vật')
  ) {
    return 'biology';
  }

  // Hoá học: Chất, nguyên tử, phân tử, phản ứng hoá học, acid, base, oxide, muối, kim loại, phi kim, hữu cơ...
  if (
    d.includes('chất') || 
    c.includes('chất') || c.includes('nguyên tử') || c.includes('nguyên tố') || 
    c.includes('phân tử') || c.includes('phản ứng') || c.includes('acid') || 
    c.includes('base') || c.includes('oxide') || c.includes('muối') || 
    c.includes('kim loại') || c.includes('phi kim') || c.includes('hữu cơ') || 
    c.includes('hydrocarbon') || c.includes('dung dịch') || c.includes('mol') || 
    c.includes('rượu') || c.includes('alkane') || c.includes('alkene') ||
    l.includes('chất') || l.includes('nguyên tử') || l.includes('phản ứng') || l.includes('kim loại') ||
    l.includes('acid') || l.includes('base') || l.includes('oxide') || l.includes('muối') || l.includes('mol')
  ) {
    return 'chemistry';
  }

  // Vật lí: Đo lường, lực, áp suất, cơ năng, nhiệt, điện, quang, âm, từ, thiên văn, Trái Đất & Bầu trời
  return 'physics';
}

// Helper: Phân bố đều một số nguyên 'total' vào 'bins' ngăn/nhóm
export const distribute = (total: number, bins: number): number[] => {
  if (bins <= 0) return [];
  const base = Math.floor(total / bins);
  const remainder = total % bins;
  return Array.from({ length: bins }, (_, i) => base + (i < remainder ? 1 : 0));
};

// Helper: Phân bổ mức độ nhận thức (Know, Understand, Apply) vào các ngăn dựa trên chỉ tiêu số câu
function distributeCognitiveMulti(
  counts: number[], 
  targetKnow: number, 
  targetUnderstand: number, 
  targetApply: number
): { know: number; understand: number; apply: number }[] {
  const n = counts.length;
  if (n === 0) return [];

  const totalTarget = targetKnow + targetUnderstand + targetApply;
  const cap = [...counts];
  const know = new Array(n).fill(0);
  const understand = new Array(n).fill(0);
  const apply = new Array(n).fill(0);

  // 1. Phân bổ Biết (Know)
  let remainingKnow = targetKnow;
  const idealKnow = counts.map(c => totalTarget > 0 ? (c * targetKnow) / totalTarget : 0);
  for (let i = 0; i < n; i++) {
    const k = Math.min(cap[i], Math.floor(idealKnow[i]));
    know[i] = k;
    remainingKnow -= k;
  }

  const knowRemainders = idealKnow
    .map((ideal, i) => ({ idx: i, rem: ideal - Math.floor(ideal), canAdd: cap[i] > know[i] }))
    .sort((a, b) => b.rem - a.rem);

  for (const item of knowRemainders) {
    if (remainingKnow <= 0) break;
    if (item.canAdd && know[item.idx] < cap[item.idx]) {
      know[item.idx]++;
      remainingKnow--;
    }
  }

  for (let i = 0; i < n && remainingKnow > 0; i++) {
    while (know[i] < cap[i] && remainingKnow > 0) {
      know[i]++;
      remainingKnow--;
    }
  }

  for (let i = 0; i < n; i++) {
    cap[i] -= know[i];
  }

  // 2. Phân bổ Hiểu (Understand)
  let remainingUnderstand = targetUnderstand;
  const idealUnderstand = counts.map(c => totalTarget > 0 ? (c * targetUnderstand) / totalTarget : 0);
  for (let i = 0; i < n; i++) {
    const u = Math.min(cap[i], Math.floor(idealUnderstand[i]));
    understand[i] = u;
    remainingUnderstand -= u;
  }

  const understandRemainders = idealUnderstand
    .map((ideal, i) => ({ idx: i, rem: ideal - Math.floor(ideal), canAdd: cap[i] > understand[i] }))
    .sort((a, b) => b.rem - a.rem);

  for (const item of understandRemainders) {
    if (remainingUnderstand <= 0) break;
    if (item.canAdd && understand[item.idx] < cap[item.idx]) {
      understand[item.idx]++;
      remainingUnderstand--;
    }
  }

  for (let i = 0; i < n && remainingUnderstand > 0; i++) {
    while (understand[i] < cap[i] && remainingUnderstand > 0) {
      understand[i]++;
      remainingUnderstand--;
    }
  }

  for (let i = 0; i < n; i++) {
    cap[i] -= understand[i];
  }

  // 3. Phân bổ Vận dụng (Apply)
  let remainingApply = targetApply;
  for (let i = 0; i < n && remainingApply > 0; i++) {
    const a = Math.min(cap[i], remainingApply);
    apply[i] = a;
    remainingApply -= a;
  }

  return counts.map((_, i) => ({
    know: know[i],
    understand: understand[i],
    apply: apply[i]
  }));
}

export function generateMatrix(
  grade: Grade,
  chapters: Chapter[],
  examType: ExamType = ExamType.MID_TERM_1,
  sectionCounts: SectionCountsConfig = DEFAULT_SECTION_COUNTS,
  subjectRatioConfig?: SubjectRatioConfig
): MatrixData {
  const sortedChapters = sortChaptersByCurriculum(chapters, grade);
  const subjectRatio = subjectRatioConfig || getDefaultSubjectRatio(grade, examType);
  
  // Thu thập tất cả các bài học và phân loại phân môn
  const allLessons = sortedChapters.flatMap(c => 
    (c.lessons || []).map(l => {
      const dom = l.domain || c.domain || '';
      return {
        ...l,
        chapterName: c.name,
        domain: dom,
        subdiscipline: getSubdiscipline(dom, c.name, l.name)
      };
    })
  );

  const numLessons = allLessons.length;
  if (numLessons === 0) {
    return {
      grade,
      examType,
      chapters: sortedChapters,
      sectionCounts,
      subjectRatio,
      rows: [],
      totals: {
        part1: { know: 0, understand: 0, apply: 0 },
        part2: { know: 0, understand: 0, apply: 0 },
        part3: { know: 0, understand: 0, apply: 0 },
        part4: { know: 0, understand: 0, apply: 0 },
        grandTotal: 0,
        ratio: { know: 40, understand: 30, apply: 30 },
        points: { part1: 0, part2: 0, part3: 0, part4: 0, grandTotal: 10, know: 4, understand: 3, apply: 3 },
        hasEssay: true
      }
    };
  }

  const { part1Count, part2Count, part3Count, part4Count } = sectionCounts;

  // Tính điểm số từng phần
  const p1Pts = part1Count * 0.25;
  const p2Pts = part2Count * 1.0;
  const p3Pts = part3Count * 0.5;
  const p4Pts = Math.max(0.5, Math.round((10.0 - (p1Pts + p2Pts + p3Pts)) * 100) / 100);

  // Phân bổ chuẩn điểm: 40% Biết (4.0đ) - 30% Hiểu (3.0đ) - 30% Vận dụng (3.0đ)
  // 1. Phần I: 60% Nhận biết, 40% Thông hiểu (Ví dụ: 16 câu -> 10 Biết = 2.5đ, 6 Hiểu = 1.5đ)
  const p1KnowTotal = Math.min(part1Count, Math.round(part1Count * 0.625));
  const p1UnderstandTotal = part1Count - p1KnowTotal;

  const lessonP1Counts = distribute(part1Count, numLessons);
  const lessonP1Cognitive = distributeCognitiveMulti(lessonP1Counts, p1KnowTotal, p1UnderstandTotal, 0);

  // 2. Phần II (Đúng/Sai): Mỗi câu có 4 lệnh hỏi
  // Chuẩn: 3 câu = 12 lệnh = 3.0đ (6 lệnh Biết = 1.5đ, 4 lệnh Hiểu = 1.0đ, 2 lệnh Vận dụng = 0.5đ)
  const totalP2Commands = part2Count * 4;
  const p2KnowCommands = Math.max(0, Math.min(totalP2Commands, Math.round((4.0 - (p1KnowTotal * 0.25)) / 0.25)));
  const p3ApplyTotal = Math.ceil(part3Count / 2);
  const p3UnderstandTotal = part3Count - p3ApplyTotal;
  const p2ApplyCommands = Math.max(0, Math.min(totalP2Commands - p2KnowCommands, Math.round((3.0 - p4Pts - (p3ApplyTotal * 0.5)) / 0.25)));
  const p2UnderstandCommands = Math.max(0, totalP2Commands - p2KnowCommands - p2ApplyCommands);

  // Template các kịch bản Phần II để tổng đạt chính xác Biết, Hiểu, Vận dụng
  const p2Templates = [
    { know: 2, understand: 1, apply: 1 },
    { know: 2, understand: 2, apply: 0 },
    { know: 2, understand: 1, apply: 1 },
    { know: 1, understand: 2, apply: 1 }
  ];

  // Tạo các hàng chi tiết của Ma trận
  const rows: MatrixRow[] = [];

  let p2Assigned = 0;
  let p3Assigned = 0;
  let p4Assigned = 0;

  allLessons.forEach((lesson, lIdx) => {
    const subItems = lesson.subItems && lesson.subItems.length > 0 
      ? lesson.subItems 
      : ['Khái niệm & hiện tượng cơ bản', 'Ứng dụng & bài tập thực tiễn'];

    const numSubs = subItems.length;
    const lP1 = lessonP1Cognitive[lIdx];
    
    // Chia nhỏ P1 vào các subItems
    const subP1Know = distribute(lP1.know, numSubs);
    const subP1Understand = distribute(lP1.understand, numSubs);

    // Kiểm tra xem bài này có host Phần II không
    const isP2Host = lesson.part2Hosts && lesson.part2Hosts.length > 0;

    // Kiểm tra Phần III
    let p3ForThisLesson = 0;
    if (p3Assigned < part3Count && (lIdx % Math.max(1, Math.floor(numLessons / part3Count)) === 0)) {
      p3ForThisLesson = 1;
      p3Assigned++;
    }

    // Kiểm tra Phần IV
    let p4ForThisLesson = 0;
    if (p4Assigned < part4Count && (lIdx % Math.max(1, Math.floor(numLessons / part4Count)) === 0)) {
      p4ForThisLesson = 1;
      p4Assigned++;
    }

    subItems.forEach((sub, sIdx) => {
      const isSubP2 = isP2Host && lesson.part2Hosts.includes(sub);
      let p2k = 0;
      let p2u = 0;
      let p2a = 0;
      if (isSubP2) {
        const tmpl = p2Templates[p2Assigned % p2Templates.length];
        p2k = tmpl.know;
        p2u = tmpl.understand;
        p2a = tmpl.apply;
        p2Assigned++;
      }

      // Phần III: 1 câu Hiểu, 1 câu Vận dụng
      const p3u = (sIdx === 0 && p3ForThisLesson > 0 && p3Assigned % 2 === 1) ? 1 : 0;
      const p3a = (sIdx === 0 && p3ForThisLesson > 0 && p3Assigned % 2 === 0) ? 1 : 0;

      // Phần IV: Tự luận Vận dụng
      const p4a = (sIdx === 0 && p4ForThisLesson > 0) ? 1 : 0;

      const rowPart1 = { know: subP1Know[sIdx], understand: subP1Understand[sIdx], apply: 0 };
      const rowPart2 = { know: p2k, understand: p2u, apply: p2a };
      const rowPart3 = { know: 0, understand: p3u, apply: p3a };
      const rowPart4 = { know: 0, understand: 0, apply: p4a };

      const rowTotal = 
        rowPart1.know + rowPart1.understand + rowPart1.apply +
        rowPart2.know + rowPart2.understand + rowPart2.apply +
        rowPart3.know + rowPart3.understand + rowPart3.apply +
        rowPart4.know + rowPart4.understand + rowPart4.apply;

      rows.push({
        content: lesson.chapterName,
        lessonName: lesson.name,
        detailName: sub,
        domain: lesson.domain,
        isFirstInLesson: sIdx === 0,
        isLastInLesson: sIdx === numSubs - 1,
        lessonRowCount: numSubs,
        part1: rowPart1,
        part2: rowPart2,
        part3: rowPart3,
        part4: rowPart4,
        total: rowTotal
      });
    });
  });

  // Đảm bảo đủ câu Phần II nếu người dùng chưa chọn host thủ công
  let actualP2Commands = rows.reduce((s, r) => s + r.part2.know + r.part2.understand + r.part2.apply, 0);
  if (actualP2Commands < totalP2Commands) {
    const missing = totalP2Commands - actualP2Commands;
    const numScenariosMissing = Math.ceil(missing / 4);
    
    let placed = 0;
    for (let r of rows) {
      if (placed >= numScenariosMissing) break;
      if (r.part2.know === 0 && r.part2.understand === 0 && r.part2.apply === 0) {
        const tmpl = p2Templates[placed % p2Templates.length];
        r.part2.know = tmpl.know;
        r.part2.understand = tmpl.understand;
        r.part2.apply = tmpl.apply;
        r.total += 4;
        placed++;
      }
    }
  }

  // Đảm bảo đủ câu Phần III nếu còn thiếu
  let actualP3 = rows.reduce((s, r) => s + r.part3.know + r.part3.understand + r.part3.apply, 0);
  if (actualP3 < part3Count) {
    for (let r of rows) {
      if (actualP3 >= part3Count) break;
      if (r.part3.understand === 0 && r.part3.apply === 0) {
        if (actualP3 % 2 === 0) {
          r.part3.understand = 1;
        } else {
          r.part3.apply = 1;
        }
        r.total += 1;
        actualP3++;
      }
    }
  }

  // Đảm bảo đủ câu Phần IV nếu còn thiếu
  let actualP4 = rows.reduce((s, r) => s + (r.part4?.apply || 0), 0);
  if (actualP4 < part4Count) {
    for (let r of rows) {
      if (actualP4 >= part4Count) break;
      if (r.part4 && r.part4.apply === 0) {
        r.part4.apply = 1;
        r.total += 1;
        actualP4++;
      }
    }
  }

  // Tính tổng cộng
  const totP1 = {
    know: rows.reduce((s, r) => s + r.part1.know, 0),
    understand: rows.reduce((s, r) => s + r.part1.understand, 0),
    apply: rows.reduce((s, r) => s + r.part1.apply, 0)
  };

  const totP2 = {
    know: rows.reduce((s, r) => s + r.part2.know, 0),
    understand: rows.reduce((s, r) => s + r.part2.understand, 0),
    apply: rows.reduce((s, r) => s + r.part2.apply, 0)
  };

  const totP3 = {
    know: rows.reduce((s, r) => s + r.part3.know, 0),
    understand: rows.reduce((s, r) => s + r.part3.understand, 0),
    apply: rows.reduce((s, r) => s + r.part3.apply, 0)
  };

  const totP4 = {
    know: rows.reduce((s, r) => s + (r.part4?.know || 0), 0),
    understand: rows.reduce((s, r) => s + (r.part4?.understand || 0), 0),
    apply: rows.reduce((s, r) => s + (r.part4?.apply || 0), 0)
  };

  const grandTotal = 
    totP1.know + totP1.understand + totP1.apply +
    totP2.know + totP2.understand + totP2.apply +
    totP3.know + totP3.understand + totP3.apply +
    totP4.know + totP4.understand + totP4.apply;

  const totalKnow = totP1.know + totP2.know + totP3.know + totP4.know;
  const totalUnderstand = totP1.understand + totP2.understand + totP3.understand + totP4.understand;
  const totalApply = totP1.apply + totP2.apply + totP3.apply + totP4.apply;

  const p4UnitPt = part4Count > 0 ? (p4Pts / part4Count) : 1.0;
  const calcKnowPts = Math.round(((totP1.know * 0.25) + (totP2.know * 0.25) + (totP3.know * 0.5) + (totP4.know * p4UnitPt)) * 10) / 10;
  const calcUnderstandPts = Math.round(((totP1.understand * 0.25) + (totP2.understand * 0.25) + (totP3.understand * 0.5) + (totP4.understand * p4UnitPt)) * 10) / 10;
  const calcApplyPts = Math.round((10.0 - calcKnowPts - calcUnderstandPts) * 10) / 10;

  const ratio = {
    know: totalKnow,
    understand: totalUnderstand,
    apply: totalApply
  };

  return {
    grade,
    examType,
    chapters: sortedChapters,
    sectionCounts,
    subjectRatio,
    rows,
    totals: {
      part1: totP1,
      part2: totP2,
      part3: totP3,
      part4: totP4,
      grandTotal,
      ratio,
      points: {
        part1: p1Pts,
        part2: p2Pts,
        part3: p3Pts,
        part4: p4Pts,
        grandTotal: 10.0,
        know: calcKnowPts,
        understand: calcUnderstandPts,
        apply: calcApplyPts
      },
      hasEssay: true
    }
  };
}
