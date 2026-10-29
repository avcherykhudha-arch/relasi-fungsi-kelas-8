/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Trophy,
  Star,
  Award,
  RotateCcw,
  User,
  CheckCircle2,
  BookOpen,
  Target,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { useProgress, ALL_BADGES } from '../context/ProgressContext';
import { soundEffects } from '../services/soundEffects';
import { Mascot } from './Mascot';

export const ProgresBelajar: React.FC = () => {
  const { progress, setStudentName, resetAllProgress, allBadges } = useProgress();
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(progress.studentName);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  const handleSaveName = () => {
    soundEffects.playPop();
    setStudentName(nameInput);
    setIsEditingName(false);
  };

  const handleConfirmReset = () => {
    resetAllProgress();
    setShowResetModal(false);
  };

  // Calculate Topic Mastery based on answered questions
  const answeredTotal = Object.keys(progress.answeredQuestions).length;
  const answeredCorrect = Object.values(progress.answeredQuestions).filter((q) => q.isCorrect).length;
  const accuracy = answeredTotal > 0 ? Math.round((answeredCorrect / answeredTotal) * 100) : 0;

  // Level thresholds
  const levelThresholds: Record<string, { next: string; req: number }> = {
    Pemula: { next: 'Penjelajah', req: 150 },
    Penjelajah: { next: 'Ahli Relasi', req: 350 },
    'Ahli Relasi': { next: 'Jagoan Fungsi', req: 600 },
    'Jagoan Fungsi': { next: 'Master Matematika', req: 1000 },
    'Master Matematika': { next: 'Puncak Tertinggi', req: 1000 },
  };

  const nextInfo = levelThresholds[progress.level] || { next: 'Master Matematika', req: 1000 };
  const currentLevelProgressPercent = Math.min(100, Math.round((progress.xp / nextInfo.req) * 100));

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Top Profile Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Mascot mood="cheering" size="md" character="kiko" />
            <div>
              <div className="flex items-center gap-2">
                {isEditingName ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="bg-white/90 text-slate-800 px-3 py-1 rounded-xl text-lg font-black focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <button
                      onClick={handleSaveName}
                      className="px-3 py-1 bg-white text-pink-600 rounded-xl font-bold text-xs shadow-sm hover:bg-pink-50"
                    >
                      Simpan
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-black font-['Fredoka',sans-serif]">
                      {progress.studentName}
                    </h1>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="text-xs bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-lg font-bold"
                      title="Ganti nama panggilan"
                    >
                      Ubah Nama
                    </button>
                  </div>
                )}
              </div>
              <p className="text-pink-100 text-sm mt-0.5">
                Siswa Berprestasi SMP Kelas VIII • Sahabat Belajar Mister Jo
              </p>
              {/* Level Badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mt-2">
                <Trophy className="w-4 h-4 text-yellow-300" />
                <span>Level Saat Ini: {progress.level}</span>
              </div>
            </div>
          </div>

          {/* Quick Counter Cards */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3.5 text-center min-w-[90px]">
              <span className="text-xs font-bold text-pink-200 block uppercase">Poin XP</span>
              <span className="text-2xl font-black text-white">{progress.xp}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3.5 text-center min-w-[90px]">
              <span className="text-xs font-bold text-yellow-200 block uppercase">Bintang</span>
              <span className="text-2xl font-black text-yellow-300 flex items-center justify-center gap-1">
                <Star className="w-5 h-5 fill-current" />
                {progress.stars}
              </span>
            </div>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between text-xs font-bold text-pink-100 mb-1.5">
            <span>Menuju Level Berikutnya: {nextInfo.next}</span>
            <span>{progress.xp} / {nextInfo.req} XP ({currentLevelProgressPercent}%)</span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${currentLevelProgressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Analytics Statistics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl p-4 border border-pink-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block">Materi Selesai</span>
            <span className="text-lg font-black text-slate-800">{progress.completedLessons.length} / 4 Unit</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-purple-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block">Soal Dijawab</span>
            <span className="text-lg font-black text-slate-800">{answeredTotal} Soal</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-emerald-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block">Akurasi Jawaban</span>
            <span className="text-lg font-black text-emerald-700">{accuracy}%</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-rose-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block">Lencana Terbuka</span>
            <span className="text-lg font-black text-rose-700">{progress.unlockedBadges.length} / 12</span>
          </div>
        </div>
      </div>

      {/* 12 Achievement Badges Showcase */}
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-100 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-pink-500" />
            <h2 className="text-lg font-extrabold text-slate-800 font-['Fredoka',sans-serif]">
              Koleksi 12 Lencana Prestasi
            </h2>
          </div>
          <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
            {progress.unlockedBadges.length} Terkoleksi
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {allBadges.map((badge) => {
            const isUnlocked = progress.unlockedBadges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-2xl border-2 text-center transition-all ${
                  isUnlocked
                    ? 'border-pink-300 bg-gradient-to-b from-pink-50 to-white shadow-sm'
                    : 'border-slate-100 bg-slate-50/70 opacity-60'
                }`}
              >
                <div className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-2 bg-white shadow-sm">
                  {isUnlocked ? badge.icon : '🔒'}
                </div>
                <h4 className="font-extrabold text-xs text-slate-800 truncate">{badge.title}</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-1 line-clamp-2">
                  {badge.description}
                </p>
                {isUnlocked && (
                  <span className="inline-block mt-2 text-[10px] font-bold text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full">
                    Terbuka ✨
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Progress Section (Required by Section 10) */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm text-slate-800">Mulai Ulang Petualangan Belajar?</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Seluruh data progres tersimpan aman di browser lokal perangkat ini (localStorage).
          </p>
        </div>
        <button
          onClick={() => setShowResetModal(true)}
          className="flex items-center gap-1.5 px-4 py-2 border-2 border-rose-300 text-rose-600 hover:bg-rose-50 font-bold rounded-2xl text-xs transition"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Atur Ulang Progres (Reset)</span>
        </button>
      </div>

      {/* Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 border-2 border-rose-200 shadow-2xl">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-2xl">
              ⚠️
            </div>
            <h3 className="text-lg font-black text-slate-800 font-['Fredoka',sans-serif]">
              Yakin Ingin Mengatur Ulang?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tindakan ini akan mengembalikan XP, bintang, status materi, dan jawaban latihan ke posisi awal (Pemula).
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 font-bold text-xs rounded-xl text-slate-700 transition"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 font-bold text-xs rounded-xl text-white transition shadow-sm"
              >
                Ya, Atur Ulang!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
