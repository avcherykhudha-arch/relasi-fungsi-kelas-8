/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  FlaskConical,
  Calculator,
  Target,
  Award,
  User,
  Star,
  Zap,
  Volume2,
  VolumeX,
  Menu,
  X,
  Home,
  CheckCircle,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { NavigationTab } from '../types';
import { soundEffects } from '../services/soundEffects';

interface NavItem {
  id: NavigationTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'beranda', label: 'Beranda', icon: Home },
  { id: 'materi', label: 'Materi Belajar', icon: BookOpen },
  { id: 'lab-relasi', label: 'Lab Relasi', icon: FlaskConical },
  { id: 'lab-fungsi', label: 'Lab Fungsi', icon: Calculator },
  { id: 'latihan', label: 'Latihan Soal', icon: Target },
  { id: 'hots', label: 'Tantangan HOTS', icon: Sparkles },
  { id: 'progres', label: 'Progres Belajarku', icon: CheckCircle },
  { id: 'mister-jo', label: 'Mister Jo', icon: User },
  { id: 'evaluasi', label: 'Evaluasi Akhir', icon: Award },
];

export const Navbar: React.FC = () => {
  const { progress, activeTab, setActiveTab } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundEffects.isMuted);

  const handleSelectTab = (tab: NavigationTab) => {
    soundEffects.playPop();
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleToggleMute = () => {
    soundEffects.isMuted = !soundEffects.isMuted;
    setIsMuted(soundEffects.isMuted);
    if (!soundEffects.isMuted) {
      soundEffects.playPop();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-2 border-pink-100 shadow-sm transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          {/* Logo & Instructor Brand */}
          <div
            onClick={() => handleSelectTab('beranda')}
            className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-400 to-purple-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-xl">
                🐱
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base md:text-lg text-slate-800 font-['Fredoka',sans-serif] tracking-tight">
                  Mister Jo
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 tracking-wider">
                  LMS SMP
                </span>
              </div>
              <p className="text-[10px] md:text-xs text-pink-600 font-bold truncate max-w-[170px] sm:max-w-xs">
                Relasi & Fungsi • Belajar Jadi Gemes!
              </p>
            </div>
          </div>

          {/* Desktop Nav Pills */}
          <nav className="hidden xl:flex items-center gap-1 bg-pink-50/70 p-1.5 rounded-2xl border border-pink-200">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-pink-600 text-white shadow-sm scale-105'
                      : 'text-slate-600 hover:text-pink-600 hover:bg-white/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick User Stats & Audio Controls */}
          <div className="flex items-center gap-2">
            {/* Stars & XP pill */}
            <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 px-3 py-1.5 rounded-2xl text-xs font-black">
              <span className="flex items-center gap-1 text-yellow-600">
                <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                {progress.stars}
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1 text-pink-600">
                <Zap className="w-3.5 h-3.5 fill-current text-pink-500" />
                {progress.xp} XP
              </span>
            </div>

            {/* Sound toggle button */}
            <button
              onClick={handleToggleMute}
              className={`p-2 rounded-xl border transition ${
                isMuted
                  ? 'bg-slate-100 text-slate-400 border-slate-200'
                  : 'bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200'
              }`}
              title={isMuted ? 'Suara Senyap (Klik untuk menyalakan)' : 'Suara Aktif (Klik untuk senyap)'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-pink-100 text-pink-700 border border-pink-200 hover:bg-pink-200 transition"
              title="Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Secondary Horizontal Scrollable Menu for Tablets & Laptops */}
        <div className="hidden lg:flex xl:hidden overflow-x-auto py-2 border-t border-pink-100 gap-1.5 scrollbar-none">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-pink-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-md border-b-2 border-pink-200 p-4 shadow-xl space-y-1.5 animate-fade-in">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-pink-100 px-2">
            <span className="text-xs font-extrabold text-slate-500 uppercase">
              Menu Navigasi Pembelajaran
            </span>
            <span className="text-xs font-bold text-pink-600">
              {progress.studentName} ({progress.level})
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold text-left transition ${
                    isActive
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:bg-pink-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
