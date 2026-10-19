import { SectionCountsConfig, DEFAULT_SECTION_COUNTS } from './matrix';

export interface MCQQuestion {
  question: string;
  options: string[]; 
  correctIndex: number;
  domain?: string;
  explanation?: string;
}

export interface Statement {
  text: string;
  isTrue: boolean;
  explanation?: string;
}

export interface TFScenario {
  context: string;
  statements: Statement[];
  domain?: string;
  explanation?: string;
}

export interface ShortAnswerQuestion {
  question: string;
  answer: string | number;
  domain?: string;
  explanation?: string;
}

export interface EssayQuestion {
  question: string;
  points: number; // Điểm số, ví dụ 1.0 điểm
  domain?: string;
  solution?: string; // Hướng dẫn chấm chi tiết và biểu điểm
}

export interface ExamMatrixRow {
  topic: string;
  domain?: string;
  recognition: number;   // Nhận biết
  understanding: number; // Thông hiểu
  application: number;   // Vận dụng
  highApplication: number; // Vận dụng cao
}

export interface ExamData {
  id?: string;
  title: string;
  grade: string;
  examType?: string;
  createdAt?: number;
  sectionCounts?: SectionCountsConfig;
  part1: MCQQuestion[];
  part2: TFScenario[];
  part3: ShortAnswerQuestion[];
  part4?: EssayQuestion[];
  matrix: ExamMatrixRow[];
  sourceMatrixId?: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export type GradeLevel = '6' | '7' | '8' | '9';
