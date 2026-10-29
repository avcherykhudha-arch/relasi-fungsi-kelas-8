/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, RotateCcw, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundEffects } from '../services/soundEffects';
import { speechService } from '../services/speechService';
import { TTSPlayer } from './TTSPlayer';
import { Mascot } from './Mascot';
import { useProgress } from '../context/ProgressContext';

interface PresetRelasi {
  id: string;
  name: string;
  description: string;
  setA: string[];
  setB: string[];
  initialArrows: { from: string; to: string }[];
}

const PRESETS: PresetRelasi[] = [
  {
    id: 'makanan',
    name: 'Siswa & Makanan Favorit',
    description: 'Relasi santai di mana siswa boleh menyukai lebih dari satu makanan!',
    setA: ['Kiko', 'Mimi', 'Bubu'],
    setB: ['Bakso', 'Mie Ayam', 'Donat', 'Es Krim'],
    initialArrows: [
      { from: 'Kiko', to: 'Bakso' },
      { from: 'Kiko', to: 'Donat' },
      { from: 'Mimi', to: 'Mie Ayam' },
      { from: 'Bubu', to: 'Es Krim' },
    ],
  },
  {
    id: 'faktor',
    name: 'Faktor Dari',
    description: 'Relasi matematika: bilangan asal membagi habis bilangan tujuan.',
    setA: ['2', '3', '5'],
    setB: ['4', '6', '9', '10'],
    initialArrows: [
      { from: '2', to: '4' },
      { from: '2', to: '6' },
      { from: '2', to: '10' },
      { from: '3', to: '6' },
      { from: '3', to: '9' },
      { from: '5', to: '10' },
    ],
  },
  {
    id: 'setengah',
    name: 'Setengah Dari',
    description: 'Setiap nilai masukan adalah separuh dari nilai tujuan.',
    setA: ['1', '2', '3', '4'],
    setB: ['2', '4', '6', '8', '10'],
    initialArrows: [
      { from: '1', to: '2' },
      { from: '2', to: '4' },
      { from: '3', to: '6' },
      { from: '4', to: '8' },
    ],
  },
  {
    id: 'custom',
    name: 'Eksperimen Bebas (Custom)',
    description: 'Hubungkan sesukamu untuk melihat bagaimana pasangan berurutan dan range terbentuk!',
    setA: ['Apel', 'Jeruk', 'Mangga'],
    setB: ['Manis', 'Asam', 'Segar'],
    initialArrows: [{ from: 'Apel', to: 'Manis' }],
  },
];

