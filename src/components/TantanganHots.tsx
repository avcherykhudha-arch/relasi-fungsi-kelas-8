/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Award, CheckCircle2, Search, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { soundEffects } from '../services/soundEffects';
import { Mascot } from './Mascot';
import { TTSPlayer } from './TTSPlayer';

interface HotsCase {
  id: string;
  badgeTitle: string;
  badgeIcon: string;
  title: string;
  story: string;
  steps: {
    prompt: string;
    options: { text: string; correct: boolean; explanation: string }[];
  }[];
  finalRewardXp: number;
  finalRewardStars: number;
}

const HOTS_CASES: HotsCase[] = [
  {
    id: 'case-1',
    badgeTitle: 'Detektif Taksi Online',
    badgeIcon: '🚖',
    title: 'Kasus 1: Misteri Tarif Taksi Mister Jo',
    story: 'Kiko ingin berkunjung ke rumah Mimi yang berjarak 18 km. Taksi "Cepat & Lucu" mematok tarif awal buka pintu Rp9.000 dan Rp4.000 per kilometer. Namun Kiko memiliki kupon diskon sebesar 15% dari total seluruh tarif! Berapakah biaya akhir yang harus disiapkan Kiko?',
    steps: [
      {
        prompt: 'Langkah 1: Tentukan rumus fungsi tarif awal sebelum diskon T(x) untuk jarak x km.',
        options: [
          { text: 'T(x) = 4.000x + 9.000', correct: true, explanation: 'Tepat sekali! Tarif awal adalah 9.000 (konstanta b) dan 4.000 per km (gradien a).' },
          { text: 'T(x) = 9.000x + 4.000', correct: false, explanation: 'Terbalik antara tarif dasar dan tarif per km.' },
          { text: 'T(x) = 4.000x', correct: false, explanation: 'Lupa menambahkan biaya buka pintu.' }
        ]
      },
      {
        prompt: 'Langkah 2: Hitung total biaya sebelum diskon untuk jarak 18 km.',
        options: [
          { text: 'T(18) = 4.000(18) + 9.000 = 72.000 + 9.000 = Rp81.000', correct: true, explanation: 'Hebat! 72.000 ditambah 9.000 adalah Rp81.000.' },
          { text: 'T(18) = Rp72.000', correct: false, explanation: 'Jangan lupa biaya buka pintunya.' },
          { text: 'T(18) = Rp90.000', correct: false, explanation: 'Periksa kembali perhitungan perkalian 18 x 4.000.' }
        ]
      },
      {
        prompt: 'Langkah 3: Hitung diskon 15% dan total akhir yang harus dibayar Kiko.',
        options: [
          { text: 'Diskon = 15% x 81.000 = Rp12.150. Bayar = 81.000 - 12.150 = Rp68.850', correct: true, explanation: 'Luar biasa! Kasus 1 terpecahkan dengan sempurna! Kiko membayar Rp68.850.' },
          { text: 'Diskon = Rp10.000. Bayar = Rp71.000', correct: false, explanation: '15% dari 81.000 adalah 12.150.' },
          { text: 'Bayar = Rp81.000 tanpa diskon', correct: false, explanation: 'Kiko punya kupon diskon 15%.' }
        ]
      }
    ],
    finalRewardXp: 80,
    finalRewardStars: 5,
  },
  {
    id: 'case-2',
    badgeTitle: 'Pemecah Kriptografi',
    badgeIcon: '🕵️',
    title: 'Kasus 2: Sandi Rahasia Komputer Mister Jo',
    story: 'Mister Jo mengirim pesan kode rahasia matematika. Setiap huruf alfabet A=1, B=2, C=3, ..., Z=26 dipetakan menggunakan mesin f(x) = 3x - 2. Kode sandi yang keluar adalah deretan angka: [25, 4, 31, 31, 40]. Kata apakah yang sedang diucapkan Mister Jo?',
    steps: [
      {
        prompt: 'Langkah 1: Temukan rumus invers pembalik untuk mencari nomor huruf x dari kode y = 3x - 2.',
        options: [
          { text: 'x = (y + 2) / 3', correct: true, explanation: 'Tepat! Kebalikan dari kurangi 2 adalah tambah 2, lalu dibagi 3.' },
          { text: 'x = (y - 2) / 3', correct: false, explanation: 'Salah tanda invers.' },
          { text: 'x = 3y + 2', correct: false, explanation: 'Bukan rumus pembalik yang benar.' }
        ]
      },
      {
        prompt: 'Langkah 2: Pecahkan angka 25 dan 4 untuk menemukan dua huruf pertama.',
        options: [
          { text: 'y=25 -> (27/3) = 9 (Huruf I); y=4 -> (6/3) = 2 (Huruf B)', correct: true, explanation: 'Benar sekali! Huruf ke-9 adalah I dan huruf ke-2 adalah B.' },
          { text: 'Huruf H dan A', correct: false, explanation: 'Hitung kembali (25 + 2) / 3.' },
          { text: 'Huruf J dan C', correct: false, explanation: 'Periksa kembali urutan alfabet.' }
        ]
      },
      {
        prompt: 'Langkah 3: Pecahkan sisa angka [31, 31, 40] untuk membaca seluruh kata rahasia!',
        options: [
          { text: 'y=31 -> (33/3) = 11 (K); y=40 -> (42/3) = 14 (N). Kata rahasia adalah: "IKK N" -> "IKUT"', correct: true, explanation: 'Brilian! Kode rahasia berhasil dipecahkan menjadi kata bernada kebersamaan!' },
          { text: 'Kata rahasia adalah: "HALO"', correct: false, explanation: 'Huruf ke-11 bukan L.' },
          { text: 'Kata rahasia adalah: "JUARA"', correct: false, explanation: 'Periksa kembali nomor huruf alfabet.' }
        ]
      }
    ],
    finalRewardXp: 90,
    finalRewardStars: 6,
  },
  {
    id: 'case-3',
    badgeTitle: 'Arsitek Donat Super',
    badgeIcon: '🍩',
    title: 'Kasus 3: Optimasi Produksi Donat Mimi',
    story: 'Mimi membuka gerai donat. Biaya produksi mengikuti fungsi B(x) = 200.000 + 4.000x, dan harga jual per buah donat adalah Rp8.000. Mimi ingin mengetahui berapa donat yang harus terjual agar usahanya mencapai titik impas (Break-Even Point / Balik Modal)?',
    steps: [
      {
        prompt: 'Langkah 1: Tentukan fungsi pendapatan penjualan P(x) untuk x buah donat.',
        options: [
          { text: 'P(x) = 8.000x', correct: true, explanation: 'Tepat! Karena donat dijual seharga Rp8.000 per buah.' },
          { text: 'P(x) = 8.000x + 200.000', correct: false, explanation: 'Rp200.000 adalah biaya, bukan pendapatan.' },
          { text: 'P(x) = 4.000x', correct: false, explanation: 'Itu biaya produksi per unit.' }
        ]
      },
      {
        prompt: 'Langkah 2: Samakan Pendapatan dengan Biaya (P(x) = B(x)) untuk mencari titik balik modal.',
        options: [
          { text: '8.000x = 4.000x + 200.000 -> 4.000x = 200.000 -> x = 50 donat', correct: true, explanation: 'Hebat sekali! 200.000 dibagi 4.000 adalah tepat 50 buah donat.' },
          { text: 'x = 25 donat', correct: false, explanation: 'Pada 25 donat Mimi masih rugi.' },
          { text: 'x = 100 donat', correct: false, explanation: 'Terlalu banyak untuk titik impas.' }
        ]
      }
    ],
    finalRewardXp: 85,
    finalRewardStars: 5,
  }
];

