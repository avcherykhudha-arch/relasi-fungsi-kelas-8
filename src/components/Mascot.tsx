/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MascotMood } from '../types';

interface MascotProps {
  mood?: MascotMood;
  speechText?: string;
  size?: 'sm' | 'md' | 'lg';
  character?: 'kiko' | 'mimi' | 'misterjo';
  onMascotClick?: () => void;
  className?: string;
}

export const Mascot: React.FC<MascotProps> = ({
  mood = 'happy',
  speechText,
  size = 'md',
  character = 'kiko',
  onMascotClick,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 md:w-28 md:h-28',
    lg: 'w-32 h-32 md:w-40 md:h-40',
  }[size];

  return (
    <div className={`relative flex items-center gap-3 select-none ${className}`}>
      {/* Speech Bubble */}
      {speechText && (
        <div className="relative bg-white/95 backdrop-blur-sm border-2 border-pink-200 text-slate-800 px-4 py-2.5 rounded-2xl shadow-md text-sm md:text-base font-semibold max-w-xs md:max-w-md animate-fade-in">
          <p className="leading-snug">{speechText}</p>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-6 w-3 h-3 bg-white border-r-2 border-b-2 border-pink-200 rotate-45" />
        </div>
      )}

      {/* Mascot Graphic */}
      <div
        onClick={onMascotClick}
        className={`${sizeClasses} relative cursor-pointer transform hover:scale-105 transition-transform duration-300 drop-shadow-md animate-bounce-slow`}
        title="Klik maskot untuk menyapa!"
      >
        {character === 'kiko' && (
          /* Kiko the Cute Pink Math Cat */
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Tail */}
            <path
              d="M75 75 Q90 60 85 45 Q80 40 75 48"
              fill="none"
              stroke="#F472B6"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Body */}
            <ellipse cx="50" cy="65" rx="30" ry="24" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />
            <ellipse cx="50" cy="68" rx="18" ry="14" fill="#FFF" />
            {/* Ears */}
            <polygon points="26,38 32,15 48,32" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
            <polygon points="30,34 34,20 44,30" fill="#FDE2E4" />
            <polygon points="74,38 68,15 52,32" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
            <polygon points="70,34 66,20 56,30" fill="#FDE2E4" />
            {/* Head */}
            <ellipse cx="50" cy="42" rx="27" ry="23" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />
            {/* Cheeks */}
            <ellipse cx="32" cy="48" rx="5" ry="3" fill="#F43F5E" opacity="0.35" />
            <ellipse cx="68" cy="48" rx="5" ry="3" fill="#F43F5E" opacity="0.35" />
            {/* Eyes */}
            {mood === 'thinking' ? (
              <>
                <path d="M34 40 Q39 37 44 40" stroke="#831843" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <circle cx="61" cy="40" r="3.5" fill="#831843" />
              </>
            ) : mood === 'cheering' || mood === 'excited' ? (
              <>
                <path d="M33 42 Q39 35 45 42" stroke="#831843" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M55 42 Q61 35 67 42" stroke="#831843" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="39" cy="40" r="3.5" fill="#831843" />
                <circle cx="40.5" cy="38.5" r="1.2" fill="#FFF" />
                <circle cx="61" cy="40" r="3.5" fill="#831843" />
                <circle cx="62.5" cy="38.5" r="1.2" fill="#FFF" />
              </>
            )}
            {/* Nose & Mouth */}
            <polygon points="50,45 47,43 53,43" fill="#EC4899" />
            <path
              d="M45 46 Q50 50 55 46"
              fill="none"
              stroke="#831843"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Whiskers */}
            <line x1="20" y1="43" x2="30" y2="44" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="47" x2="30" y2="47" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="80" y1="43" x2="70" y2="44" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="80" y1="47" x2="70" y2="47" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" />
            {/* Cute Math symbol on belly: f(x) */}
            <text x="50" y="72" fontSize="9" fontWeight="bold" fill="#DB2777" textAnchor="middle" fontFamily="Fredoka, sans-serif">
              f(x)
            </text>
          </svg>
        )}

        {character === 'misterjo' && (
          /* Mister Jo - Friendly Teacher */
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Teacher Suit / Vest */}
            <circle cx="50" cy="50" r="42" fill="#FDF2F8" stroke="#F472B6" strokeWidth="2.5" />
            {/* Hair */}
            <path d="M28 35 Q50 18 72 35 Q60 22 40 24 Z" fill="#475569" />
            {/* Face */}
            <circle cx="50" cy="45" r="22" fill="#FFE4E6" />
            {/* Glasses */}
            <circle cx="41" cy="43" r="7" fill="none" stroke="#0284C7" strokeWidth="2" />
            <circle cx="59" cy="43" r="7" fill="none" stroke="#0284C7" strokeWidth="2" />
            <line x1="48" y1="43" x2="52" y2="43" stroke="#0284C7" strokeWidth="2" />
            {/* Friendly Eyes */}
            <circle cx="41" cy="43" r="2.5" fill="#0F172A" />
            <circle cx="59" cy="43" r="2.5" fill="#0F172A" />
            {/* Big Smile */}
            <path d="M42 53 Q50 60 58 53" fill="none" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round" />
            {/* Tie / Bow */}
            <polygon points="46,67 54,67 52,78 48,78" fill="#EC4899" />
            <circle cx="50" cy="67" r="3" fill="#BE185D" />
            {/* Glasses reflection */}
            <path d="M38 39 Q41 38 43 40" stroke="#FFF" strokeWidth="1" fill="none" />
            <path d="M56 39 Q59 38 61 40" stroke="#FFF" strokeWidth="1" fill="none" />
          </svg>
        )}

        {character === 'mimi' && (
          /* Mimi the Smart Bunny */
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Long Ears */}
            <ellipse cx="38" cy="22" rx="7" ry="18" fill="#FFF" stroke="#F472B6" strokeWidth="2.5" />
            <ellipse cx="38" cy="22" rx="4" ry="13" fill="#FCE7F3" />
            <ellipse cx="62" cy="22" rx="7" ry="18" fill="#FFF" stroke="#F472B6" strokeWidth="2.5" />
            <ellipse cx="62" cy="22" rx="4" ry="13" fill="#FCE7F3" />
            {/* Body */}
            <ellipse cx="50" cy="68" rx="25" ry="20" fill="#FFF" stroke="#F472B6" strokeWidth="2.5" />
            {/* Head */}
            <circle cx="50" cy="46" r="22" fill="#FFF" stroke="#F472B6" strokeWidth="2.5" />
            {/* Eyes */}
            <circle cx="42" cy="44" r="3" fill="#831843" />
            <circle cx="58" cy="44" r="3" fill="#831843" />
            {/* Nose & Smile */}
            <polygon points="50,49 47,47 53,47" fill="#F472B6" />
            <path d="M46 51 Q50 54 54 51" fill="none" stroke="#831843" strokeWidth="1.8" strokeLinecap="round" />
            {/* Math Symbol Sigma on Mimi */}
            <text x="50" y="74" fontSize="10" fontWeight="bold" fill="#9333EA" textAnchor="middle">
              ∑
            </text>
          </svg>
        )}

        {/* Small sparkling star */}
        <span className="absolute -top-1 -right-1 text-sm animate-spin-slow">✨</span>
      </div>
    </div>
  );
};
