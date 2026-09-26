import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  X, 
  HelpCircle, 
  Radio
} from 'lucide-react';
import { MULTILINGUAL_AUDIO_SCRIPTS } from '../data/mockData';

interface VoiceAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  activeLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const SetuVoiceAssistant: React.FC<VoiceAssistantProps> = ({
  isOpen,
  onClose,
  activeLanguage,
  onLanguageChange
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<'welcome' | 'caste_guide' | 'deficiency_guide' | 'dbt_guide'>('welcome');

  const currentScript = MULTILINGUAL_AUDIO_SCRIPTS[activeLanguage] || MULTILINGUAL_AUDIO_SCRIPTS['en'];

  useEffect(() => {
    // Stop playback if modal closed
    if (!isOpen && isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
    }
  }, [isOpen, isPlaying]);

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const textToSpeak = currentScript.audioText;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      
      // Select appropriate language if available
      if (activeLanguage === 'hi') utterance.lang = 'hi-IN';
      else if (activeLanguage === 'en') utterance.lang = 'en-IN';
      else utterance.lang = 'hi-IN'; // Fallback for regional Indian accents

      utterance.rate = 0.95; // Clear and slightly slower for clarity

      utterance.onend = () => {
        setIsPlaying(false);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-2xl p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-300">
            <Volume2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900">
                Setu-AI: Multilingual Tribal Voice Assistant
              </h3>
              <span className="badge badge-saffron text-[10px]">आदिवासी वाणी सेतु</span>
            </div>
            <p className="text-xs text-slate-500">
              Voice-first assistance designed for ST scholars from remote tribal districts (Santhali, Gondi, Bhili, Odia, Hindi, English).
            </p>
          </div>
        </div>

        {/* Language Selection Row */}
        <div className="mb-4">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 block">
            Choose Your Spoken Language / अपनी भाषा चुनें:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.entries(MULTILINGUAL_AUDIO_SCRIPTS).map(([code, item]) => (
              <button
                key={code}
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsPlaying(false);
                  onLanguageChange(code);
                }}
                className={`px-3 py-2 rounded-lg border text-left text-xs transition cursor-pointer flex items-center justify-between ${
                  activeLanguage === code
                    ? 'border-amber-600 bg-amber-50/80 font-bold text-amber-900 shadow-xs'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>{item.nativeName}</span>
                {activeLanguage === code && <Radio className="w-3.5 h-3.5 text-amber-600" />}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Player Box */}
        <div className="bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-white border border-amber-200 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-amber-900">
                Audio Stream: {currentScript.lang} ({currentScript.nativeName})
              </span>
              {isPlaying && (
                <span className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                  ● Live Playing
                </span>
              )}
            </div>

            {/* Sound Wave Animation */}
            {isPlaying && (
              <div className="flex items-center gap-1 h-5">
                <div className="sound-bar" style={{ animationDelay: '0.1s' }} />
                <div className="sound-bar" style={{ animationDelay: '0.3s' }} />
                <div className="sound-bar" style={{ animationDelay: '0.2s' }} />
                <div className="sound-bar" style={{ animationDelay: '0.4s' }} />
                <div className="sound-bar" style={{ animationDelay: '0.15s' }} />
              </div>
            )}
          </div>

          <p className="text-sm font-medium text-slate-800 bg-white/90 p-3.5 rounded-lg border border-amber-200/60 leading-relaxed shadow-inner">
            "{currentScript.audioText}"
          </p>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={toggleSpeech}
              className={`btn btn-sm ${
                isPlaying ? 'btn-secondary text-rose-700 border-rose-300' : 'btn-saffron shadow-sm'
              }`}
            >
              {isPlaying ? (
                <>
                  <VolumeX className="w-4 h-4 text-rose-600" />
                  <span>Stop Voice Guidance</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-white" />
                  <span>Listen in {currentScript.nativeName} (आवाज़ सुनें)</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-slate-500 italic">
              Offline-ready local TTS synthesizer
            </span>
          </div>
        </div>

        {/* Common Help Questions in Audio */}
        <div>
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Common Scholar Inquiries (Quick Help):</span>
          </h4>
          <div className="space-y-1.5 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-between cursor-pointer">
              <span>What if my ST caste certificate does not have a digital QR code?</span>
              <span className="text-blue-600 font-semibold">AI Manual Queue</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-between cursor-pointer">
              <span>How are quarterly HRA and research contingencies claimed under NFST?</span>
              <span className="text-blue-600 font-semibold">Guide e-Sign</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-between cursor-pointer">
              <span>What is the QS Ranking cutoff for National Overseas Scholarship (NOS)?</span>
              <span className="text-blue-600 font-semibold">Top 500 QS</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Tribal Language AI corpus supported by Ministry of Tribal Affairs
          </span>
          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
};
