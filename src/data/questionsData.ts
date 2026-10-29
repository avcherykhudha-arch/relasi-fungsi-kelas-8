/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, QuestionCategory, DifficultyLevel } from '../types';
import { UNIT_1_QUESTIONS } from './questions/unit1Questions';
import { UNIT_2_QUESTIONS } from './questions/unit2Questions';
import { UNIT_3_QUESTIONS } from './questions/unit3Questions';
import { UNIT_4_QUESTIONS } from './questions/unit4Questions';

export const ALL_QUESTIONS: Question[] = [
  ...UNIT_1_QUESTIONS,
  ...UNIT_2_QUESTIONS,
  ...UNIT_3_QUESTIONS,
  ...UNIT_4_QUESTIONS,
];

export const CATEGORY_INFO: Record<
  QuestionCategory,
  { title: string; subtitle: string; icon: string; color: string; count: number }
> = {
  'relasi-konsep': {
    title: 'Pemahaman Konsep Relasi',
    subtitle: 'Aturan pengait, contoh & noncontoh, serta logika dasar himpunan',
    icon: 'HeartHandshake',
    color: 'bg-pink-100 text-pink-700 border-pink-200',
    count: 15,
  },
  'domain-representasi': {
    title: 'Domain, Kodomain & Representasi',
    subtitle: 'Diagram panah, pasangan berurutan, tabel & kartesius',
    icon: 'Target',
    color: 'bg-rose-100 text-rose-700 border-rose-200',
    count: 15,
  },
  'fungsi-konsep': {
    title: 'Konsep Fungsi & Nilai Fungsi',
    subtitle: 'Syarat pemetaan, rumus f(x), tabel nilai & korespondensi',
    icon: 'Sparkles',
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    count: 15,
  },
  'kontekstual-hots': {
    title: 'Aplikasi Kontekstual & HOTS',
    subtitle: 'Pemecahan masalah tarif, uji vertikal, pola & logika tingkat tinggi',
    icon: 'Award',
    color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    count: 15,
  },
};

export function getQuestionById(id: number): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

export function filterQuestions(options: {
  category?: QuestionCategory | 'all';
  difficulty?: DifficultyLevel | 'all';
  searchQuery?: string;
}): Question[] {
  return ALL_QUESTIONS.filter((q) => {
    if (options.category && options.category !== 'all' && q.category !== options.category) {
      return false;
    }
    if (options.difficulty && options.difficulty !== 'all' && q.difficulty !== options.difficulty) {
      return false;
    }
    if (options.searchQuery && options.searchQuery.trim() !== '') {
      const qLower = options.searchQuery.toLowerCase();
      const matchText =
        q.question.toLowerCase().includes(qLower) ||
        (q.stimulusTitle && q.stimulusTitle.toLowerCase().includes(qLower)) ||
        (q.stimulusContent && q.stimulusContent.toLowerCase().includes(qLower));
      if (!matchText) return false;
    }
    return true;
  });
}
