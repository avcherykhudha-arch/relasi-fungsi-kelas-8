/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Square, FastForward } from 'lucide-react';
import { speechService, TTSStatus } from '../services/speechService';
import { soundEffects } from '../services/soundEffects';

interface TTSPlayerProps {
  textToSpeak: string;
  label?: string;
  compact?: boolean;
  onFinished?: () => void;
  className?: string;
}

export const TTSPlayer: React.FC<TTSPlayerProps> = ({
  textToSpeak,
  label = 'Dengarkan Mister Jo',
  compact = false,
  onFinished,
  className = '',
}) => {
  const [status, setStatus] = useState<TTSStatus>('idle');
  const [speed, setSpeed] = useState<number>(1.0);
  const isAvailable = speechService.isAvailable();

  useEffect(() => {
    const unsub = speechService.subscribe((newStatus) => {
      setStatus(newStatus);
    });
    return () => {
      unsub();
    };
  }, []);

  const handlePlay = () => {
    soundEffects.playPop();
    speechService.speak(textToSpeak, onFinished);
  };

  const handlePause = () => {
    soundEffects.playPop();
    speechService.pause();
  };

  const handleResume = () => {
    soundEffects.playPop();
    speechService.resume();
  };

  const handleStop = () => {
    soundEffects.playPop();
    speechService.stop();
  };

  const handleToggleSpeed = () => {
    soundEffects.playPop();
    let nextSpeed = 1.0;
    if (speed === 1.0) nextSpeed = 1.2;
    else if (speed === 1.2) nextSpeed = 0.8;
    else nextSpeed = 1.0;

    setSpeed(nextSpeed);
    speechService.setRate(nextSpeed);
  };

  if (!isAvailable) {
    return (
      <div className="text-xs text-pink-400 italic flex items-center gap-1.5 py-1">
        <VolumeX className="w-3.5 h-3.5 text-pink-300" />
        <span>Suara narator tidak didukung oleh browser ini.</span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        {status === 'idle' ? (
          <button
            onClick={handlePlay}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95"
            title="Dengarkan penjelasan suara"
          >
            <Volume2 className="w-4 h-4 text-pink-600 animate-pulse" />
            <span>{label}</span>
          </button>
        ) : (
          <div className="flex items-center gap-1 bg-pink-50 border border-pink-200 px-2 py-1 rounded-full shadow-sm">
            {status === 'playing' ? (
              <button
                onClick={handlePause}
                className="p-1 hover:bg-pink-200 text-pink-700 rounded-full"
                title="Jeda"
              >
                <Pause className="w-3.5 h-3.5 fill-current" />
              </button>
            ) : (
              <button
                onClick={handleResume}
                className="p-1 hover:bg-pink-200 text-pink-700 rounded-full"
                title="Lanjutkan"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            )}
            <button
              onClick={handleStop}
              className="p-1 hover:bg-pink-200 text-pink-700 rounded-full"
              title="Berhenti"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
            </button>
            <span className="text-[11px] font-semibold text-pink-600 px-1">
              {status === 'playing' ? 'Bicara...' : 'Jeda'}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 border-2 border-pink-200 rounded-2xl p-3 shadow-sm flex flex-wrap items-center justify-between gap-3 ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md">
          <Volume2 className={`w-5 h-5 ${status === 'playing' ? 'animate-bounce' : ''}`} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800">{label}</span>
            {status === 'playing' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
                Mister Jo Berbicara
              </span>
            )}
          </div>
          {/* Animated sound bars */}
          {status === 'playing' && (
            <div className="flex items-end gap-0.5 h-3 mt-1">
              <span className="w-1 bg-pink-400 h-2 animate-pulse rounded-full" />
              <span className="w-1 bg-pink-500 h-3 animate-pulse delay-75 rounded-full" />
              <span className="w-1 bg-purple-400 h-1.5 animate-pulse delay-150 rounded-full" />
              <span className="w-1 bg-pink-400 h-2.5 animate-pulse rounded-full" />
              <span className="w-1 bg-pink-600 h-3 animate-pulse delay-100 rounded-full" />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Speed button */}
        <button
          onClick={handleToggleSpeed}
          className="flex items-center gap-1 text-xs font-bold px-2 py-1 bg-white border border-pink-200 rounded-lg text-slate-700 hover:bg-pink-50 transition"
          title="Ubah Kecepatan Suara"
        >
          <FastForward className="w-3.5 h-3.5 text-pink-500" />
          <span>{speed}x</span>
        </button>

        {/* Play/Pause/Stop control group */}
        {status === 'idle' ? (
          <button
            onClick={handlePlay}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Putar Suara</span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5">
            {status === 'playing' ? (
              <button
                onClick={handlePause}
                className="flex items-center gap-1 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow transition active:scale-95"
                title="Jeda"
              >
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Jeda</span>
              </button>
            ) : (
              <button
                onClick={handleResume}
                className="flex items-center gap-1 px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs font-bold shadow transition active:scale-95"
                title="Lanjutkan"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Lanjut</span>
              </button>
            )}
            <button
              onClick={handleStop}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition active:scale-95"
              title="Berhenti"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Stop</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
