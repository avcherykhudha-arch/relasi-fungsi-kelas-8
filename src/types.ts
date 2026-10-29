/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type NavigationTab = 
  | 'beranda' 
  | 'materi' 
  | 'lab-relasi' 
  | 'lab-fungsi' 
  | 'latihan' 
  | 'hots' 
  | 'progres' 
  | 'mister-jo'
  | 'evaluasi';

export type QuestionCategory = 
  | 'relasi-konsep'
  | 'domain-representasi'
  | 'fungsi-konsep'
  | 'kontekstual-hots';

export type DifficultyLevel = 'Mudah' | 'Sedang' | 'Sulit' | 'HOTS';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface QuestionCaraNormal {
  diketahui: string;
  ditanya: string;
  konsep: string;
  langkah: string[];
  kesimpulan: string;
}

export interface QuestionCaraCepat {
  trik: string;
  alasan: string;
  eksekusi: string;
}

export interface VisualProofData {
  type: 'panah' | 'mesin' | 'tabel' | 'koordinat';
  domain?: (string | number)[];
  kodomain?: (string | number)[];
  arrows?: { from: string | number; to: string | number; label?: string }[];
  machineFormula?: string;
  machineInputs?: { x: number; fx: number }[];
  tableData?: { x: number; y: number }[];
  keterangan: string;
}

export interface Question {
  id: number;
  category: QuestionCategory;
  difficulty: DifficultyLevel;
  stimulusType: 'teks' | 'tabel' | 'diagram' | 'grafik' | 'pola';
  stimulusTitle?: string;
  stimulusContent?: string;
  diagramData?: {
    setA: (string | number)[];
    setB: (string | number)[];
    arrows: { from: string | number; to: string | number }[];
  };
  tableStimulus?: { headers: string[]; rows: (string | number)[][] };
  question: string;
  options: QuestionOption[];
  caraNormal: QuestionCaraNormal;
  caraCepat: QuestionCaraCepat;
  buktiVisual: VisualProofData;
  ttsScript: string;
  hint: string;
}

export interface LessonSection {
  id: string;
  title: string;
  badge?: string;
  intro: string;
  content: string[];
  realWorldExample?: {
    title: string;
    description: string;
    setA: string[];
    setB: string[];
    pairs: [string, string][];
  };
  keyTakeaway: string;
  misconceptions: {
    wrong: string;
    right: string;
    explanation: string;
  }[];
  interactiveCheck?: {
    question: string;
    options: { text: string; correct: boolean; explanation: string }[];
  };
  audioScript: string;
}

export interface LessonUnit {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  sections: LessonSection[];
  summaryPoints: string[];
}

export interface BadgeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'belajar' | 'latihan' | 'lab' | 'hots' | 'master';
  unlockedAt?: number;
}

export interface DailyMission {
  id: string;
  title: string;
  target: number;
  current: number;
  completed: boolean;
  rewardXp: number;
  rewardStars: number;
}

export interface StudentProgress {
  studentName: string;
  xp: number;
  stars: number;
  level: string;
  completedLessons: string[];
  answeredQuestions: Record<number, { selectedOption: string; isCorrect: boolean; timestamp: number }>;
  completedHots: string[];
  unlockedBadges: string[];
  dailyMissions: DailyMission[];
  finalExamScore: number | null;
  finalExamAnswers?: Record<number, string>;
  finalExamDate?: string;
}

export type MascotMood = 'happy' | 'thinking' | 'cheering' | 'waving' | 'excited' | 'puzzled';
