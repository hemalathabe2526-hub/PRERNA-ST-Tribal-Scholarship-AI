import React, { useState } from 'react';
import { 
  ApplicationRecord, 
  ResearchMilestone 
} from '../types';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Sparkles, 
  Upload, 
  UserCheck, 
  TrendingUp, 
  AlertCircle,
  Receipt,
  Plane,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PostSelectionProps {
  applications: ApplicationRecord[];
  onOpenSanctionLetter: (app: ApplicationRecord) => void;
}

export const PostSelectionTracker: React.FC<PostSelectionProps> = ({
  applications,
  onOpenSanctionLetter
}) => {
  // Find a sanctioned or shortlisted scholar (default to Birsa Soren)
  const sanctionedScholars = applications.filter(a => a.status === 'sanctioned' || a.status === 'committee_shortlisted');
  const [selectedScholar, setSelectedScholar] = useState<ApplicationRecord>(sanctionedScholars[0] || applications[0]);
  const [activeTab, setActiveTab] = useState<'milestones' | 'contingency' | 'nos_overseas'>('milestones');
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [reportSubmittedSuccess, setReportSubmittedSuccess] = useState(false);

  const milestones: ResearchMilestone[] = selectedScholar?.researchMilestones || [];

  const handleMilestoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReport(false);
    setReportSubmittedSuccess(true);
    confetti({ particleCount: 70 });
  };

  const isNos = selectedScholar?.schemeCode === 'NOS';

  return (
    <div className="space-y-6">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold mb-2 border border-purple-400/30">
              <Award className="w-3.5 h-3.5 text-purple-300" />
              <span>Pragati-360: Post-Selection Fellowship Lifecycle Engine</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Ph.D. & Overseas Scholar Milestone, Progress & Stipend Management
            </h2>
            <p className="text-purple-100 text-xs mt-1 leading-relaxed">
              Automates bi-annual progress tracking, Research Guide digital counter-signatures, contingency voucher claims, and JRF-to-SRF stipend upgradation.
            </p>
          </div>

          <button
            onClick={() => onOpenSanctionLetter(selectedScholar)}
            className="btn btn-saffron btn-sm shadow-sm shrink-0 self-start md:self-auto"
          >
            <Award className="w-4 h-4 text-white" />
            <span>Official Sanction Letter</span>
          </button>
        </div>
      </div>

      {/* Scholar Switcher */}
      <div className="card p-4">
        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
          Select Awarded Tribal Scholar to View Research Tenure:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sanctionedScholars.map((scholar) => (
            <div
              key={scholar.id}
              onClick={() => setSelectedScholar(scholar)}
              className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                selectedScholar?.id === scholar.id
                  ? 'border-purple-600 bg-purple-50/50 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-slate-900">{scholar.applicantName}</h4>
                  <span className="badge badge-purple text-[10px] font-mono">{scholar.schemeCode}</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {scholar.courseOfStudy}
                </p>
                <p className="text-[10px] text-slate-400">
                  {scholar.universityName}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-emerald-700 block">Active Fellow</span>
                <span className="text-[10px] text-slate-400 font-mono">Yr 2 of 5</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="card p-5 space-y-5">
        
        {/* Scholar Tenure Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-4 border-b border-slate-200 text-xs">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[11px] block">Monthly Stipend Rate</span>
            <span className="font-bold text-slate-900">
              {isNos ? 'USD $1,283 / mo' : '₹31,000 / mo + HRA'}
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[11px] block">Total Disbursed to Date</span>
            <span className="font-bold text-emerald-700">₹{(selectedScholar.disbursedAmount || 105000).toLocaleString()}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[11px] block">Research Guide / Supervisor</span>
            <span className="font-bold text-slate-900">Prof. A. K. Banerjee</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[11px] block">JRF to SRF Upgradation</span>
            <span className="font-bold text-purple-700">Eligible (24 Mos Completed)</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 gap-2">
          <button
            onClick={() => setActiveTab('milestones')}
            className={`nav-tab text-xs py-2 ${activeTab === 'milestones' ? 'active' : ''}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Bi-Annual Research Milestones</span>
          </button>
          <button
            onClick={() => setActiveTab('contingency')}
            className={`nav-tab text-xs py-2 ${activeTab === 'contingency' ? 'active' : ''}`}
          >
            <Receipt className="w-3.5 h-3.5" />
            <span>Contingency & Lab Bill Claims</span>
          </button>
          {isNos && (
            <button
              onClick={() => setActiveTab('nos_overseas')}
              className={`nav-tab text-xs py-2 ${activeTab === 'nos_overseas' ? 'active' : ''}`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Overseas Embassy & Forex Desk</span>
            </button>
          )}
        </div>

        {/* TAB 1: Bi-Annual Milestones */}
        {activeTab === 'milestones' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Quarterly & Bi-Annual Ph.D. Research Progress Reports
                </h4>
                <p className="text-[11px] text-slate-500">
                  Required under MoTA Fellowship norms for uninterrupted monthly PFMS stipend crediting.
                </p>
              </div>

              <button
                onClick={() => setIsSubmittingReport(true)}
                className="btn btn-primary btn-sm"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Submit Next Quarter Progress</span>
              </button>
            </div>

            {reportSubmittedSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Q4 Progress Report uploaded and forwarded to Research Supervisor for digital endorsement!
                </span>
                <span className="text-[11px] font-mono">TOKEN: MOTA-REP-902</span>
              </div>
            )}

            <div className="space-y-3">
              {milestones.map((m) => (
                <div
                  key={m.milestoneNumber}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                        Q{m.milestoneNumber}
                      </span>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{m.period}</h5>
                        <p className="text-[11px] text-slate-600 font-medium">{m.reportTitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`badge text-[10px] ${
                        m.status === 'STIPEND_RELEASED'
                          ? 'badge-emerald'
                          : m.status === 'GUIDE_APPROVED'
                          ? 'badge-purple'
                          : 'badge-blue'
                      }`}>
                        {m.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] pt-2 border-t border-slate-100 bg-slate-50/60 p-2 rounded-lg">
                    <div>
                      <span className="text-slate-500 block">Supervisor Sign-off</span>
                      <span className="font-semibold text-slate-800">{m.guideName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">AI Originality Score</span>
                      <span className="font-bold text-emerald-700">{m.originalityScore}% Unique</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Quarterly Stipend</span>
                      <span className="font-mono font-bold text-slate-900">₹{m.stipendAmount.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Contingency Claim</span>
                      <span className="font-mono text-slate-800">₹{m.contingencyClaimed.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Contingency Claims */}
        {activeTab === 'contingency' && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs leading-relaxed">
              <h4 className="font-bold text-xs mb-1">Annual Research Contingency Grant Rules:</h4>
              <p>
                Scheduled Tribe research scholars under NFST are entitled to ₹12,000 per annum for humanities & social sciences, and ₹20,000 per annum for science, engineering & medical disciplines to cover books, specialized field surveys, and laboratory consumables.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold text-slate-900">Upload Lab / Survey Invoices for AI Auto-Audit</h5>
                <button
                  onClick={() => alert('Simulating Netra-ST invoice OCR audit: Receipt ₹8,400 verified for chemical consumables at IIT ISM Dhanbad.')}
                  className="btn btn-secondary btn-sm text-xs"
                >
                  <Upload className="w-3.5 h-3.5 text-slate-600" />
                  <span>Scan Receipt with Netra-ST</span>
                </button>
              </div>

              <div className="text-xs text-slate-500 space-y-1.5 pt-2">
                <div className="flex justify-between p-2 bg-slate-50 rounded border">
                  <span>Books & IEEE Journals (Inv #2026-091)</span>
                  <span className="font-mono font-bold text-slate-800">₹4,200 (Reimbursed)</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded border">
                  <span>Field Survey Travel to Jharia Coalfield Mines</span>
                  <span className="font-mono font-bold text-slate-800">₹7,000 (Reimbursed)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NOS Overseas */}
        {activeTab === 'nos_overseas' && isNos && (
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-blue-900 text-xs">
              <h4 className="font-bold text-xs mb-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-700" />
                Indian High Commission / Embassy Liaison Desk:
              </h4>
              <p className="mt-0.5">
                Overseas ST scholars must complete mandatory consular registration within 21 days of arrival in the host country for automated foreign currency living allowance release.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <span className="text-slate-500">Host Mission</span>
                <p className="font-bold text-slate-900">High Commission of India, London (UK)</p>
                <span className="badge badge-emerald text-[10px]">● Embassy Registered</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <span className="text-slate-500">Forex Disbursement Mode</span>
                <p className="font-bold text-slate-900">State Bank of India (UK Branch) Direct Wire</p>
                <span className="badge badge-blue text-[10px]">GBP £9,900 / year</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Progress Report Submission Modal */}
      {isSubmittingReport && (
        <div className="modal-overlay">
          <div className="modal-content max-w-lg p-6 relative">
            <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Submit Bi-Annual Progress Report</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter research milestone summary and upload guide signed endorsement
            </p>

            <form onSubmit={handleMilestoneSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Quarter / Period</label>
                <input
                  type="text"
                  defaultValue="Q4 (Jul 2026 - Sep 2026)"
                  className="w-full border border-slate-300 rounded p-2 text-xs"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Research Milestone Title</label>
                <input
                  type="text"
                  defaultValue="Bioreactor Column Trials & Field-Scale Phytoremediation Setup"
                  className="w-full border border-slate-300 rounded p-2 text-xs"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Upload Endorsed Report (.PDF)</label>
                <input
                  type="file"
                  className="w-full border border-slate-300 rounded p-1.5 text-xs bg-slate-50"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmittingReport(false)}
                  className="btn btn-secondary btn-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                >
                  Submit for Netra-ST Audit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
