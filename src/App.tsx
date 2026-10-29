/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { MateriView } from './components/MateriView';
import { LaboratoriumRelasi } from './components/LaboratoriumRelasi';
import { LaboratoriumFungsi } from './components/LaboratoriumFungsi';
import { LatihanSoal } from './components/LatihanSoal';
import { TantanganHots } from './components/TantanganHots';
import { ProgresBelajar } from './components/ProgresBelajar';
import { PengenalanMisterJo } from './components/PengenalanMisterJo';
import { EvaluasiAkhir } from './components/EvaluasiAkhir';
import { Heart, Sparkles } from 'lucide-react';

function AppContent() {
  const { activeTab, setActiveTab } = useProgress();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5F8] text-slate-800 font-['Nunito',sans-serif]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main View Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        {activeTab === 'beranda' && <Dashboard />}
        {activeTab === 'materi' && <MateriView />}
        {activeTab === 'lab-relasi' && <LaboratoriumRelasi />}
        {activeTab === 'lab-fungsi' && <LaboratoriumFungsi />}
        {activeTab === 'latihan' && <LatihanSoal />}
        {activeTab === 'hots' && <TantanganHots />}
        {activeTab === 'progres' && <ProgresBelajar />}
        {activeTab === 'mister-jo' && <PengenalanMisterJo />}
        {activeTab === 'evaluasi' && <EvaluasiAkhir />}
      </main>

      {/* Cute Footer */}
      <footer className="bg-white/80 border-t-2 border-pink-100 py-6 text-center text-xs text-slate-500 no-print">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-black text-pink-600 text-sm md:text-base font-['Fredoka',sans-serif]">
            “Belajar Bareng Mister Jo, Relasi Jadi Asyik, Fungsi Jadi Asyik, Matematika Bikin Gemas!”
          </p>
          <p className="text-slate-400">
            Learning Management System (LMS) Matematika SMP Kelas VIII • Relasi dan Fungsi
          </p>
          <div className="flex items-center justify-center gap-1 text-[11px] text-pink-400 pt-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 fill-current text-pink-500 inline-block" />
            <span>untuk pembelajaran matematika Indonesia yang ramah, seru, dan berkualitas tinggi.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
