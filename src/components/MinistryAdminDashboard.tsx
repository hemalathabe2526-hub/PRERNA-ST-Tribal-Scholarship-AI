import React, { useState } from 'react';
import type { 
  SchemeInfo, 
  SchemePolicyRules, 
  ApplicationRecord 
} from '../types';
import { 
  STATE_TRIBAL_STATS, 
  INITIAL_POLICY_RULES 
} from '../data/mockData';
import { 
  IndianRupee, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Globe2, 
  FileSpreadsheet,
  SlidersHorizontal,
  Building2,
  ShieldCheck,
  Activity,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MinistryAdminProps {
  schemes: SchemeInfo[];
  applications: ApplicationRecord[];
  onSanctionBatch: () => void;
}

export const MinistryAdminDashboard: React.FC<MinistryAdminProps> = ({
  schemes,
  applications,
  onSanctionBatch
}) => {
  const [selectedSchemeCode, setSelectedSchemeCode] = useState<string>('NFST');
  const [policyRules, setPolicyRules] = useState<Record<string, SchemePolicyRules>>(INITIAL_POLICY_RULES);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isDisbursing, setIsDisbursing] = useState(false);
  const [disbursementSuccess, setDisbursementSuccess] = useState(false);

  const currentRules = policyRules[selectedSchemeCode] || policyRules['NFST'];

  const handleRuleChange = (field: keyof SchemePolicyRules, value: number) => {
    setPolicyRules({
      ...policyRules,
      [selectedSchemeCode]: {
        ...currentRules,
        [field]: value
      }
    });
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      confetti({ particleCount: 50, spread: 60 });
    }, 700);
  };

  const triggerPFMSRelease = () => {
    setIsDisbursing(true);
    setTimeout(() => {
      setIsDisbursing(false);
      setDisbursementSuccess(true);
      onSanctionBatch();
      confetti({ particleCount: 90, spread: 80 });
    }, 1400);
  };

  // Dynamic simulation calculations
  const projectedApplicants = Math.round(
    (currentRules.maxIncomeCeiling / 800000) * 4200 * (1 - (currentRules.minAcademicPercentage - 50) * 0.02)
  );
  const projectedOutlayCr = ((projectedApplicants * 380000) / 10000000).toFixed(2);

  return (
    <div className="space-y-6">
      
      {/* Ministry Top KPI Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4.5 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 border-blue-200">
          <div className="flex items-center justify-between text-blue-900">
            <span className="text-xs font-bold uppercase tracking-wider">Total MoTA Budget Outlay</span>
            <IndianRupee className="w-4 h-4 text-blue-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">₹2,757.50 Cr</h3>
            <span className="text-[11px] text-blue-700 font-semibold">94.2% direct APB transfer rate</span>
          </div>
        </div>

        <div className="card p-4.5 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border-emerald-200">
          <div className="flex items-center justify-between text-emerald-900">
            <span className="text-xs font-bold uppercase tracking-wider">Sanctioned ST Scholars</span>
            <Users className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">16,42,800</h3>
            <span className="text-[11px] text-emerald-700 font-semibold">Higher Education & Research</span>
          </div>
        </div>

        <div className="card p-4.5 bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 border-purple-200">
          <div className="flex items-center justify-between text-purple-900">
            <span className="text-xs font-bold uppercase tracking-wider">Female Scholar Parity</span>
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">52.4%</h3>
            <span className="text-[11px] text-purple-700 font-semibold">Surpasses 33% mandatory target</span>
          </div>
        </div>

        <div className="card p-4.5 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border-amber-200">
          <div className="flex items-center justify-between text-amber-900">
            <span className="text-xs font-bold uppercase tracking-wider">PVTG District Coverage</span>
            <Sparkles className="w-4 h-4 text-amber-600" />
          </div>
          <div className="mt-2.5">
            <h3 className="text-2xl font-black text-slate-900">75 PVTGs</h3>
            <span className="text-[11px] text-amber-700 font-semibold">100% District Cell saturation</span>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Configurable Policy Studio + Live PFMS DBT Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: "Chanakya" Configurable Scheme Policy Rule Studio */}
        <div className="lg:col-span-7 card p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                <h3 className="text-base font-extrabold text-slate-900">
                  Chanakya Policy Studio: Configurable Scheme Rules
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Tune criteria thresholds and reservations dynamically without modifying backend code.
              </p>
            </div>

            {/* Scheme Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              {['NFST', 'NOS', 'TOP_CLASS'].map((code) => (
                <button
                  key={code}
                  onClick={() => setSelectedSchemeCode(code)}
                  className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                    selectedSchemeCode === code
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="space-y-4 text-xs">
            
            {/* Slider 1: Income Ceiling */}
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Maximum Annual Family Income Ceiling:</span>
                <span className="font-mono text-indigo-700 font-extrabold">
                  ₹{(currentRules.maxIncomeCeiling / 100000).toFixed(1)} Lakhs
                </span>
              </div>
              <input
                type="range"
                min="250000"
                max="1000000"
                step="50000"
                value={currentRules.maxIncomeCeiling}
                onChange={(e) => handleRuleChange('maxIncomeCeiling', Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>₹2.5L</span>
                <span>₹6.0L (Standard)</span>
                <span>₹8.0L (NFST Cap)</span>
                <span>₹10.0L</span>
              </div>
            </div>

            {/* Slider 2: Academic Percentage */}
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Minimum Qualifying Degree Marks (%):</span>
                <span className="font-mono text-indigo-700 font-extrabold">
                  {currentRules.minAcademicPercentage}%
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="75"
                step="1"
                value={currentRules.minAcademicPercentage}
                onChange={(e) => handleRuleChange('minAcademicPercentage', Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>50% (UGC Pass)</span>
                <span>55% (MoTA Guideline)</span>
                <span>65% (High Merit)</span>
              </div>
            </div>

            {/* If NOS Scheme: QS Ranking Limit */}
            {selectedSchemeCode === 'NOS' && (
              <div>
                <div className="flex justify-between font-bold text-slate-700 mb-1">
                  <span>QS World University Ranking Cutoff:</span>
                  <span className="font-mono text-indigo-700 font-extrabold">
                    Top {currentRules.nosMaxQsRank} Ranked Globally
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="50"
                  value={currentRules.nosMaxQsRank}
                  onChange={(e) => handleRuleChange('nosMaxQsRank', Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>Top 100</span>
                  <span>Top 300</span>
                  <span>Top 500 (MoTA Mandate)</span>
                </div>
              </div>
            )}

            {/* Quotas & Bonus Points */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-700 block mb-1">PVTG Candidate Priority Points:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={currentRules.pvtgBonusPoints}
                    onChange={(e) => handleRuleChange('pvtgBonusPoints', Number(e.target.value))}
                    className="w-16 p-1.5 border border-slate-300 rounded font-mono font-bold text-slate-900 bg-white"
                  />
                  <span className="text-slate-500 text-[11px]">+Score Points</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-700 block mb-1">Women ST Scholar Reservation:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={currentRules.womenReservationPct}
                    onChange={(e) => handleRuleChange('womenReservationPct', Number(e.target.value))}
                    className="w-16 p-1.5 border border-slate-300 rounded font-mono font-bold text-slate-900 bg-white"
                  />
                  <span className="text-slate-500 text-[11px]">% Minimum Seats</span>
                </div>
              </div>
            </div>

          </div>

          {/* Simulation Output Card */}
          <div className="mt-4 p-4.5 bg-indigo-50/70 border border-indigo-200 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Live Policy Simulation Results
              </span>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="btn btn-secondary btn-sm text-[11px] font-bold"
              >
                {isSimulating ? 'Computing Neural Impact...' : 'Re-Simulate Parameters'}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div>
                <span className="text-indigo-800 text-[11px] block font-medium">Projected Eligible Scholars</span>
                <span className="text-base font-black text-slate-900">{projectedApplicants.toLocaleString()} Candidates</span>
              </div>
              <div>
                <span className="text-indigo-800 text-[11px] block font-medium">Est. Annual Outlay</span>
                <span className="text-base font-black text-slate-900">₹{projectedOutlayCr} Crore</span>
              </div>
              <div>
                <span className="text-indigo-800 text-[11px] block font-medium">Sanction Headroom</span>
                <span className="text-base font-bold text-emerald-700">✓ Within Approved Cap</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: "Samarth-DBT" & PFMS Real-Time Disbursement Console */}
        <div className="lg:col-span-5 card p-6 space-y-4">
          <div className="pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
              <h3 className="text-base font-extrabold text-slate-900">
                Samarth-DBT: PFMS Disbursement Gateway
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Direct release of monthly fellowship & contingency grants via Aadhaar Payment Bridge (APB).
            </p>
          </div>

          {/* Status Metrics */}
          <div className="space-y-3 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-medium">PFMS Gateway Server Status:</span>
                <span className="badge badge-emerald text-[10px] font-bold">● APB Server Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-medium">Aadhaar NPCI Mapper Seeding:</span>
                <span className="font-mono font-bold text-slate-900">99.8% Seeded</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-medium">Pending Fellowship Batch:</span>
                <span className="font-bold text-amber-800">₹4.82 Cr (340 Scholars)</span>
              </div>
            </div>

            {/* Direct Trigger Box */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50/40 border border-emerald-300 rounded-xl space-y-3.5">
              <div>
                <h4 className="font-bold text-emerald-950 text-xs uppercase tracking-wide">
                  Sanction & Authorize Monthly Fellowship Release
                </h4>
                <p className="text-[11px] text-emerald-800 mt-1 leading-relaxed">
                  Releases monthly stipend (₹31k-₹35k/mo) and contingency bills for approved NFST & NOS scholars.
                </p>
              </div>

              <button
                onClick={triggerPFMSRelease}
                disabled={isDisbursing}
                className="w-full btn btn-emerald shadow-sm py-2.5 font-bold"
              >
                <Send className="w-4 h-4" />
                <span>{isDisbursing ? 'Connecting to PFMS APB Gateway...' : 'Execute DBT Batch Disbursement via PFMS'}</span>
              </button>

              {disbursementSuccess && (
                <div className="p-3.5 bg-white rounded-lg border border-emerald-300 text-emerald-950 text-xs space-y-1 animate-fadeIn shadow-xs">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>PFMS Transaction Completed Successfully!</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-mono">
                    UTR Ref: PFMS20260925-ST-98412 • Total ₹4,82,00,000 credited to 340 Aadhaar-seeded accounts.
                  </p>
                </div>
              )}
            </div>

            {/* Export Ledger */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <FileSpreadsheet className="w-3.5 h-3.5 text-slate-600" />
                CAG Audit Ready Logs
              </span>
              <button
                onClick={() => alert('Downloaded MoTA PFMS Sanction Register for CAG Audit.')}
                className="text-blue-600 hover:underline font-bold"
              >
                Export CSV Ledger
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Geospatial Tribal Inclusion Matrix */}
      <div className="card p-6">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-600" />
              <span>State-wise Tribal Scholarship Penetration & PVTG Equity Matrix</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Real-time monitoring across major tribal belts (Central India, Eastern Ghats, North East, Nilgiris).
            </p>
          </div>
          <span className="badge badge-emerald text-xs font-bold">All 36 States/UTs Covered</span>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
          <table className="custom-table text-xs">
            <thead>
              <tr>
                <th>State / Region</th>
                <th>Total ST Beneficiaries</th>
                <th>Covered PVTGs</th>
                <th>Female Ratio</th>
                <th>Sanctioned Outlay (₹ Cr)</th>
                <th>Performance Status</th>
              </tr>
            </thead>
            <tbody>
              {STATE_TRIBAL_STATS.map((stat) => (
                <tr key={stat.state}>
                  <td className="font-bold text-slate-900">{stat.state}</td>
                  <td className="font-mono font-medium">{stat.totalSTScholars.toLocaleString()}</td>
                  <td>
                    <span className="badge badge-purple text-[10px] font-bold">
                      {stat.pvtgCount} PVTG Tribes
                    </span>
                  </td>
                  <td className="font-bold text-slate-700">{stat.femaleRatio}</td>
                  <td className="font-mono font-black text-slate-900">₹{stat.sanctionedCr} Cr</td>
                  <td>
                    <span className="badge badge-emerald text-[10px] font-bold">
                      {stat.flag}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
