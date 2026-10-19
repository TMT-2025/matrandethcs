import { MatrixData, Grade } from '../types/matrix';
import { SpecificationData, SpecificationRow } from '../types/specification';
import { findLearningOutcome, LearningOutcomeDetail } from '../constants/learningOutcomes';

/**
 * Chuyển đổi MatrixData sang SpecificationData chuẩn theo Phụ lục 2 Công văn 7991/BGDĐT-GDTrH
 */
export function buildSpecificationFromMatrix(matrix: MatrixData): SpecificationData {
  const gradeNum = typeof matrix.grade === 'number' ? matrix.grade : (parseInt(String(matrix.grade), 10) || 8);
  const sectionCounts = matrix.sectionCounts || {
    part1Count: 16,
    part2Count: 3,
    part3Count: 2,
    part4Count: 2
  };

  // 1. Nhóm các hàng của ma trận theo Bài học (Chủ đề / Đơn vị kiến thức)
  interface LessonAccumulator {
    chapterName: string;
    lessonName: string;
    domain?: string;
    part1: { know: number; understand: number; apply: number };
    part2: { know: number; understand: number; apply: number };
    part3: { know: number; understand: number; apply: number };
    part4: { know: number; understand: number; apply: number };
  }

  const lessonMap = new Map<string, LessonAccumulator>();
  const chapterLessonOrder: { chapterName: string; lessonKey: string }[] = [];

  matrix.rows.forEach(row => {
    const key = `${row.content}__${row.lessonName}`;
    if (!lessonMap.has(key)) {
      lessonMap.set(key, {
        chapterName: row.content,
        lessonName: row.lessonName,
        domain: row.domain,
        part1: { know: 0, understand: 0, apply: 0 },
        part2: { know: 0, understand: 0, apply: 0 },
        part3: { know: 0, understand: 0, apply: 0 },
        part4: { know: 0, understand: 0, apply: 0 }
      });
      chapterLessonOrder.push({ chapterName: row.content, lessonKey: key });
    }

    const acc = lessonMap.get(key)!;
    acc.part1.know += row.part1.know;
    acc.part1.understand += row.part1.understand;
    acc.part1.apply += row.part1.apply;

    acc.part2.know += row.part2.know;
    acc.part2.understand += row.part2.understand;
    acc.part2.apply += row.part2.apply;

    acc.part3.know += row.part3.know;
    acc.part3.understand += row.part3.understand;
    acc.part3.apply += row.part3.apply;

    if (row.part4) {
      acc.part4.know += row.part4.know;
      acc.part4.understand += row.part4.understand;
      acc.part4.apply += row.part4.apply;
    }
  });

  // Đếm số hàng theo từng chương để thiết lập rowSpan
  const chapterRowCounts = new Map<string, number>();
  chapterLessonOrder.forEach(item => {
    chapterRowCounts.set(item.chapterName, (chapterRowCounts.get(item.chapterName) || 0) + 1);
  });

  // 2. Tạo các SpecificationRow
  const seenChapters = new Set<string>();
  const rows: SpecificationRow[] = chapterLessonOrder.map((item, idx) => {
    const acc = lessonMap.get(item.lessonKey)!;
    const isFirstInChapter = !seenChapters.has(item.chapterName);
    seenChapters.add(item.chapterName);

    // Tìm Yêu cầu cần đạt chuẩn
    let outcomes = findLearningOutcome(gradeNum, acc.lessonName, acc.chapterName);
    if (!outcomes) {
      // Fallback nếu bài học tùy chỉnh hoặc chưa có trong CSDL chuẩn
      outcomes = {
        recognition: [
          `Nhận biết, trình bày được các khái niệm và định luật cơ bản liên quan đến ${acc.lessonName}.`
        ],
        understanding: [
          `Giải thích được các hiện tượng và bản chất khoa học liên quan đến ${acc.lessonName}.`
        ],
        application: [
          `Vận dụng kiến thức ${acc.lessonName} vào giải quyết bài tập và tình huống thực tiễn đời sống.`
        ]
      };
    }

    const rowTotal =
      acc.part1.know + acc.part1.understand + acc.part1.apply +
      acc.part2.know + acc.part2.understand + acc.part2.apply +
      acc.part3.know + acc.part3.understand + acc.part3.apply +
      acc.part4.know + acc.part4.understand + acc.part4.apply;

    return {
      index: idx + 1,
      chapterName: acc.chapterName,
      lessonName: acc.lessonName,
      domain: acc.domain,
      outcomes,
      part1: acc.part1,
      part2: acc.part2,
      part3: acc.part3,
      part4: acc.part4,
      totalCommands: rowTotal,
      isFirstInChapter,
      chapterRowCount: chapterRowCounts.get(acc.chapterName) || 1
    };
  });

  const totals = matrix.totals;
  const grandTotal = totals.grandTotal;

  return {
    grade: matrix.grade,
    examType: matrix.examType,
    title: `BẢN ĐẶC TẢ ĐỀ KIỂM TRA MÔN KHOA HỌC TỰ NHIÊN ${matrix.grade !== 'Tự do' ? matrix.grade : ''} (${matrix.examType})`,
    hasEssay: true,
    standardCommands: grandTotal,
    sectionCounts,
    rows,
    totals: {
      part1: totals.part1,
      part2: totals.part2,
      part3: totals.part3,
      part4: totals.part4,
      totalCommands: grandTotal,
      ratio: totals.ratio,
      totalPoints: {
        part1: totals.points?.part1 ?? (sectionCounts.part1Count * 0.25),
        part2: totals.points?.part2 ?? (sectionCounts.part2Count * 1.0),
        part3: totals.points?.part3 ?? (sectionCounts.part3Count * 0.5),
        part4: totals.points?.part4 ?? Math.max(0.5, Math.round((10 - ((sectionCounts.part1Count * 0.25) + (sectionCounts.part2Count * 1.0) + (sectionCounts.part3Count * 0.5))) * 100) / 100),
        grandTotal: totals.points?.grandTotal ?? 10.0,
        know: totals.points?.know ?? 4.0,
        understand: totals.points?.understand ?? 3.0,
        apply: totals.points?.apply ?? 3.0
      },
      percentages: {
        part1: Math.round(((totals.points?.part1 ?? (sectionCounts.part1Count * 0.25)) / (totals.points?.grandTotal ?? 10.0)) * 100),
        part2: Math.round(((totals.points?.part2 ?? (sectionCounts.part2Count * 1.0)) / (totals.points?.grandTotal ?? 10.0)) * 100),
        part3: Math.round(((totals.points?.part3 ?? (sectionCounts.part3Count * 0.5)) / (totals.points?.grandTotal ?? 10.0)) * 100),
        part4: Math.round(((totals.points?.part4 ?? 2.0) / (totals.points?.grandTotal ?? 10.0)) * 100),
        know: Math.round(((totals.points?.know ?? 4.0) / (totals.points?.grandTotal ?? 10.0)) * 100),
        understand: Math.round(((totals.points?.understand ?? 3.0) / (totals.points?.grandTotal ?? 10.0)) * 100),
        apply: Math.round(((totals.points?.apply ?? 3.0) / (totals.points?.grandTotal ?? 10.0)) * 100)
      }
    }
  };
}
