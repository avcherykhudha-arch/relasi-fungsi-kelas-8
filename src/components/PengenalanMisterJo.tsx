/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Heart, Award, BookOpen, Volume2, HelpCircle } from 'lucide-react';
import { Mascot } from './Mascot';
import { TTSPlayer } from './TTSPlayer';
import { soundEffects } from '../services/soundEffects';

interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  example: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Relasi',
    category: 'Dasar',
    definition: 'Aturan yang menghubungkan anggota himpunan asal dengan anggota himpunan kawan tanpa batasan jumlah panah.',
    example: 'Himpunan siswa dihubungkan dengan ekskul kesukaan: (Andi, Pramuka), (Andi, Futsal).'
  },
  {
    term: 'Fungsi (Pemetaan)',
    category: 'Fungsi',
    definition: 'Relasi khusus di mana setiap anggota himpunan asal dipasangkan dengan tepat satu anggota himpunan kawan.',
    example: 'Setiap siswa memiliki tepat satu nomor induk siswa (NISN).'
  },
  {
    term: 'Domain',
    category: 'Wilayah',
    definition: 'Daerah asal, yaitu seluruh anggota himpunan pertama tempat anak panah berawal.',
    example: 'Jika A = {1, 2, 3} dan B = {a, b}, maka Domain adalah {1, 2, 3}.'
  },
  {
    term: 'Kodomain',
    category: 'Wilayah',
    definition: 'Daerah kawan, yaitu seluruh anggota himpunan kedua tempat anak panah bermuara.',
    example: 'Pada relasi A ke B di atas, Kodomain adalah {a, b}.'
  },
  {
    term: 'Range (Daerah Hasil)',
    category: 'Wilayah',
    definition: 'Himpunan bagian dari kodomain yang benar-benar memiliki pasangan (terkena anak panah).',
    example: 'Jika hanya a yang dipanah dari himpunan {a, b, c}, maka Range adalah {a}.'
  },
  {
    term: 'Korespondensi Satu-Satu',
    category: 'Fungsi Khusus',
    definition: 'Fungsi khusus di mana setiap anggota domain dipasangkan tepat satu ke kodomain, dan sebaliknya (bijektif). Syarat mutlak: n(A) = n(B).',
    example: 'Negara di dunia dengan lagu kebangsaan resminya.'
  },
  {
    term: 'Banyak Pemetaan',
    category: 'Rumus Kilat',
    definition: 'Jumlah semua cara pemetaan yang mungkin dari himpunan A ke himpunan B, dirumuskan dengan n(B)^n(A).',
    example: 'Jika n(A) = 3 dan n(B) = 2, banyak pemetaan = 2³ = 8 cara.'
  },
  {
    term: 'Uji Garis Vertikal (VLT)',
    category: 'Grafik',
    definition: 'Metode cepat menguji grafik: jika sembarang garis tegak memotong kurva maksimal di satu titik, maka kurva adalah fungsi.',
    example: 'Garis lurus miring lulus uji vertikal, sedangkan lingkaran memotong di 2 titik sehingga bukan fungsi.'
  }
];

