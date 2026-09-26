import React, { useState } from 'react';
import type { ApplicationRecord } from '../types';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Sparkles, 
  Search, 
  Layers, 
  ArrowUpRight,
  TrendingDown,
  UserCheck,
  Send,
  ShieldCheck,
  FileText,
  BadgeAlert
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScrutinyDeskProps {
  applications: ApplicationRecord[];
  onApproveApplication: (id: string) => void;
  onFlagDeficiency: (id: string, reason: string) => void;
  onRejectApplication: (id: string, reason: string) => void;
  onOpenOcrStudio: () => void;
}

export const ScrutinyOfficerDesk: React.FC<ScrutinyDeskProps> = ({
  applications,
  onApproveApplication,
  onFlagDeficiency,
  onRejectApplication,
  onOpenOcrStudio
}) => {
  const [selectedAppId, setSelectedAppId] = useState<string>(applications[0]?.id || '');
  const [filterScheme, setFilterScheme] = useState<string>('ALL');
  const [filterQueueType, setFilterQueueType] = useState<'ALL' | 'AUTO_APPROVE' | 'PVTG' | 'DEFICIENT'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [deficiencyReason, setDeficiencyReason] = useState('Income certificate does not reflect current financial year. Please upload updated certificate.');

  const selectedApp = applications.find(a => a.id === selectedAppId) || applications[0];

  const filteredApps = applications.filter(app => {
    const matchesScheme = filterScheme === 'ALL' || app.schemeCode === filterScheme;
    const matchesSearch = app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.tribeGroup.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesQueue = true;
    if (filterQueueType === 'AUTO_APPROVE') matchesQueue = app.aiRecommendedAction === 'AUTO_APPROVE';
    if (filterQueueType === 'PVTG') matchesQueue = app.isPVTG;
    if (filterQueueType === 'DEFICIENT') matchesQueue = app.status === 'deficiency_flagged';

    return matchesScheme && matchesSearch && matchesQueue;
  });

  const handleApprove = () => {
    if (!selectedApp) return;
    onApproveApplication(selectedApp.id);
    confetti({ particleCount: 60, spread: 65 });
  };

  const handleFlagDeficiency = () => {
    if (!selectedApp) return;
    onFlagDeficiency(selectedApp.id, deficiencyReason);
  };

  return (
    <div className="space-y-6">
      
      {/* Officer Efficiency KPI Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4.5 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border-emerald-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Avg Scrutiny Cycle</span>
            <TrendingDown className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">3.5 Mins</h3>
            <span className="text-[11px] text-emerald-700 font-semibold">Reduced from 42 days (91% time saved)</span>
          </div>
        </div>

        <div className="card p-4.5 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 border-blue-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">AI Pre-Verified Queue</span>
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">94.8%</h3>
            <span className="text-[11px] text-blue-700 font-semibold">High neural gazette match rate</span>
          </div>
        </div>

        <div className="card p-4.5 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border-amber-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Deficiencies Auto-Caught</span>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">18.2%</h3>
            <span className="text-[11px] text-amber-700 font-semibold">Prevented wrongful rejection</span>
          </div>
        </div>

        <div className="card p-4.5 bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 border-purple-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">PVTG Priority Queue</span>
            <UserCheck className="w-4 h-4 text-purple-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">100%</h3>
            <span className="text-[11px] text-purple-700 font-semibold">Zero-delay supernumerary track</span>
          </div>
        </div>
      </div>

      {/* Main Scrutiny Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Applications Verification Queue */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Filter & Search Bar */}
          <div className="card p-4 space-y-3">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search applicant name, ST tribe, app #..."
                className="w-full text-xs bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 font-medium"
              />
            </div>

            {/* Scheme Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] pb-1">
              <span className="text-slate-400 font-bold shrink-0">Scheme:</span>
              {['ALL', 'NFST', 'NOS', 'TOP_CLASS'].map((code) => (
                <button
                  key={code}
                  onClick={() => setFilterScheme(code)}
                  className={`px-2.5 py-0.5 rounded font-bold transition cursor-pointer shrink-0 ${
                    filterScheme === code
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Special Queue Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] pt-1 border-t border-slate-100">
              <span className="text-slate-400 font-bold shrink-0">Queue:</span>
              {[
                { id: 'ALL', label: 'All Items' },
                { id: 'AUTO_APPROVE', label: '⚡ AI Pre-Approved' },
                { id: 'PVTG', label: '🌿 PVTG Fast-Track' },
                { id: 'DEFICIENT', label: '⚠️ Needs Remedy' }
              ].map((q) => (
                <button
                  key={q.id}
                  onClick={() => setFilterQueueType(q.id as any)}
                  className={`px-2 py-0.5 rounded font-bold transition cursor-pointer shrink-0 ${
                    filterQueueType === q.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Queue List */}
          <div className="space-y-2.5">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`card p-4 cursor-pointer transition relative ${
                  selectedApp?.id === app.id
                    ? 'border-blue-600 ring-2 ring-blue-500/15 shadow-md bg-white'
                    : 'card-hover bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="badge badge-gray text-[10px] font-mono font-bold">{app.schemeCode}</span>
                      {app.isPVTG && <span className="badge badge-emerald text-[10px] font-bold">PVTG</span>}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">
                      {app.applicantName}
                    </h4>
                  </div>

                  <span className={`badge text-[10px] font-bold ${
                    app.aiRecommendedAction === 'AUTO_APPROVE'
                      ? 'badge-emerald'
                      : 'badge-rose'
                  }`}>
                    AI: {app.aiRecommendedAction.replace('_', ' ')}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-1 mb-2 font-medium">
                  Tribe: <strong>{app.tribeGroup}</strong> &bull; {app.district}, {app.state}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <span>Score: <strong className="text-slate-800">{app.percentageScore}%</strong></span>
                  <span className="font-mono text-slate-600 font-bold">{app.applicationNumber}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Side-by-Side Officer Audit Workbench */}
        {selectedApp && (
          <div className="lg:col-span-7 space-y-4">
            
            <div className="card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-extrabold text-slate-900">{selectedApp.applicantName}</h3>
                    <span className="badge badge-blue text-xs font-mono font-bold">{selectedApp.schemeCode}</span>
                    {selectedApp.isPVTG && <span className="badge badge-emerald text-xs font-bold">PVTG Priority</span>}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {selectedApp.courseOfStudy} &bull; <strong className="text-slate-700">{selectedApp.universityName}</strong>
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block font-semibold">AI Match Confidence</span>
                  <span className="text-lg font-black text-emerald-700">{selectedApp.aiEligibilityScore}% Match</span>
                </div>
              </div>

              {/* Side-by-Side Cross Verification Matrix */}
              <div className="py-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>Side-by-Side Cross-Verification Matrix:</span>
                  </h4>
                  <button
                    onClick={onOpenOcrStudio}
                    className="text-xs text-blue-600 hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View Raw Document Scan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
                  <table className="custom-table text-xs">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Applicant Stated Value</th>
                        <th>Netra-ST AI OCR Extracted</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-700">Scheduled Tribe</td>
                        <td>{selectedApp.tribeGroup}</td>
                        <td className="font-mono text-emerald-900 bg-emerald-50/50 font-bold">
                          {selectedApp.tribeGroup} (Central Gazette Sl. Matched)
                        </td>
                        <td><span className="badge badge-emerald text-[10px]">✓ 100% Match</span></td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-700">Annual Family Income</td>
                        <td>₹{(selectedApp.annualFamilyIncome / 100000).toFixed(2)} Lakh</td>
                        <td className={`font-mono font-bold ${
                          selectedApp.status === 'deficiency_flagged'
                            ? 'text-rose-900 bg-rose-50/70'
                            : 'text-emerald-900 bg-emerald-50/50'
                        }`}>
                          ₹{(selectedApp.annualFamilyIncome / 100000).toFixed(2)} Lakh {selectedApp.status === 'deficiency_flagged' && '(Doc Expired 31-03-2025)'}
                        </td>
                        <td>
                          {selectedApp.status === 'deficiency_flagged' ? (
                            <span className="badge badge-rose text-[10px]">⚠️ Expired Cert</span>
                          ) : (
                            <span className="badge badge-emerald text-[10px]">✓ Ceiling Satisfied</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-700">Academic Merit</td>
                        <td>{selectedApp.percentageScore}%</td>
                        <td className="font-mono text-emerald-900 bg-emerald-50/50 font-bold">
                          {selectedApp.percentageScore}% (Transcripts Cross-Checked)
                        </td>
                        <td><span className="badge badge-emerald text-[10px]">✓ Verified</span></td>
                      </tr>
                      {selectedApp.schemeCode === 'NOS' && (
                        <tr>
                          <td className="font-bold text-slate-700">QS World Ranking</td>
                          <td>Rank #{selectedApp.qsWorldRank}</td>
                          <td className="font-mono text-emerald-900 bg-emerald-50/50 font-bold">
                            Rank #{selectedApp.qsWorldRank} ({selectedApp.universityName})
                          </td>
                          <td><span className="badge badge-emerald text-[10px]">✓ QS Top 500</span></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Scrutiny Decision Controls */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Officer Adjudication & Routing:
                </h4>

                {/* If deficiencies exist */}
                {selectedApp.status === 'deficiency_flagged' && (
                  <div className="mb-4 p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
                    <label className="text-xs font-bold text-rose-900 block">
                      Edit Deficiency Notice to Scholar:
                    </label>
                    <textarea
                      value={deficiencyReason}
                      onChange={(e) => setDeficiencyReason(e.target.value)}
                      className="w-full text-xs p-2.5 bg-white border border-rose-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium"
                      rows={2}
                    />
                    <button
                      onClick={handleFlagDeficiency}
                      className="btn btn-sm text-xs bg-rose-600 text-white hover:bg-rose-700 font-bold shadow-xs"
                    >
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Re-Dispatch Deficiency Alert to Scholar via SMS & Portal</span>
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleApprove}
                    disabled={selectedApp.status === 'sanctioned' || selectedApp.status === 'committee_shortlisted'}
                    className="btn btn-emerald btn-sm shadow-xs font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {selectedApp.status === 'sanctioned'
                        ? '✓ Sanctioned & Approved'
                        : selectedApp.status === 'committee_shortlisted'
                        ? '✓ Shortlisted for Sanction Committee'
                        : 'Verify & Forward to Sanction Committee'}
                    </span>
                  </button>

                  {selectedApp.status !== 'deficiency_flagged' && (
                    <button
                      onClick={handleFlagDeficiency}
                      className="btn btn-secondary btn-sm text-amber-900 border-amber-300 hover:bg-amber-50 font-bold"
                    >
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Flag Deficiency to Applicant</span>
                    </button>
                  )}

                  <button
                    onClick={() => onRejectApplication(selectedApp.id, 'Does not satisfy notified criteria')}
                    className="btn btn-secondary btn-sm text-rose-700 border-rose-300 hover:bg-rose-50 font-bold"
                  >
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
