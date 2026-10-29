/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Volume2,
  Zap,
  BookOpen,
  Eye,
  ArrowRight,
  RotateCcw,
  HelpCircle,
} from 'lucide-react';
import { Question, QuestionCategory, DifficultyLevel } from '../types';
import { ALL_QUESTIONS, CATEGORY_INFO, filterQuestions } from '../data/questionsData';
import { useProgress } from '../context/ProgressContext';
import { soundEffects } from '../services/soundEffects';
import { TTSPlayer } from './TTSPlayer';
import { VisualProofModal } from './VisualProofModal';
import { Mascot } from './Mascot';

export const LatihanSoal: React.FC = () => {
  const { progress, recordQuestionAnswer, incrementMission, unlockBadge } = useProgress();

  // Mode: 'latihan' (instant feedback) | 'simulasi' (exam style)
  const [mode, setMode] = useState<'latihan' | 'simulasi'>('latihan');
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState<boolean>(false);
  const [activeTabSolution, setActiveTabSolution] = useState<'normal' | 'cepat' | null>(null);
  const [visualModalOpen, setVisualModalOpen] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Simulation mode score tracking
  const [simulationAnswers, setSimulationAnswers] = useState<Record<number, string>>({});
  const [isSimulationSubmitted, setIsSimulationSubmitted] = useState<boolean>(false);

  // Filtered question pool
  const filteredQuestions = filterQuestions({
    category: selectedCategory,
    difficulty: selectedDifficulty,
    searchQuery,
  });

  const currentQ: Question | undefined = filteredQuestions[currentIndex] || filteredQuestions[0];

  // Check if current question was already answered in user history
  const savedAnswer = currentQ ? progress.answeredQuestions[currentQ.id] : undefined;

  const handleSelectOption = (optId: string) => {
    if (isAnswerLocked && mode === 'latihan') return;
    soundEffects.playPop();
    setSelectedOption(optId);

    if (mode === 'simulasi') {
      setSimulationAnswers((prev) => ({
        ...prev,
        [currentQ.id]: optId,
      }));
    }
  };

  const handleLockAnswer = () => {
    if (!selectedOption || !currentQ) return;
    soundEffects.playPop();
    setIsAnswerLocked(true);

    const isCorrect = currentQ.options.find((o) => o.id === selectedOption)?.isCorrect ?? false;
    recordQuestionAnswer(currentQ.id, selectedOption, isCorrect);
    incrementMission('m3', 1);

    if (isCorrect) {
      setActiveTabSolution('normal');
    }
  };

  const handleNextQuestion = () => {
    soundEffects.playPop();
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerLocked(false);
      setActiveTabSolution(null);
      setShowHint(false);
    }
  };

  const handlePrevQuestion = () => {
    soundEffects.playPop();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(null);
      setIsAnswerLocked(false);
      setActiveTabSolution(null);
      setShowHint(false);
    }
  };

  const handleJumpToIndex = (idx: number) => {
    soundEffects.playPop();
    setCurrentIndex(idx);
    setSelectedOption(null);
    setIsAnswerLocked(false);
    setActiveTabSolution(null);
    setShowHint(false);
  };

  const handleOpenVisualProof = () => {
    soundEffects.playPop();
    setVisualModalOpen(true);
  };

  const handleToggleCara = (type: 'normal' | 'cepat') => {
    soundEffects.playPop();
    if (activeTabSolution === type) {
      setActiveTabSolution(null);
    } else {
      setActiveTabSolution(type);
      if (type === 'cepat') {
        incrementMission('m4', 1);
        unlockBadge('fast-track');
      }
    }
  };

  const handleRestartLatihan = () => {
    soundEffects.playPop();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerLocked(false);
    setActiveTabSolution(null);
    setSimulationAnswers({});
    setIsSimulationSubmitted(false);
  };

  const currentOptionObj = currentQ?.options.find((o) => o.id === selectedOption);
  const correctOptionObj = currentQ?.options.find((o) => o.isCorrect);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>Bank Soal Lengkap 60 Butir Pilihan Ganda (A-E)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-['Fredoka',sans-serif]">
              Latihan Soal Relasi & Fungsi
            </h1>
            <p className="text-pink-100 text-sm mt-1 max-w-xl">
              Tiap soal dilengkapi CARA NORMAL yang runtut, CARA CEPAT ala Mister Jo, BUKTI VISUAL, dan audio narasi bahasa Indonesia!
            </p>
          </div>
          <Mascot mood="cheering" size="md" character="kiko" />
        </div>
      </div>

      {/* Filter and Mode Bar */}
      <div className="bg-white rounded-3xl p-4 md:p-5 shadow-sm border border-pink-100 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-pink-50 p-1 rounded-2xl border border-pink-200">
            <button
              onClick={() => {
                soundEffects.playPop();
                setMode('latihan');
              }}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'latihan'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-pink-600'
              }`}
            >
              Mode Latihan (Bahas Langsung)
            </button>
            <button
              onClick={() => {
                soundEffects.playPop();
                setMode('simulasi');
              }}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'simulasi'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-pink-600'
              }`}
            >
              Mode Simulasi Ujian
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-pink-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Cari kata kunci soal..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-pink-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {/* Categories & Difficulty Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Topik:
          </span>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setCurrentIndex(0);
            }}
            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
              selectedCategory === 'all'
                ? 'bg-pink-500 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-pink-50'
            }`}
          >
            Semua (60)
          </button>
          {(Object.keys(CATEGORY_INFO) as QuestionCategory[]).map((catKey) => {
            const info = CATEGORY_INFO[catKey];
            const isSel = selectedCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => {
                  setSelectedCategory(catKey);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                  isSel ? 'bg-pink-500 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-pink-50'
                }`}
              >
                {info.title} ({info.count})
              </button>
            );
          })}
        </div>

        {/* Difficulty filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-1">Tingkat:</span>
          {(['all', 'Mudah', 'Sedang', 'Sulit', 'HOTS'] as (DifficultyLevel | 'all')[]).map((dif) => (
            <button
              key={dif}
              onClick={() => {
                setSelectedDifficulty(dif);
                setCurrentIndex(0);
              }}
              className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold transition ${
                selectedDifficulty === dif
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              {dif === 'all' ? 'Semua Kesulitan' : dif}
            </button>
          ))}
        </div>
      </div>

      {/* Main Question Card Area */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border-2 border-pink-100">
          <p className="text-slate-600 font-bold">Tidak ada soal yang cocok dengan filter yang dipilih.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-2 bg-pink-500 text-white font-bold rounded-xl text-xs"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-100 space-y-6">
          {/* Question Header & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-pink-100">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-pink-500 text-white font-black text-sm flex items-center justify-center shadow-md">
                {currentIndex + 1}
              </span>
              <div>
                <span className="text-xs font-bold text-slate-500">
                  Soal No. {currentIndex + 1} dari {filteredQuestions.length}
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-pink-100 text-pink-700">
                    {CATEGORY_INFO[currentQ.category]?.title}
                  </span>
                  <span
                    className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${
                      currentQ.difficulty === 'Mudah'
                        ? 'bg-emerald-100 text-emerald-700'
                        : currentQ.difficulty === 'Sedang'
                        ? 'bg-blue-100 text-blue-700'
                        : currentQ.difficulty === 'Sulit'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {currentQ.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Soal Jumper Drawer or Pagination */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
                className="px-3 py-1.5 bg-slate-100 hover:bg-pink-100 disabled:opacity-40 text-slate-700 rounded-xl text-xs font-bold transition"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="px-3 py-1.5 bg-pink-500 hover:bg-pink-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                Berikutnya →
              </button>
            </div>
          </div>

          {/* Stimulus Section (if available) */}
          {currentQ.stimulusContent && (
            <div className="bg-[#FFF9FA] border-2 border-pink-100 rounded-2xl p-4 text-sm text-slate-700 leading-relaxed">
              {currentQ.stimulusTitle && (
                <span className="text-xs font-bold text-pink-700 uppercase tracking-wider block mb-1">
                  📌 {currentQ.stimulusTitle}
                </span>
              )}
              <p className="whitespace-pre-line">{currentQ.stimulusContent}</p>
            </div>
          )}

          {/* Question Text */}
          <div className="space-y-2">
            <h2 className="text-base md:text-lg font-bold text-slate-800 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Five Touch-Friendly Multiple Choice Options (A, B, C, D, E) */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const showResult = isAnswerLocked && mode === 'latihan';

              let buttonStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-pink-50 hover:border-pink-300';

              if (isSelected && !showResult) {
                buttonStyle = 'bg-pink-100 border-pink-500 text-pink-900 shadow-sm ring-2 ring-pink-300';
              }

              if (showResult) {
                if (opt.isCorrect) {
                  buttonStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-300 font-bold';
                } else if (isSelected && !opt.isCorrect) {
                  buttonStyle = 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-300';
                } else {
                  buttonStyle = 'bg-slate-50/60 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={isAnswerLocked && mode === 'latihan'}
                  className={`w-full p-3.5 rounded-2xl border-2 text-left flex items-start gap-3 transition-all ${buttonStyle}`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition ${
                      isSelected
                        ? 'bg-pink-600 text-white shadow-sm'
                        : 'bg-white border border-slate-300 text-slate-700'
                    }`}
                  >
                    {opt.id}
                  </span>
                  <div className="flex-1 text-sm md:text-base leading-snug">
                    <p>{opt.text}</p>
                    {/* Feedback explanation under option when revealed */}
                    {showResult && isSelected && (
                      <p
                        className={`text-xs mt-1.5 font-bold ${
                          opt.isCorrect ? 'text-emerald-700' : 'text-rose-600'
                        }`}
                      >
                        {opt.feedback}
                      </p>
                    )}
                  </div>
                  {showResult && opt.isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {showResult && isSelected && !opt.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button: Kunci Jawaban / Petunjuk */}
          {!isAnswerLocked && mode === 'latihan' && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-700 transition"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showHint ? 'Tutup Petunjuk' : 'Butuh Petunjuk Mister Jo?'}</span>
              </button>

              <button
                onClick={handleLockAnswer}
                disabled={!selectedOption}
                className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:opacity-40 text-white font-extrabold rounded-xl text-sm shadow-md transition active:scale-95"
              >
                Kunci & Cek Jawaban! ✨
              </button>
            </div>
          )}

          {/* Hint Card */}
          {showHint && !isAnswerLocked && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-900 animate-fade-in flex items-start gap-2">
              <span className="text-base">💡</span>
              <div>
                <span className="font-extrabold block">Petunjuk Mister Jo:</span>
                <span>{currentQ.hint}</span>
              </div>
            </div>
          )}

          {/* Review Toolbar & Mandatory 4 Buttons (Cara Normal, Cara Cepat, Bukti Visual, Dengarkan) */}
          {(isAnswerLocked || mode === 'latihan') && (
            <div className="pt-4 border-t-2 border-dashed border-pink-200 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                  Eksplorasi Pembahasan:
                </span>

                {/* 1. CARA NORMAL */}
                <button
                  onClick={() => handleToggleCara('normal')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition shadow-sm ${
                    activeTabSolution === 'normal'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>CARA NORMAL</span>
                </button>

                {/* 2. CARA CEPAT */}
                <button
                  onClick={() => handleToggleCara('cepat')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition shadow-sm ${
                    activeTabSolution === 'cepat'
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>CARA CEPAT</span>
                </button>

                {/* 3. BUKTI VISUAL */}
                <button
                  onClick={handleOpenVisualProof}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-xl text-xs font-extrabold transition shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>BUKTI VISUAL</span>
                </button>

                {/* 4. DENGARKAN PEMBAHASAN (TTS) */}
                <TTSPlayer
                  textToSpeak={currentQ.ttsScript}
                  label="DENGARKAN PEMBAHASAN"
                  compact={true}
                />
              </div>

              {/* CARA NORMAL Display Drawer */}
              {activeTabSolution === 'normal' && (
                <div className="bg-blue-50/70 border-2 border-blue-200 rounded-2xl p-4 text-xs md:text-sm text-slate-700 space-y-2 animate-fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-blue-800 text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>Pembahasan Cara Normal (Runtut & Komprehensif)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <p>
                      <strong className="text-blue-900">Diketahui:</strong> {currentQ.caraNormal.diketahui}
                    </p>
                    <p>
                      <strong className="text-blue-900">Ditanya:</strong> {currentQ.caraNormal.ditanya}
                    </p>
                  </div>
                  <p>
                    <strong className="text-blue-900">Konsep / Rumus:</strong> {currentQ.caraNormal.konsep}
                  </p>
                  <div className="bg-white rounded-xl p-3 border border-blue-200 space-y-1">
                    <span className="font-extrabold text-blue-900 block mb-1">Langkah Penyelesaian:</span>
                    {currentQ.caraNormal.langkah.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                  <p className="font-extrabold text-blue-950 pt-1">
                    Kesimpulan: {currentQ.caraNormal.kesimpulan}
                  </p>
                </div>
              )}

              {/* CARA CEPAT Display Drawer */}
              {activeTabSolution === 'cepat' && (
                <div className="bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-4 text-xs md:text-sm text-slate-800 space-y-2 animate-fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span>Trik Cara Cepat Mister Jo: {currentQ.caraCepat.trik}</span>
                  </div>
                  <p>
                    <strong className="text-amber-900">Alasan Matematis:</strong> {currentQ.caraCepat.alasan}
                  </p>
                  <div className="bg-white rounded-xl p-3 border border-amber-300">
                    <span className="font-extrabold text-amber-950 block mb-1">Eksekusi Kilat:</span>
                    <p className="font-mono text-amber-900 font-bold">{currentQ.caraCepat.eksekusi}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Visual Proof Modal */}
      {currentQ && (
        <VisualProofModal
          isOpen={visualModalOpen}
          onClose={() => setVisualModalOpen(false)}
          data={currentQ.buktiVisual}
          questionTitle={`Bukti Visual Soal #${currentQ.id}`}
        />
      )}
    </div>
  );
};
