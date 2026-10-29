/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Play, Calculator, Cpu } from 'lucide-react';
import { soundEffects } from '../services/soundEffects';
import { TTSPlayer } from './TTSPlayer';
import { Mascot } from './Mascot';
import { useProgress } from '../context/ProgressContext';

interface FunctionPreset {
  id: string;
  name: string;
  description: string;
  setA: string[];
  setB: string[];
  arrows: { from: string; to: string }[];
}

const FUNCTION_PRESETS: FunctionPreset[] = [
  {
    id: 'satu-satu',
    name: 'Fungsi Satu-Satu (Bijektif)',
    description: 'Setiap anggota A punya 1 kawan unik di B. Pasangan sempurna!',
    setA: ['1', '2', '3'],
    setB: ['a', 'b', 'c'],
    arrows: [
      { from: '1', to: 'a' },
      { from: '2', to: 'b' },
      { from: '3', to: 'c' },
    ],
  },
  {
    id: 'banyak-satu',
    name: 'Fungsi Banyak-ke-Satu',
    description: 'Boleh! Dua anggota domain memilih tujuan yang sama di kodomain.',
    setA: ['Andi', 'Citra', 'Doni'],
    setB: ['Merah', 'Biru', 'Hijau'],
    arrows: [
      { from: 'Andi', to: 'Biru' },
      { from: 'Citra', to: 'Merah' },
      { from: 'Doni', to: 'Biru' },
    ],
  },
  {
    id: 'bukan-jomblo',
    name: 'Bukan Fungsi (Ada yang Kosong)',
    description: 'Melanggar syarat 1: Anggota domain nomor 3 tidak punya pasangan!',
    setA: ['1', '2', '3'],
    setB: ['p', 'q', 'r'],
    arrows: [
      { from: '1', to: 'p' },
      { from: '2', to: 'q' },
    ],
  },
  {
    id: 'bukan-mendua',
    name: 'Bukan Fungsi (Ada yang Mendua)',
    description: 'Melanggar syarat 2: Anggota domain nomor 1 memanah ke dua tujuan sekaligus!',
    setA: ['1', '2', '3'],
    setB: ['x', 'y', 'z'],
    arrows: [
      { from: '1', to: 'x' },
      { from: '1', to: 'y' },
      { from: '2', to: 'y' },
      { from: '3', to: 'z' },
    ],
  },
];

