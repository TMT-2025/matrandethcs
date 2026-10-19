import { MatrixData } from '../types/matrix';
import { ExamMatrixRow } from '../types/exam';

export interface BridgeResult {
  grade: '6' | '7' | '8' | '9';
  topics: string[];
  examMatrix: ExamMatrixRow[];
  extraDetailsPrompt: string;
  summaryText: string;
  sectionCounts: {
    part1Count: number;
    part2Count: number;
    part3Count: number;
    part4Count: number;
  };
}

export const convertMatrixToExamInput = (matrixData: MatrixData): BridgeResult => {
  const gradeStr = (matrixData.grade === 'Tự do' ? '8' : String(matrixData.grade)) as '6' | '7' | '8' | '9';
  const sc = matrixData.sectionCounts || {
    part1Count: 16,
    part2Count: 3,
    part3Count: 2,
    part4Count: 2
  };

  // Trích xuất danh sách tên chương/chủ đề
  const topicNames = Array.from(new Set(matrixData.rows.map(r => r.content)));

  // Nhóm số câu theo chủ đề
  const matrixByTopic: Record<string, { domain?: string; recognition: number; understanding: number; application: number; highApplication: number }> = {};

  const part2Contexts: string[] = [];
  const part3Topics: string[] = [];
  const part4Topics: string[] = [];

  matrixData.rows.forEach(r => {
    if (!matrixByTopic[r.content]) {
      matrixByTopic[r.content] = { domain: r.domain, recognition: 0, understanding: 0, application: 0, highApplication: 0 };
    }

    const rec = (r.part1.know || 0) + (r.part2.know || 0) + (r.part4?.know || 0);
    const und = (r.part1.understand || 0) + (r.part2.understand || 0) + (r.part4?.understand || 0);
    const app = (r.part1.apply || 0) + (r.part2.apply || 0) + (r.part4?.apply || 0);
    const highApp = (r.part3.apply || 0);

    matrixByTopic[r.content].recognition += rec;
    matrixByTopic[r.content].understanding += und;
    matrixByTopic[r.content].application += app;
    matrixByTopic[r.content].highApplication += highApp;

    if ((r.part2.know + r.part2.understand + r.part2.apply) > 0) {
      part2Contexts.push(`${r.lessonName} (${r.detailName})`);
    }

    if ((r.part3.understand + r.part3.apply) > 0) {
      part3Topics.push(`${r.lessonName}: ${r.detailName}`);
    }

    if (r.part4 && (r.part4.know + r.part4.understand + r.part4.apply) > 0) {
      part4Topics.push(`${r.lessonName}: ${r.detailName}`);
    }
  });

  const examMatrix: ExamMatrixRow[] = Object.entries(matrixByTopic).map(([topic, counts]) => ({
    topic,
    domain: counts.domain,
    recognition: counts.recognition,
    understanding: counts.understanding,
    application: counts.application,
    highApplication: counts.highApplication
  }));

  const p1Pts = (sc.part1Count * 0.25).toFixed(2);
  const p2Pts = (sc.part2Count * 1.0).toFixed(2);
  const p3Pts = (sc.part3Count * 0.5).toFixed(2);
  const p4Pts = (10.0 - (sc.part1Count * 0.25 + sc.part2Count * 1.0 + sc.part3Count * 0.5)).toFixed(2);

  const p2ContextInfo = part2Contexts.length > 0 
    ? `\n- Bắt buộc ${sc.part2Count} bối cảnh thực tiễn/thực nghiệm ở Phần II (Đúng/Sai) lấy theo: ${part2Contexts.slice(0, sc.part2Count).join('; ')}.`
    : '';

  const p3TopicInfo = part3Topics.length > 0 
    ? `\n- Các bài tập tính toán / điền thuật ngữ ở Phần III (${sc.part3Count} câu) tập trung vào: ${part3Topics.slice(0, sc.part3Count).join('; ')}.`
    : '';

  const p4TopicInfo = part4Topics.length > 0 
    ? `\n- Các câu hỏi Tự luận ở Phần IV (${sc.part4Count} câu - Vận dụng và Vận dụng cao) tập trung vào: ${part4Topics.slice(0, sc.part4Count).join('; ')}.`
    : '';

  const sr = matrixData.subjectRatio;
  const ratioDetails = sr 
    ? `\n- TỈ LỆ NỘI DUNG CÁC PHÂN MÔN TRONG ĐỀ BẮT BUỘC:
  + Vật lí: ${sr.physics}% (~${((sr.physics / 100) * 10).toFixed(1)} điểm)
  + Hoá học: ${sr.chemistry}% (~${((sr.chemistry / 100) * 10).toFixed(1)} điểm)
  + Sinh học: ${sr.biology}% (~${((sr.biology / 100) * 10).toFixed(1)} điểm)
  (Các câu hỏi trong 4 phần phải phản ánh đúng tỉ lệ điểm giữa 3 phân môn trên).`
    : '';

  const extraDetailsPrompt = `Đề kiểm tra môn Khoa học tự nhiên ${gradeStr} (${matrixData.examType}) bám sát Chương trình GDPT 2018 và Công văn 7991/BGDĐT-GDTrH:
- Tổng 4 phần chuẩn quy định:
  + PHẦN I: ${sc.part1Count} câu trắc nghiệm nhiều phương án (${p1Pts} điểm, mỗi câu đúng 0,25đ). 60% Nhận biết, 40% Thông hiểu; phân bố đều các phân môn Lí, Hoá, Sinh đã học.
  + PHẦN II: ${sc.part2Count} câu trắc nghiệm Đúng/Sai (${p2Pts} điểm, mỗi câu 4 lệnh hỏi a, b, c, d với ngữ cảnh khoa học/thực nghiệm/thực tiễn cuộc sống rõ ràng).
  + PHẦN III: ${sc.part3Count} câu trắc nghiệm trả lời ngắn (${p3Pts} điểm, yêu cầu học sinh tính toán ra con số hoặc điền thuật ngữ khoa học).
  + PHẦN IV: ${sc.part4Count} câu Tự luận (${p4Pts} điểm, mức độ Vận dụng và Vận dụng cao: viết PTHH & giải thích hiện tượng đời sống, vẽ sơ đồ mạch điện / tia sáng, bài tập di truyền, đề xuất giải pháp bảo vệ môi trường). Bắt buộc kèm hướng dẫn chấm và thang điểm chi tiết.${p2ContextInfo}${p3TopicInfo}${p4TopicInfo}${ratioDetails}
- ĐẶC BIỆT: Các tình huống, câu hỏi, dữ liệu phải gắn liền với thực tiễn cuộc sống và các hiện tượng tự nhiên gần gũi với học sinh THCS.${matrixData.extraRequirements ? `\nYêu cầu bổ sung của giáo viên: ${matrixData.extraRequirements}` : ''}`;

  const ratioSummary = sr ? ` | Lí ${sr.physics}% - Hoá ${sr.chemistry}% - Sinh ${sr.biology}%` : '';
  const summaryText = `Ma trận ${matrixData.examType} - KHTN ${matrixData.grade} (${topicNames.length} chương/chủ đề | P1: ${sc.part1Count} câu - P2: ${sc.part2Count} câu - P3: ${sc.part3Count} câu - P4: ${sc.part4Count} câu${ratioSummary})`;

  return {
    grade: gradeStr,
    topics: topicNames,
    examMatrix,
    extraDetailsPrompt,
    summaryText,
    sectionCounts: sc
  };
};
