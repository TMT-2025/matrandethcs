import { Grade, ExamType, CognitiveLevel, SectionCountsConfig } from './matrix';
import { LearningOutcomeDetail } from '../constants/learningOutcomes';

export interface SpecificationQuestionCell {
  count: number;
  questionLabels?: string[];
  competencyCode?: string; // NLTN (Nhận thức KHTN), TH-TN (Tìm hiểu tự nhiên), VDKN (Vận dụng kiến thức, kĩ năng)
}

export interface SpecificationRow {
  index: number;
  chapterName: string;
  lessonName: string;
  domain?: string;
  outcomes: LearningOutcomeDetail;
  part1: CognitiveLevel;
  part2: CognitiveLevel;
  part3: CognitiveLevel;
  part4?: CognitiveLevel;
  totalCommands: number;
  isFirstInChapter: boolean;
  chapterRowCount: number;
}

export interface SpecificationData {
  grade: Grade;
  examType: ExamType;
  title: string;
  hasEssay: boolean;
  standardCommands: number;
  sectionCounts: SectionCountsConfig;
  rows: SpecificationRow[];
  totals: {
    part1: CognitiveLevel;
    part2: CognitiveLevel;
    part3: CognitiveLevel;
    part4?: CognitiveLevel;
    totalCommands: number;
    ratio: CognitiveLevel;
    totalPoints: {
      part1: number;
      part2: number;
      part3: number;
      part4: number;
      grandTotal: number;
      know: number;
      understand: number;
      apply: number;
    };
    percentages: {
      part1: number;
      part2: number;
      part3: number;
      part4: number;
      know: number;
      understand: number;
      apply: number;
    };
  };
}
