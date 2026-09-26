import type { SchemeInfo, ApplicationRecord, SchemePolicyRules } from '../types';

export const SCHEMES_DATA: SchemeInfo[] = [
  {
    code: 'NFST',
    officialMoTACode: 'ARG45',
    name: 'National Fellowship for ST Students (NFST)',
    nameHindi: 'अनुसूचित जनजाति के छात्रों हेतु राष्ट्रीय फेलोशिप योजना',
    schemeType: 'Central Sector Scheme',
    benefitType: 'In Cash',
    category: 'M.Phil / Ph.D. Research in India (750 Fellowships/Yr)',
    stipendAmount: '₹31,000 to ₹35,000 / month + HRA + ₹12,000 to ₹20,000 Contingency',
    tenure: 'Up to 5 Years (JRF to SRF upgradation)',
    eligibilitySummary: 'Post-Graduate ST students admitted to M.Phil/Ph.D in UGC/CSIR recognized Universities.',
    annualBudget: '₹175.50 Crore',
    totalSeats: 750,
    openApplications: 4120,
    sanctionedThisYear: 685,
    deadline: '31 October 2026',
    aiFeatures: [
      'Automated Doctoral Guide e-Signature & University Seal Verification',
      'AI Thesis Originality & Bi-Annual Research Milestone Auditor',
      'Netra-ST Automated JRF-to-SRF Upgradation Assessment',
      'Direct PFMS Aadhaar Payment Bridge (APB) Monthly Disbursement'
    ]
  },
  {
    code: 'NOS',
    officialMoTACode: 'AZKMI',
    name: 'National Overseas Scholarship Scheme (NOS)',
    nameHindi: 'राष्ट्रीय प्रवासी छात्रवृत्ति योजना (विदेश अध्ययन हेतु)',
    schemeType: 'Central Sector Scheme',
    benefitType: 'In Cash',
    category: 'Post-Graduate & Ph.D. Abroad (QS World Top 500)',
    stipendAmount: 'USD $15,400 / GBP £9,900 / yr + 100% Tuition + Economy Airfare',
    tenure: '1 to 3 Years (Masters & Doctoral)',
    eligibilitySummary: 'ST students with min 55% marks with unconditional offer from QS World Top 500 universities.',
    annualBudget: '₹42.80 Crore',
    totalSeats: 20,
    openApplications: 384,
    sanctionedThisYear: 18,
    deadline: '15 November 2026',
    aiFeatures: [
      'Live QS World University Ranking API Auto-Validation (Top 500 Cutoff)',
      'Unconditional Offer Letter Forensic & Tamper Verification',
      'Indian Embassy / High Commission Consular Digital Registration Sync',
      'SBI Foreign Exchange Wire Automation for Living Allowance'
    ]
  },
  {
    code: 'TOP_CLASS',
    officialMoTACode: 'A023B',
    name: 'Top Class Education For ST Students',
    nameHindi: 'शीर्ष श्रेणी उच्च शिक्षा छात्रवृत्ति (IITs, IIMs, NITs, AIIMS)',
    schemeType: 'Central Sector Scheme',
    benefitType: 'In Cash & Institutional Fee',
    category: 'Notified Premier Institutes (265+ Central Institutions)',
    stipendAmount: '100% Non-refundable Tuition Fee + ₹86,000/yr Living + ₹45,000 Computer Grant',
    tenure: 'Full Duration of Course (4 - 5 Years)',
    eligibilitySummary: 'ST students securing admission in IITs, IIMs, NITs, AIIMS, NLUs with family income ≤ ₹6.0 Lakh.',
    annualBudget: '₹89.20 Crore',
    totalSeats: 1000,
    openApplications: 2450,
    sanctionedThisYear: 940,
    deadline: '30 November 2026',
    aiFeatures: [
      'Automated Seat Allocation (JoSAA / CSAB / NEET / CLAT) Verification',
      'Direct Institute Nodal Officer (INO) Bulk Admission Verification',
      'Annual Institutional Fee Waiver Auto-Reimbursement',
      'Laptop / Computer Bill AI OCR Invoice Auditing'
    ]
  },
  {
    code: 'POST_MATRIC',
    officialMoTACode: 'BVOBC',
    name: 'Post-Matric Scholarship Scheme For ST Students',
    nameHindi: 'अनुसूचित जनजाति के छात्रों हेतु पोस्ट-मैट्रिक छात्रवृत्ति',
    schemeType: 'Centrally Sponsored Scheme',
    benefitType: 'In Cash',
    category: 'Class 11, 12, Diploma, ITI, UG & PG Degree',
    stipendAmount: '₹2,500 to ₹13,500 / year + Compulsory Non-refundable Course Fees',
    tenure: 'Annual Renewal based on Academic Promotion',
    eligibilitySummary: 'ST students with parent/guardian income not exceeding ₹2.50 Lakh per annum.',
    annualBudget: '₹2,450.00 Crore',
    totalSeats: 'Open (Demand Driven)',
    openApplications: 1820400,
    sanctionedThisYear: 1640000,
    deadline: '15 December 2026',
    aiFeatures: [
      'State-Centre 60:40 and 90:10 (NE/Hilly) Funding Ratio Auto-Split',
      'Academic Promotion & Marksheet OCR Verification without Manual Scrutiny',
      'Aadhaar-seeded Bank Account Zero-Failure Validation',
      'Real-time State Nodal Officer Escalation & Multi-Tier Workflow'
    ]
  },
  {
    code: 'PRE_MATRIC',
    officialMoTACode: 'BPVGK',
    name: 'Pre-Matric Scholarship Scheme For ST Students',
    nameHindi: 'अनुसूचित जनजाति के छात्रों हेतु प्री-मैट्रिक छात्रवृत्ति (कक्षा 9 व 10)',
    schemeType: 'Centrally Sponsored Scheme',
    benefitType: 'In Cash',
    category: 'Class 9 & 10 (Day Scholars & Hostellers)',
    stipendAmount: '₹3,500/yr (Day Scholars) to ₹7,000/yr (Hostellers) + Book Grant',
    tenure: '2 Years (Class IX & X)',
    eligibilitySummary: 'ST students studying in Class 9 or 10 with annual parental income ≤ ₹2.50 Lakh.',
    annualBudget: '₹410.00 Crore',
    totalSeats: 'Universal for eligible ST students',
    openApplications: 920500,
    sanctionedThisYear: 840000,
    deadline: '15 December 2026',
    aiFeatures: [
      'UDISE+ Unified District Information System for Education School Verification',
      'School Headmaster e-Sign Verification for Hosteller & Day Scholar Status',
      'Parental Aadhaar Biometric Mapping for Minor Students',
      'Zero-Delay Direct DBT Crediting into Jan Dhan Bank Accounts'
    ]
  }
];

