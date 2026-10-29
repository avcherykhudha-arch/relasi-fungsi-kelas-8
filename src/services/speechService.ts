/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TTSStatus = 'idle' | 'playing' | 'paused';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private status: TTSStatus = 'idle';
  private rate: number = 1.0;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private listeners: Set<(status: TTSStatus) => void> = new Set();
  private availableVoices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    this.availableVoices = this.synth.getVoices();
    // Look for Indonesian voice
    const indonesianVoice = this.availableVoices.find(
      (v) => v.lang.startsWith('id') || v.lang.includes('ID') || v.lang.startsWith('in')
    );
    if (indonesianVoice) {
      this.selectedVoice = indonesianVoice;
    } else {
      // Fallback: pick default voice
      this.selectedVoice = this.availableVoices.find((v) => v.default) || this.availableVoices[0] || null;
    }
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.availableVoices;
  }

  public getSelectedVoice(): SpeechSynthesisVoice | null {
    return this.selectedVoice;
  }

  public subscribe(cb: (status: TTSStatus) => void): () => void {
    this.listeners.add(cb);
    cb(this.status);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.status));
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.6, Math.min(1.8, newRate));
    // If currently playing, we can smoothly restart from where appropriate or next utterance
  }

  public getRate(): number {
    return this.rate;
  }

  public getStatus(): TTSStatus {
    return this.status;
  }

  public isAvailable(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && this.synth !== null;
  }

  /**
   * Convert math notation and symbols into natural Indonesian pronunciation
   */
  public sanitizeMathForSpeech(rawText: string): string {
    let text = rawText;
    // Common math notation replacements for natural Indonesian TTS
    text = text.replace(/f\((.*?)\)/g, 'f dari $1');
    text = text.replace(/g\((.*?)\)/g, 'g dari $1');
    text = text.replace(/h\((.*?)\)/g, 'h dari $1');
    text = text.replace(/\+/g, ' tambah ');
    text = text.replace(/ - /g, ' kurang ');
    text = text.replace(/ = /g, ' sama dengan ');
    text = text.replace(/ \/ /g, ' bagi ');
    text = text.replace(/ \^ 2/g, ' kuadrat');
    text = text.replace(/x\^2/g, 'x kuadrat');
    text = text.replace(/ \times /g, ' kali ');
    text = text.replace(/ \cdot /g, ' kali ');
    text = text.replace(/\{/g, ' himpunan ');
    text = text.replace(/\}/g, ' ');
    text = text.replace(/→/g, ' ke ');
    text = text.replace(/->/g, ' ke ');
    text = text.replace(/<=/g, ' kurang dari atau sama dengan ');
    text = text.replace(/>=/g, ' lebih dari atau sama dengan ');
    text = text.replace(/!=/g, ' tidak sama dengan ');
    text = text.replace(/∈/g, ' anggota dari ');
    text = text.replace(/∉/g, ' bukan anggota dari ');
    // Remove markdown bold/italic asterisks
    text = text.replace(/\*\*/g, '');
    text = text.replace(/\*/g, '');
    text = text.replace(/#/g, '');
    return text.trim();
  }

  /**
   * Speak a text string with Mister Jo's Indonesian tone
   */
  public speak(text: string, onEndCallback?: () => void) {
    if (!this.synth) return;

    this.stop();

    if (!text || text.trim() === '') return;

    const readableText = this.sanitizeMathForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(readableText);

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.lang = this.selectedVoice?.lang || 'id-ID';
    utterance.rate = this.rate;
    utterance.pitch = 1.05; // Slightly cheerful, friendly teacher pitch

    utterance.onstart = () => {
      this.status = 'playing';
      this.notify();
    };

    utterance.onend = () => {
      this.status = 'idle';
      this.currentUtterance = null;
      this.notify();
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = (e) => {
      // SpeechSynthesis error event
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('SpeechSynthesis error:', e.error);
      }
      this.status = 'idle';
      this.currentUtterance = null;
      this.notify();
    };

    utterance.onpause = () => {
      this.status = 'paused';
      this.notify();
    };

    utterance.onresume = () => {
      this.status = 'playing';
      this.notify();
    };

    this.currentUtterance = utterance;
    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Failed to invoke speech:', err);
      this.status = 'idle';
      this.notify();
    }
  }

  public pause() {
    if (this.synth && this.status === 'playing') {
      this.synth.pause();
      this.status = 'paused';
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.status === 'paused') {
      this.synth.resume();
      this.status = 'playing';
      this.notify();
    }
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch {
        // ignore
      }
      this.status = 'idle';
      this.currentUtterance = null;
      this.notify();
    }
  }
}

export const speechService = new SpeechService();