export const LaboratoriumRelasi: React.FC = () => {
  const { incrementMission, unlockBadge } = useProgress();
  const [activePreset, setActivePreset] = useState<PresetRelasi>(PRESETS[0]);
  const [arrows, setArrows] = useState<{ from: string; to: string }[]>(PRESETS[0].initialArrows);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  const handleSelectPreset = (p: PresetRelasi) => {
    soundEffects.playPop();
    setActivePreset(p);
    setArrows(p.initialArrows);
    setSelectedSource(null);
    incrementMission('m2', 1);
    unlockBadge('lab-scientist');
  };

  const handleSourceClick = (item: string) => {
    soundEffects.playPop();
    if (selectedSource === item) {
      setSelectedSource(null);
    } else {
      setSelectedSource(item);
    }
  };

  const handleTargetClick = (target: string) => {
    if (!selectedSource) return;

    soundEffects.playConnect();
    // Toggle arrow
    const exists = arrows.some((a) => a.from === selectedSource && a.to === target);
    if (exists) {
      setArrows(arrows.filter((a) => !(a.from === selectedSource && a.to === target)));
    } else {
      setArrows([...arrows, { from: selectedSource, to: target }]);
      incrementMission('m2', 1);
      unlockBadge('lab-scientist');
    }
    setSelectedSource(null);
  };

  const handleReset = () => {
    soundEffects.playPop();
    setArrows([]);
    setSelectedSource(null);
  };

  // Dynamic calculations
  const domainElements = Array.from(new Set(arrows.map((a) => a.from)));
  const rangeElements = Array.from(new Set(arrows.map((a) => a.to)));
  const pairsFormatted = arrows.length > 0 
    ? `{ ${arrows.map((a) => `(${a.from}, ${a.to})`).join(', ')} }`
    : '∅ (Himpunan Kosong)';

  const ttsExplanation = `Di Laboratorium Relasi, kamu sedang mengamati relasi ${activePreset.name}. Himpunan asal A memiliki ${activePreset.setA.length} anggota, dan himpunan kawan B memiliki ${activePreset.setB.length} anggota. Saat ini terbentuk ${arrows.length} pasangan berurutan. Daerah hasilnya adalah ${rangeElements.join(', ') || 'belum ada'}. Relasi ini sah secara matematika karena menghubungkan dua himpunan.`;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-400 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>Simulasi Interaktif Mandiri</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-['Fredoka',sans-serif]">
              Laboratorium Relasi Interaktif
            </h1>
            <p className="text-pink-100 text-sm mt-1 max-w-xl">
              Klik anggota di himpunan asal (A), lalu klik anggota di himpunan kawan (B) untuk menarik atau menghapus panah relasi secara animatif!
            </p>
          </div>
          <Mascot mood="happy" size="md" character="kiko" />
        </div>
      </div>

      {/* Preset Selector */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-pink-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
            Pilih Skenario Percobaan:
          </span>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-pink-600 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Hapus Semua Panah</span>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p)}
              className={`p-2.5 rounded-xl text-left border-2 text-xs font-bold transition-all ${
                activePreset.id === p.id
                  ? 'border-pink-500 bg-pink-50 text-pink-900 shadow-sm'
                  : 'border-slate-100 hover:border-pink-200 bg-white text-slate-600'
              }`}
            >
              <p className="font-extrabold truncate">{p.name}</p>
              <p className="text-[10px] font-normal text-slate-400 truncate mt-0.5">{p.setA.length} ke {p.setB.length} anggota</p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Diagram Canvas */}
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-100 relative">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
              Diagram Panah Interaktif
            </h2>
            <p className="text-xs text-slate-500">{activePreset.description}</p>
          </div>
          <div className="text-xs font-bold px-3 py-1 bg-pink-100 text-pink-700 rounded-full">
            {selectedSource ? (
              <span className="animate-pulse">👉 Sekarang pilih sasaran di Himpunan B!</span>
            ) : (
              <span>💡 Klik anggota A untuk mulai menghubungkan</span>
            )}
          </div>
        </div>

        {/* Interactive SVG Stage */}
        <div className="relative w-full overflow-hidden bg-[#FFF9FA] rounded-2xl border border-pink-100 p-4">
          <div className="grid grid-cols-2 gap-8 md:gap-24 relative z-10 py-6">
            {/* Set A (Domain) */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-pink-100/70 border-2 border-pink-300 rounded-3xl p-4 flex flex-col items-center space-y-3 shadow-inner">
                <span className="font-extrabold text-xs uppercase tracking-wider text-pink-800 bg-white px-3 py-1 rounded-full shadow-sm">
                  Himpunan A (Asal)
                </span>
                <div className="w-full space-y-2.5">
                  {activePreset.setA.map((item) => {
                    const isSelected = selectedSource === item;
                    const connectedCount = arrows.filter((a) => a.from === item).length;
                    return (
                      <button
                        key={item}
                        onClick={() => handleSourceClick(item)}
                        className={`w-full py-2.5 px-3 rounded-2xl flex items-center justify-between font-bold text-sm transition-all shadow-sm ${
                          isSelected
                            ? 'bg-pink-600 text-white ring-4 ring-pink-300 scale-105'
                            : 'bg-white hover:bg-pink-50 text-slate-800 border border-pink-200'
                        }`}
                      >
                        <span className="truncate">{item}</span>
                        <div className="flex items-center gap-1">
                          {connectedCount > 0 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-pink-200 text-pink-800 font-extrabold">
                              {connectedCount} panah
                            </span>
                          )}
                          <span className="w-3.5 h-3.5 rounded-full bg-pink-500 border-2 border-white shadow-sm inline-block" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Set B (Kodomain) */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-purple-100/70 border-2 border-purple-300 rounded-3xl p-4 flex flex-col items-center space-y-3 shadow-inner">
                <span className="font-extrabold text-xs uppercase tracking-wider text-purple-800 bg-white px-3 py-1 rounded-full shadow-sm">
                  Himpunan B (Kawan)
                </span>
                <div className="w-full space-y-2.5">
                  {activePreset.setB.map((item) => {
                    const incomingCount = arrows.filter((a) => a.to === item).length;
                    const isTargetCandidate = selectedSource !== null;
                    return (
                      <button
                        key={item}
                        onClick={() => handleTargetClick(item)}
                        className={`w-full py-2.5 px-3 rounded-2xl flex items-center justify-between font-bold text-sm transition-all shadow-sm ${
                          isTargetCandidate
                            ? 'bg-purple-50 hover:bg-purple-600 hover:text-white border-2 border-dashed border-purple-400 animate-pulse'
                            : 'bg-white text-slate-800 border border-purple-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-white shadow-sm inline-block" />
                          <span className="truncate">{item}</span>
                        </div>
                        {incomingCount > 0 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-200 text-purple-800 font-extrabold">
                            {incomingCount} dapat
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* List of active arrows with remove buttons */}
          <div className="mt-4 pt-3 border-t border-pink-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Panah Terhubung ({arrows.length}):</span>
            {arrows.length === 0 ? (
              <span className="text-xs italic text-slate-400">Belum ada panah terhubung.</span>
            ) : (
              arrows.map((a, i) => (
                <span
                  key={i}
                  onClick={() => {
                    soundEffects.playPop();
                    setArrows(arrows.filter((_, idx) => idx !== i));
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-pink-100 hover:bg-rose-200 text-pink-800 rounded-full text-xs font-bold cursor-pointer transition shadow-sm"
                  title="Klik untuk menghapus panah ini"
                >
                  <span>{a.from}</span>
                  <ArrowRight className="w-3 h-3 text-pink-500" />
                  <span>{a.to}</span>
                  <span className="text-pink-400 hover:text-pink-700 font-black ml-1">×</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Dynamic Analysis Panel */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Domain Box */}
          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-pink-700 mb-1">
              <CheckCircle2 className="w-4 h-4 text-pink-500" />
              <span>Domain (Daerah Asal)</span>
            </div>
            <p className="text-sm font-extrabold text-slate-800 font-mono">
              {domainElements.length > 0 ? `{ ${domainElements.join(', ')} }` : '{ }'}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">Anggota himpunan A yang memiliki pasangan.</p>
          </div>

          {/* Kodomain Box */}
          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-purple-700 mb-1">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>Kodomain (Daerah Kawan)</span>
            </div>
            <p className="text-sm font-extrabold text-slate-800 font-mono">
              {`{ ${activePreset.setB.join(', ')} }`}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">Seluruh anggota himpunan tujuan B.</p>
          </div>

          {/* Range Box */}
          <div className="bg-rose-50 rounded-2xl p-4 border border-rose-200">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-rose-700 mb-1">
              <CheckCircle2 className="w-4 h-4 text-rose-500" />
              <span>Range (Daerah Hasil)</span>
            </div>
            <p className="text-sm font-extrabold text-rose-700 font-mono">
              {rangeElements.length > 0 ? `{ ${rangeElements.join(', ')} }` : '∅'}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">Anggota B yang benar-benar terkena anak panah.</p>
          </div>
        </div>

        {/* Himpunan Pasangan Berurutan Output */}
        <div className="mt-4 bg-[#FFF0F5] border-2 border-pink-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-700 block mb-1">
              Himpunan Pasangan Berurutan yang Terbentuk:
            </span>
            <p className="font-mono text-sm md:text-base font-black text-slate-800 break-all">
              {pairsFormatted}
            </p>
          </div>
          <TTSPlayer
            textToSpeak={ttsExplanation}
            label="Dengarkan Analisis Relasi"
            compact={false}
          />
        </div>
      </div>
    </div>
  );
};
