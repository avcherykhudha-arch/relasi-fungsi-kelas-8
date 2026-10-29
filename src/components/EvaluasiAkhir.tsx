/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Printer,
  ChevronRight,
  BookOpen,
  Volume2,
  Clock,
} from 'lucide-react';
import { FINAL_EXAM_QUESTIONS } from '../data/finalExamData';
import { useProgress } from '../context/ProgressContext';
import { soundEffects } from '../services/soundEffects';
import { TTSPlayer } from './TTSPlayer';
import { Mascot } from './Mascot';

export const EvaluasiAkhir: React.FC = () => {
  const { progress, saveFinalExam } = useProgress();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>(progress.finalExamAnswers || {});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(progress.finalExamScore !== null);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [activeReviewTab, setActiveReviewTab] = useState<'normal' | 'cepat' | null>(null);

  const currentQ = FINAL_EXAM_QUESTIONS[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isSubmitted) return;
    soundEffects.playPop();
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optId,
    }));
  };

  const handleNext = () => {
    soundEffects.playPop();
    if (currentIndex < FINAL_EXAM_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setActiveReviewTab(null);
    }
  };

  const handlePrev = () => {
    soundEffects.playPop();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setActiveReviewTab(null);
    }
  };

  const handleSubmitExam = () => {
    soundEffects.playPop();
    // Calculate score
    let correctCount = 0;
    FINAL_EXAM_QUESTIONS.forEach((q) => {
      const userAns = answers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect)?.id;
      if (userAns === correctOpt) {
        correctCount += 1;
      }
    });

    const finalScore = Math.round((correctCount / FINAL_EXAM_QUESTIONS.length) * 100);
    saveFinalExam(finalScore, answers);
    setIsSubmitted(true);
    setCurrentIndex(0);
  };

  const handleRetake = () => {
    soundEffects.playPop();
    setAnswers({});
    setIsSubmitted(false);
    setCurrentIndex(0);
    setShowCertificate(false);
  };

  const handlePrint = () => {
    window.print();
  };

  // Score analysis
  const score = progress.finalExamScore ?? 0;
  const isPassed = score >= 80;

  // Topic mastery breakdown
  const topicCounts: Record<string, { total: number; correct: number }> = {
    'Konsep Relasi': { total: 0, correct: 0 },
    'Domain & Range': { total: 0, correct: 0 },
    'Konsep Fungsi': { total: 0, correct: 0 },
    'Aplikasi & HOTS': { total: 0, correct: 0 },
  };

  FINAL_EXAM_QUESTIONS.forEach((q) => {
    let tName = 'Konsep Relasi';
    if (q.category === 'domain-representasi') tName = 'Domain & Range';
    if (q.category === 'fungsi-konsep') tName = 'Konsep Fungsi';
    if (q.category === 'kontekstual-hots') tName = 'Aplikasi & HOTS';

    topicCounts[tName].total += 1;
    const isCor = answers[q.id] === q.options.find((o) => o.isCorrect)?.id;
    if (isCor) topicCounts[tName].correct += 1;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden no-print">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>Evaluasi Komprehensif Seluruh Materi</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-['Fredoka',sans-serif]">
              Evaluasi Akhir Relasi & Fungsi (20 Soal)
            </h1>
            <p className="text-pink-100 text-sm mt-1 max-w-xl">
              Uji ketuntasan belajar kamu! Dapatkan nilai minimal 80 untuk mencetak Sertifikat Kelulusan Resmi dari Mister Jo!
            </p>
          </div>
          <Mascot mood={isPassed && isSubmitted ? 'cheering' : 'thinking'} size="md" character="misterjo" />
        </div>
      </div>

      {/* When Exam is NOT Submitted: Take Exam View */}
      {!isSubmitted && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-pink-100 space-y-6 no-print">
          {/* Header & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-pink-100">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-pink-500 text-white font-black text-sm flex items-center justify-center">
                {currentIndex + 1}
              </span>
              <div>
                <span className="text-xs font-bold text-slate-500">
                  Soal Evaluasi No. {currentIndex + 1} dari {FINAL_EXAM_QUESTIONS.length}
                </span>
                <p className="text-xs font-bold text-pink-600">{currentQ.stimulusTitle}</p>
              </div>
            </div>

            {/* Answered Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 bg-pink-50 px-3 py-1.5 rounded-xl border border-pink-200">
                Terjawab: {Object.keys(answers).length} / {FINAL_EXAM_QUESTIONS.length}
              </span>
            </div>
          </div>

          {/* Stimulus */}
          {currentQ.stimulusContent && (
            <div className="bg-[#FFF9FA] border border-pink-100 rounded-2xl p-4 text-sm text-slate-700 leading-relaxed">
              <p className="whitespace-pre-line">{currentQ.stimulusContent}</p>
            </div>
          )}

          {/* Question Text */}
          <h2 className="text-base md:text-lg font-bold text-slate-800 leading-snug">
            {currentQ.question}
          </h2>

          {/* Options A to E */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => {
              const isSelected = answers[currentQ.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full p-3.5 rounded-2xl border-2 text-left flex items-start gap-3 transition-all ${
                    isSelected
                      ? 'bg-pink-100 border-pink-500 text-pink-900 ring-2 ring-pink-300 shadow-sm font-bold'
                      : 'bg-slate-50 hover:bg-pink-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                      isSelected
                        ? 'bg-pink-600 text-white shadow-sm'
                        : 'bg-white border border-slate-300 text-slate-700'
                    }`}
                  >
                    {opt.id}
                  </span>
                  <div className="flex-1 text-sm md:text-base leading-snug">
                    <p>{opt.text}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nav & Submit bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-slate-100 hover:bg-pink-100 disabled:opacity-40 text-slate-700 rounded-xl text-xs font-bold transition"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === FINAL_EXAM_QUESTIONS.length - 1}
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                Berikutnya →
              </button>
            </div>

            {/* Quick Submit button if at least 15 questions answered or user is on last question */}
            <button
              onClick={handleSubmitExam}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold rounded-xl text-xs shadow-md transition active:scale-95"
            >
              Kumpulkan Jawaban Evaluasi! 🎯
            </button>
          </div>
        </div>
      )}

      {/* When Exam IS Submitted: Score Report, Topic Analysis, Remedial, Certificate */}
      {isSubmitted && (
        <div className="space-y-6">
          {/* Result Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-pink-100 space-y-6 no-print">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-pink-100">
              <div className="text-center md:text-left space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Hasil Evaluasi Akhir Matematika Kelas VIII
                </span>
                <h2 className="text-3xl font-black text-slate-800 font-['Fredoka',sans-serif]">
                  {progress.studentName}, Skor Kamu: {score} / 100
                </h2>
                <p className="text-sm text-slate-600">
                  {isPassed
                    ? '🎉 LUAR BIASA! Kamu lulus evaluasi dengan hasil gemilang!'
                    : 'Semangat terus! Kamu sudah berjuang keras. Pelajari kembali materi rekomendasi di bawah ya!'}
                </p>
              </div>

              {/* Large Score Circle */}
              <div
                className={`w-28 h-28 rounded-full border-8 flex flex-col items-center justify-center font-black shadow-lg ${
                  isPassed
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-800'
                    : 'border-amber-400 bg-amber-50 text-amber-800'
                }`}
              >
                <span className="text-3xl">{score}</span>
                <span className="text-[10px] uppercase font-bold text-slate-500">Nilai Akhir</span>
              </div>
            </div>

            {/* Topic Mastery Grid */}
            <div className="space-y-3">
              <h3 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider">
                Analisis Kemampuan Berdasarkan Topik:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(topicCounts).map(([tName, data]) => {
                  const pct = Math.round((data.correct / data.total) * 100);
                  return (
                    <div key={tName} className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center">
                      <span className="text-xs font-bold text-slate-700 block truncate">{tName}</span>
                      <span className="text-xl font-black text-pink-600 block mt-1">{pct}%</span>
                      <span className="text-[10px] text-slate-500 font-semibold">
                        {data.correct} dari {data.total} benar
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Remedial Recommendation */}
            {!isPassed && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs md:text-sm text-amber-900 space-y-1">
                <span className="font-extrabold block">💡 Rekomendasi Remedial dari Mister Jo:</span>
                <p>
                  Yuk baca kembali <strong>Unit 02 (Mengenal Fungsi)</strong> dan <strong>Unit 03 (Nilai Fungsi)</strong> di menu Materi Belajar, lalu coba eksperimen di Laboratorium Fungsi agar semakin paham!
                </p>
              </div>
            )}

            {/* Motivational letter */}
            <div className="bg-[#FFF5F8] border border-pink-200 rounded-2xl p-4 text-xs md:text-sm text-slate-700 italic space-y-1">
              <span className="font-bold text-pink-700 not-italic block">Pesan Hangat Mister Jo:</span>
              <p>
                “Nilai bukan segalanya, proses belajar dan rasa ingin tahumu yang paling berharga! Teruslah tersenyum dan jadikan matematika sebagai sahabat terbaikmu!”
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
              <button
                onClick={handleRetake}
                className="flex items-center gap-1.5 px-4 py-2 border-2 border-pink-300 text-pink-700 font-bold rounded-xl text-xs hover:bg-pink-50 transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Evaluasi</span>
              </button>

              {isPassed && (
                <button
                  onClick={() => setShowCertificate(!showCertificate)}
                  className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold rounded-xl text-xs shadow-md transition active:scale-95 flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4 text-yellow-200" />
                  <span>{showCertificate ? 'Sembunyikan Sertifikat' : 'Lihat & Cetak Sertifikat Kelulusan! 🎓'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Printable Adorable Certificate (If Score >= 80) */}
          {isPassed && showCertificate && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-8 border-pink-200 text-center space-y-6 relative overflow-hidden print-only">
              {/* Certificate Border Accents */}
              <div className="absolute top-4 left-4 text-3xl">🌸</div>
              <div className="absolute top-4 right-4 text-3xl">🌸</div>
              <div className="absolute bottom-4 left-4 text-3xl">🌸</div>
              <div className="absolute bottom-4 right-4 text-3xl">🌸</div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-pink-500 bg-pink-100 px-4 py-1 rounded-full inline-block">
                  SERTIFIKAT KELULUSAN RESMI
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-slate-800 font-['Fredoka',sans-serif] tracking-wide">
                  DETEKTIF RELASI DAN FUNGSI
                </h2>
                <p className="text-xs text-slate-400">Nomor: MJ-LMS/VIII/{Date.now().toString().slice(-6)}</p>
              </div>

              <div className="py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider">Diberikan Kepada:</p>
                <p className="text-3xl md:text-4xl font-black text-pink-600 font-['Fredoka',sans-serif] border-b-2 border-dashed border-pink-300 pb-2 inline-block px-8 mt-1">
                  {progress.studentName}
                </p>
                <p className="text-xs md:text-sm text-slate-600 max-w-lg mx-auto mt-3 leading-relaxed">
                  Telah berhasil menyelesaikan pembelajaran dan menuntaskan Evaluasi Akhir Matematika SMP Kelas VIII topik <strong>Relasi dan Fungsi</strong> bersama Mister Jo dengan predikat:
                </p>
                <p className="text-xl font-black text-emerald-600 font-['Fredoka',sans-serif] mt-1">
                  SANGAT MEMUASKAN (Nilai: {score} / 100)
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-pink-100 max-w-md mx-auto text-xs text-slate-600">
                <div>
                  <p className="font-bold">Tanggal Kelulusan</p>
                  <p>{progress.finalExamDate || '29 Oktober 2026'}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs mb-1 border-2 border-pink-300">
                    SEAL ✨
                  </div>
                  <p className="font-black text-pink-700">Mister Jo</p>
                  <p className="text-[10px] text-slate-400">Guru Matematika Ceria</p>
                </div>
              </div>

              <div className="no-print pt-4">
                <button
                  onClick={handlePrint}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-extrabold rounded-xl text-xs shadow-md transition flex items-center gap-1.5 mx-auto"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Simpan PDF Sertifikat</span>
                </button>
              </div>
            </div>
          )}

          {/* Full Question Review with Cara Normal & Cara Cepat */}
          <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-100 space-y-6 no-print">
            <h3 className="font-black text-lg text-slate-800 font-['Fredoka',sans-serif]">
              Pembahasan Lengkap 20 Soal Evaluasi:
            </h3>

            {/* Pagination numbers */}
            <div className="flex flex-wrap gap-1.5">
              {FINAL_EXAM_QUESTIONS.map((q, idx) => {
                const userAns = answers[q.id];
                const isCor = userAns === q.options.find((o) => o.isCorrect)?.id;
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      soundEffects.playPop();
                      setCurrentIndex(idx);
                      setActiveReviewTab(null);
                    }}
                    className={`w-8 h-8 rounded-xl font-bold text-xs transition ${
                      isCurrent
                        ? 'ring-4 ring-pink-300 scale-105'
                        : ''
                    } ${
                      isCor
                        ? 'bg-emerald-500 text-white'
                        : 'bg-rose-500 text-white'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Detailed Current Reviewed Question */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600">
                  Soal Nomor {currentIndex + 1}
                </span>
                <span
                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                    answers[currentQ.id] === currentQ.options.find((o) => o.isCorrect)?.id
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {answers[currentQ.id] === currentQ.options.find((o) => o.isCorrect)?.id
                    ? 'Jawabanmu Benar ✅'
                    : `Jawabanmu: ${answers[currentQ.id] || 'Kosong'} (Kunci: ${currentQ.options.find((o) => o.isCorrect)?.id}) ❌`}
                </span>
              </div>

              <p className="text-sm font-bold text-slate-800">{currentQ.question}</p>

              {/* Review Buttons: CARA NORMAL, CARA CEPAT, DENGARKAN */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
                <button
                  onClick={() => setActiveReviewTab(activeReviewTab === 'normal' ? null : 'normal')}
                  className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold rounded-xl text-xs transition"
                >
                  CARA NORMAL
                </button>
                <button
                  onClick={() => setActiveReviewTab(activeReviewTab === 'cepat' ? null : 'cepat')}
                  className="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold rounded-xl text-xs transition"
                >
                  CARA CEPAT
                </button>
                <TTSPlayer
                  textToSpeak={currentQ.ttsScript}
                  label="Dengarkan Pembahasan"
                  compact={true}
                />
              </div>

              {/* Drawer for Normal */}
              {activeReviewTab === 'normal' && (
                <div className="bg-white p-4 rounded-xl border border-blue-200 text-xs space-y-2 animate-fade-in">
                  <p><strong>Diketahui:</strong> {currentQ.caraNormal.diketahui}</p>
                  <p><strong>Langkah:</strong> {currentQ.caraNormal.langkah.join(' -> ')}</p>
                  <p><strong>Kesimpulan:</strong> {currentQ.caraNormal.kesimpulan}</p>
                </div>
              )}

              {/* Drawer for Cepat */}
              {activeReviewTab === 'cepat' && (
                <div className="bg-white p-4 rounded-xl border border-amber-200 text-xs space-y-2 animate-fade-in">
                  <p><strong>Trik Mister Jo:</strong> {currentQ.caraCepat.trik}</p>
                  <p><strong>Eksekusi:</strong> {currentQ.caraCepat.eksekusi}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
