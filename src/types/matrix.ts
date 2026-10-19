export type Grade = 6 | 7 | 8 | 9 | 'Tự do';

export enum ExamType {
  REGULAR = 'Kiểm tra thường xuyên',
  MID_TERM_1 = 'Giữa học kỳ 1',
  END_TERM_1 = 'Cuối học kỳ 1',
  MID_TERM_2 = 'Giữa học kỳ 2',
  END_TERM_2 = 'Cuối học kỳ 2',
  CUSTOM = 'Tùy chỉnh'
}

export interface SectionCountsConfig {
  part1Count: number; // 16 - 20 (Mặc định: 16)
  part2Count: number; // 2 - 4 (Mặc định: 3)
  part3Count: number; // 2 - 4 (Mặc định: 2)
  part4Count: number; // 1 - 3 (Mặc định: 2)
}

export const DEFAULT_SECTION_COUNTS: SectionCountsConfig = {
  part1Count: 16, // 4.0 điểm (16 câu x 0.25đ)
  part2Count: 3,  // 3.0 điểm (3 câu x 1.0đ)
  part3Count: 2,  // 1.0 điểm (2 câu x 0.5đ)
  part4Count: 2   // 2.0 điểm (2 câu x 1.0đ)
};

export interface Lesson {
  id: string;
  name: string;
  domain?: string;
  pages?: string;
  subItems?: string[]; 
  part2Hosts?: string[]; // IDs or names of sub-items selected for Part II
}

export interface Chapter {
  id: string;
  name: string;
  domain?: string;
  lessons: Lesson[];
}

export interface CognitiveLevel {
  know: number;
  understand: number;
  apply: number;
}

export interface MatrixRow {
  content: string;
  lessonName: string;
  detailName: string; 
  domain?: string;
  isFirstInLesson: boolean; 
  isLastInLesson: boolean; 
  lessonRowCount: number; 
  part1: CognitiveLevel;
  part2: CognitiveLevel;
  part3: CognitiveLevel;
  part4?: CognitiveLevel;
  total: number;
}

export interface SubjectRatioConfig {
  physics: number;    // % môn Vật lí (0 - 100)
  chemistry: number;  // % môn Hoá học (0 - 100)
  biology: number;    // % môn Sinh học (0 - 100)
  autoBalanceSubject?: 'physics' | 'chemistry' | 'biology'; // Môn tự động tính phần còn lại
  activeSubjects: {
    physics: boolean;
    chemistry: boolean;
    biology: boolean;
  };
}

export const DEFAULT_SUBJECT_RATIOS: Record<string, { physics: number; chemistry: number; biology: number }> = {
  // Lớp 6 (Theo file De_xuat_Ti_le_Phan_mon_Li_Hoa_Sinh_KHTN_THCS)
  '6_Giữa học kỳ 1': { physics: 35, chemistry: 35, biology: 30 },
  '6_Cuối học kỳ 1': { physics: 20, chemistry: 30, biology: 50 },
  '6_Giữa học kỳ 2': { physics: 30, chemistry: 15, biology: 55 },
  '6_Cuối học kỳ 2': { physics: 45, chemistry: 15, biology: 40 },
  
  // Lớp 7
  '7_Giữa học kỳ 1': { physics: 30, chemistry: 35, biology: 35 },
  '7_Cuối học kỳ 1': { physics: 35, chemistry: 30, biology: 35 },
  '7_Giữa học kỳ 2': { physics: 35, chemistry: 10, biology: 55 },
  '7_Cuối học kỳ 2': { physics: 30, chemistry: 15, biology: 55 },

  // Lớp 8
  '8_Giữa học kỳ 1': { physics: 35, chemistry: 35, biology: 30 },
  '8_Cuối học kỳ 1': { physics: 30, chemistry: 35, biology: 35 },
  '8_Giữa học kỳ 2': { physics: 35, chemistry: 30, biology: 35 },
  '8_Cuối học kỳ 2': { physics: 35, chemistry: 25, biology: 40 },

  // Lớp 9
  '9_Giữa học kỳ 1': { physics: 35, chemistry: 30, biology: 35 },
  '9_Cuối học kỳ 1': { physics: 35, chemistry: 30, biology: 35 },
  '9_Giữa học kỳ 2': { physics: 30, chemistry: 40, biology: 30 },
  '9_Cuối học kỳ 2': { physics: 30, chemistry: 35, biology: 35 },
};

export function getDefaultSubjectRatio(grade: Grade, examType: ExamType): SubjectRatioConfig {
  const gKey = typeof grade === 'number' ? `${grade}_${examType}` : `8_${examType}`;
  const found = DEFAULT_SUBJECT_RATIOS[gKey] || { physics: 35, chemistry: 30, biology: 35 };
  return {
    physics: found.physics,
    chemistry: found.chemistry,
    biology: found.biology,
    autoBalanceSubject: 'biology',
    activeSubjects: {
      physics: true,
      chemistry: true,
      biology: true
    }
  };
}

export interface MatrixData {
  grade: Grade;
  examType: ExamType;
  chapters: Chapter[];
  sectionCounts: SectionCountsConfig;
  subjectRatio?: SubjectRatioConfig;
  extraRequirements?: string;
  rows: MatrixRow[];
  totals: {
    part1: CognitiveLevel;
    part2: CognitiveLevel;
    part3: CognitiveLevel;
    part4?: CognitiveLevel;
    grandTotal: number;
    ratio: CognitiveLevel;
    points: {
      part1: number;
      part2: number;
      part3: number;
      part4: number;
      grandTotal: number;
      know: number;
      understand: number;
      apply: number;
    };
    hasEssay: boolean;
  };
}

export interface SavedConfig {
  id: string;
  name: string;
  timestamp: number;
  grade: Grade;
  selectedChapters: Chapter[];
  examType: ExamType;
  sectionCounts: SectionCountsConfig;
  subjectRatio?: SubjectRatioConfig;
  editableLessons: Lesson[];
  extraRequirements: string;
  isCustomMode: boolean;
  customChapterName: string;
  generatedMatrix?: MatrixData;
}