export const LaboratoriumFungsi: React.FC = () => {
  const { incrementMission, unlockBadge } = useProgress();
  const [activePreset, setActivePreset] = useState<FunctionPreset>(FUNCTION_PRESETS[0]);
  const [arrows, setArrows] = useState<{ from: string; to: string }[]>(FUNCTION_PRESETS[0].arrows);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  // Machine simulator states
  const [machineA, setMachineA] = useState<number>(2);
  const [machineB, setMachineB] = useState<number>(3);
  const [inputX, setInputX] = useState<number>(4);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [machineResult, setMachineResult] = useState<number>(2 * 4 + 3);

  const handleSelectPreset = (p: FunctionPreset) => {
    soundEffects.playPop();
    setActivePreset(p);
    setArrows(p.arrows);
    setSelectedSource(null);
    incrementMission('m2', 1);
    unlockBadge('arrow-master');
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
    const exists = arrows.some((a) => a.from === selectedSource && a.to === target);
    if (exists) {
      setArrows(arrows.filter((a) => !(a.from === selectedSource && a.to === target)));
    } else {
      setArrows([...arrows, { from: selectedSource, to: target }]);
      incrementMission('m2', 1);
      unlockBadge('arrow-master');
    }
    setSelectedSource(null);
  };

  // Evaluation of function conditions
  const domainStatus: { item: string; arrowCount: number; valid: boolean; reason: string }[] = 
    activePreset.setA.map((item) => {
      const count = arrows.filter((a) => a.from === item).length;
      if (count === 0) {
        return { item, arrowCount: 0, valid: false, reason: 'Tidak punya pasangan (Jomblo)' };
      }
      if (count > 1) {
        return { item, arrowCount: count, valid: false, reason: `Memiliki ${count} pasangan (Mendua/Bercabang)` };
      }
      return { item, arrowCount: 1, valid: true, reason: 'Tepat 1 pasangan' };
    });

  const isStrictFunction = domainStatus.every((d) => d.valid);

  const handleRunMachine = () => {
    soundEffects.playPop();
    setIsProcessing(true);
    setTimeout(() => {
      const res = machineA * inputX + machineB;
      setMachineResult(res);
      setIsProcessing(false);
      soundEffects.playCorrect();
    }, 450);
  };

  const ttsScript = isStrictFunction
    ? `Luar biasa! Relasi ini adalah sebuah FUNGSI yang sah! Semua anggota himpunan asal memiliki tepat satu pasangan di himpunan kawan. Dua aturan emas fungsi terpenuhi dengan sempurna!`
    : `Perhatian! Relasi ini BUKAN sebuah fungsi. Alasannya: ${
        domainStatus.filter((d) => !d.valid).map((d) => `${d.item} ${d.reason}`).join(', ')
      }. Ingat, pada fungsi, anggota daerah asal tidak boleh kosong dan tidak boleh mendua!`;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>Detektor & Laboratorium Fungsi</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-['Fredoka',sans-serif]">
              Laboratorium Fungsi & Mesin Nilai
            </h1>
            <p className="text-pink-100 text-sm mt-1 max-w-xl">
              Uji aturan emas fungsi secara langsung! Deteksi apakah suatu diagram sah sebagai fungsi atau bukan, serta operasikan mesin hitung f(x) interaktif!
            </p>
          </div>
          <Mascot mood={isStrictFunction ? 'excited' : 'thinking'} size="md" character="mimi" />
        </div>
      </div>

      {/* Preset Selector */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-pink-100">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-3">
          Pilih Contoh Kasus Pemetaan:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {FUNCTION_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p)}
              className={`p-3 rounded-2xl text-left border-2 transition-all ${
                activePreset.id === p.id
                  ? 'border-purple-500 bg-purple-50 text-purple-900 shadow-sm'
                  : 'border-slate-100 hover:border-pink-200 bg-white text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-extrabold text-xs">{p.name}</span>
                {p.id.startsWith('bukan') ? (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-600">
                    Bukan
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700">
                    Fungsi
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">{p.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Section 1: Arrow Diagram Validator */}
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-purple-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
              Uji Diagram Panah & Status Fungsi Real-Time
            </h2>
            <p className="text-xs text-slate-500">
              Ubah panah sesukamu dengan mengklik anggota A lalu anggota B untuk melihat reaksi detektor otomatis!
            </p>
          </div>

          {/* Large Real-Time Badge */}
          <div
            className={`px-4 py-2 rounded-2xl flex items-center gap-2 font-black text-sm uppercase tracking-wider shadow-sm transition-all ${
              isStrictFunction
                ? 'bg-emerald-500 text-white animate-pulse-glow'
                : 'bg-rose-500 text-white animate-bounce-slow'
            }`}
          >
            {isStrictFunction ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                <span>SAH SEBAGAI FUNGSI ✅</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 text-yellow-200" />
                <span>BUKAN FUNGSI ❌</span>
              </>
            )}
          </div>
        </div>

        {/* Interactive Diagram Area */}
        <div className="bg-[#FAF5FF] border border-purple-100 rounded-2xl p-6 relative">
          <div className="grid grid-cols-2 gap-8 md:gap-24 relative z-10">
            {/* Set A (Domain) with status badges */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-200 px-3 py-1 rounded-full mb-3">
                Domain Asal (A) - KUNCI FUNGSI
              </span>
              <div className="w-full max-w-xs space-y-3">
                {activePreset.setA.map((item) => {
                  const stat = domainStatus.find((d) => d.item === item);
                  const isSelected = selectedSource === item;
                  return (
                    <div key={item} className="flex flex-col gap-1">
                      <button
                        onClick={() => handleSourceClick(item)}
                        className={`w-full py-2.5 px-3 rounded-2xl flex items-center justify-between font-bold text-sm transition-all shadow-sm ${
                          isSelected
                            ? 'bg-purple-600 text-white ring-4 ring-purple-300 scale-105'
                            : stat?.valid
                            ? 'bg-white hover:bg-purple-50 text-slate-800 border-2 border-emerald-300'
                            : 'bg-white hover:bg-rose-50 text-slate-800 border-2 border-rose-400 ring-2 ring-rose-200'
                        }`}
                      >
                        <span className="font-extrabold">{item}</span>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              stat?.arrowCount === 1
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-rose-100 text-rose-700'
                            }`}
                          >
                            {stat?.arrowCount} panah
                          </span>
                          <span className="w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-white" />
                        </div>
                      </button>
                      {/* Warning notice under invalid node */}
                      {!stat?.valid && (
                        <span className="text-[10px] font-bold text-rose-600 pl-2">
                          ⚠️ {stat?.reason}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Set B (Kodomain) */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-wider text-pink-900 bg-pink-200 px-3 py-1 rounded-full mb-3">
                Kodomain Kawan (B) - BEBAS
              </span>
              <div className="w-full max-w-xs space-y-3">
                {activePreset.setB.map((item) => {
                  const incomingCount = arrows.filter((a) => a.to === item).length;
                  return (
                    <button
                      key={item}
                      onClick={() => handleTargetClick(item)}
                      className={`w-full py-2.5 px-3 rounded-2xl flex items-center justify-between font-bold text-sm transition-all shadow-sm ${
                        selectedSource
                          ? 'bg-pink-50 hover:bg-pink-600 hover:text-white border-2 border-dashed border-pink-400 animate-pulse'
                          : 'bg-white text-slate-800 border border-pink-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-pink-500 border-2 border-white" />
                        <span>{item}</span>
                      </div>
                      {incomingCount > 0 && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">
                          {incomingCount} terarah
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Diagnosis & TTS Audio */}
        <div className="mt-4 bg-[#FFF5F8] border border-pink-200 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Analisis Detektif Mister Jo:
            </span>
            <p className="text-sm font-semibold text-slate-800">
              {isStrictFunction
                ? 'Semua anggota Domain setia dan bertanggung jawab! Memiliki tepat satu panah keluar.'
                : 'Syarat fungsi belum terpenuhi. Periksa anggota domain yang bertanda merah di atas.'}
            </p>
          </div>
          <TTSPlayer
            textToSpeak={ttsScript}
            label="Dengarkan Analisis Fungsi"
            compact={false}
          />
        </div>
      </div>

      {/* Section 2: Interactive Function Machine f(x) = ax + b */}
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-200">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-pink-100 text-pink-700">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-lg text-slate-800 font-['Fredoka',sans-serif]">
              Simulasi Mesin Fungsi f(x) = ax + b
            </h2>
            <p className="text-xs text-slate-500">
              Ketik nilai koefisien a, konstanta b, dan nilai masukan x untuk melihat proses mesin mengolah angka!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Controls Box */}
          <div className="bg-pink-50/70 border border-pink-200 rounded-2xl p-4 space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Koefisien a (Pengali x):
              </label>
              <input
                type="number"
                value={machineA}
                onChange={(e) => setMachineA(Number(e.target.value))}
                className="w-full bg-white border border-pink-300 rounded-xl px-3 py-1.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Konstanta b (Penambah):
              </label>
              <input
                type="number"
                value={machineB}
                onChange={(e) => setMachineB(Number(e.target.value))}
                className="w-full bg-white border border-pink-300 rounded-xl px-3 py-1.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Nilai Input Masukan x:
              </label>
              <input
                type="number"
                value={inputX}
                onChange={(e) => setInputX(Number(e.target.value))}
                className="w-full bg-white border border-pink-300 rounded-xl px-3 py-1.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              onClick={handleRunMachine}
              disabled={isProcessing}
              className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold rounded-xl text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-1.5"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isProcessing ? 'Mesin Sedang Menghitung...' : 'Proses Nilai Fungsi!'}</span>
            </button>
          </div>

          {/* Visual Machine Display */}
          <div className="md:col-span-2 flex flex-col items-center justify-center bg-[#FFF9FA] border-2 border-dashed border-pink-200 rounded-3xl p-6 relative">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                1. Angka Masuk
              </span>
              <div className="w-16 h-10 bg-blue-100 border-2 border-blue-400 text-blue-700 rounded-xl flex items-center justify-center font-black text-lg shadow-sm">
                x = {inputX}
              </div>
              <div className="w-1.5 h-4 bg-blue-300" />
            </div>

            {/* Central Processing Core */}
            <div className="w-full max-w-sm bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 rounded-3xl p-6 text-white text-center shadow-lg my-2 relative">
              <span className="text-xs font-mono opacity-80 uppercase tracking-widest block mb-1">
                KOTAK FUNGSI MATEMATIKA
              </span>
              <p className="text-2xl md:text-3xl font-black font-['Fredoka',sans-serif] tracking-wide">
                f(x) = {machineA}x {machineB >= 0 ? `+ ${machineB}` : `- ${Math.abs(machineB)}`}
              </p>
              <div className="mt-3 text-xs bg-black/20 rounded-xl p-2 font-mono">
                f({inputX}) = {machineA}({inputX}) {machineB >= 0 ? `+ ${machineB}` : `- ${Math.abs(machineB)}`} = {machineA * inputX} {machineB >= 0 ? `+ ${machineB}` : `- ${Math.abs(machineB)}`}
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-1.5 h-4 bg-pink-400" />
              <div className="w-20 h-12 bg-pink-500 border-4 border-white text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg animate-pulse-glow">
                {isProcessing ? '...' : machineResult}
              </div>
              <span className="text-xs font-bold text-pink-700 uppercase tracking-wider">
                2. Hasil Output f({inputX}) = {machineResult}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
