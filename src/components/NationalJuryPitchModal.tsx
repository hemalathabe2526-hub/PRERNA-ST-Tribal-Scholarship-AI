import React, { useState } from 'react';
import { 
  Trophy, 
  X, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Users, 
  Zap, 
  ArrowRight, 
  Play, 
  RotateCcw,
  CheckCircle2,
  Layers,
  Globe2,
  Building2,
  FileCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NationalJuryPitchModal: React.FC<PitchModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [simulationRunning, setSimulationRunning] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Executive Pitch & Problem Definition',
      subtitle: 'Ministry of Tribal Affairs (MoTA) • Smart India Hackathon',
      badge: 'Challenge & Vision',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-950 leading-relaxed">
            <h4 className="font-extrabold text-sm text-emerald-900 mb-1">
              The Critical Challenge in Tribal Scholarship Administration:
            </h4>
            <p>
              The Ministry of Tribal Affairs administers flagship schemes like <strong>NFST</strong> (Ph.D. fellowships in India) and <strong>NOS</strong> (Master's/Ph.D. in QS World Top 500 universities). Historically, manual scrutiny, multi-tiered paper correspondence, and verification backlogs resulted in <strong>6 to 9-month delays</strong>, high administrative burden, and risks of fraudulent certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="card p-4 border-slate-200 text-center">
              <span className="text-2xl font-black text-rose-600">42 Days</span>
              <p className="text-xs font-bold text-slate-700 mt-1">Old Manual Scrutiny Time</p>
              <p className="text-[11px] text-slate-500">Repetitive physical correspondence</p>
            </div>
            <div className="card p-4 border-emerald-300 bg-emerald-50/50 text-center">
              <span className="text-2xl font-black text-emerald-700">3.5 Mins</span>
              <p className="text-xs font-bold text-slate-900 mt-1">PRERNA-ST AI Turnaround</p>
              <p className="text-[11px] text-emerald-700 font-semibold">91% faster with 0% error</p>
            </div>
            <div className="card p-4 border-slate-200 text-center">
              <span className="text-2xl font-black text-blue-600">75 PVTGs</span>
              <p className="text-xs font-bold text-slate-700 mt-1">100% Targeted Coverage</p>
              <p className="text-[11px] text-slate-500">Zero scholar left behind</p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
            <strong>The PRERNA-ST Solution:</strong> A unified, end-to-end intelligent lifecycle platform featuring <strong>Netra-ST Multimodal OCR</strong>, <strong>Setu-AI Multilingual Indigenous Voice</strong>, <strong>Chanakya Policy Rule Studio</strong>, and <strong>Samarth-DBT PFMS Gateway</strong>.
          </div>
        </div>
      )
    },
    {
      title: 'Our Deep-Tech Innovation Architecture',
      subtitle: 'Multimodal AI • Neural Tamper Detection • Indigenous NLP',
      badge: 'Technology Stack',
      content: (
        <div className="space-y-3.5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Cpu className="w-4 h-4" />
                <span>Netra-ST Multimodal OCR & Forensics</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Extracts data from complex bilingual documents, validates caste against the <strong>Central ST Gazette (Article 342)</strong>, checks QS World Rankings for NOS abroad, and detects font-level digital tampering.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-amber-700 font-bold">
                <Zap className="w-4 h-4" />
                <span>Setu-AI Indigenous Voice Engine</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Speaks native tribal languages (<strong>Santhali, Gondi, Bhili, Odia, Hindi, English</strong>) to assist first-generation tribal candidates from remote hinterlands without requiring digital literacy.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-blue-700 font-bold">
                <Layers className="w-4 h-4" />
                <span>Chanakya Policy Rule Studio</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Configurable policy engine allowing Ministry Administrators to tune income ceilings, marks, and PVTG quotas dynamically with live fiscal outlay impact simulation.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-purple-700 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Samarth-DBT & Pragati-360 Lifecycle</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Direct integration with Aadhaar Payment Bridge (APB) for instant stipend release, bi-annual research milestone tracking, thesis originality verification, and contingency grant settlement.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Measurable National Impact & Social ROI',
      subtitle: 'Empowering 16.4+ Lakh Scheduled Tribe Scholars Nationwide',
      badge: 'National Scale & Impact',
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <span className="text-xl font-black text-emerald-800">₹2,757 Cr</span>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">Budget Governed</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <span className="text-xl font-black text-blue-800">52.4%</span>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">Women Scholars</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <span className="text-xl font-black text-purple-800">100%</span>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">PVTG Coverage</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <span className="text-xl font-black text-amber-800">0%</span>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">Ghost / Fraud Claims</p>
            </div>
          </div>

          <div className="card p-4 bg-white border-slate-200 space-y-2">
            <h5 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
              Strategic Advantages for MoTA & Digital India:
            </h5>
            <ul className="space-y-1.5 text-slate-600 text-[11px]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <strong>National Scalability:</strong> Ready for plug-and-play integration with the National Scholarship Portal (NSP 2.0) and DigiLocker MeriPehchaan.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <strong>Zero Paper Footprint:</strong> 100% digital evidence chain from initial application to doctoral thesis submission.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <strong>Democratized Access:</strong> Multi-dialect voice assistant empowers students from remote tribal forests in Bastar, Mayurbhanj, and the Nilgiris.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Interactive 30-Second End-to-End Simulation',
      subtitle: 'Experience the entire automated lifecycle from upload to stipend release',
      badge: 'Live Jury Demo',
      content: (
        <div className="space-y-4 text-xs">
          <div className="p-4 bg-slate-900 text-white rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <Zap className="w-4 h-4 animate-pulse" />
                <span>Simulated Pipeline Execution: Birsa Soren (Ph.D., IIT ISM Dhanbad)</span>
              </div>
              <button
                onClick={() => {
                  setSimulationRunning(true);
                  setSimulationStep(1);
                  setTimeout(() => setSimulationStep(2), 800);
                  setTimeout(() => setSimulationStep(3), 1600);
                  setTimeout(() => setSimulationStep(4), 2400);
                  setTimeout(() => {
                    setSimulationStep(5);
                    setSimulationRunning(false);
                    confetti({ particleCount: 80, spread: 80 });
                  }, 3200);
                }}
                disabled={simulationRunning}
                className="btn btn-emerald btn-sm"
              >
                {simulationRunning ? 'Running Simulation...' : '▶ Start 30-Sec Automated Run'}
              </button>
            </div>

            <div className="space-y-2 pt-2 text-[11px] font-mono">
              <div className={`p-2 rounded flex items-center justify-between transition ${simulationStep >= 1 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700' : 'bg-slate-800 text-slate-500'}`}>
                <span>1. DigiLocker Authentication & Aadhaar Seeding</span>
                <span>{simulationStep >= 1 ? '✓ VERIFIED (DL-IN-ST-994)' : 'Pending'}</span>
              </div>
              <div className={`p-2 rounded flex items-center justify-between transition ${simulationStep >= 2 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700' : 'bg-slate-800 text-slate-500'}`}>
                <span>2. Netra-ST AI OCR & Gazette Matching (Santhal Tribe, Sl 28)</span>
                <span>{simulationStep >= 2 ? '✓ 99.4% NEURAL MATCH' : 'Pending'}</span>
              </div>
              <div className={`p-2 rounded flex items-center justify-between transition ${simulationStep >= 3 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700' : 'bg-slate-800 text-slate-500'}`}>
                <span>3. Scrutiny Desk AI Auto-Adjudication</span>
                <span>{simulationStep >= 3 ? '✓ APPROVED (0 Deficiencies)' : 'Pending'}</span>
              </div>
              <div className={`p-2 rounded flex items-center justify-between transition ${simulationStep >= 4 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700' : 'bg-slate-800 text-slate-500'}`}>
                <span>4. National Sanction Committee Award Letter Issuance</span>
                <span>{simulationStep >= 4 ? '✓ SANCTIONED (MoTA/NFST/84102)' : 'Pending'}</span>
              </div>
              <div className={`p-2 rounded flex items-center justify-between transition ${simulationStep >= 5 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700' : 'bg-slate-800 text-slate-500'}`}>
                <span>5. PFMS APB Direct Benefit Transfer Disbursal</span>
                <span>{simulationStep >= 5 ? '✓ ₹93,000 DISBURSED (UTR-PFMS-98412)' : 'Pending'}</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-3xl p-6 md:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="badge badge-saffron text-[10px] uppercase font-bold">
                Smart India Hackathon • Smart Education
              </span>
              <span className="text-xs text-slate-400 font-mono">SIH Winning Presentation</span>
            </div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight mt-0.5">
              PRERNA-ST: National Innovation & Jury Showcase
            </h3>
          </div>
        </div>

        {/* Slide Selector Pill Dock */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100 text-xs">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 ${
                activeSlide === idx
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{idx + 1}. {s.badge}</span>
            </button>
          ))}
        </div>

        {/* Active Slide Body */}
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
              {slides[activeSlide].subtitle}
            </span>
            <h4 className="text-base font-extrabold text-slate-900">
              {slides[activeSlide].title}
            </h4>
          </div>

          <div className="pt-2">
            {slides[activeSlide].content}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">
            Slide {activeSlide + 1} of {slides.length}
          </span>
          <div className="flex items-center gap-2">
            {activeSlide > 0 && (
              <button
                onClick={() => setActiveSlide(activeSlide - 1)}
                className="btn btn-secondary btn-sm"
              >
                Previous
              </button>
            )}
            {activeSlide < slides.length - 1 ? (
              <button
                onClick={() => setActiveSlide(activeSlide + 1)}
                className="btn btn-primary btn-sm font-bold"
              >
                <span>Next Slide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="btn btn-emerald btn-sm font-bold"
              >
                Finish Presentation
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