export const INITIAL_POLICY_RULES: Record<string, SchemePolicyRules> = {
  NFST: {
    schemeCode: 'NFST',
    maxIncomeCeiling: 800000,
    minAcademicPercentage: 55,
    nosMaxQsRank: 0,
    womenReservationPct: 33,
    pvtgBonusPoints: 10,
    firstGenLearnerBonus: 5,
    autoApproveConfidenceThreshold: 92
  },
  NOS: {
    schemeCode: 'NOS',
    maxIncomeCeiling: 600000,
    minAcademicPercentage: 55,
    nosMaxQsRank: 500,
    womenReservationPct: 30,
    pvtgBonusPoints: 15,
    firstGenLearnerBonus: 8,
    autoApproveConfidenceThreshold: 95
  },
  TOP_CLASS: {
    schemeCode: 'TOP_CLASS',
    maxIncomeCeiling: 600000,
    minAcademicPercentage: 50,
    nosMaxQsRank: 0,
    womenReservationPct: 30,
    pvtgBonusPoints: 10,
    firstGenLearnerBonus: 5,
    autoApproveConfidenceThreshold: 90
  },
  POST_MATRIC: {
    schemeCode: 'POST_MATRIC',
    maxIncomeCeiling: 250000,
    minAcademicPercentage: 40,
    nosMaxQsRank: 0,
    womenReservationPct: 33,
    pvtgBonusPoints: 10,
    firstGenLearnerBonus: 5,
    autoApproveConfidenceThreshold: 88
  },
  PRE_MATRIC: {
    schemeCode: 'PRE_MATRIC',
    maxIncomeCeiling: 250000,
    minAcademicPercentage: 40,
    nosMaxQsRank: 0,
    womenReservationPct: 33,
    pvtgBonusPoints: 10,
    firstGenLearnerBonus: 5,
    autoApproveConfidenceThreshold: 88
  }
};

