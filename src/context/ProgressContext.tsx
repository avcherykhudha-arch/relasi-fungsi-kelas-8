/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { StudentProgress, BadgeItem, DailyMission, NavigationTab } from '../types';
import { soundEffects } from '../services/soundEffects';

export const ALL_BADGES: BadgeItem[] = [
  {
    id: 'first-step',
    title: 'Langkah Pertama',
    description: 'Menyelesaikan submateri pertama bersama Mister Jo.',
    icon: '🌱',
    category: 'belajar',
  },
  {
    id: 'relasi-scout',
    title: 'Penjelajah Relasi',
    description: 'Menyelesaikan seluruh modul Materi A: Mengenal Relasi.',
    icon: '🔍',
    category: 'belajar',
  },
  {
    id: 'fungsi-detective',
    title: 'Detektif Fungsi',
    description: 'Memahami syarat ketat fungsi dan tidak tertipu relasi!',
    icon: '🕵️',
    category: 'belajar',
  },
  {
    id: 'lab-scientist',
    title: 'Peneliti Laboratorium',
    description: 'Mencoba simulasi mandiri di Laboratorium Relasi & Fungsi.',
    icon: '🧪',
    category: 'lab',
  },
  {
    id: 'arrow-master',
    title: 'Pemanah Diagram',
    description: 'Membuat pemetaan fungsi sempurna di Lab Fungsi.',
    icon: '🎯',
    category: 'lab',
  },
  {
    id: 'quiz-beginner',
    title: 'Pejuang Latihan',
    description: 'Menjawab 10 soal latihan pilihan ganda dengan benar.',
    icon: '⭐',
    category: 'latihan',
  },
  {
    id: 'quiz-streak',
    title: 'Kolektor Bintang',
    description: 'Meraih 50 bintang dari latihan soal matematika.',
    icon: '🌟',
    category: 'latihan',
  },
  {
    id: 'fast-track',
    title: 'Juara Cara Cepat',
    description: 'Mempelajari 5 trik Cara Cepat ala Mister Jo.',
    icon: '⚡',
    category: 'latihan',
  },
  {
    id: 'hots-solver',
    title: 'Pemecah Kasus HOTS',
    description: 'Menyelesaikan tantangan kontekstual penalaran tinggi.',
    icon: '💡',
    category: 'hots',
  },
  {
    id: 'listen-enthusiast',
    title: 'Sahabat Mister Jo',
    description: 'Mendengarkan penjelasan audio narator Mister Jo.',
    icon: '🎧',
    category: 'belajar',
  },
  {
    id: 'exam-hero',
    title: 'Lulusan Gemilang',
    description: 'Menyelesaikan Evaluasi Akhir 20 Soal dengan nilai >= 80.',
    icon: '🏆',
    category: 'master',
  },
  {
    id: 'master-matematika',
    title: 'Master Relasi & Fungsi',
    description: 'Mencapai Level Tertinggi: Master Matematika SMP!',
    icon: '👑',
    category: 'master',
  },
];

const INITIAL_MISSIONS: DailyMission[] = [
  { id: 'm1', title: 'Baca 1 Modul Materi Pembelajaran', target: 1, current: 0, completed: false, rewardXp: 30, rewardStars: 3 },
  { id: 'm2', title: 'Coba 1 Eksperimen di Laboratorium', target: 1, current: 0, completed: false, rewardXp: 40, rewardStars: 4 },
  { id: 'm3', title: 'Jawab 5 Soal Latihan Pilihan Ganda', target: 5, current: 0, completed: false, rewardXp: 50, rewardStars: 5 },
  { id: 'm4', title: 'Pelajari 1 Trik "Cara Cepat"', target: 1, current: 0, completed: false, rewardXp: 25, rewardStars: 2 },
];

const STORAGE_KEY = 'misterjo_lms_progress_v1';

