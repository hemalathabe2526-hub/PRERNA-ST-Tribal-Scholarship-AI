export type UserRole = 'applicant' | 'scrutiny_officer' | 'ministry_admin' | 'fellowship_scholar' | 'institute_nodal';

export type SchemeCode = 'NFST' | 'NOS' | 'TOP_CLASS' | 'POST_MATRIC' | 'PRE_MATRIC';

export interface SchemeInfo {
  code: SchemeCode;
  officialMoTACode: string; // e.g. ARG45, AZKMI, A023B, BVOBC, BPVGK
  name: string;
  nameHindi: string;
  schemeType: 'Central Sector Scheme' | 'Centrally Sponsored Scheme';
  benefitType: 'In Cash' | 'In Cash & Institutional Fee';
  category: string;
  stipendAmount: string;
  tenure: string;
  eligibilitySummary: string;
  annualBudget: string;
  totalSeats: string | number;
  openApplications: number;
  sanctionedThisYear: number;
  deadline: string;
  aiFeatures: string[];
}

export type ApplicationStatus = 
  | 'draft'
  | 'submitted'
  | 'ai_verified'
  | 'deficiency_flagged'
  | 'under_scrutiny'
  | 'scrutiny_approved'
  | 'committee_shortlisted'
  | 'sanctioned'
  | 'rejected';

export interface DocumentVerification {
  id: string;
  name: string;
  category: 'caste' | 'income' | 'academic' | 'offer_letter' | 'guide_letter' | 'aadhaar' | 'hostel_receipt';
  fileName: string;
  fileSize: string;
  uploadDate: string;
  ocrExtracted: Record<string, string>;
  confidenceScore: number;
  tamperRisk: 'LOW' | 'MEDIUM' | 'HIGH';
  tamperNotes?: string;
  isVerified: boolean;
  status: 'VERIFIED' | 'DEFICIENT' | 'PENDING_AI';
  deficiencyNote?: string;
}

export interface ApplicationRecord {
  id: string;
  applicationNumber: string;
  schemeCode: SchemeCode;
  applicantName: string;
  tribeGroup: string;
  isPVTG: boolean; // Particularly Vulnerable Tribal Group
  pvtgName?: string;
  state: string;
  district: string;
  gender: 'Female' | 'Male' | 'Other';
  annualFamilyIncome: number; // in INR
  academicQualification: string;
  percentageScore: number;
  universityName: string;
  courseOfStudy: string;
  qsWorldRank?: number; // For NOS
  foreignCountry?: string; // For NOS
  submissionDate: string;
  status: ApplicationStatus;
  aiEligibilityScore: number; // 0-100
  aiRecommendedAction: 'AUTO_APPROVE' | 'FLAG_FOR_REVIEW' | 'REJECT_INELIGIBLE';
  deficiencies: string[];
  documents: DocumentVerification[];
  aadhaarSeeded: boolean;
  bankAccountVerified: boolean;
  scholarshipSanctionAmount?: number;
  disbursedAmount?: number;
  researchMilestones?: ResearchMilestone[];
}

export interface ResearchMilestone {
  milestoneNumber: number;
  period: string;
  reportTitle: string;
  submissionDate: string;
  status: 'PENDING' | 'SUBMITTED' | 'GUIDE_APPROVED' | 'STIPEND_RELEASED';
  guideName: string;
  guideDesignation: string;
  originalityScore: number; // AI Plagiarism/Progress audit
  stipendAmount: number;
  contingencyClaimed: number;
  contingencyReceiptVerified: boolean;
}

export interface SchemePolicyRules {
  schemeCode: SchemeCode;
  maxIncomeCeiling: number;
  minAcademicPercentage: number;
  nosMaxQsRank: number;
  womenReservationPct: number;
  pvtgBonusPoints: number;
  firstGenLearnerBonus: number;
  autoApproveConfidenceThreshold: number;
}