export const TantanganHots: React.FC = () => {
  const { progress, completeHots } = useProgress();
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const activeCase = HOTS_CASES[activeCaseIdx];
  const isCaseCompleted = progress.completedHots.includes(activeCase.id);
  const currentStep = activeCase.steps[currentStepIdx];

  const handleSelectCase = (idx: number) => {
    soundEffects.playPop();
    setActiveCaseIdx(idx);
    setCurrentStepIdx(0);
    setSelectedOpt(null);
    setFeedback(null);
  };

  const handleChooseOption = (optIdx: number) => {
    soundEffects.playPop();
    setSelectedOpt(optIdx);
    const chosen = currentStep.options[optIdx];
    setFeedback(chosen.explanation);

    if (chosen.correct) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playTryAgain();
    }
  };

  const handleNextStep = () => {
    soundEffects.playPop();
    if (currentStepIdx < activeCase.steps.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setFeedback(null);
    } else {
      // Completed case!
      completeHots(activeCase.id);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>Penalaran Tingkat Tinggi (HOTS)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-['Fredoka',sans-serif]">
              Tantangan Detektif Matematika
            </h1>
            <p className="text-pink-100 text-sm mt-1 max-w-xl">
              Pecahkan misteri kasus kontekstual nyata bersama Mister Jo. Buktikan logikamu dan raih lencana detektif master!
            </p>
          </div>
          <Mascot mood="thinking" size="md" character="kiko" />
        </div>
      </div>

      {/* Case Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {HOTS_CASES.map((c, idx) => {
          const isSel = idx === activeCaseIdx;
          const isDone = progress.completedHots.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => handleSelectCase(idx)}
              className={`p-4 rounded-3xl text-left border-2 transition-all relative overflow-hidden ${
                isSel
                  ? 'border-indigo-500 bg-white ring-4 ring-indigo-100 shadow-md'
                  : 'border-slate-100 bg-white/80 hover:bg-white text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{c.badgeIcon}</span>
                {isDone ? (
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Terpecahkan
                  </span>
                ) : (
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    +{c.finalRewardXp} XP
                  </span>
                )}
              </div>
              <h3 className="font-extrabold text-sm text-slate-800">{c.title}</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{c.story}</p>
            </button>
          );
        })}
      </div>

      {/* Active Case Workspace */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-indigo-100 space-y-6">
        {/* Case Briefing */}
        <div className="bg-indigo-50/60 border border-indigo-200 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-sm">
            <span>🔍</span>
            <span>Berkas Penyelidikan Mister Jo:</span>
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
            {activeCase.story}
          </p>
        </div>

        {/* Multi-Step Progress Tracker */}
        <div className="flex items-center gap-2">
          {activeCase.steps.map((_, sIdx) => (
            <div
              key={sIdx}
              className={`flex-1 h-2 rounded-full transition-all ${
                sIdx < currentStepIdx
                  ? 'bg-emerald-500'
                  : sIdx === currentStepIdx
                  ? 'bg-indigo-500 animate-pulse'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Step Question */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider">
              Tahap Penyelidikan {currentStepIdx + 1} dari {activeCase.steps.length}
            </span>
            <TTSPlayer
              textToSpeak={currentStep.prompt}
              label="Dengarkan Petunjuk"
              compact={true}
            />
          </div>
          <h2 className="text-base md:text-lg font-extrabold text-slate-800 leading-snug">
            {currentStep.prompt}
          </h2>

          {/* Options */}
          <div className="space-y-2.5">
            {currentStep.options.map((opt, oIdx) => {
              const isSelected = selectedOpt === oIdx;
              return (
                <button
                  key={oIdx}
                  onClick={() => handleChooseOption(oIdx)}
                  className={`w-full p-4 rounded-2xl border-2 text-left text-xs md:text-sm transition-all ${
                    isSelected
                      ? opt.correct
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold ring-2 ring-emerald-200'
                        : 'bg-rose-50 border-rose-400 text-rose-900 font-bold ring-2 ring-rose-200'
                      : 'bg-slate-50 hover:bg-indigo-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt.text}</span>
                    {isSelected && (opt.correct ? '✅' : '❌')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback & Proceed Button */}
          {feedback && (
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
              <p className="text-xs md:text-sm font-semibold text-slate-700">
                {feedback}
              </p>
              {selectedOpt !== null && currentStep.options[selectedOpt].correct && (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-xs shadow-md transition active:scale-95 flex items-center gap-1.5 shrink-0"
                >
                  <span>
                    {currentStepIdx < activeCase.steps.length - 1
                      ? 'Lanjut ke Tahap Berikutnya →'
                      : 'Selesaikan Kasus & Ambil Hadiah! 🏆'}
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
