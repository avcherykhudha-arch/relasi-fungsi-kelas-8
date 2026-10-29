/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Sparkles,
  BookOpen,
  FlaskConical,
  Calculator,
  Award,
  Trophy,
  Star,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { soundEffects } from '../services/soundEffects';
import { Mascot } from './Mascot';
import { TTSPlayer } from './TTSPlayer';
import { NavigationTab } from '../types';

export const Dashboard: React.FC = () => {
  const { progress, setActiveTab } = useProgress();

  const handleStartAdventure = () => {
    soundEffects.playPop();
    // Navigate to Materi or continue where left off
    setActiveTab('materi');
  };

  const handleNavigate = (tab: NavigationTab) => {
    soundEffects.playPop();
    setActiveTab(tab);
  };

  const greetingTTS = `Halo, Sobat Imut! Yuk, belajar matematika bareng Mister Jo. Kita bikin matematika jadi mudah, seru, dan menggemaskan! Jargon kita: Relasi dan Fungsi, Belajar Jadi Gemes, Matematika Jadi Gampang! Tekan tombol Mulai Petualangan untuk belajar!`;

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 rounded-3xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-4 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-pink-100 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>LMS Matematika SMP Kelas VIII • Terverifikasi Kurikulum</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black font-['Fredoka',sans-serif] tracking-tight leading-tight">
              Halo, {progress.studentName}! ✨
            </h1>

            <p className="text-pink-100 text-sm md:text-base max-w-xl leading-relaxed">
              “Halo, Sobat Imut! Yuk, belajar matematika bareng Mister Jo. Kita bikin matematika jadi mudah, seru, dan menggemaskan!”
            </p>

            {/* Jargon Utama Pill */}
            <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-2xl p-3.5 max-w-lg shadow-sm">
              <p className="text-[11px] font-bold text-yellow-200 uppercase tracking-widest">
                JARGON UTAMA:
              </p>
              <p className="text-base md:text-lg font-black text-white font-['Fredoka',sans-serif]">
                “Relasi dan Fungsi, Belajar Jadi Gemes, Matematika Jadi Gampang!”
              </p>
            </div>

            {/* Big Adventure CTA Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={handleStartAdventure}
                className="px-8 py-3.5 bg-white hover:bg-pink-50 text-pink-700 font-extrabold rounded-2xl text-base shadow-xl hover:shadow-2xl transition transform active:scale-95 flex items-center gap-2 group animate-bounce-slow"
              >
                <span>MULAI PETUALANGAN SEKARANG!</span>
                <ArrowRight className="w-5 h-5 text-pink-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Mascot with Speech */}
          <div className="flex flex-col items-center">
            <Mascot
              mood="excited"
              size="lg"
              character="kiko"
              speechText="Mister Jo sudah menyiapkan 60 soal seru dan 2 laboratorium interaktif untukmu!"
            />
          </div>
        </div>
      </div>

      {/* Greeting Audio Player */}
      <TTSPlayer
        textToSpeak={greetingTTS}
        label="Dengarkan Sapaan Mister Jo"
        compact={false}
      />

      {/* Gamification Stats Overview Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Level Card */}
        <div className="bg-white rounded-3xl p-5 border-2 border-pink-100 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 text-white flex items-center justify-center shadow-md">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block uppercase">Level Siswa</span>
            <span className="text-lg font-black text-slate-800 font-['Fredoka',sans-serif]">
              {progress.level}
            </span>
          </div>
        </div>

        {/* XP Points */}
        <div className="bg-white rounded-3xl p-5 border-2 border-purple-100 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 text-white flex items-center justify-center shadow-md">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block uppercase">Poin XP</span>
            <span className="text-lg font-black text-purple-700 font-['Fredoka',sans-serif]">
              {progress.xp} XP
            </span>
          </div>
        </div>

        {/* Stars */}
        <div className="bg-white rounded-3xl p-5 border-2 border-amber-100 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white flex items-center justify-center shadow-md">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block uppercase">Bintang Terkumpul</span>
            <span className="text-lg font-black text-amber-600 font-['Fredoka',sans-serif]">
              {progress.stars} Bintang
            </span>
          </div>
        </div>

        {/* Materi Selesai */}
        <div className="bg-white rounded-3xl p-5 border-2 border-emerald-100 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block uppercase">Materi Selesai</span>
            <span className="text-lg font-black text-emerald-700 font-['Fredoka',sans-serif]">
              {progress.completedLessons.length} / 4 Modul
            </span>
          </div>
        </div>
      </div>

      {/* Main Exploration Hub (6 Big Quick Jump Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 font-['Fredoka',sans-serif]">
            Pusat Petualangan Belajar
          </h2>
          <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
            8 Menu Aktif & Berfungsi Penuh
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. Materi Belajar */}
          <div
            onClick={() => handleNavigate('materi')}
            className="bg-white rounded-3xl p-6 border-2 border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
                Materi Belajar Lengkap
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                4 Unit terstruktur dari konsep dasar relasi, pemetaan fungsi, rumus f(x), hingga penalaran HOTS.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-pink-600 group-hover:translate-x-1 transition-transform">
              <span>Buka Modul Belajar</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 2. Lab Relasi */}
          <div
            onClick={() => handleNavigate('lab-relasi')}
            className="bg-white rounded-3xl p-6 border-2 border-rose-100 hover:border-rose-300 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
                Laboratorium Relasi
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tarik panah antar himpunan, amati Domain, Kodomain, Range, dan himpunan pasangan berurutan otomatis!
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-rose-600 group-hover:translate-x-1 transition-transform">
              <span>Masuk Laboratorium Relasi</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 3. Lab Fungsi */}
          <div
            onClick={() => handleNavigate('lab-fungsi')}
            className="bg-white rounded-3xl p-6 border-2 border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
                Laboratorium Fungsi
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Uji 2 aturan emas fungsi secara live! Cek detektor 'jomblo' dan 'mendua', serta simulasikan mesin f(x).
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-purple-600 group-hover:translate-x-1 transition-transform">
              <span>Masuk Laboratorium Fungsi</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 4. Latihan Soal 60 PG */}
          <div
            onClick={() => handleNavigate('latihan')}
            className="bg-white rounded-3xl p-6 border-2 border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
                Latihan 60 Soal (A-E)
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Setiap soal dilengkapi CARA NORMAL, CARA CEPAT, BUKTI VISUAL, dan audio narasi ramah.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
              <span>Mulai Latihan Soal</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 5. Tantangan HOTS */}
          <div
            onClick={() => handleNavigate('hots')}
            className="bg-white rounded-3xl p-6 border-2 border-indigo-100 hover:border-indigo-300 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
                Tantangan Detektif HOTS
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pecahkan studi kasus tarif taksi, sandi komputer rahasia, dan optimasi bisnis donat bertingkat.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
              <span>Selesaikan Kasus HOTS</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 6. Evaluasi Akhir 20 Soal */}
          <div
            onClick={() => handleNavigate('evaluasi')}
            className="bg-white rounded-3xl p-6 border-2 border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
                Evaluasi Akhir & Sertifikat
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tes 20 soal penentu kelulusan! Raih skor minimal 80 untuk mencetak sertifikat resmi dari Mister Jo.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
              <span>Uji Kelulusan</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Daily Missions Checklist (Required by Section 8) */}
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-100 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            <h3 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
              Misi Harian Sobat Imut
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Dapatkan bonus XP & Bintang setiap hari!
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {progress.dailyMissions.map((m) => (
            <div
              key={m.id}
              className={`p-4 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all ${
                m.completed
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-800">{m.title}</p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span>Progres: {m.current} / {m.target}</span>
                  <span>•</span>
                  <span className="text-pink-600 font-bold">+{m.rewardXp} XP, +{m.rewardStars} ⭐</span>
                </div>
              </div>
              {m.completed ? (
                <span className="text-emerald-600 font-black text-sm flex items-center gap-1 bg-white px-2 py-1 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-4 h-4" /> Selesai!
                </span>
              ) : (
                <span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded-xl border">
                  Berjalan
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
