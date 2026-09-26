import React, { useState } from 'react';
import type { UserRole } from '../types';
import { 
  Building2, 
  ShieldCheck, 
  FileCheck2, 
  Sparkles, 
  GraduationCap, 
  Volume2, 
  ScanLine,
  Sliders,
  Award,
  BellRing,
  Palette,
  BookOpen
} from 'lucide-react';
import { getTranslation } from '../data/translations';

interface HeaderProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenVoiceAssistant: () => void;
  onOpenOcrStudio: () => void;
  activeLanguage: string;
  onLanguageChange: (lang: string) => void;
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  onOpenSchemeRepo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  onRoleChange,
  onOpenVoiceAssistant,
  onOpenOcrStudio,
  activeLanguage,
  onLanguageChange,
  currentTheme,
  onThemeChange,
  onOpenSchemeRepo
}) => {
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1); // 0: A-, 1: A, 2: A+
  const t = getTranslation(activeLanguage);

  const adjustFontSize = (level: number) => {
    setFontSizeLevel(level);
    const sizes = ['14px', '16px', '18px'];
    document.documentElement.style.setProperty('--base-font-size', sizes[level]);
  };

  const getRoleMeta = (role: UserRole) => {
    switch (role) {
      case 'applicant':
        return { label: t.roleScholar, sub: 'Applicant & Candidate Desk', icon: GraduationCap, color: 'text-emerald-700' };
      case 'scrutiny_officer':
        return { label: t.roleScrutiny, sub: 'Ministry Verification Officer', icon: FileCheck2, color: 'text-amber-700' };
      case 'fellowship_scholar':
        return { label: t.roleFellowship, sub: 'Active Ph.D. & Overseas Fellows', icon: Award, color: 'text-purple-700' };
      case 'ministry_admin':
        return { label: t.roleAdmin, sub: 'Joint Secretary & Sanction Committee', icon: Sliders, color: 'text-teal-700' };
      case 'institute_nodal':
        return { label: t.roleInstitute, sub: 'Nodal Officer Admission Verification', icon: Building2, color: 'text-blue-700' };
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs select-none">
      {/* Tricolor National Stripe */}
      <div className="gov-tricolor-bar" />

      {/* Top Government Identity & Accessibility Bar */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-1.5 text-xs text-slate-600">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3">
          
          {/* Official MoTA Clean Identity */}
          <div className="flex items-center gap-2.5 font-medium text-xs">
            <span className="flex items-center gap-1.5 text-slate-900 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              {t.govIndia}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-950 font-bold bg-emerald-100/70 px-2 py-0.5 rounded-md border border-emerald-300">
              {t.motaMinistry}
            </span>
          </div>

          {/* Accessibility Controls & Palette */}
          <div className="flex items-center gap-2.5">
            
            {/* Live Theme Palette Selector */}
            <div className="flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-2 py-0.5 shadow-xs text-[11px] font-bold text-slate-700">
              <Palette className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <select
                value={currentTheme}
                onChange={(e) => onThemeChange(e.target.value)}
                className="bg-transparent border-none outline-none font-bold text-slate-900 cursor-pointer pr-1 text-xs"
                title="Select Clean White Theme"
              >
                <option value="green-white">🌿 White & Emerald Green</option>
                <option value="green-yellow">🌻 White, Green & Yellow</option>
                <option value="blue-white">🌊 White & Royal Blue</option>
                <option value="teal-white">🪷 White & Teal Cyan</option>
              </select>
            </div>

            {/* Font Scaler */}
            <div className="hidden sm:flex items-center bg-white border border-slate-300 rounded-lg p-0.5 text-[11px] font-bold text-slate-700 shadow-xs">
              <button
                onClick={() => adjustFontSize(0)}
                title="Decrease font size"
                className={`px-2 py-0.5 rounded cursor-pointer transition ${fontSizeLevel === 0 ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'}`}
              >
                A-
              </button>
              <button
                onClick={() => adjustFontSize(1)}
                title="Default font size"
                className={`px-2 py-0.5 rounded cursor-pointer transition ${fontSizeLevel === 1 ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'}`}
              >
                A
              </button>
              <button
                onClick={() => adjustFontSize(2)}
                title="Increase font size"
                className={`px-2 py-0.5 rounded cursor-pointer transition ${fontSizeLevel === 2 ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'}`}
              >
                A+
              </button>
            </div>

            {/* Tribal Voice Guide Trigger */}
            <button
              onClick={onOpenVoiceAssistant}
              className="flex items-center gap-1.5 text-emerald-950 bg-emerald-100/80 hover:bg-emerald-200 px-2.5 py-1 rounded-lg font-bold transition cursor-pointer border border-emerald-300 text-xs shadow-xs"
              title="Speak in Santhali, Gondi, Bhili, Hindi, Odia, English"
            >
              <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">आदिवासी वाणी (Voice)</span>
            </button>

            {/* Language Selector */}
            <select
              value={activeLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-xs cursor-pointer"
            >
              <option value="en">English (EN)</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="sat">ᱥᱟᱱᱛᱟᱲᱤ (Santhali)</option>
              <option value="gon">कोया (Gondi)</option>
              <option value="bhi">भीली (Bhili)</option>
              <option value="od">ଓଡ଼ିଆ (Odia)</option>
            </select>
          </div>

        </div>
      </div>

      {/* Moving Announcement Ticker */}
      <div className="bg-slate-900 text-white py-1.5 px-4 text-xs overflow-hidden flex items-center border-b border-slate-800">
        <div className="container-custom flex items-center gap-3 overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0 text-amber-300 font-extrabold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-[10px] shadow-xs z-10">
            <BellRing className="w-3 h-3 text-amber-300 animate-pulse" />
            <span>{t.circularsLabel}</span>
          </div>

          <div className="overflow-hidden w-full text-slate-300 font-medium text-[11px] relative flex items-center">
            <div className="ticker-track flex items-center whitespace-nowrap cursor-pointer select-none" title="Hover to pause">
              <span className="inline-block px-6">
                {t.tickerText}
              </span>
              <span className="inline-block px-6" aria-hidden="true">
                {t.tickerText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand & Clean Role Switcher Bar */}
      <div className="container-custom py-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white shadow-md border border-emerald-500/30 shrink-0">
              <Building2 className="w-6 h-6 text-amber-300" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none">
                  PRERNA-ST
                </h1>
                <span className="bg-emerald-700 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  MoTA AI Portal
                </span>
                <span className="badge badge-emerald text-[10px] py-0.5 font-bold hidden sm:inline-flex">
                  <ShieldCheck className="w-3 h-3" /> {t.paperlessDbt}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Unified Scholarship & Fellowship Management System for Scheduled Tribes
              </p>
            </div>
          </div>

          {/* Clean Segmented Role Switcher Tabs */}
          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200/90 shadow-inner overflow-x-auto">
            {(['applicant', 'scrutiny_officer', 'fellowship_scholar', 'ministry_admin'] as UserRole[]).map((role) => {
              const meta = getRoleMeta(role);
              const Icon = meta.icon;
              const isActive = currentRole === role;
              return (
                <button
                  key={role}
                  onClick={() => onRoleChange(role)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 ring-1 ring-slate-900/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${meta.color}`} />
                  <span>{meta.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </header>
  );
};
