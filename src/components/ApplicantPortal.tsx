import React, { useState } from 'react';
import type { 
  ApplicationRecord, 
  SchemeInfo,
  SchemeCode
} from '../types';
import { 
  GraduationCap, 
  FileCheck, 
  Sparkles, 
  Award, 
  Upload, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Shield, 
  AlertTriangle,
  Compass,
  CheckCircle,
  HelpCircle,
  Building2,
  Globe2,
  BookOpen,
  Plane,
  ChevronRight,
  Search,
  ExternalLink,
  SlidersHorizontal,
  Info,
  Layers,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getTranslation } from '../data/translations';

interface ApplicantPortalProps {
  activeLanguage?: string;
  applications: ApplicationRecord[];
  schemes: SchemeInfo[];
  onOpenSanctionLetter: (app: ApplicationRecord) => void;
  onOpenOcrStudio: () => void;
  onOpenVoiceAssistant: () => void;
  onResolveDeficiency: (appId: string) => void;
  onAddNewApplication: (newApp: Partial<ApplicationRecord>) => void;
  onOpenSchemeRepo: () => void;
}

type HubTab = 'schemes' | 'tracker' | 'finder';

export const ApplicantPortal: React.FC<ApplicantPortalProps> = ({
  activeLanguage = 'en',
  applications,
  schemes,
  onOpenSanctionLetter,
  onOpenOcrStudio,
  onOpenVoiceAssistant,
  onResolveDeficiency,
  onAddNewApplication,
  onOpenSchemeRepo
}) => {
  const t = getTranslation(activeLanguage);
  // Main Tab Navigation
  const [activeTab, setActiveTab] = useState<HubTab>('schemes');

  // Scheme Category Filter
  const [schemeCategory, setSchemeCategory] = useState<'ALL' | 'HIGHER_ED' | 'OVERSEAS' | 'PREMIER' | 'SCHOOL'>('ALL');

  // Tracker State
  const [selectedApp, setSelectedApp] = useState<ApplicationRecord>(applications[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTrackerFilter, setActiveTrackerFilter] = useState<string>('ALL');

  // Modals & Assistant States
  const [isApplying, setIsApplying] = useState(false);
  const [isDigiLockerSyncing, setIsDigiLockerSyncing] = useState(false);
  const [digiLockerSuccess, setDigiLockerSuccess] = useState(false);

  // Scheme Finder Interactive State
  const [finderEducation, setFinderEducation] = useState<'phd_india' | 'abroad' | 'premier_iit' | 'college' | 'school'>('phd_india');

  // Application Form State
  const [formData, setFormData] = useState({
    schemeCode: 'NFST' as SchemeCode,
    applicantName: 'Ananya Marandi',
    tribeGroup: 'Santhal',
    isPVTG: false,
    state: 'Odisha',
    district: 'Mayurbhanj',
    gender: 'Female' as const,
    annualFamilyIncome: 240000,
    academicQualification: 'M.Sc. Life Sciences (84.5%)',
    percentageScore: 84.5,
    universityName: 'Utkal University, Bhubaneswar',
    courseOfStudy: 'Ph.D. in Ethno-medicinal Plant Genomics of Similipal Biosphere',
    qsWorldRank: 0
  });

  const handleDigiLockerSync = () => {
    setIsDigiLockerSyncing(true);
    setTimeout(() => {
      setIsDigiLockerSyncing(false);
      setDigiLockerSuccess(true);
      confetti({ particleCount: 70, spread: 75 });
    }, 1200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddNewApplication(formData);
    setIsApplying(false);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
    // Auto switch to tracker to show submitted application
    setActiveTab('tracker');
  };

  const getStatusBadge = (status: ApplicationRecord['status']) => {
    switch (status) {
      case 'sanctioned':
        return <span className="badge badge-emerald"><CheckCircle2 className="w-3.5 h-3.5" /> Fellowship Sanctioned</span>;
      case 'committee_shortlisted':
        return <span className="badge badge-purple"><Award className="w-3.5 h-3.5" /> Committee Shortlisted</span>;
      case 'under_scrutiny':
        return <span className="badge badge-blue"><Clock className="w-3.5 h-3.5" /> Scrutiny In-Progress</span>;
      case 'deficiency_flagged':
        return <span className="badge badge-rose"><AlertTriangle className="w-3.5 h-3.5" /> Action Needed: Deficiency</span>;
      default:
        return <span className="badge badge-gray"><Clock className="w-3.5 h-3.5" /> Under Review</span>;
    }
  };

  // Filter schemes based on category
  const filteredSchemes = schemes.filter(s => {
    if (schemeCategory === 'ALL') return true;
    if (schemeCategory === 'HIGHER_ED') return s.code === 'NFST';
    if (schemeCategory === 'OVERSEAS') return s.code === 'NOS';
    if (schemeCategory === 'PREMIER') return s.code === 'TOP_CLASS';
    if (schemeCategory === 'SCHOOL') return s.code === 'POST_MATRIC' || s.code === 'PRE_MATRIC';
    return true;
  });

  // Filter applications for tracker
  const filteredApplications = applications.filter(app => {
    const matchesFilter = activeTrackerFilter === 'ALL' || app.schemeCode === activeTrackerFilter;
    const matchesQuery = 
      app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.universityName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* =========================================================================
          SPACIOUS, DELIGHTFUL HERO SECTION
          ========================================================================= */}
      <div className="card bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 border border-emerald-100 p-8 md:p-12 shadow-sm rounded-3xl relative overflow-hidden">
        
        {/* Subtle Decorative Background Halos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="badge badge-emerald text-xs py-1 px-3.5 shadow-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                {t.motaMinistry} • {t.govIndia}
              </span>
              <span className="badge badge-saffron text-xs py-1 px-3.5 font-bold shadow-xs">
                {t.heroBadge}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {t.heroTitle}
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                {t.heroSubtitle}
              </p>
            </div>

            {/* Generous, Clean Primary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  setFormData({ ...formData, schemeCode: 'NFST' });
                  setIsApplying(true);
                }}
                className="btn btn-primary btn-lg shadow-md hover:shadow-lg font-extrabold text-sm md:text-base px-6 py-3.5 rounded-xl cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-amber-300" />
                <span>{t.heroApplyBtn}</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('tracker');
                  setTimeout(() => {
                    const el = document.getElementById('application-tracker-section') || document.getElementById('hub-tabs-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 80);
                }}
                className="btn btn-secondary btn-lg font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-xs hover:border-emerald-600 hover:text-emerald-800 transition cursor-pointer"
              >
                <Search className="w-5 h-5 text-emerald-600" />
                <span>{t.heroTrackBtn}</span>
              </button>

              <button
                onClick={onOpenVoiceAssistant}
                className="btn btn-secondary btn-lg font-bold text-sm md:text-base px-5 py-3.5 rounded-xl bg-amber-50/60 border-amber-200 text-amber-900 hover:bg-amber-100/70 transition cursor-pointer"
                title="Speak in Santhali, Gondi, Bhili, Hindi, Odia, English"
              >
                <HelpCircle className="w-5 h-5 text-amber-700" />
                <span>{t.heroVoiceBtn}</span>
              </button>
            </div>

            {/* DigiLocker Sync Helper Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600">
              <span className="font-semibold text-slate-500">{t.heroFastTrack}</span>
              <button
                onClick={handleDigiLockerSync}
                disabled={isDigiLockerSyncing || digiLockerSuccess}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition cursor-pointer ${
                  digiLockerSuccess 
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300' 
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
                }`}
              >
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>{isDigiLockerSyncing ? 'Connecting...' : digiLockerSuccess ? t.heroDigiLockerConnected : t.heroDigiLocker}</span>
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={onOpenOcrStudio}
                className="hover:text-emerald-700 font-bold flex items-center gap-1 cursor-pointer transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.heroNetraStudio}</span>
              </button>
            </div>

          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 group">
              <img
                src="/hero_scholars.jpg"
                alt="Tribal research scholars collaborating in university library"
                className="w-full h-80 lg:h-96 object-cover object-center transform group-hover:scale-102 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="badge badge-emerald text-[11px] py-0.5 px-2.5 font-bold self-start mb-1 bg-emerald-600/90 text-white border-none">
                  Central Sector & Centrally Sponsored
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  {t.heroImgCaption}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Full tuition, monthly stipends, and research contingencies credited directly to bank accounts.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Spacious Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-emerald-200/60">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-emerald-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
              ₹
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 leading-none">{t.metricDbtValue}</p>
              <p className="text-xs text-slate-600 font-medium mt-1">{t.metricDbtLabel}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-blue-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold shrink-0">
              👥
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 leading-none">{t.metricScholarsValue}</p>
              <p className="text-xs text-slate-600 font-medium mt-1">{t.metricScholarsLabel}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-amber-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
              ⚡
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 leading-none">{t.metricSpeedValue}</p>
              <p className="text-xs text-slate-600 font-medium mt-1">{t.metricSpeedLabel}</p>
            </div>
          </div>
        </div>

      </div>

      {/* DigiLocker Success Toast */}
      {digiLockerSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-emerald-950 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn shadow-sm">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold text-sm">DigiLocker API Connected & Verified</p>
              <p className="text-slate-600 mt-0.5">
                Scheduled Tribe Certificate, Aadhaar Biometrics & Bank Account Seeding cryptographically verified with Ministry of Electronics and IT (MeitY) backend.
              </p>
            </div>
          </div>
          <span className="font-mono text-xs bg-emerald-200/80 text-emerald-950 px-3 py-1 rounded-lg font-bold shrink-0 self-start sm:self-auto">
            DL-IN-ST-994
          </span>
        </div>
      )}

      {/* =========================================================================
          UNCLUTTERED 3-TAB INTERACTIVE HUB (Makes the site spacious and easy to access!)
          ========================================================================= */}
      <div id="hub-tabs-section" className="space-y-6">
        
        {/* Navigation Tabs Bar */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('schemes')}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-extrabold transition cursor-pointer ${
                activeTab === 'schemes'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.tabSchemes}</span>
            </button>

            <button
              onClick={() => setActiveTab('tracker')}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-extrabold transition cursor-pointer ${
                activeTab === 'tracker'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>{t.tabTracker} ({applications.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('finder')}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-extrabold transition cursor-pointer ${
                activeTab === 'finder'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{t.tabFinder}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end px-2">
            <button
              onClick={onOpenSchemeRepo}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 cursor-pointer transition hover:bg-emerald-100"
            >
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>MoTA Official Circulars & AI Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* =====================================================================
            TAB 1: SCHEMES DIRECTORY (Spacious 2/3-Column Grid)
            ===================================================================== */}
        {activeTab === 'schemes' && (
          <div className="space-y-6">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                <span className="text-slate-500 mr-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
                </span>
                {[
                  { id: 'ALL', label: t.filterAll },
                  { id: 'HIGHER_ED', label: t.filterResearch },
                  { id: 'OVERSEAS', label: t.filterOverseas },
                  { id: 'PREMIER', label: t.filterPremier },
                  { id: 'SCHOOL', label: t.filterSchool },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSchemeCategory(f.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                      schemeCategory === f.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Showing {filteredSchemes.length} of 5 notified schemes
              </span>
            </div>

            {/* Spacious Scheme Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* SCHEME 1: NFST */}
              {(schemeCategory === 'ALL' || schemeCategory === 'HIGHER_ED') && (
                <div className="card card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="h-48 w-full overflow-hidden relative">
                      <img
                        src="/iit_ai_research.jpg"
                        alt="NFST Doctoral Research Scholars in Lab"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="badge badge-emerald font-extrabold text-xs shadow-md bg-white/95">
                          Code: ARG45
                        </span>
                        <span className="badge badge-blue font-bold text-[11px] shadow-sm bg-white/95">
                          Central Sector (100% MoTA)
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          {t.nfstTitle}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {t.nfstDesc}
                        </p>
                      </div>

                      {/* Stipend Card */}
                      <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                        <span className="text-[11px] font-bold text-emerald-800 uppercase block">{t.financialSupport}</span>
                        <p className="text-base font-black text-emerald-950 font-mono">
                          {t.nfstStipend}
                        </p>
                        <p className="text-xs text-emerald-800">
                          + HRA + ₹12,000 to ₹20,000/yr Contingency Grant
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>750 fresh fellowships awarded annually across India.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Automated JRF to SRF upgradation via Pragati-360 AI.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Direct monthly stipend credit into Aadhaar-seeded account.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => {
                        setFormData({ ...formData, schemeCode: 'NFST' });
                        setIsApplying(true);
                      }}
                      className="w-full btn btn-primary btn-md font-extrabold text-sm rounded-xl cursor-pointer"
                    >
                      <span>{t.applyNow} (NFST)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* SCHEME 2: NOS (Overseas) */}
              {(schemeCategory === 'ALL' || schemeCategory === 'OVERSEAS') && (
                <div className="card card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="h-48 w-full overflow-hidden relative">
                      <img
                        src="/nos_oxford_scholar.jpg"
                        alt="National Overseas Scholarship Fellow abroad"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="badge badge-purple font-extrabold text-xs shadow-md bg-white/95">
                          Code: AZKMI
                        </span>
                        <span className="badge badge-emerald font-bold text-[11px] shadow-sm bg-white/95">
                          Central Sector (100% MoTA)
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          {t.nosTitle}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {t.nosDesc}
                        </p>
                      </div>

                      {/* Stipend Card */}
                      <div className="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1">
                        <span className="text-[11px] font-bold text-purple-800 uppercase block">{t.financialSupport}</span>
                        <p className="text-base font-black text-purple-950 font-mono">
                          {t.nosStipend}
                        </p>
                        <p className="text-xs text-purple-800">
                          + 100% Tuition Fees + Visa & Economy Airfare
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Unconditional admission in QS Top 500 overseas universities.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Live QS Ranking validation & embassy sync via Netra-ST.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Automated foreign wire disbursement via SBI London/NY.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => {
                        setFormData({ ...formData, schemeCode: 'NOS' });
                        setIsApplying(true);
                      }}
                      className="w-full btn btn-primary btn-md font-extrabold text-sm rounded-xl cursor-pointer"
                    >
                      <span>{t.applyNow} (NOS)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* SCHEME 3: TOP CLASS (Premier Institutes) */}
              {(schemeCategory === 'ALL' || schemeCategory === 'PREMIER') && (
                <div className="card card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="h-48 w-full overflow-hidden relative">
                      <img
                        src="/hero_scholars.jpg"
                        alt="Top Class IIT IIM Scholars"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="badge badge-saffron font-extrabold text-xs shadow-md bg-white/95">
                          Code: A023B
                        </span>
                        <span className="badge badge-emerald font-bold text-[11px] shadow-sm bg-white/95">
                          Central Sector (Premier)
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          {t.topClassTitle}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {t.topClassDesc}
                        </p>
                      </div>

                      {/* Stipend Card */}
                      <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                        <span className="text-[11px] font-bold text-amber-800 uppercase block">{t.financialSupport}</span>
                        <p className="text-base font-black text-amber-950 font-mono">
                          {t.topClassStipend}
                        </p>
                        <p className="text-xs text-amber-800">
                          + ₹86,000/yr Living Allowance + ₹45,000 Laptop Grant
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>JoSAA / NEET / CLAT seat allotment auto-verification.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Direct fee reimbursement to institute nodal bank account.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Family annual income threshold up to ₹6.0 Lakh/year.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => {
                        setFormData({ ...formData, schemeCode: 'TOP_CLASS' });
                        setIsApplying(true);
                      }}
                      className="w-full btn btn-primary btn-md font-extrabold text-sm rounded-xl cursor-pointer"
                    >
                      <span>{t.applyNow} (Top Class)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* SCHEME 4: POST-MATRIC */}
              {(schemeCategory === 'ALL' || schemeCategory === 'SCHOOL') && (
                <div className="card card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="h-48 w-full overflow-hidden relative">
                      <img
                        src="/post_matric_students.jpg"
                        alt="Post-Matric ST Students in Higher Education"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="badge badge-emerald font-extrabold text-xs shadow-md bg-white/95 text-slate-900">
                          Code: BVOBC
                        </span>
                        <span className="badge bg-white/90 text-slate-800 font-bold text-[11px] shadow-sm">
                          Centrally Sponsored (60:40)
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          {t.postMatricTitle}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {t.postMatricDesc}
                        </p>
                      </div>

                      {/* Stipend Card */}
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                        <span className="text-[11px] font-bold text-slate-700 uppercase block">{t.financialSupport}</span>
                        <p className="text-base font-black text-slate-900 font-mono">
                          {t.postMatricStipend}
                        </p>
                        <p className="text-xs text-emerald-700 font-bold">
                          + 100% Compulsory Non-Refundable Course Fees
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Universal demand-driven coverage for eligible ST students.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Marksheet OCR auto-check eliminates manual district scrutiny.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Parental annual family income ceiling up to ₹2.50 Lakh.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => {
                        setFormData({ ...formData, schemeCode: 'POST_MATRIC' as SchemeCode });
                        setIsApplying(true);
                      }}
                      className="w-full btn btn-primary btn-md font-extrabold text-sm rounded-xl cursor-pointer"
                    >
                      <span>{t.applyNow} (Post-Matric)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* SCHEME 5: PRE-MATRIC */}
              {(schemeCategory === 'ALL' || schemeCategory === 'SCHOOL') && (
                <div className="card card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="h-48 w-full overflow-hidden relative">
                      <img
                        src="/pre_matric_school.jpg"
                        alt="Pre-Matric Tribal Secondary School Students"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="badge badge-saffron font-extrabold text-xs shadow-md bg-white/95 text-slate-900">
                          Code: BPVGK
                        </span>
                        <span className="badge bg-white/90 text-slate-800 font-bold text-[11px] shadow-sm">
                          Centrally Sponsored (60:40)
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          {t.preMatricTitle}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {t.preMatricDesc}
                        </p>
                      </div>

                      {/* Stipend Card */}
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                        <span className="text-[11px] font-bold text-slate-700 uppercase block">{t.financialSupport}</span>
                        <p className="text-base font-black text-slate-900 font-mono">
                          {t.preMatricStipend}
                        </p>
                        <p className="text-xs text-slate-600">
                          ₹3.5k (Day Scholars) • ₹7.0k (Hostellers) + Book Grant
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Direct retention incentive to curb secondary school dropouts.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>UDISE+ school backend sync with headmaster digital signature.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Zero-delay DBT credit into parental Jan Dhan bank account.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => {
                        setFormData({ ...formData, schemeCode: 'PRE_MATRIC' as SchemeCode });
                        setIsApplying(true);
                      }}
                      className="w-full btn btn-primary btn-md font-extrabold text-sm rounded-xl cursor-pointer"
                    >
                      <span>{t.applyNow} (Pre-Matric)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

        {/* =====================================================================
            TAB 2: APPLICATION TRACKER & END-TO-END VERIFICATION WORKBENCH
            ===================================================================== */}
        {activeTab === 'tracker' && (
          <div id="application-tracker-section" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Submissions List */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="card p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-emerald-700" />
                    <span>Submitted Applications ({filteredApplications.length})</span>
                  </h3>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                    Live Status
                  </span>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder={t.trackerSearchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Scheme Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] pb-1">
                  {['ALL', 'NFST', 'NOS', 'TOP_CLASS'].map((code) => (
                    <button
                      key={code}
                      onClick={() => setActiveTrackerFilter(code)}
                      className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer shrink-0 ${
                        activeTrackerFilter === code
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cards List */}
              <div className="space-y-3">
                {filteredApplications.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => setSelectedApp(app)}
                    className={`card p-5 rounded-2xl cursor-pointer transition relative ${
                      selectedApp.id === app.id
                        ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-md bg-white'
                        : 'card-hover bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-slate-500">
                          {app.applicationNumber}
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 mt-0.5">
                          {app.applicantName}
                        </h4>
                      </div>
                      {getStatusBadge(app.status)}
                    </div>

                    <p className="text-xs text-slate-600 mb-2 font-medium line-clamp-1">
                      <strong>{app.schemeCode}:</strong> {app.courseOfStudy}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                      <span className="truncate max-w-[200px]">{app.universityName}</span>
                      <span className="font-bold text-emerald-700 flex items-center gap-1 shrink-0">
                        View Pipeline <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Deficiency Alert Banner */}
                    {app.status === 'deficiency_flagged' && (
                      <div className="mt-3 p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2 font-bold">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Action Required: Deficiency detected in income certificate</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Full Verification Timeline & Sanction Letter */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="card p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-2xl font-black text-slate-900">
                        {selectedApp.applicantName}
                      </h3>
                      <span className="badge badge-blue text-xs font-mono font-bold">{selectedApp.schemeCode}</span>
                      {selectedApp.isPVTG && (
                        <span className="badge badge-emerald text-xs font-bold">PVTG Candidate</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Application ID: <span className="font-mono font-bold text-slate-800">{selectedApp.applicationNumber}</span> &bull; Submitted: {selectedApp.submissionDate}
                    </p>
                  </div>

                  {/* Sanction Letter CTA Button */}
                  {(selectedApp.status === 'sanctioned' || selectedApp.status === 'committee_shortlisted') && (
                    <button
                      onClick={() => onOpenSanctionLetter(selectedApp)}
                      className="btn btn-saffron btn-md shadow-md font-bold rounded-xl shrink-0 cursor-pointer"
                    >
                      <Award className="w-4 h-4 text-white" />
                      <span>Download Sanction Letter</span>
                    </button>
                  )}
                </div>

                {/* Candidate Overview Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Tribe / Community</span>
                    <span className="font-bold text-slate-800 text-sm">{selectedApp.tribeGroup}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Annual Income</span>
                    <span className="font-bold text-slate-800 text-sm">₹{(selectedApp.annualFamilyIncome / 100000).toFixed(2)} Lakh</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Academic Merit</span>
                    <span className="font-bold text-emerald-700 text-sm">{selectedApp.percentageScore}%</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">AI Eligibility Score</span>
                    <span className="font-bold text-blue-700 text-sm">{selectedApp.aiEligibilityScore} / 100</span>
                  </div>
                </div>

                {/* 5-Stage Verification Pipeline */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Official End-to-End Verification Pipeline:
                  </h4>

                  <div className="relative pl-7 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    
                    {/* Stage 1 */}
                    <div className="relative">
                      <div className="absolute -left-[28px] top-0.5 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                        ✓
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">Stage 1: Digital Application & DigiLocker Fetch</h5>
                        <p className="text-xs text-slate-500 mt-0.5">Aadhaar biometric matching completed; ST certificate hash synced with MeitY repository.</p>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="relative">
                      <div className={`absolute -left-[28px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                        selectedApp.status === 'deficiency_flagged'
                          ? 'bg-rose-600 text-white'
                          : 'bg-emerald-600 text-white'
                      }`}>
                        {selectedApp.status === 'deficiency_flagged' ? '!' : '✓'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-bold text-slate-900">Stage 2: Netra-ST AI OCR & Document Forensic Audit</h5>
                          <button
                            onClick={onOpenOcrStudio}
                            className="text-xs text-emerald-700 hover:underline font-bold"
                          >
                            (Inspect in AI OCR Studio)
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {selectedApp.status === 'deficiency_flagged'
                            ? 'AI flagged potential document irregularity or expiration.'
                            : 'All neural layers passed. Gazette cross-verification 100% matched.'}
                        </p>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="relative">
                      <div className={`absolute -left-[28px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                        selectedApp.status === 'under_scrutiny'
                          ? 'bg-amber-500 text-white animate-pulse'
                          : selectedApp.status === 'sanctioned' || selectedApp.status === 'committee_shortlisted'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {selectedApp.status === 'sanctioned' || selectedApp.status === 'committee_shortlisted' ? '✓' : '3'}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">Stage 3: Ministry Scrutiny Officer Verification</h5>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Independent desk officer audit against MoTA Scheme Guidelines 2026.
                        </p>
                      </div>
                    </div>

                    {/* Stage 4 */}
                    <div className="relative">
                      <div className={`absolute -left-[28px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                        selectedApp.status === 'sanctioned'
                          ? 'bg-emerald-600 text-white'
                          : selectedApp.status === 'committee_shortlisted'
                          ? 'bg-purple-600 text-white animate-pulse'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {selectedApp.status === 'sanctioned' ? '✓' : '4'}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">Stage 4: National Steering & Sanction Committee Selection</h5>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Merit ranking, PVTG inclusion quota, and inter-state equitable seat allocation.
                        </p>
                      </div>
                    </div>

                    {/* Stage 5 */}
                    <div className="relative">
                      <div className={`absolute -left-[28px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                        selectedApp.status === 'sanctioned'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {selectedApp.status === 'sanctioned' ? '✓' : '5'}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">Stage 5: PFMS Direct Benefit Transfer (DBT) Escrow Release</h5>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Bi-monthly stipend disbursement directly credited into Aadhaar-seeded bank account.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* DEFICIENCY RESOLUTION CARD IF DEFICIENT */}
                {selectedApp.status === 'deficiency_flagged' && (
                  <div className="p-6 bg-rose-50 border border-rose-300 rounded-2xl space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-extrabold text-rose-900 uppercase tracking-wide">
                            Setu-AI Deficiency Auto-Detector: {selectedApp.deficiencies.length} Issues Identified
                          </h4>
                          <p className="text-xs text-rose-700 mt-1">
                            Do not worry. You can re-upload the corrected documents below without having your application rejected.
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={onOpenVoiceAssistant}
                        className="btn btn-secondary btn-sm text-xs shrink-0 border-rose-300 font-bold"
                      >
                        🔊 Listen in Tribal Audio
                      </button>
                    </div>

                    <div className="space-y-2 pt-1">
                      {selectedApp.deficiencies.map((def, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-white rounded-xl border border-rose-200 text-xs text-slate-800 flex items-start gap-2.5 shadow-xs"
                        >
                          <span className="font-bold text-rose-600">{idx + 1}.</span>
                          <span>{def}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-slate-700 font-medium">
                        Upload corrected FY 2025-26 certificate signed by Tehsildar:
                      </span>
                      <button
                        onClick={() => {
                          onResolveDeficiency(selectedApp.id);
                          confetti({ particleCount: 50 });
                        }}
                        className="btn btn-emerald btn-md shadow-xs font-bold rounded-xl"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Upload Corrected Document & Re-Scrutinize</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

        {/* =====================================================================
            TAB 3: INSTANT SCHEME FINDER & ELIGIBILITY ADVISOR
            ===================================================================== */}
        {activeTab === 'finder' && (
          <div className="card p-8 md:p-12 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-8 max-w-4xl mx-auto">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200 mb-2">
                <Compass className="w-4 h-4 text-blue-600" />
                <span>30-Second Interactive Advisor</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                Find the Right Ministry Scheme for You
              </h3>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                Answer two quick questions to discover your maximum scholarship entitlement, eligibility rules, and application deadline.
              </p>
            </div>

            {/* Question 1: Education Level */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                Step 1: What is your current educational program?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { id: 'phd_india', label: 'Ph.D. / M.Phil in India', sub: 'UGC/CSIR recognized University' },
                  { id: 'abroad', label: 'Master / Ph.D. Abroad', sub: 'QS World Top 500 University' },
                  { id: 'premier_iit', label: 'Premier Institute (IIT/IIM/AIIMS)', sub: 'Top Class Notified Institutes' },
                  { id: 'college', label: 'College Degree / Diploma (UG/PG)', sub: 'State-Centre Post-Matric' },
                  { id: 'school', label: 'School (Class 9 or 10)', sub: 'Pre-Matric Scholarship' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFinderEducation(item.id as any)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition ${
                      finderEducation === item.id
                        ? 'border-emerald-600 bg-emerald-50/80 font-bold text-emerald-950 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <p className="text-sm font-bold">{item.label}</p>
                    <p className="text-xs text-slate-500 font-normal mt-1">{item.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Match Result Card */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl space-y-4">
              <span className="badge badge-emerald text-xs font-bold">
                ✓ Best Recommended Ministry Scheme
              </span>

              <div>
                <h4 className="text-xl md:text-2xl font-black text-slate-900">
                  {finderEducation === 'phd_india' && 'NFST: National Fellowship for Scheduled Tribe Students'}
                  {finderEducation === 'abroad' && 'NOS: National Overseas Scholarship for ST Candidates'}
                  {finderEducation === 'premier_iit' && 'Top Class Education Scheme in Premier Institutes (IITs/IIMs)'}
                  {finderEducation === 'college' && 'Centrally Sponsored Post-Matric Scholarship for ST Students'}
                  {finderEducation === 'school' && 'Centrally Sponsored Pre-Matric Scholarship for ST Students (Class 9 & 10)'}
                </h4>

                <p className="text-sm text-slate-700 mt-2 font-medium">
                  {finderEducation === 'phd_india' && 'Full monthly fellowship of ₹31,000/mo (JRF) to ₹35,000/mo (SRF) + HRA + ₹12,000–₹20,000 annual research contingency.'}
                  {finderEducation === 'abroad' && '100% Tuition Fees covered + USD $15,400 / GBP £9,900 annual living allowance + Economy Airfare & Visa fees.'}
                  {finderEducation === 'premier_iit' && '100% Non-refundable Tuition Fee + ₹86,000/yr Living Allowance + ₹45,000 One-time Computer/Laptop Grant.'}
                  {finderEducation === 'college' && 'State-Centre shared DBT maintenance allowance (₹2,500–₹13,500/yr) + all compulsory academic course fees.'}
                  {finderEducation === 'school' && '₹3,500/year (Day Scholars) or ₹7,000/year (Hostellers) + annual book grant to support secondary education retention.'}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    let code: SchemeCode = 'NFST';
                    if (finderEducation === 'abroad') code = 'NOS';
                    if (finderEducation === 'premier_iit') code = 'TOP_CLASS';
                    if (finderEducation === 'college') code = 'POST_MATRIC' as SchemeCode;
                    if (finderEducation === 'school') code = 'PRE_MATRIC' as SchemeCode;
                    setFormData({ ...formData, schemeCode: code });
                    setIsApplying(true);
                  }}
                  className="btn btn-primary btn-md font-extrabold text-sm rounded-xl cursor-pointer"
                >
                  <span>Apply for this Scheme Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenSchemeRepo}
                  className="btn btn-secondary btn-md font-bold text-xs rounded-xl cursor-pointer"
                >
                  <span>View Official Ministry Circular</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* =========================================================================
          SPACIOUS APPLICATION FORM MODAL
          ========================================================================= */}
      {isApplying && (
        <div className="modal-overlay">
          <div className="modal-content max-w-2xl p-6 md:p-10 relative rounded-3xl shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Apply for MoTA Scheme 2026-27
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Integrated Paperless Application Form for Scheduled Tribe Scholars
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsApplying(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-extrabold text-slate-700 block mb-1">Select Scheme</label>
                  <select
                    value={formData.schemeCode}
                    onChange={(e) => setFormData({ ...formData, schemeCode: e.target.value as SchemeCode })}
                    className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="NFST">NFST - National Fellowship for ST (Ph.D. in India)</option>
                    <option value="NOS">NOS - National Overseas Scholarship (Master/Ph.D. Abroad)</option>
                    <option value="TOP_CLASS">Top Class Scholarship (IITs, IIMs, NITs, AIIMS)</option>
                    <option value="POST_MATRIC">Post-Matric Scholarship (College & Degree)</option>
                    <option value="PRE_MATRIC">Pre-Matric Scholarship (Class 9 & 10)</option>
                  </select>
                </div>

                <div>
                  <label className="font-extrabold text-slate-700 block mb-1">Applicant Full Name</label>
                  <input
                    type="text"
                    value={formData.applicantName}
                    onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="font-extrabold text-slate-700 block mb-1">Tribe Community</label>
                  <input
                    type="text"
                    value={formData.tribeGroup}
                    onChange={(e) => setFormData({ ...formData, tribeGroup: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="e.g. Santhal, Gond, Bhil, Munda"
                    required
                  />
                </div>

                <div>
                  <label className="font-extrabold text-slate-700 block mb-1">State / UT</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="font-extrabold text-slate-700 block mb-1">Annual Family Income (INR)</label>
                  <input
                    type="number"
                    value={formData.annualFamilyIncome}
                    onChange={(e) => setFormData({ ...formData, annualFamilyIncome: Number(e.target.value) })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="font-extrabold text-slate-700 block mb-1">Qualifying Marks / CGPA (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.percentageScore}
                    onChange={(e) => setFormData({ ...formData, percentageScore: Number(e.target.value) })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-extrabold text-slate-700 block mb-1">University / Institute / School</label>
                  <input
                    type="text"
                    value={formData.universityName}
                    onChange={(e) => setFormData({ ...formData, universityName: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-extrabold text-slate-700 block mb-1">Course & Research Title</label>
                  <input
                    type="text"
                    value={formData.courseOfStudy}
                    onChange={(e) => setFormData({ ...formData, courseOfStudy: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-emerald-950 text-xs flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Netra-ST AI will automatically verify your caste certificate against the Central Tribal Gazette and trigger DigiLocker authentication.</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="btn btn-secondary btn-md rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-md font-bold rounded-xl cursor-pointer"
                >
                  Submit Application with AI Pre-Audit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