interface ProgressContextType {
  progress: StudentProgress;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  setStudentName: (name: string) => void;
  completeLesson: (lessonId: string) => void;
  recordQuestionAnswer: (questionId: number, selectedOption: string, isCorrect: boolean) => void;
  completeHots: (hotsId: string) => void;
  unlockBadge: (badgeId: string) => void;
  incrementMission: (missionId: string, count?: number) => void;
  saveFinalExam: (score: number, answers: Record<number, string>) => void;
  triggerConfetti: () => void;
  resetAllProgress: () => void;
  allBadges: BadgeItem[];
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<NavigationTab>('beranda');

  const [progress, setProgress] = useState<StudentProgress>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (err) {
        console.warn('Failed to load localStorage progress:', err);
      }
    }
    return {
      studentName: 'Sobat Imut',
      xp: 50,
      stars: 5,
      level: 'Pemula',
      completedLessons: [],
      answeredQuestions: {},
      completedHots: [],
      unlockedBadges: ['first-step'],
      dailyMissions: INITIAL_MISSIONS,
      finalExamScore: null,
    };
  });

  // Calculate Level dynamically from XP
  const calculateLevel = (xp: number): string => {
    if (xp >= 1000) return 'Master Matematika';
    if (xp >= 600) return 'Jagoan Fungsi';
    if (xp >= 350) return 'Ahli Relasi';
    if (xp >= 150) return 'Penjelajah';
    return 'Pemula';
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }, [progress]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F472B6', '#EC4899', '#A855F7', '#38BDF8', '#FDE047'],
      });
    } catch {
      // ignore
    }
  };

  const unlockBadge = (badgeId: string) => {
    setProgress((prev) => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;
      soundEffects.playLevelUp();
      triggerConfetti();
      return {
        ...prev,
        xp: prev.xp + 50,
        stars: prev.stars + 5,
        unlockedBadges: [...prev.unlockedBadges, badgeId],
      };
    });
  };

  const incrementMission = (missionId: string, count: number = 1) => {
    setProgress((prev) => {
      const updatedMissions = prev.dailyMissions.map((m) => {
        if (m.id === missionId && !m.completed) {
          const nextVal = Math.min(m.target, m.current + count);
          const isDone = nextVal >= m.target;
          return {
            ...m,
            current: nextVal,
            completed: isDone,
          };
        }
        return m;
      });

      // Check if newly completed mission
      const targetM = prev.dailyMissions.find((m) => m.id === missionId);
      const newlyDone = targetM && !targetM.completed && (targetM.current + count >= targetM.target);

      let addedXp = 0;
      let addedStars = 0;
      if (newlyDone && targetM) {
        addedXp = targetM.rewardXp;
        addedStars = targetM.rewardStars;
        soundEffects.playLevelUp();
        triggerConfetti();
      }

      const newXp = prev.xp + addedXp;
      const newLevel = calculateLevel(newXp);

      return {
        ...prev,
        xp: newXp,
        stars: prev.stars + addedStars,
        level: newLevel,
        dailyMissions: updatedMissions,
      };
    });
  };

  const setStudentName = (name: string) => {
    const clean = name.trim() || 'Sobat Imut';
    setProgress((prev) => ({ ...prev, studentName: clean }));
  };

  const completeLesson = (lessonId: string) => {
    setProgress((prev) => {
      const already = prev.completedLessons.includes(lessonId);
      const completedLessons = already ? prev.completedLessons : [...prev.completedLessons, lessonId];
      const newXp = already ? prev.xp : prev.xp + 40;
      const newStars = already ? prev.stars : prev.stars + 3;
      const newLevel = calculateLevel(newXp);

      if (!already) {
        soundEffects.playCorrect();
      }

      let badges = [...prev.unlockedBadges];
      if (completedLessons.length >= 1 && !badges.includes('first-step')) {
        badges.push('first-step');
      }
      if (completedLessons.includes('unit-a') && !badges.includes('relasi-scout')) {
        badges.push('relasi-scout');
      }
      if (completedLessons.includes('unit-b') && !badges.includes('fungsi-detective')) {
        badges.push('fungsi-detective');
      }
      if (newLevel === 'Master Matematika' && !badges.includes('master-matematika')) {
        badges.push('master-matematika');
      }

      return {
        ...prev,
        completedLessons,
        xp: newXp,
        stars: newStars,
        level: newLevel,
        unlockedBadges: badges,
      };
    });
    incrementMission('m1', 1);
  };

  const recordQuestionAnswer = (questionId: number, selectedOption: string, isCorrect: boolean) => {
    setProgress((prev) => {
      const isAlreadyAnswered = !!prev.answeredQuestions[questionId];
      const answeredQuestions = {
        ...prev.answeredQuestions,
        [questionId]: {
          selectedOption,
          isCorrect,
          timestamp: Date.now(),
        },
      };

      const xpGained = isCorrect ? 25 : 5;
      const starsGained = isCorrect ? 2 : 0;
      const newXp = prev.xp + (isAlreadyAnswered ? 0 : xpGained);
      const newStars = prev.stars + (isAlreadyAnswered ? 0 : starsGained);
      const newLevel = calculateLevel(newXp);

      if (isCorrect) {
        soundEffects.playCorrect();
        triggerConfetti();
      } else {
        soundEffects.playTryAgain();
      }

      const totalCorrect = Object.values(answeredQuestions).filter((q) => q.isCorrect).length;
      let badges = [...prev.unlockedBadges];

      if (totalCorrect >= 10 && !badges.includes('quiz-beginner')) {
        badges.push('quiz-beginner');
      }
      if (newStars >= 50 && !badges.includes('quiz-streak')) {
        badges.push('quiz-streak');
      }
      if (newLevel === 'Master Matematika' && !badges.includes('master-matematika')) {
        badges.push('master-matematika');
      }

      return {
        ...prev,
        answeredQuestions,
        xp: newXp,
        stars: newStars,
        level: newLevel,
        unlockedBadges: badges,
      };
    });
    incrementMission('m3', 1);
  };

  const completeHots = (hotsId: string) => {
    setProgress((prev) => {
      if (prev.completedHots.includes(hotsId)) return prev;
      soundEffects.playLevelUp();
      triggerConfetti();
      const newXp = prev.xp + 60;
      const newStars = prev.stars + 5;
      const newLevel = calculateLevel(newXp);
      let badges = [...prev.unlockedBadges];
      if (!badges.includes('hots-solver')) {
        badges.push('hots-solver');
      }

      return {
        ...prev,
        completedHots: [...prev.completedHots, hotsId],
        xp: newXp,
        stars: newStars,
        level: newLevel,
        unlockedBadges: badges,
      };
    });
  };

  const saveFinalExam = (score: number, answers: Record<number, string>) => {
    setProgress((prev) => {
      const newXp = prev.xp + score * 3;
      const newStars = prev.stars + Math.floor(score / 10);
      const newLevel = calculateLevel(newXp);
      let badges = [...prev.unlockedBadges];
      if (score >= 80 && !badges.includes('exam-hero')) {
        badges.push('exam-hero');
      }
      if (score >= 95 && !badges.includes('master-matematika')) {
        badges.push('master-matematika');
      }

      if (score >= 80) {
        soundEffects.playLevelUp();
        triggerConfetti();
      }

      return {
        ...prev,
        finalExamScore: score,
        finalExamAnswers: answers,
        finalExamDate: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        xp: newXp,
        stars: newStars,
        level: newLevel,
        unlockedBadges: badges,
      };
    });
  };

  const resetAllProgress = () => {
    const fresh: StudentProgress = {
      studentName: 'Sobat Imut',
      xp: 50,
      stars: 5,
      level: 'Pemula',
      completedLessons: [],
      answeredQuestions: {},
      completedHots: [],
      unlockedBadges: ['first-step'],
      dailyMissions: INITIAL_MISSIONS,
      finalExamScore: null,
    };
    setProgress(fresh);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    soundEffects.playPop();
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        activeTab,
        setActiveTab,
        setStudentName,
        completeLesson,
        recordQuestionAnswer,
        completeHots,
        unlockBadge,
        incrementMission,
        saveFinalExam,
        triggerConfetti,
        resetAllProgress,
        allBadges: ALL_BADGES,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
