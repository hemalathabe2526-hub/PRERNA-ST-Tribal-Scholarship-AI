import React, { useState } from 'react';
import { 
  Building2, 
  X, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe2,
  FileText,
  IndianRupee,
  Layers
} from 'lucide-react';
import { SCHEMES_DATA } from '../data/mockData';
import { SchemeInfo, SchemeCode } from '../types';

interface SchemeRepositoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSchemeToApply: (schemeCode: SchemeCode) => void;
}

export const SchemeRepositoryModal: React.FC<SchemeRepositoryModalProps> = ({
  isOpen,
  onClose,
  onSelectSchemeToApply
}) => {
  const [selectedScheme, setSelectedScheme] = useState<SchemeInfo>(SCHEMES_DATA[0]);
  const [filterType, setFilterType] = useState<'ALL' | 'Central Sector Scheme' | 'Centrally Sponsored Scheme'>('ALL');

  if (!isOpen) return null;

  const filteredSchemes = SCHEMES_DATA.filter(s => {
    if (filterType === 'ALL') return true;
    return s.schemeType === filterType;
  });

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-4xl p-6 md:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white flex items-center justify-center shadow-md shrink-0">
            <Building2 className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="badge badge-emerald text-[11px] font-bold">
                Official Ministry Registry
              </span>
              <span className="text-xs text-slate-500 font-mono">
                dbttribal.gov.in & tribal.nic.in Reference
              </span>
            </div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight mt-0.5">
              Integrated National MoTA Scholarship & Fellowship Repository
            </h3>
            <p className="text-xs text-slate-500">
              Complete central directory of 5 notified higher education and school schemes with Next-Gen AI Automation.
            </p>
          </div>
        </div>

        {/* Filter Bar: Central Sector vs Centrally Sponsored */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-600">Filter By Fund Type:</span>
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                filterType === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All 5 Schemes
            </button>
            <button
              onClick={() => setFilterType('Central Sector Scheme')}
              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                filterType === 'Central Sector Scheme'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Central Sector (100% Central MoTA)
            </button>
            <button
              onClick={() => setFilterType('Centrally Sponsored Scheme')}
              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                filterType === 'Centrally Sponsored Scheme'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Centrally Sponsored (State-Centre 60:40)
            </button>
          </div>

          <span className="text-[11px] text-emerald-800 font-bold bg-emerald-100/70 px-2.5 py-1 rounded-md">
            Live Central DBT Synchronized
          </span>
        </div>

        {/* Two-Column Layout: Scheme Directory Table + Deep AI Upgrade Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column: Scheme List with Official Codes */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Select Notified Scheme to Inspect:
            </span>

            {filteredSchemes.map((s) => (
              <div
                key={s.code}
                onClick={() => setSelectedScheme(s)}
                className={`p-3 rounded-xl border cursor-pointer transition flex flex-col justify-between ${
                  selectedScheme.code === s.code
                    ? 'border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-500/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded">
                    Code: {s.officialMoTACode}
                  </span>
                  <span className={`badge text-[10px] font-bold ${
                    s.schemeType === 'Central Sector Scheme' ? 'badge-emerald' : 'badge-blue'
                  }`}>
                    {s.schemeType === 'Central Sector Scheme' ? 'Central 100%' : 'State-Shared'}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-900 line-clamp-1 mt-0.5">
                  {s.name}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {s.stipendAmount}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Deep Scheme Intelligence & Next-Gen Innovation Breakdown */}
          <div className="lg:col-span-7 card p-5 bg-white border border-slate-200 space-y-4">
            
            <div className="pb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Official Code: {selectedScheme.officialMoTACode}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {selectedScheme.benefitType}
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-900 mt-1">
                  {selectedScheme.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  {selectedScheme.nameHindi}
                </p>
              </div>

              <button
                onClick={() => {
                  onSelectSchemeToApply(selectedScheme.code);
                  onClose();
                }}
                className="btn btn-primary btn-sm font-bold shrink-0 self-start sm:self-auto"
              >
                <span>Apply for {selectedScheme.code}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Scheme Parameter Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Annual Budget Allocation</span>
                <span className="font-bold text-slate-900">{selectedScheme.annualBudget}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Total Target Seats</span>
                <span className="font-bold text-slate-900">{selectedScheme.totalSeats}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Tenure / Duration</span>
                <span className="font-bold text-slate-900">{selectedScheme.tenure}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Application Deadline</span>
                <span className="font-bold text-emerald-700">{selectedScheme.deadline}</span>
              </div>
            </div>

            {/* Eligibility Summary */}
            <div className="text-xs">
              <span className="font-bold text-slate-700 block mb-1">Eligibility Criteria:</span>
              <p className="p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-lg text-emerald-950 font-medium leading-relaxed">
                {selectedScheme.eligibilitySummary}
              </p>
            </div>

            {/* NEXT-GEN INNOVATION UPGRADE HIGHLIGHTS */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>PRERNA-ST Next-Gen AI Innovations vs Legacy Portal:</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                {(selectedScheme?.aiFeatures || []).map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-slate-50 rounded-lg border border-slate-200/80 flex items-start gap-2 text-slate-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Official data referenced from Ministry of Tribal Affairs (tribal.nic.in & dbttribal.gov.in)
          </span>
          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            Close Repository
          </button>
        </div>

      </div>
    </div>
  );
};