export const SAMPLE_APPLICATIONS: ApplicationRecord[] = [
  {
    id: 'APP-2026-0819',
    applicationNumber: 'MOTA/NFST/2026/84102',
    schemeCode: 'NFST',
    applicantName: 'Birsa Soren',
    tribeGroup: 'Santhal',
    isPVTG: false,
    state: 'Jharkhand',
    district: 'Dumka',
    gender: 'Male',
    annualFamilyIncome: 320000,
    academicQualification: 'M.Sc. Environmental Biotechnology (81.4%)',
    percentageScore: 81.4,
    universityName: 'Indian Institute of Technology (ISM) Dhanbad',
    courseOfStudy: 'Ph.D. in Bio-remediation of Acid Mine Drainage',
    submissionDate: '2026-09-12',
    status: 'sanctioned',
    aiEligibilityScore: 97,
    aiRecommendedAction: 'AUTO_APPROVE',
    deficiencies: [],
    aadhaarSeeded: true,
    bankAccountVerified: true,
    scholarshipSanctionAmount: 420000,
    disbursedAmount: 105000,
    documents: [
      {
        id: 'doc-1',
        name: 'Scheduled Tribe Caste Certificate',
        category: 'caste',
        fileName: 'ST_Certificate_Dumka_Jharkhand.pdf',
        fileSize: '1.4 MB',
        uploadDate: '2026-09-12',
        ocrExtracted: {
          'Candidate Name': 'Birsa Soren',
          'Father Name': 'Kanu Soren',
          'Tribe Name': 'Santhal (Sl. No. 28)',
          'Issuing Authority': 'Sub-Divisional Officer, Dumka',
          'Certificate No': 'JH/ST/2023/89124',
          'Digital Signature Check': 'Cryptographically Valid (NIC Jharkhand)'
        },
        confidenceScore: 99.1,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      },
      {
        id: 'doc-2',
        name: 'Ph.D. Admission Letter & Research Guide Undertaking',
        category: 'guide_letter',
        fileName: 'IIT_ISM_Admission_Guide_Endorsement.pdf',
        fileSize: '2.1 MB',
        uploadDate: '2026-09-12',
        ocrExtracted: {
          'Institution': 'IIT (ISM) Dhanbad',
          'Enrollment No': '25PHDENV014',
          'Guide Name': 'Prof. A. K. Banerjee',
          'Department': 'Dept. of Environmental Science & Engg.',
          'Doctoral Committee Approval': 'Duly Approved and Endorsed'
        },
        confidenceScore: 98.4,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      },
      {
        id: 'doc-3',
        name: 'Competent Authority Income Certificate',
        category: 'income',
        fileName: 'Income_Certificate_CircleOffice.pdf',
        fileSize: '890 KB',
        uploadDate: '2026-09-12',
        ocrExtracted: {
          'Annual Family Income': '₹3,20,000 per annum',
          'Valid Till': '31-03-2027',
          'Issue Date': '15-06-2025'
        },
        confidenceScore: 96.8,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      }
    ],
    researchMilestones: [
      {
        milestoneNumber: 1,
        period: 'Q1 (Oct 2025 - Dec 2025)',
        reportTitle: 'Literature Review & Soil Microflora Baseline Analysis in Jharia Coalfield',
        submissionDate: '2026-01-05',
        status: 'STIPEND_RELEASED',
        guideName: 'Prof. A. K. Banerjee',
        guideDesignation: 'Professor & Head, Env. Engg.',
        originalityScore: 94,
        stipendAmount: 93000,
        contingencyClaimed: 12000,
        contingencyReceiptVerified: true
      },
      {
        milestoneNumber: 2,
        period: 'Q2 (Jan 2026 - Mar 2026)',
        reportTitle: 'Isolation of Heavy Metal Tolerant Microbes from Overburden Dumps',
        submissionDate: '2026-04-10',
        status: 'STIPEND_RELEASED',
        guideName: 'Prof. A. K. Banerjee',
        guideDesignation: 'Professor & Head, Env. Engg.',
        originalityScore: 91,
        stipendAmount: 93000,
        contingencyClaimed: 0,
        contingencyReceiptVerified: true
      },
      {
        milestoneNumber: 3,
        period: 'Q3 (Apr 2026 - Jun 2026)',
        reportTitle: 'Genomic Sequencing of Acidophilic Bacterial Strains for Bio-leaching',
        submissionDate: '2026-07-08',
        status: 'GUIDE_APPROVED',
        guideName: 'Prof. A. K. Banerjee',
        guideDesignation: 'Professor & Head, Env. Engg.',
        originalityScore: 89,
        stipendAmount: 93000,
        contingencyClaimed: 8400,
        contingencyReceiptVerified: true
      },
      {
        milestoneNumber: 4,
        period: 'Q4 (Jul 2026 - Sep 2026)',
        reportTitle: 'Bioreactor Column Trials & Field-Scale Phytoremediation Setup',
        submissionDate: '2026-09-24',
        status: 'SUBMITTED',
        guideName: 'Prof. A. K. Banerjee',
        guideDesignation: 'Professor & Head, Env. Engg.',
        originalityScore: 93,
        stipendAmount: 93000,
        contingencyClaimed: 11200,
        contingencyReceiptVerified: false
      }
    ]
  },
  {
    id: 'APP-2026-0422',
    applicationNumber: 'MOTA/NOS/2026/01294',
    schemeCode: 'NOS',
    applicantName: 'Maitree Madkam',
    tribeGroup: 'Muria Gond (PVTG Candidate)',
    isPVTG: true,
    pvtgName: 'Abujhmadia / Muria Gond',
    state: 'Chhattisgarh',
    district: 'Bastar',
    gender: 'Female',
    annualFamilyIncome: 185000,
    academicQualification: 'M.Tech Remote Sensing & GIS (92.1%)',
    percentageScore: 92.1,
    universityName: 'University of Oxford',
    courseOfStudy: 'DPhil in Geography and the Environment (Indigenous Forest Ecology)',
    qsWorldRank: 3,
    foreignCountry: 'United Kingdom',
    submissionDate: '2026-09-18',
    status: 'committee_shortlisted',
    aiEligibilityScore: 99,
    aiRecommendedAction: 'AUTO_APPROVE',
    deficiencies: [],
    aadhaarSeeded: true,
    bankAccountVerified: true,
    scholarshipSanctionAmount: 3850000,
    disbursedAmount: 0,
    documents: [
      {
        id: 'doc-nos-1',
        name: 'Oxford University Unconditional Admission Letter',
        category: 'offer_letter',
        fileName: 'Univ_of_Oxford_Offer_Letter_Unconditional.pdf',
        fileSize: '3.2 MB',
        uploadDate: '2026-09-18',
        ocrExtracted: {
          'Institution': 'University of Oxford, UK',
          'QS World University Ranking 2026': '#3 (Verified Top 500 Category)',
          'Program': 'DPhil in Geography & Environment',
          'Offer Status': 'Unconditional Offer Confirmed',
          'Start Date': 'October 2026',
          'Total Course Fee': '£28,500 / annum (Eligible for 100% MoTA NOS Waiver)'
        },
        confidenceScore: 99.8,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      },
      {
        id: 'doc-nos-2',
        name: 'PVTG Tribal Community Certificate',
        category: 'caste',
        fileName: 'Bastar_PVTG_Muria_Certificate.pdf',
        fileSize: '1.8 MB',
        uploadDate: '2026-09-18',
        ocrExtracted: {
          'Candidate Name': 'Maitree Madkam',
          'Tribe Group': 'Muria / Maria Gond (Recognised PVTG of Bastar)',
          'Issuing Authority': 'Collector & District Magistrate, Bastar',
          'Special PVTG Cell Stamp': 'Present & Authenticated'
        },
        confidenceScore: 98.7,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      },
      {
        id: 'doc-nos-3',
        name: 'Passport & IELTS Academic Test Report',
        category: 'academic',
        fileName: 'Passport_IELTS_Scorecard_Band_8.pdf',
        fileSize: '1.1 MB',
        uploadDate: '2026-09-18',
        ocrExtracted: {
          'Overall Band Score': '8.5 / 9.0',
          'CEFR Level': 'C1 Proficient',
          'Passport Validity': 'Valid until 2034'
        },
        confidenceScore: 99.4,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      }
    ]
  },
  {
    id: 'APP-2026-0931',
    applicationNumber: 'MOTA/NFST/2026/89401',
    schemeCode: 'NFST',
    applicantName: 'Rameshwar Bheel',
    tribeGroup: 'Bhil',
    isPVTG: false,
    state: 'Rajasthan',
    district: 'Banswara',
    gender: 'Male',
    annualFamilyIncome: 450000,
    academicQualification: 'M.A. History & Tribal Heritage (67.2%)',
    percentageScore: 67.2,
    universityName: 'Mohanlal Sukhadia University, Udaipur',
    courseOfStudy: 'Ph.D. in Traditional Tribal Governance & Water Harvesting in Aravallis',
    submissionDate: '2026-09-20',
    status: 'deficiency_flagged',
    aiEligibilityScore: 68,
    aiRecommendedAction: 'FLAG_FOR_REVIEW',
    deficiencies: [
      'Income Certificate expired on 31-03-2025. Current financial year 2025-26 certificate required.',
      'Research Guide Endorsement Letter lacks official university stamp and Dean signature on Annexure-II.'
    ],
    aadhaarSeeded: true,
    bankAccountVerified: true,
    documents: [
      {
        id: 'doc-bhil-1',
        name: 'Scheduled Tribe Certificate',
        category: 'caste',
        fileName: 'ST_Certificate_Banswara.pdf',
        fileSize: '1.2 MB',
        uploadDate: '2026-09-20',
        ocrExtracted: {
          'Candidate Name': 'Rameshwar Bheel',
          'Tribe': 'Bhil (Rajasthan Scheduled Tribe)',
          'Tehsil': 'Ghatol, Dist Banswara',
          'Status': 'Valid'
        },
        confidenceScore: 97.2,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      },
      {
        id: 'doc-bhil-2',
        name: 'Income Certificate (Flagged Deficient)',
        category: 'income',
        fileName: 'Income_Certificate_Old.pdf',
        fileSize: '950 KB',
        uploadDate: '2026-09-20',
        ocrExtracted: {
          'Annual Income': '₹4,50,000',
          'Validity Date': 'Expired on 31-03-2025 (Expired 18 months ago!)',
          'Issuing Tehsildar': 'Tehsildar Ghatol'
        },
        confidenceScore: 95.0,
        tamperRisk: 'HIGH',
        tamperNotes: 'Document expired; does not satisfy current financial year guideline (MoTA Scheme Clause 4.2).',
        isVerified: false,
        status: 'DEFICIENT',
        deficiencyNote: 'Please upload income certificate issued after 01-04-2025 by an officer not below Tehsildar rank.'
      },
      {
        id: 'doc-bhil-3',
        name: 'Guide Endorsement (Flagged Deficient)',
        category: 'guide_letter',
        fileName: 'Guide_Endorsement_Form.pdf',
        fileSize: '820 KB',
        uploadDate: '2026-09-20',
        ocrExtracted: {
          'Guide Name': 'Dr. S. K. Meena',
          'Seal Status': 'Missing Dean / Registrar Official Seal'
        },
        confidenceScore: 78.0,
        tamperRisk: 'MEDIUM',
        isVerified: false,
        status: 'DEFICIENT',
        deficiencyNote: 'Annexure-II must contain counter-signature and seal of Head of Department or Registrar.'
      }
    ]
  },
  {
    id: 'APP-2026-0715',
    applicationNumber: 'MOTA/TOPCLASS/2026/04812',
    schemeCode: 'TOP_CLASS',
    applicantName: 'Lavanya Toda',
    tribeGroup: 'Toda (PVTG Nilgiris)',
    isPVTG: true,
    pvtgName: 'Toda (Nilgiris, Tamil Nadu)',
    state: 'Tamil Nadu',
    district: 'The Nilgiris',
    gender: 'Female',
    annualFamilyIncome: 140000,
    academicQualification: 'JEE Advanced Rank 124 (ST Category)',
    percentageScore: 94.6,
    universityName: 'Indian Institute of Technology Madras',
    courseOfStudy: 'B.Tech in Artificial Intelligence & Data Science',
    submissionDate: '2026-09-15',
    status: 'under_scrutiny',
    aiEligibilityScore: 98,
    aiRecommendedAction: 'AUTO_APPROVE',
    deficiencies: [],
    aadhaarSeeded: true,
    bankAccountVerified: true,
    scholarshipSanctionAmount: 340000,
    disbursedAmount: 0,
    documents: [
      {
        id: 'doc-top-1',
        name: 'IIT Madras Seat Allocation (JoSAA Memo)',
        category: 'offer_letter',
        fileName: 'IITM_JoSAA_Provisional_Seat_2026.pdf',
        fileSize: '1.9 MB',
        uploadDate: '2026-09-15',
        ocrExtracted: {
          'Institute': 'Indian Institute of Technology Madras',
          'Notified Institute Code': 'MOTA-PREMIER-004 (Valid Top Class Institute)',
          'Candidate Name': 'Lavanya Toda',
          'Category': 'ST-PVTG'
        },
        confidenceScore: 99.6,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      },
      {
        id: 'doc-top-2',
        name: 'Nilgiris PVTG Community Certificate',
        category: 'caste',
        fileName: 'Toda_PVTG_Community_Cert.pdf',
        fileSize: '1.3 MB',
        uploadDate: '2026-09-15',
        ocrExtracted: {
          'Tribe Name': 'Toda (Particularly Vulnerable Tribal Group)',
          'Revenue Division': 'Udhagamandalam (Ooty)',
          'Revenue Officer Check': 'Verified via TN e-District API'
        },
        confidenceScore: 98.9,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      }
    ]
  },
  {
    id: 'APP-2026-0309',
    applicationNumber: 'MOTA/NOS/2026/00742',
    schemeCode: 'NOS',
    applicantName: 'David Hmar',
    tribeGroup: 'Hmar',
    isPVTG: false,
    state: 'Assam',
    district: 'Dima Hasao',
    gender: 'Male',
    annualFamilyIncome: 510000,
    academicQualification: 'M.Sc. Cyber Security (78.5%)',
    percentageScore: 78.5,
    universityName: 'Technical University of Munich (TUM), Germany',
    courseOfStudy: 'Master of Science in Quantum Computing',
    qsWorldRank: 28,
    foreignCountry: 'Germany',
    submissionDate: '2026-09-22',
    status: 'under_scrutiny',
    aiEligibilityScore: 94,
    aiRecommendedAction: 'AUTO_APPROVE',
    deficiencies: [],
    aadhaarSeeded: true,
    bankAccountVerified: true,
    scholarshipSanctionAmount: 3200000,
    disbursedAmount: 0,
    documents: [
      {
        id: 'doc-hmar-1',
        name: 'TUM Admission Letter (Unconditional)',
        category: 'offer_letter',
        fileName: 'TUM_Munich_Admissions_Letter.pdf',
        fileSize: '2.4 MB',
        uploadDate: '2026-09-22',
        ocrExtracted: {
          'Institution': 'Technical University of Munich (TUM)',
          'QS Ranking': '#28 Worldwide',
          'Field': 'Quantum Computing & Post-Quantum Cryptography',
          'Confirmation': 'Full Time Enrolment Confirmed'
        },
        confidenceScore: 99.0,
        tamperRisk: 'LOW',
        isVerified: true,
        status: 'VERIFIED'
      }
    ]
  }
];

