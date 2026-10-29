/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  HeartHandshake,
  Calculator,
  Award,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { LESSON_UNITS } from '../data/lessonsData';
import { LessonUnit, LessonSection } from '../types';
import { useProgress } from '../context/ProgressContext';
import { soundEffects } from '../services/soundEffects';
import { TTSPlayer } from './TTSPlayer';
import { Mascot } from './Mascot';

export const MateriView: React.FC = () => {
  const { progress, completeLesson } = useProgress();
  const [selectedUnit, setSelectedUnit] = useState<LessonUnit>(LESSON_UNITS[0]);
  const [selectedSection, setSelectedSection] = useState<LessonSection>(LESSON_UNITS[0].sections[0]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({});

  const isUnitCompleted = progress.completedLessons.includes(selectedUnit.id);

  const handleSelectUnit = (unit: LessonUnit) => {
    soundEffects.playPop();
    setSelectedUnit(unit);
    setSelectedSection(unit.sections[0]);
  };

  const handleSelectSection = (sec: LessonSection) => {
    soundEffects.playPop();
    setSelectedSection(sec);
  };

  const handleAnswerCheck = (secId: string, optIdx: number, isCorrect: boolean) => {
    soundEffects.playPop();
    setQuizAnswers((prev) => ({ ...prev, [secId]: optIdx }));
    if (isCorrect) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playTryAgain();
    }
  };

  const handleMarkUnitComplete = () => {
    soundEffects.playLevelUp();
    completeLesson(selectedUnit.id);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>Kurikulum Matematika SMP Kelas VIII</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-['Fredoka',sans-serif]">
              Materi Belajar Interaktif
            </h1>
            <p className="text-pink-100 text-sm mt-1 max-w-xl">
              Disusun bertahap dari pemahaman dasar hingga penalaran HOTS dengan bahasa santai, ilustrasi manis, dan bebas dari kebingungan!
            </p>
          </div>
          <Mascot mood="happy" size="md" character="kiko" />
        </div>
      </div>

      {/* 4 Units Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {LESSON_UNITS.map((unit) => {
          const isCurrent = selectedUnit.id === unit.id;
          const isDone = progress.completedLessons.includes(unit.id);
          return (
            <button
              key={unit.id}
              onClick={() => handleSelectUnit(unit)}
              className={`p-4 rounded-3xl text-left border-2 transition-all relative overflow-hidden shadow-sm ${
                isCurrent
                  ? 'border-pink-500 bg-white ring-4 ring-pink-100 scale-[1.02]'
                  : 'border-slate-100 bg-white/70 hover:bg-white text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-black text-xs">
                  {unit.number}
                </span>
                {isDone && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Selesai
                  </span>
                )}
              </div>
              <h3 className="font-extrabold text-sm text-slate-800 line-clamp-1">{unit.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{unit.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Lesson Viewer Layout: Sidebar sub-topics + Main content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Sub-Topics Sidebar */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-pink-100 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-600 block px-2 mb-2">
            Sub-Materi Unit {selectedUnit.number}:
          </span>
          {selectedUnit.sections.map((sec, idx) => {
            const isAct = selectedSection.id === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleSelectSection(sec)}
                className={`w-full p-3 rounded-2xl text-left text-xs font-bold transition-all flex items-center justify-between ${
                  isAct
                    ? 'bg-pink-500 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-pink-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="truncate">{sec.title}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            );
          })}

          {/* Mark Complete Unit CTA */}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={handleMarkUnitComplete}
              disabled={isUnitCompleted}
              className={`w-full py-2.5 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition ${
                isUnitCompleted
                  ? 'bg-emerald-100 text-emerald-800 cursor-default'
                  : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md hover:shadow-lg'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isUnitCompleted ? 'Modul Telah Selesai ✅' : 'Tandai Selesai (+40 XP)'}</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-pink-100 space-y-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-pink-100">
            <div>
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full inline-block mb-1">
                {selectedSection.badge || 'Konsep Kunci'}
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-800 font-['Fredoka',sans-serif]">
                {selectedSection.title}
              </h2>
            </div>
            {/* Audio Voice Player for this section */}
            <TTSPlayer
              textToSpeak={selectedSection.audioScript}
              label="Dengarkan Penjelasan Suara"
              compact={true}
            />
          </div>

          {/* Friendly Intro */}
          <div className="bg-pink-50/70 border-l-4 border-pink-400 p-4 rounded-r-2xl text-slate-700 italic text-sm">
            "{selectedSection.intro}"
          </div>

          {/* Explanation Paragraphs */}
          <div className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
            {selectedSection.content.map((p, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>

          {/* Real World Concrete Example Box */}
          {selectedSection.realWorldExample && (
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-3xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm md:text-base">
                <span className="p-1.5 bg-rose-200 rounded-xl">🍎</span>
                <span>{selectedSection.realWorldExample.title}</span>
              </div>
              <p className="text-xs md:text-sm text-slate-700">
                {selectedSection.realWorldExample.description}
              </p>

              {/* Set Elements Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white rounded-2xl p-3 border border-rose-200">
                  <span className="text-[11px] font-bold text-rose-600 uppercase block mb-1">
                    Himpunan Asal A:
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-800">
                    {`{ ${selectedSection.realWorldExample.setA.join(', ')} }`}
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-3 border border-rose-200">
                  <span className="text-[11px] font-bold text-purple-600 uppercase block mb-1">
                    Himpunan Tujuan B:
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-800">
                    {`{ ${selectedSection.realWorldExample.setB.join(', ')} }`}
                  </span>
                </div>
              </div>

              {/* Pairs list */}
              <div className="bg-white/80 rounded-2xl p-3 border border-rose-200">
                <span className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
                  Pasangan Berurutan:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedSection.realWorldExample.pairs.map((pair, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-bold"
                    >
                      ({pair[0]} ➜ {pair[1]})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Common Misconceptions Alert */}
          {selectedSection.misconceptions && selectedSection.misconceptions.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-black text-sm text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Hati-Hati! Kesalahan Umum yang Sering Terjadi:</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {selectedSection.misconceptions.map((misc, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 text-xs md:text-sm space-y-1.5"
                  >
                    <p className="text-rose-700">
                      <strong>❌ Salah Paham:</strong> {misc.wrong}
                    </p>
                    <p className="text-emerald-700">
                      <strong>✅ Konsep Benar:</strong> {misc.right}
                    </p>
                    <p className="text-slate-600 text-xs italic pt-1 border-t border-amber-200/60">
                      💡 Mengapa? {misc.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Mini Check Quiz */}
          {selectedSection.interactiveCheck && (
            <div className="bg-purple-50/70 border-2 border-purple-200 rounded-3xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-purple-900 font-extrabold text-sm">
                <Lightbulb className="w-4 h-4 text-purple-600" />
                <span>Uji Pemahaman Cepat (Kuis Mini):</span>
              </div>
              <p className="text-sm font-bold text-slate-800">
                {selectedSection.interactiveCheck.question}
              </p>
              <div className="space-y-2">
                {selectedSection.interactiveCheck.options.map((opt, oIdx) => {
                  const answered = quizAnswers[selectedSection.id];
                  const isSelected = answered === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswerCheck(selectedSection.id, oIdx, opt.correct)}
                      className={`w-full p-3 rounded-2xl border text-left text-xs md:text-sm transition-all ${
                        isSelected
                          ? opt.correct
                            ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold'
                            : 'bg-rose-100 border-rose-400 text-rose-900 font-bold'
                          : 'bg-white hover:bg-purple-50 border-purple-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt.text}</span>
                        {isSelected && (opt.correct ? '✅' : '❌')}
                      </div>
                      {isSelected && (
                        <p className="text-xs mt-1 text-slate-600 font-normal">
                          {opt.explanation}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Takeaway Box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs md:text-sm text-emerald-900 flex items-start gap-2.5">
            <span className="text-base">🌟</span>
            <div>
              <span className="font-extrabold block">Pesan Emas Mister Jo:</span>
              <p>{selectedSection.keyTakeaway}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