export const PengenalanMisterJo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredGlossary = GLOSSARY_TERMS.filter(
    (g) =>
      g.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fullAudioIntro = `Halo, Sobat Imut! Yuk, belajar matematika bareng Mister Jo. Kita bikin matematika jadi mudah, seru, dan menggemaskan! Jargon utama kita: Relasi dan Fungsi, Belajar Jadi Gemes, Matematika Jadi Gampang! Matematika itu bukan musuh yang menakutkan, melainkan permainan logika warna-warni yang indah. Belajar bareng Mister Jo, Relasi Jadi Asyik, Fungsi Jadi Asyik, Matematika Bikin Gemas!`;

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Teacher Profile Card */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <Mascot mood="excited" size="lg" character="misterjo" />
          <div className="space-y-2 text-center md:text-left flex-1">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-pink-100 inline-block">
              Guru & Sahabat Belajar Matematika SMP
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-['Fredoka',sans-serif]">
              Halo, Sobat Imut! Bersama Mister Jo!
            </h1>
            <p className="text-pink-100 text-sm md:text-base leading-relaxed italic">
              “Halo, Sobat Imut! Yuk, belajar matematika bareng Mister Jo. Kita bikin matematika jadi mudah, seru, dan menggemaskan!”
            </p>
            {/* Jargon Badge */}
            <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-2xl p-3 inline-block mt-2">
              <p className="text-xs font-semibold text-yellow-200 uppercase tracking-wider">
                JARGON UTAMA:
              </p>
              <p className="font-black text-sm md:text-base text-white font-['Fredoka',sans-serif]">
                “Relasi dan Fungsi, Belajar Jadi Gemes, Matematika Jadi Gampang!”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Message from Mister Jo */}
      <TTSPlayer
        textToSpeak={fullAudioIntro}
        label="Dengarkan Sapaan Hangat Mister Jo"
        compact={false}
      />

      {/* Philosophy and 5 Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Filosofi Belajar */}
        <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-100 space-y-4">
          <div className="flex items-center gap-2 text-pink-700 font-extrabold text-lg font-['Fredoka',sans-serif]">
            <Heart className="w-5 h-5 text-pink-500 fill-current" />
            <span>Filosofi Mengajar Mister Jo</span>
          </div>
          <div className="text-sm text-slate-700 space-y-2.5 leading-relaxed">
            <p>
              Mister Jo percaya bahwa setiap siswa kelas VIII SMP memiliki potensi matematika yang luar biasa jika materi disajikan secara ramah, visual, dan menyenangkan.
            </p>
            <p>
              Dalam topik Relasi dan Fungsi, siswa sering terjebak menghafal rumus tanpa memahami maknanya. Mister Jo merombak cara belajar ini dengan menghadirkan:
            </p>
            <ul className="space-y-1.5 pl-4 text-xs font-semibold text-pink-900 list-disc">
              <li>Analogi dunia nyata yang akrab (makanan kesukaan, ukuran sepatu, nomor absen).</li>
              <li>Dua metode penyelesaian: <strong>Cara Normal</strong> untuk fondasi kuat & <strong>Cara Cepat</strong> untuk efisiensi berpikir.</li>
              <li>Laboratorium visual interaktif yang memberi umpan balik langsung seketika.</li>
            </ul>
          </div>
        </div>

        {/* 5 Tips Jitu Belajar Matematika SMP */}
        <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-purple-100 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-extrabold text-lg font-['Fredoka',sans-serif]">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span>5 Tips Jitu Ala Mister Jo</span>
          </div>
          <div className="space-y-2.5 text-xs text-slate-700">
            <div className="flex items-start gap-2.5 bg-pink-50 p-2.5 rounded-xl border border-pink-100">
              <span className="w-5 h-5 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center shrink-0">1</span>
              <p><strong>Fokus Pada Domain:</strong> Saat menguji fungsi, periksa hanya daerah asal di sebelah kiri!</p>
            </div>
            <div className="flex items-start gap-2.5 bg-purple-50 p-2.5 rounded-xl border border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center shrink-0">2</span>
              <p><strong>Gunakan Kurung pada Negatif:</strong> Selalu tulis <code>f(-2) = 3 - 2(-2)</code> agar tanda minus tidak keliru.</p>
            </div>
            <div className="flex items-start gap-2.5 bg-rose-50 p-2.5 rounded-xl border border-rose-100">
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center shrink-0">3</span>
              <p><strong>Ingat "Belakang Pangkat Depan":</strong> Banyak pemetaan A ke B adalah <code>n(B)^n(A)</code>.</p>
            </div>
            <div className="flex items-start gap-2.5 bg-amber-50 p-2.5 rounded-xl border border-amber-100">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center shrink-0">4</span>
              <p><strong>Visualisasikan Garis:</strong> Gambar sketsa diagram panah jika soal cerita terasa membingungkan.</p>
            </div>
            <div className="flex items-start gap-2.5 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0">5</span>
              <p><strong>Jangan Takut Salah:</strong> Setiap kesalahan adalah petunjuk terbaik menuju pemahaman yang benar!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Glossary (Glosarium Relasi & Fungsi) */}
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-100 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-800 font-extrabold text-lg font-['Fredoka',sans-serif]">
            <BookOpen className="w-5 h-5 text-pink-500" />
            <span>Kamus Istilah Matematika (Glosarium Imut)</span>
          </div>
          <input
            type="text"
            placeholder="Cari istilah matematika..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 px-3 py-1.5 bg-slate-50 border border-pink-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {filteredGlossary.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFF9FA] border border-pink-100 rounded-2xl p-4 space-y-1.5 hover:border-pink-300 transition shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-black text-sm text-pink-700 font-['Fredoka',sans-serif]">{item.term}</h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-800">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{item.definition}</p>
              <p className="text-[11px] text-slate-500 italic pt-1 border-t border-pink-100">
                💡 Contoh: {item.example}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Jargon Penutup Banner */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl p-6 text-white text-center shadow-lg space-y-2">
        <p className="text-xs uppercase tracking-widest text-pink-100 font-bold">
          MOTTO KELULUSAN
        </p>
        <p className="text-lg md:text-xl font-black font-['Fredoka',sans-serif]">
          “Belajar Bareng Mister Jo, Relasi Jadi Asyik, Fungsi Jadi Asyik, Matematika Bikin Gemas!”
        </p>
      </div>
    </div>
  );
};