export const STATE_TRIBAL_STATS = [
  { state: 'Odisha', totalSTScholars: 8420, pvtgCount: 13, femaleRatio: '54%', sanctionedCr: 48.6, flag: 'High Inclusion' },
  { state: 'Jharkhand', totalSTScholars: 9850, pvtgCount: 9, femaleRatio: '51%', sanctionedCr: 58.2, flag: 'Top Beneficiary' },
  { state: 'Madhya Pradesh', totalSTScholars: 11420, pvtgCount: 3, femaleRatio: '49%', sanctionedCr: 68.4, flag: 'High Volume' },
  { state: 'Chhattisgarh', totalSTScholars: 7650, pvtgCount: 5, femaleRatio: '53%', sanctionedCr: 44.1, flag: 'Target Achieved' },
  { state: 'Assam & NE States', totalSTScholars: 8120, pvtgCount: 0, femaleRatio: '56%', sanctionedCr: 47.9, flag: 'Leading Gender Parity' },
  { state: 'Maharashtra', totalSTScholars: 6940, pvtgCount: 3, femaleRatio: '48%', sanctionedCr: 39.8, flag: 'Normal Flow' },
  { state: 'Rajasthan', totalSTScholars: 7210, pvtgCount: 1, femaleRatio: '47%', sanctionedCr: 41.5, flag: 'High NFST Demand' },
  { state: 'Tamil Nadu (Nilgiris)', totalSTScholars: 1280, pvtgCount: 6, femaleRatio: '57%', sanctionedCr: 12.2, flag: '100% PVTG Covered' }
];

