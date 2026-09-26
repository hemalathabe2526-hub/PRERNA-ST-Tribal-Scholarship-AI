import React, { useState } from 'react';
import { UserRole, ApplicationRecord } from './types';
import { SCHEMES_DATA, SAMPLE_APPLICATIONS } from './data/mockData';
import { Header } from './components/Header';
import { ApplicantPortal } from './components/ApplicantPortal';
import { ScrutinyOfficerDesk } from './components/ScrutinyOfficerDesk';
import { MinistryAdminDashboard } from './components/MinistryAdminDashboard';
import { PostSelectionTracker } from './components/PostSelectionTracker';
import { AIOcrForensicScanner } from './components/AIOcrForensicScanner';
import { SetuVoiceAssistant } from './components/SetuVoiceAssistant';
import { SanctionLetterModal } from './components/SanctionLetterModal';
import { SchemeRepositoryModal } from './components/SchemeRepositoryModal';
import { 
  Building2, 
  ShieldCheck, 
  HelpCircle, 
  Volume2, 
  PhoneCall, 
  FileText, 
  Sparkles, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('applicant');
  const [activeLanguage, setActiveLanguage] = useState<string>('en');
  const [applications, setApplications] = useState<ApplicationRecord[]>(SAMPLE_APPLICATIONS);
  
  // Theme Management (White & Green, White & Blue, White, Green & Yellow, etc.)
  const [currentTheme, setCurrentTheme] = useState<string>('green-white');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'green-white');
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Modals
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);
  const [isOcrStudioOpen, setIsOcrStudioOpen] = useState(false);
  const [isSchemeRepoOpen, setIsSchemeRepoOpen] = useState(false);
  const [sanctionLetterApp, setSanctionLetterApp] = useState<ApplicationRecord | null>(null);

  // Application Handlers
  const handleAddNewApplication = (newApp: Partial<ApplicationRecord>) => {
    const created: ApplicationRecord = {
      id: `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      applicationNumber: `MOTA/${newApp.schemeCode}/2026/${Math.floor(10000 + Math.random() * 90000)}`,
      schemeCode: (newApp.schemeCode as any) || 'NFST',
      applicantName: newApp.applicantName || 'Applicant Name',
      tribeGroup: newApp.tribeGroup || 'Scheduled Tribe',
      isPVTG: newApp.isPVTG || false,
      state: newApp.state || 'India',
      district: newApp.district || 'District',
      gender: newApp.gender || 'Female',
      annualFamilyIncome: newApp.annualFamilyIncome || 300000,
      academicQualification: newApp.academicQualification || 'Post Graduate',
      percentageScore: newApp.percentageScore || 80,
      universityName: newApp.universityName || 'University',
      courseOfStudy: newApp.courseOfStudy || 'Ph.D. Programme',
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'under_scrutiny',
      aiEligibilityScore: 95,
      aiRecommendedAction: 'AUTO_APPROVE',
      deficiencies: [],
      aadhaarSeeded: true,
      bankAccountVerified: true,
      scholarshipSanctionAmount: 380000,
      disbursedAmount: 0,
      documents: []
    };

    setApplications([created, ...applications]);
  };

  const handleApproveApplication = (id: string) => {
    setApplications(prev => prev.map(app => {
      if (app.id === id) {
        return {
          ...app,
          status: 'committee_shortlisted',
          aiRecommendedAction: 'AUTO_APPROVE'
        };
      }
      return app;
    }));
  };

  const handleFlagDeficiency = (id: string, reason: string) => {
    setApplications(prev => prev.map(app => {
      if (app.id === id) {
        return {
          ...app,
          status: 'deficiency_flagged',
          aiRecommendedAction: 'FLAG_FOR_REVIEW',
          deficiencies: [reason, ...app.deficiencies]
        };
      }
      return app;
    }));
  };

  const handleRejectApplication = (id: string, reason: string) => {
    setApplications(prev => prev.map(app => {
      if (app.id === id) {
        return {
          ...app,
          status: 'rejected',
          aiRecommendedAction: 'REJECT_INELIGIBLE',
          deficiencies: [reason]
        };
      }
      return app;
    }));
  };

  const handleResolveDeficiency = (id: string) => {
    setApplications(prev => prev.map(app => {
      if (app.id === id) {
        return {
          ...app,
          status: 'under_scrutiny',
          deficiencies: [],
          aiEligibilityScore: 96,
          aiRecommendedAction: 'AUTO_APPROVE'
        };
      }
      return app;
    }));
  };

  const handleSanctionBatch = () => {
    setApplications(prev => prev.map(app => {
      if (app.status === 'committee_shortlisted' || app.status === 'under_scrutiny') {
        return {
          ...app,
          status: 'sanctioned',
          disbursedAmount: (app.disbursedAmount || 0) + 93000
        };
      }
      return app;
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-200 selection:text-slate-900">
      
      {/* Universal Official Header */}
      <Header
        currentRole={currentRole}
        onRoleChange={setCurrentRole}
        onOpenVoiceAssistant={() => setIsVoiceAssistantOpen(true)}
        onOpenOcrStudio={() => setIsOcrStudioOpen(true)}
        activeLanguage={activeLanguage}
        onLanguageChange={setActiveLanguage}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        onOpenSchemeRepo={() => setIsSchemeRepoOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 container-custom py-6">
        
        {/* Active Role Content */}
        {currentRole === 'applicant' && (
          <ApplicantPortal
            activeLanguage={activeLanguage}
            applications={applications}
            schemes={SCHEMES_DATA}
            onOpenSanctionLetter={(app) => setSanctionLetterApp(app)}
            onOpenOcrStudio={() => setIsOcrStudioOpen(true)}
            onOpenVoiceAssistant={() => setIsVoiceAssistantOpen(true)}
            onResolveDeficiency={handleResolveDeficiency}
            onAddNewApplication={handleAddNewApplication}
            onOpenSchemeRepo={() => setIsSchemeRepoOpen(true)}
          />
        )}

        {currentRole === 'scrutiny_officer' && (
          <ScrutinyOfficerDesk
            applications={applications}
            onApproveApplication={handleApproveApplication}
            onFlagDeficiency={handleFlagDeficiency}
            onRejectApplication={handleRejectApplication}
            onOpenOcrStudio={() => setIsOcrStudioOpen(true)}
          />
        )}

        {currentRole === 'fellowship_scholar' && (
          <PostSelectionTracker
            applications={applications}
            onOpenSanctionLetter={(app) => setSanctionLetterApp(app)}
          />
        )}

        {currentRole === 'ministry_admin' && (
          <MinistryAdminDashboard
            schemes={SCHEMES_DATA}
            applications={applications}
            onSanctionBatch={handleSanctionBatch}
          />
        )}

      </main>

      {/* Netra-ST AI OCR Modal Studio */}
      {isOcrStudioOpen && (
        <div className="modal-overlay">
          <div className="modal-content max-w-5xl p-6 relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-base">
                  Netra-ST AI Multimodal Document Forensic & OCR Intelligence Engine
                </h3>
              </div>
              <button
                onClick={() => setIsOcrStudioOpen(false)}
                className="btn btn-secondary btn-sm"
              >
                Close Studio
              </button>
            </div>
            <AIOcrForensicScanner />
          </div>
        </div>
      )}

      {/* Setu-AI Multilingual Voice Assistant Modal */}
      <SetuVoiceAssistant
        isOpen={isVoiceAssistantOpen}
        onClose={() => setIsVoiceAssistantOpen(false)}
        activeLanguage={activeLanguage}
        onLanguageChange={setActiveLanguage}
      />

      {/* Official Government Sanction Letter Modal */}
      <SanctionLetterModal
        isOpen={!!sanctionLetterApp}
        onClose={() => setSanctionLetterApp(null)}
        application={sanctionLetterApp}
      />

      {/* Official MoTA 5 Schemes Reference & Intelligent Automation Matrix Modal */}
      <SchemeRepositoryModal
        isOpen={isSchemeRepoOpen}
        onClose={() => setIsSchemeRepoOpen(false)}
        onSelectSchemeToApply={(_schemeCode) => {
          setCurrentRole('applicant');
          setIsSchemeRepoOpen(false);
        }}
      />

      {/* Official Footer with MoTA Info */}
      <footer className="bg-white border-t border-slate-200 py-8 text-xs text-slate-600 mt-12">
        <div className="container-custom space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Ministry of Tribal Affairs • Government of India</p>
                <p className="text-slate-500">National Fellowship & Scholarship Digital Division, Shastri Bhawan, New Delhi</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
              <button
                onClick={() => setIsSchemeRepoOpen(true)}
                className="btn btn-secondary btn-xs text-blue-700 bg-blue-50 border-blue-200 flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                All 5 Official MoTA Schemes Matrix
              </button>
              <span className="flex items-center gap-1.5 text-slate-700">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                Toll-Free Helpline: 1800-11-7777 (MoTA)
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <button
                onClick={() => setIsVoiceAssistantOpen(true)}
                className="text-amber-800 hover:underline flex items-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Tribal Voice Assistance
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-500 text-[11px]">
            <p>
              &copy; 2026 Ministry of Tribal Affairs (MoTA) • Next-Gen AI Unified DBT Scholarship & Fellowship Architecture.
            </p>
            <div className="flex items-center gap-3">
              <span>National Informatics Centre (NIC) Compliant</span>
              <span>&bull;</span>
              <span>DigiLocker & PFMS Integrated</span>
              <span>&bull;</span>
              <span>Official Reference: tribal.nic.in & dbttribal.gov.in</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
