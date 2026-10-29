/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { VisualProofData } from '../types';
import { TTSPlayer } from './TTSPlayer';
import { soundEffects } from '../services/soundEffects';

interface VisualProofModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: VisualProofData;
  questionTitle?: string;
}

export const VisualProofModal: React.FC<VisualProofModalProps> = ({
  isOpen,
  onClose,
  data,
  questionTitle = 'Bukti Visual Matematika',
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    soundEffects.playPop();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-pink-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-400 to-rose-400 px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-white/20 rounded-xl">
              <Sparkles className="w-5 h-5 text-yellow-200" />
            </span>
            <h3 className="font-extrabold text-lg text-white font-['Fredoka',sans-serif]">
              {questionTitle}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition active:scale-95"
            title="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Visual Canvas Based on Proof Type */}
          {data.type === 'panah' && (
            <div className="bg-[#FFF5F8] border-2 border-pink-100 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-bold text-pink-600 mb-3 bg-pink-100 px-3 py-1 rounded-full">
                DIAGRAM PANAH RELASI
              </span>
              <svg viewBox="0 0 320 220" className="w-full max-w-xs h-48 select-none">
                {/* Domain Oval A */}
                <ellipse cx="60" cy="110" rx="45" ry="90" fill="#FCE7F3" stroke="#F472B6" strokeWidth="2.5" />
                <text x="60" y="32" fontSize="11" fontWeight="bold" fill="#BE185D" textAnchor="middle">
                  Himpunan A
                </text>

                {/* Kodomain Oval B */}
                <ellipse cx="260" cy="110" rx="45" ry="90" fill="#EDE9FE" stroke="#A855F7" strokeWidth="2.5" />
                <text x="260" y="32" fontSize="11" fontWeight="bold" fill="#6B21A8" textAnchor="middle">
                  Himpunan B
                </text>

                {/* Domain Nodes */}
                {(data.domain || ['A1', 'A2', 'A3']).map((item, idx, arr) => {
                  const step = 140 / Math.max(1, arr.length - 1 || 1);
                  const cy = arr.length === 1 ? 110 : 50 + idx * step;
                  return (
                    <g key={`d-${idx}`}>
                      <circle cx="65" cy={cy} r="4" fill="#DB2777" />
                      <text x="45" y={cy + 4} fontSize="11" fontWeight="bold" fill="#831843" textAnchor="middle">
                        {item}
                      </text>
                    </g>
                  );
                })}

                {/* Kodomain Nodes */}
                {(data.kodomain || ['B1', 'B2', 'B3']).map((item, idx, arr) => {
                  const step = 140 / Math.max(1, arr.length - 1 || 1);
                  const cy = arr.length === 1 ? 110 : 50 + idx * step;
                  return (
                    <g key={`k-${idx}`}>
                      <circle cx="255" cy={cy} r="4" fill="#9333EA" />
                      <text x="275" y={cy + 4} fontSize="11" fontWeight="bold" fill="#581C87" textAnchor="middle">
                        {item}
                      </text>
                    </g>
                  );
                })}

                {/* Arrows */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#EC4899" />
                  </marker>
                </defs>

                {(data.arrows || []).map((arrow, idx) => {
                  const domArr = data.domain || [];
                  const kodArr = data.kodomain || [];
                  const domIdx = domArr.indexOf(arrow.from);
                  const kodIdx = kodArr.indexOf(arrow.to);

                  const y1 = domArr.length === 1 ? 110 : 50 + domIdx * (140 / Math.max(1, domArr.length - 1 || 1));
                  const y2 = kodArr.length === 1 ? 110 : 50 + kodIdx * (140 / Math.max(1, kodArr.length - 1 || 1));

                  return (
                    <path
                      key={`arrow-${idx}`}
                      d={`M 70 ${y1} C 140 ${y1}, 180 ${y2}, 250 ${y2}`}
                      fill="none"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      markerEnd="url(#arrow)"
                      className="animate-pulse"
                    />
                  );
                })}
              </svg>
            </div>
          )}

          {data.type === 'mesin' && (
            <div className="bg-gradient-to-b from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-5 flex flex-col items-center">
              <span className="text-xs font-bold text-purple-700 mb-4 bg-purple-100 px-3 py-1 rounded-full">
                SIMULASI MESIN FUNGSI AJAIB
              </span>
              <div className="relative flex flex-col items-center w-full max-w-sm">
                {/* Input Pipe */}
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Input Masukan (x)
                  </span>
                  <div className="w-14 h-8 bg-blue-100 border-2 border-blue-400 rounded-lg flex items-center justify-center font-black text-blue-700 shadow-sm animate-bounce">
                    {data.machineInputs?.[0]?.x ?? 'x'}
                  </div>
                  <div className="w-1 h-4 bg-blue-400" />
                </div>

                {/* Machine Box */}
                <div className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 rounded-3xl p-5 text-white shadow-lg text-center relative overflow-hidden border-4 border-white">
                  <div className="absolute top-2 left-3 text-xs opacity-70 font-mono">MESIN FUNGSI v8.0</div>
                  <div className="absolute top-2 right-3 text-xs animate-spin-slow">⚙️</div>
                  <div className="py-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-pink-200">Rumus Aturan</p>
                    <p className="text-2xl font-black font-['Fredoka',sans-serif] tracking-wide mt-1">
                      {data.machineFormula || 'f(x) = ax + b'}
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 mt-2">
                    <span className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                    <span className="text-[11px] font-bold text-pink-100">Sedang Memproses...</span>
                  </div>
                </div>

                {/* Output Pipe */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-4 bg-pink-500" />
                  <div className="w-16 h-9 bg-pink-100 border-2 border-pink-500 rounded-lg flex items-center justify-center font-black text-pink-700 shadow-md">
                    {data.machineInputs?.[0]?.fx ?? 'f(x)'}
                  </div>
                  <span className="text-xs font-bold text-pink-600 uppercase tracking-wider mt-1">
                    Output Hasil f(x)
                  </span>
                </div>
              </div>
            </div>
          )}

          {data.type === 'tabel' && (
            <div className="bg-[#FFF5F8] border-2 border-pink-100 rounded-2xl p-4">
              <span className="text-xs font-bold text-pink-600 mb-3 block text-center bg-pink-100 py-1 rounded-full">
                TABEL PASANGAN NILAI INPUT & OUTPUT
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-pink-200 text-pink-900 font-bold text-xs uppercase">
                      <th className="p-2.5 border border-pink-300 rounded-tl-xl">x (Domain)</th>
                      <th className="p-2.5 border border-pink-300 rounded-tr-xl">y = f(x) (Range)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data.tableData || []).map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-pink-50'}>
                        <td className="p-2 border border-pink-200 font-bold text-slate-700">{row.x}</td>
                        <td className="p-2 border border-pink-200 font-extrabold text-pink-600">{row.y}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {data.type === 'koordinat' && (
            <div className="bg-[#FFF5F8] border-2 border-pink-100 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-bold text-purple-700 mb-2 bg-purple-100 px-3 py-1 rounded-full">
                BIDANG KOORDINAT KARTESIUS
              </span>
              <svg viewBox="0 0 240 180" className="w-full max-w-xs h-40">
                {/* Grid Lines */}
                <line x1="20" y1="90" x2="220" y2="90" stroke="#CBD5E1" strokeWidth="1.5" />
                <line x1="120" y1="10" x2="120" y2="170" stroke="#CBD5E1" strokeWidth="1.5" />
                <text x="215" y="105" fontSize="10" fill="#64748B" fontWeight="bold">X</text>
                <text x="125" y="20" fontSize="10" fill="#64748B" fontWeight="bold">Y</text>

                {/* Plot Points */}
                {(data.tableData || []).map((pt, idx) => {
                  const cx = 120 + pt.x * 15;
                  const cy = 90 - pt.y * 5;
                  return (
                    <g key={idx}>
                      <circle cx={cx} cy={cy} r="4.5" fill="#EC4899" stroke="#FFF" strokeWidth="1.5" />
                    </g>
                  );
                })}
              </svg>
            </div>
          )}

          {/* Teacher's Note Explanation */}
          <div className="bg-pink-50/70 border border-pink-200 rounded-2xl p-4 text-sm text-slate-700">
            <div className="flex items-center gap-1.5 font-bold text-pink-700 mb-1">
              <span>💡</span>
              <span>Catatan Mister Jo:</span>
            </div>
            <p className="leading-relaxed">{data.keterangan}</p>
          </div>

          {/* TTS Player for Voice Explanation */}
          <TTSPlayer
            textToSpeak={`Bukti visual. ${data.keterangan}`}
            label="Dengarkan Bukti Visual"
            compact={false}
          />
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={handleClose}
            className="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl text-sm transition shadow-sm active:scale-95"
          >
            Paham, Terima Kasih! ✨
          </button>
        </div>
      </div>
    </div>
  );
};