export const MULTILINGUAL_AUDIO_SCRIPTS: Record<string, { lang: string; nativeName: string; audioText: string }> = {
  hi: {
    lang: 'Hindi',
    nativeName: 'हिन्दी',
    audioText: 'नमस्ते! जनजातीय कार्य मंत्रालय (MoTA) एआई छात्रवृत्ति मंच में आपका स्वागत है। आपका जाति प्रमाणपत्र और डिजिलॉकर विवरण सत्यापित हो चुका है। यदि कोई कमी पाई जाती है, तो एआई आपको तुरंत नया दस्तावेज अपलोड करने में मदद करेगा।'
  },
  sat: {
    lang: 'Santhali',
    nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ (Santhali)',
    audioText: 'ᱡᱚᱦᱟᱨ! ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱢᱚᱱᱛᱨᱟᱲᱚᱭ ᱨᱮᱭᱟᱜ AI ᱥᱠᱚᱞᱟᱨᱥᱤᱯ ᱯᱚᱨᱴᱟᱞ ᱨᱮ ᱟᱯᱮᱭᱟᱜ ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ। ᱟᱢᱟᱜ ST ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱟᱨ ᱠᱟᱜᱚᱡᱽ ᱠᱚ AI ᱛᱮ ᱪᱮᱠ ᱦᱩᱭ ᱮᱱᱟ। ᱡᱟᱦᱟᱸᱱᱟᱜ ᱵᱟᱝ ᱠᱷᱟᱱ ᱱᱚᱰᱮ ᱞᱤᱱ ᱠᱟᱛᱮ ᱵᱟᱰᱟᱭ ᱢᱮ।'
  },
  gon: {
    lang: 'Gondi',
    nativeName: 'कोया / गोंडी (Gondi)',
    audioText: 'सेवा जोहार! जनजातीय कार्य मंत्रालय ना AI छात्रवृत्ति पोर्टल ते मीकुन स्वागत मंता। मीवा एसटी प्रमाणपत्र अउर विवरण सत्यापित आता। यदि कूनो कमी मंता तो AI मीकुन नया कागज अपलोड कीले सहायता कींतूर।'
  },
  bhi: {
    lang: 'Bhili',
    nativeName: 'भीली (Bhili)',
    audioText: 'राम राम! आदिमजाति मंत्रालय नी AI शिष्यवृत्ति पोर्टल पर तमरो स्वागत छे। तमारा एसटी दाखलो ने आवक प्रमाणपत्र AI द्वारा तपास करी लीधो छे। चिंता नी करो, वजीफा सीधा बैंक खात मा मळसे।'
  },
  od: {
    lang: 'Odia',
    nativeName: 'ଓଡ଼ିଆ (Odia)',
    audioText: 'ନମସ୍କାର! ଜନଜାତି ବ୍ୟାପାର ମନ୍ତ୍ରଣାଳୟର AI ଛାତ୍ରବୃତ୍ତି ପୋର୍ଟାଲକୁ ଆପଣଙ୍କୁ ସ୍ୱାଗତ। ଆପଣଙ୍କର ଜାତି ପ୍ରମାଣପତ୍ର ଓ ଡିଜିଲକର ଡକ୍ୟୁମେଣ୍ଟ ଯାଞ୍ଚ ସଫଳ ହୋଇଛି। DBT ମାଧ୍ୟମରେ ସିଧାସଳଖ ବ୍ୟାଙ୍କ ଖାତାକୁ ଟଙ୍କା ପଠାଯିବ।'
  },
  en: {
    lang: 'English',
    nativeName: 'English',
    audioText: 'Welcome to the Ministry of Tribal Affairs (MoTA) AI Scholarship & Fellowship Lifecycle Portal. Our multimodal Netra-ST AI engine automates scrutiny, verifies QS Top 500 foreign offers, and accelerates monthly DBT stipends.'
  }
};
