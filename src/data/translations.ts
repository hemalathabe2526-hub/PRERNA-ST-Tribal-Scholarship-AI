export interface TranslationStrings {
  govIndia: string;
  motaMinistry: string;
  paperlessDbt: string;
  circularsLabel: string;
  tickerText: string;
  
  // Roles
  roleScholar: string;
  roleScrutiny: string;
  roleFellowship: string;
  roleAdmin: string;
  roleInstitute: string;
  
  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroApplyBtn: string;
  heroTrackBtn: string;
  heroVoiceBtn: string;
  heroFastTrack: string;
  heroDigiLocker: string;
  heroDigiLockerConnected: string;
  heroNetraStudio: string;
  heroImgCaption: string;
  
  // Metrics
  metricDbtValue: string;
  metricDbtLabel: string;
  metricScholarsValue: string;
  metricScholarsLabel: string;
  metricSpeedValue: string;
  metricSpeedLabel: string;
  
  // Tabs
  tabSchemes: string;
  tabTracker: string;
  tabFinder: string;
  tabDisbursement: string;
  
  // Filter Categories
  filterAll: string;
  filterResearch: string;
  filterOverseas: string;
  filterPremier: string;
  filterSchool: string;
  
  // Schemes
  applyNow: string;
  financialSupport: string;
  nfstTitle: string;
  nfstDesc: string;
  nfstStipend: string;
  nosTitle: string;
  nosDesc: string;
  nosStipend: string;
  topClassTitle: string;
  topClassDesc: string;
  topClassStipend: string;
  postMatricTitle: string;
  postMatricDesc: string;
  postMatricStipend: string;
  preMatricTitle: string;
  preMatricDesc: string;
  preMatricStipend: string;
  
  // Tracker
  trackerTitle: string;
  trackerSubtitle: string;
  trackerSearchPlaceholder: string;
  trackerSearchBtn: string;
  trackerFilterAll: string;
  trackerFilterScrutiny: string;
  trackerFilterAction: string;
  trackerFilterSanctioned: string;
  statusUnderScrutiny: string;
  statusDeficiency: string;
  statusShortlisted: string;
  statusSanctioned: string;
  statusRejected: string;
  viewSanctionBtn: string;
  resolveDeficiencyBtn: string;
  
  // Footer
  footerHelpdesk: string;
  footerTollFree: string;
  footerRights: string;
}

export const TRANSLATIONS: Record<string, TranslationStrings> = {
  en: {
    govIndia: "Government of India",
    motaMinistry: "Ministry of Tribal Affairs",
    paperlessDbt: "100% Paperless DBT",
    circularsLabel: "Circulars",
    tickerText: "⚡ NFST 2026-27: Verification live on Netra-ST AI • Over 16.4 Lakh ST scholars supported under Central DBT • ✈️ NOS Overseas Scholarship: QS World Top 500 Universities eligible • 🏛️ Top Class Education: JoSAA / NEET admissions auto-verified via DigiLocker.",
    
    roleScholar: "Scholar Portal",
    roleScrutiny: "Scrutiny Desk",
    roleFellowship: "Pragati-360 Tenure",
    roleAdmin: "Policy & DBT Console",
    roleInstitute: "Institute Desk",
    
    heroBadge: "Academic Cycle 2026-27 Applications Open",
    heroTitle: "Empowering Scheduled Tribe Scholars Across India & Worldwide",
    heroSubtitle: "AI-Powered Direct Benefit Transfer (DBT), Automated Scrutiny & Real-time Fellowship Disbursement by the Ministry of Tribal Affairs.",
    heroApplyBtn: "Apply for Scholarship",
    heroTrackBtn: "Track Application",
    heroVoiceBtn: "Tribal Voice Guide",
    heroFastTrack: "Fast-track via:",
    heroDigiLocker: "Connect DigiLocker",
    heroDigiLockerConnected: "✓ DigiLocker Connected",
    heroNetraStudio: "Netra-ST AI OCR Studio",
    heroImgCaption: "Over 16.4 Lakh Scheduled Tribe scholars supported under Ministry Direct Benefit Transfer (DBT).",
    
    metricDbtValue: "₹2,757 Cr+",
    metricDbtLabel: "Disbursed via Aadhaar DBT",
    metricScholarsValue: "16.4+ Lakh",
    metricScholarsLabel: "ST Scholars Empowered",
    metricSpeedValue: "3.5 Mins",
    metricSpeedLabel: "Netra-ST Instant AI Verification",
    
    tabSchemes: "Explore Schemes (5)",
    tabTracker: "Track Application",
    tabFinder: "Eligibility Checker",
    tabDisbursement: "DBT Calendar",
    
    filterAll: "All ST Schemes (5)",
    filterResearch: "Higher Research (Ph.D)",
    filterOverseas: "Overseas Studies (NOS)",
    filterPremier: "Premier Institutes (IIT/IIM)",
    filterSchool: "School & College (Pre/Post-Matric)",
    
    applyNow: "Apply Now",
    financialSupport: "Financial Support",
    nfstTitle: "National Fellowship for ST Students (NFST)",
    nfstDesc: "M.Phil / Ph.D. Research in UGC & CSIR recognized Indian Universities",
    nfstStipend: "₹31,000 – ₹35,000 / month + HRA & Contingency",
    nosTitle: "National Overseas Scholarship (NOS)",
    nosDesc: "Master's & Ph.D. in QS World Top 500 Universities Abroad",
    nosStipend: "USD $15,400 / GBP £9,900 / yr + 100% Fees & Airfare",
    topClassTitle: "Top Class Education in Premier Institutes",
    topClassDesc: "Admissions in 265+ notified IITs, IIMs, NITs, AIIMS & NLUs",
    topClassStipend: "100% Tuition Fee + ₹86,000/yr Living Allowance",
    postMatricTitle: "Post-Matric Scholarship for ST Students",
    postMatricDesc: "Class 11, 12, ITI, Polytechnic, Diploma, UG and PG Degrees",
    postMatricStipend: "₹2,500 – ₹13,500 / year + 100% Compulsory Course Fees",
    preMatricTitle: "Pre-Matric Scholarship for ST Students",
    preMatricDesc: "School Education in Classes 9 and 10 across all States/UTs",
    preMatricStipend: "₹3,500 – ₹7,000 / year + Annual Book Grant",
    
    trackerTitle: "Live Application Status Tracker",
    trackerSubtitle: "Track real-time AI scrutiny, Digilocker caste checks, and Aadhaar DBT payment dispatch.",
    trackerSearchPlaceholder: "Enter Application Number (e.g., MOTA/NFST/2026/89124)...",
    trackerSearchBtn: "Track Status",
    trackerFilterAll: "All Applications",
    trackerFilterScrutiny: "Under AI Scrutiny",
    trackerFilterAction: "Action Required",
    trackerFilterSanctioned: "Sanctioned & Paid",
    statusUnderScrutiny: "Under AI Scrutiny",
    statusDeficiency: "Action Needed (Deficiency)",
    statusShortlisted: "Sanction Committee Shortlisted",
    statusSanctioned: "Sanctioned & DBT Disbursed",
    statusRejected: "Not Eligible",
    viewSanctionBtn: "View Sanction Letter",
    resolveDeficiencyBtn: "Upload Correction",
    
    footerHelpdesk: "National Tribal Scholarship AI Helpdesk",
    footerTollFree: "Toll-Free Helpline: 1800-11-7777 (Mon-Sat, 9AM-6PM)",
    footerRights: "Ministry of Tribal Affairs, Government of India. All Rights Reserved."
  },
  
  hi: {
    govIndia: "भारत सरकार",
    motaMinistry: "जनजातीय कार्य मंत्रालय",
    paperlessDbt: "100% डिजिटल डीबीटी",
    circularsLabel: "महत्वपूर्ण सूचनाएं",
    tickerText: "⚡ एनएफएसटी 2026-27: नेत्रा-एसटी एआई पर त्वरित सत्यापन शुरू • डीबीटी के तहत 16.4 लाख से अधिक एसटी शोधार्थी लाभान्वित • ✈️ एनओएस विदेशी छात्रवृत्ति: क्यूएस टॉप 500 विदेशी विश्वविद्यालयों के लिए पूर्ण छात्रवृत्ति • 🏛️ टॉप क्लास शिक्षा: डिजिलॉकर के माध्यम से दाखिला स्वतः सत्यापित।",
    
    roleScholar: "छात्रवृत्ति पोर्टल",
    roleScrutiny: "सत्यापन डेस्क",
    roleFellowship: "प्रगति-360 अध्येता",
    roleAdmin: "मंत्रालय डीबीटी कंसोल",
    roleInstitute: "संस्थान नोडल डेस्क",
    
    heroBadge: "शैक्षणिक सत्र 2026-27 आवेदन प्रारंभ",
    heroTitle: "भारत और विश्वभर में अनुसूचित जनजाति के विद्यार्थियों का सशक्तिकरण",
    heroSubtitle: "जनजातीय कार्य मंत्रालय द्वारा एआई-सक्षम प्रत्यक्ष लाभ अंतरण (DBT), स्वचालित दस्तावेज जांच और त्वरित छात्रवृत्ति संवितरण।",
    heroApplyBtn: "छात्रवृत्ति हेतु आवेदन करें",
    heroTrackBtn: "आवेदन की स्थिति जांचें",
    heroVoiceBtn: "आदिवासी वाणी (वॉइस गाइड)",
    heroFastTrack: "त्वरित सत्यापन:",
    heroDigiLocker: "डिजिलॉकर से जोड़ें",
    heroDigiLockerConnected: "✓ डिजिलॉकर सत्यापित",
    heroNetraStudio: "नेत्रा-एसटी एआई ओसीआर स्टूडियो",
    heroImgCaption: "प्रत्यक्ष लाभ अंतरण (DBT) के तहत 16.4 लाख से अधिक अनुसूचित जनजाति के छात्र लाभान्वित।",
    
    metricDbtValue: "₹2,757 करोड़+",
    metricDbtLabel: "आधार डीबीटी द्वारा सीधा बैंक भुगतान",
    metricScholarsValue: "16.4+ लाख",
    metricScholarsLabel: "एसटी विद्यार्थियों को सहायता",
    metricSpeedValue: "3.5 मिनट",
    metricSpeedLabel: "नेत्रा-एसटी त्वरित एआई सत्यापन",
    
    tabSchemes: "सभी योजनाएं देखें (5)",
    tabTracker: "आवेदन स्थिति ट्रैक करें",
    tabFinder: "पात्रता जांचें",
    tabDisbursement: "डीबीटी समय सारिणी",
    
    filterAll: "सभी एसटी योजनाएं (5)",
    filterResearch: "उच्च शोध (पीएच.डी / एम.फिल)",
    filterOverseas: "विदेशी शिक्षा (एनओएस)",
    filterPremier: "शीर्ष संस्थान (आईआईटी/आईआईएम)",
    filterSchool: "विद्यालय व कॉलेज (मैट्रिक पूर्व/उत्तर)",
    
    applyNow: "आवेदन करें",
    financialSupport: "वित्तीय सहायता",
    nfstTitle: "एसटी छात्रों हेतु राष्ट्रीय फेलोशिप (NFST)",
    nfstDesc: "यूजीसी एवं सीएसआईआर मान्यता प्राप्त भारतीय विश्वविद्यालयों में एम.फिल / पीएच.डी. शोध",
    nfstStipend: "₹31,000 – ₹35,000 / माह + मकान किराया भत्ता व आकस्मिक अनुदान",
    nosTitle: "राष्ट्रीय प्रवासी छात्रवृत्ति योजना (NOS)",
    nosDesc: "विश्व के शीर्ष 500 विदेशी विश्वविद्यालयों में स्नातकोत्तर एवं डॉक्टरेट अध्ययन",
    nosStipend: "USD $15,400 / GBP £9,900 / वर्ष + 100% शिक्षण शुल्क व हवाई टिकट",
    topClassTitle: "शीर्ष शिक्षण संस्थानों में उत्कृष्ट शिक्षा",
    topClassDesc: "265+ अधिसूचित आईआईटी, आईआईएम, एनआईटी, एम्स एवं लॉ विश्वविद्यालयों में अध्ययन",
    topClassStipend: "100% शिक्षण शुल्क + ₹86,000/वर्ष जीवन यापन भत्ता + लैपटॉप अनुदान",
    postMatricTitle: "एसटी छात्रों हेतु पोस्ट-मैट्रिक छात्रवृत्ति",
    postMatricDesc: "कक्षा 11, 12, आईटीआई, पॉलिटेक्निक, डिप्लोमा, स्नातक एवं स्नातकोत्तर पाठ्यक्रम",
    postMatricStipend: "₹2,500 – ₹13,500 / वर्ष + 100% अनिवार्य संस्थान शुल्क",
    preMatricTitle: "एसटी छात्रों हेतु प्री-मैट्रिक छात्रवृत्ति",
    preMatricDesc: "सभी राज्यों एवं केंद्र शासित प्रदेशों में कक्षा 9वीं और 10वीं के छात्रों हेतु",
    preMatricStipend: "₹3,500 – ₹7,000 / वर्ष + वार्षिक पुस्तक अनुदान",
    
    trackerTitle: "आवेदन की वास्तविक समय स्थिति",
    trackerSubtitle: "नेत्रा एआई जांच, जाति प्रमाणपत्र सत्यापन एवं आधार डीबीटी संवितरण की ताजा स्थिति देखें।",
    trackerSearchPlaceholder: "आवेदन संख्या दर्ज करें (उदा. MOTA/NFST/2026/89124)...",
    trackerSearchBtn: "स्थिति देखें",
    trackerFilterAll: "सभी आवेदन",
    trackerFilterScrutiny: "एआई सत्यापन जारी",
    trackerFilterAction: "दस्तावेज सुधार अपेक्षित",
    trackerFilterSanctioned: "स्वीकृत व बैंक भुगतान",
    statusUnderScrutiny: "एआई सत्यापन जारी",
    statusDeficiency: "त्रुटि सुधार अपेक्षित",
    statusShortlisted: "कमेटी द्वारा संस्तुत",
    statusSanctioned: "स्वीकृत व राशि प्रेषित",
    statusRejected: "अपात्र घोषित",
    viewSanctionBtn: "स्वीकृति पत्र देखें",
    resolveDeficiencyBtn: "दस्तावेज अपलोड करें",
    
    footerHelpdesk: "राष्ट्रीय जनजातीय छात्रवृत्ति एआई सहायता केंद्र",
    footerTollFree: "टोल-फ्री हेल्पलाइन: 1800-11-7777 (सोम-शनि, सुबह 9 से शाम 6)",
    footerRights: "जनजातीय कार्य मंत्रालय, भारत सरकार। सर्वाधिकार सुरक्षित।"
  },
  
  sat: {
    govIndia: "ᱵᱷᱟᱨᱚᱛ ᱥᱚᱨᱠᱟᱨ",
    motaMinistry: "ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱢᱚᱱᱛᱨᱟᱲᱚᱭ",
    paperlessDbt: "᱑᱐᱐% ᱠᱟᱜᱚᱡᱽ ᱵᱮᱜᱚᱨ DBT",
    circularsLabel: "ᱵᱟᱰᱟᱭ ᱡᱚᱝ ᱠᱟᱛᱷᱟ",
    tickerText: "⚡ NFST 2026-27: Netra-ST AI ᱛᱮ ᱪᱮᱠ ᱪᱟᱹᱞᱩ ᱢᱮᱱᱟᱜ-ᱟ • ᱑᱖.᱔ ᱞᱟᱠᱷ ᱠᱷᱚᱱ ᱵᱟᱹᱲᱛᱤ ST ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱜᱚᱲᱚ ᱧᱟᱢᱮᱫ-ᱟ • ✈️ NOS ᱵᱤᱫᱮᱥ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ: QS ᱴᱚᱯ ᱕᱐᱐ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱮ ᱯᱩᱨᱟᱹ ᱠᱷᱚᱨᱚᱪ ᱥᱚᱨᱠᱟᱨ ᱮᱢᱚᱜ-ᱟ।",
    
    roleScholar: "ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱯᱚᱨᱴᱟᱞ",
    roleScrutiny: "ᱪᱮᱠᱤᱝ ᱚᱯᱷᱤᱥ",
    roleFellowship: "ᱯᱨᱚᱜᱚᱛᱤ-᱓᱖᱐ ᱯᱷᱮᱞᱳ",
    roleAdmin: "ᱢᱚᱱᱛᱨᱟᱲᱚᱭ ᱠᱚᱱᱥᱳᱞ",
    roleInstitute: "ᱤᱱᱥᱴᱤᱴᱤᱭᱩᱴ ᱰᱮᱥᱠ",
    
    heroBadge: "ᱥᱮᱪᱮᱫ ᱥᱮᱨᱢᱟ ᱒᱐᱒᱖-᱒᱗ ᱫᱚᱨᱠᱷᱟᱥᱛ ᱮᱛᱚᱦᱚᱵ ᱮᱱᱟ",
    heroTitle: "ᱵᱷᱟᱨᱚᱛ ᱟᱨ ᱡᱮᱜᱮᱛ ᱡᱟᱠᱟᱛ ᱨᱮ ST ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚᱣᱟᱜ ᱞᱟᱦᱟᱱᱛᱤ",
    heroSubtitle: "ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱢᱚᱱᱛᱨᱟᱲᱚᱭ ᱦᱚᱛᱮᱛᱮ AI-DBT, ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱪᱮᱠ ᱟᱨ ᱥᱚᱡᱷᱮ ᱵᱮᱸᱠ ᱮᱠᱟᱣᱩᱱᱴ ᱨᱮ ᱴᱟᱠᱟ ᱵᱷᱮᱡᱟ।",
    heroApplyBtn: "ᱥᱠᱚᱞᱟᱨᱥᱤᱯ ᱞᱟᱹᱜᱤᱫ ᱮᱯᱞᱟᱭ ᱢᱮ",
    heroTrackBtn: "ᱫᱚᱨᱠᱷᱟᱥᱛ ᱪᱮᱠ ᱢᱮ",
    heroVoiceBtn: "ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱨᱚᱲ (Voice)",
    heroFastTrack: "ᱞᱚᱜᱚᱱ ᱪᱮᱠ:",
    heroDigiLocker: "DigiLocker ᱡᱚᱲᱟᱣ ᱢᱮ",
    heroDigiLockerConnected: "✓ DigiLocker ᱡᱚᱲᱟᱣ ᱮᱱᱟ",
    heroNetraStudio: "Netra-ST AI ᱥᱴᱩᱰᱤᱭᱳ",
    heroImgCaption: "᱑᱖.᱔ ᱞᱟᱠᱷ ᱠᱷᱚᱱ ᱵᱟᱹᱲᱛᱤ ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱥᱚᱨᱠᱟᱨᱤ DBT ᱛᱮ ᱠᱚ ᱞᱟᱦᱟᱜ ᱠᱟᱱᱟ।",
    
    metricDbtValue: "₹᱒,᱗᱕᱗ ᱠᱳᱴᱤ+",
    metricDbtLabel: "Aadhaar DBT ᱛᱮ ᱥᱚᱡᱷᱮ ᱵᱮᱸᱠ ᱴᱟᱠᱟ",
    metricScholarsValue: "᱑᱖.᱔+ ᱞᱟᱠᱷ",
    metricScholarsLabel: "ST ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱜᱚᱲᱚ",
    metricSpeedValue: "᱓.᱕ ᱴᱤᱲᱤᱡ",
    metricSpeedLabel: "Netra-ST AI ᱞᱚᱜᱚᱱ ᱪᱮᱠ",
    
    tabSchemes: "ᱡᱚᱛᱚ ᱡᱚᱡᱚᱱᱟ (᱕)",
    tabTracker: "ᱫᱚᱨᱠᱷᱟᱥᱛ ᱴᱨᱮᱠ ᱢᱮ",
    tabFinder: "ᱯᱟᱹᱛᱭᱟᱹᱣ ᱵᱤᱰᱟᱹᱣ",
    tabDisbursement: "DBT ᱠᱟᱞᱮᱱᱰᱟᱨ",
    
    filterAll: "ᱡᱚᱛᱚ ᱡᱚᱡᱚᱱᱟ (᱕)",
    filterResearch: "ᱩᱥᱩᱞ ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ (Ph.D)",
    filterOverseas: "ᱵᱤᱫᱮᱥ ᱯᱟᱲᱦᱟᱣ (NOS)",
    filterPremier: "ᱢᱟᱨᱟᱝ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ (IIT/IIM)",
    filterSchool: "ᱤᱥᱠᱩᱞ ᱟᱨ ᱠᱚᱞᱮᱡᱽ (Pre/Post-Matric)",
    
    applyNow: "ᱮᱯᱞᱟᱭ ᱢᱮ",
    financialSupport: "ᱠᱟᱹᱣᱰᱤ ᱜᱚᱲᱚ",
    nfstTitle: "ST ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱯᱷᱮᱞᱳᱥᱤᱯ (NFST)",
    nfstDesc: "UGC ᱟᱨ CSIR ᱢᱟᱱᱟᱣ ᱵᱷᱟᱨᱚᱛ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱮ M.Phil / Ph.D. ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ",
    nfstStipend: "₹᱓᱑,᱐᱐᱐ – ₹᱓᱕,᱐᱐᱐ / ᱪᱟᱸᱫᱚ + HRA ᱟᱨ ᱜᱚᱲᱚ",
    nosTitle: "ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱵᱤᱫᱮᱥ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ (NOS)",
    nosDesc: "ᱡᱮᱜᱮᱛ ᱨᱮᱭᱟᱜ QS ᱴᱚᱯ ᱕᱐᱐ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱮ Master's ᱟᱨ Ph.D. ᱯᱟᱲᱦᱟᱣ",
    nosStipend: "USD $᱑᱕,᱔᱐᱐ / GBP £᱙,᱙᱐᱐ / ᱥᱮᱨᱢᱟ + ᱑᱐᱐% ᱯᱷᱤ ᱟᱨ ᱩᱰᱟᱹᱱ ᱵᱷᱟᱲᱟ",
    topClassTitle: "ᱥᱚᱨᱮᱥ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱮ ᱴᱚᱯ ᱠᱞᱟᱥ ᱥᱮᱪᱮᱫ",
    topClassDesc: "᱒᱖᱕+ ᱵᱟᱪᱷᱟᱣ IIT, IIM, NIT, AIIMS ᱟᱨ NLU ᱠᱚᱨᱮ ᱵᱷᱩᱨᱛᱤ",
    topClassStipend: "᱑᱐᱐% ᱠᱚᱞᱮᱡᱽ ᱯᱷᱤ + ₹᱘᱖,᱐᱐᱐/ᱥᱮᱨᱢᱟ ᱛᱟᱦᱮᱸᱱ ᱠᱷᱚᱨᱚᱪ + ᱞᱮᱯᱴᱚᱯ",
    postMatricTitle: "ST ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱯᱳᱥᱴ-ᱢᱮᱴᱨᱤᱠ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ",
    postMatricDesc: "᱑᱑ ᱟᱨ ᱑᱒ ᱪᱟᱱᱟᱪ, ITI, ᱯᱚᱞᱤᱴᱮᱠᱱᱤᱠ, ᱰᱤᱯᱞᱳᱢᱟ, ᱜᱨᱮᱡᱩᱭᱮᱴ ᱠᱚ ᱞᱟᱹᱜᱤᱫ",
    postMatricStipend: "₹᱒,᱕᱐᱐ – ₹᱑᱓,᱕᱐᱐ / ᱥᱮᱨᱢᱟ + ᱑᱐᱐% ᱯᱚᱲᱦᱚᱱ ᱯᱷᱤ",
    preMatricTitle: "ST ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱯᱨᱤ-ᱢᱮᱴᱨᱤᱠ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ",
    preMatricDesc: "ᱡᱚᱛᱚ ᱯᱚᱱᱚᱛ ᱨᱮ ᱙ ᱟᱨ ᱑᱐ ᱪᱟᱱᱟᱪ ᱨᱤᱱ ᱤᱥᱠᱩᱞ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ",
    preMatricStipend: "₹᱓,᱕᱐᱐ – ₹᱗,᱐᱐᱐ / ᱥᱮᱨᱢᱟ + ᱯᱩᱛᱷᱤ ᱠᱤᱨᱤᱧ ᱜᱚᱲᱚ",
    
    trackerTitle: "ᱫᱚᱨᱠᱷᱟᱥᱛ ᱨᱮᱭᱟᱜ ᱦᱟᱞᱚᱛ ᱧᱮᱞ ᱢᱮ",
    trackerSubtitle: "AI ᱪᱮᱠᱤᱝ, ᱡᱟᱹᱛᱤ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱟᱨ ᱵᱮᱸᱠ ᱮᱠᱟᱣᱩᱱᱴ ᱨᱮ ᱴᱟᱠᱟ ᱵᱚᱞᱚᱱ ᱨᱮᱭᱟᱜ ᱵᱤᱵᱚᱨᱚᱬ।",
    trackerSearchPlaceholder: "ᱫᱚᱨᱠᱷᱟᱥᱛ ᱮᱞ ᱚᱞ ᱢᱮ (e.g. MOTA/NFST/2026/89124)...",
    trackerSearchBtn: "ᱪᱮᱠ ᱢᱮ",
    trackerFilterAll: "ᱡᱚᱛᱚ ᱫᱚᱨᱠᱷᱟᱥᱛ",
    trackerFilterScrutiny: "AI ᱛᱮ ᱪᱮᱠ ᱪᱟᱹᱞᱩ",
    trackerFilterAction: "ᱠᱟᱜᱚᱡᱽ ᱥᱩᱫᱷᱨᱟᱹᱣ ᱞᱟᱹᱠᱛᱤ",
    trackerFilterSanctioned: "ᱴᱟᱠᱟ ᱵᱷᱮᱡᱟ ᱮᱱᱟ",
    statusUnderScrutiny: "AI ᱛᱮ ᱪᱮᱠ ᱪᱟᱹᱞᱩ ᱢᱮᱱᱟᱜ-ᱟ",
    statusDeficiency: "ᱠᱟᱜᱚᱡᱽ ᱥᱩᱫᱷᱨᱟᱹᱣ ᱞᱟᱹᱠᱛᱤ",
    statusShortlisted: "ᱠᱚᱢᱤᱴᱤ ᱦᱚᱛᱮᱛᱮ ᱵᱟᱪᱷᱟᱣ ᱮᱱᱟ",
    statusSanctioned: "ᱢᱟᱱᱟᱣ ᱮᱱᱟ ᱟᱨ ᱴᱟᱠᱟ ᱵᱷᱮᱡᱟ ᱮᱱᱟ",
    statusRejected: "ᱵᱟᱝ ᱦᱩᱭ ᱞᱮᱱᱟ",
    viewSanctionBtn: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ ᱢᱮ",
    resolveDeficiencyBtn: "ᱱᱟᱶᱟ ᱠᱟᱜᱚᱡᱽ ᱟᱯᱞᱳᱰ ᱢᱮ",
    
    footerHelpdesk: "ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ AI ᱦᱮᱞᱯᱰᱮᱥᱠ",
    footerTollFree: "ᱴᱳᱞ-ᱯᱷᱨᱤ ᱱᱚᱢᱵᱚᱨ: 1800-11-7777 (ᱥᱤᱸᱜᱮ-ᱧᱩᱦᱩᱢ, 9AM-6PM)",
    footerRights: "ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱢᱚᱱᱛᱨᱟᱲᱚᱭ, ᱵᱷᱟᱨᱚᱛ ᱥᱚᱨᱠᱟᱨ। ᱡᱚᱛᱚ ᱦᱚᱠ ᱨᱟᱠᱷᱟ ᱢᱮᱱᱟᱜ-ᱟ।"
  },
  
  gon: {
    govIndia: "भारत सरकार",
    motaMinistry: "जनजातीय कार्य मंत्रालय",
    paperlessDbt: "100% पेपरलेस डीबीटी",
    circularsLabel: "सूचना",
    tickerText: "⚡ NFST 2026-27: नेत्रा-एसटी AI ते त्वरित जांच मंता • 16.4 लाख एसटी लइकास्कुन डीबीटी साह्य वाटो मंता • ✈️ NOS विदेश छात्रवृत्ति: QS टॉप 500 विदेशी यूनिवर्सिटी ते 100% फीस • 🏛️ टॉप क्लास शिक्षा: डिजिलॉकर ते ऑटो-सत्यापन आता।",
    
    roleScholar: "छात्रवृत्ति पोर्टल",
    roleScrutiny: "जांच डेस्क",
    roleFellowship: "प्रगति-360 अध्येता",
    roleAdmin: "मंत्रालय डीबीटी कंसोल",
    roleInstitute: "संस्थान नोडल डेस्क",
    
    heroBadge: "शैक्षणिक सत्र 2026-27 आवेदन चालू मंता",
    heroTitle: "भारत अउर दुनिया भर ते एसटी छात्रस्कुन सशक्तिकरण",
    heroSubtitle: "जनजातीय कार्य मंत्रालय द्वारा AI-सक्षम डीबीटी, स्वचालित कागजात जांच अउर सीधा बैंक खाता ते वजीफा।",
    heroApplyBtn: "छात्रवृत्ति बर आवेदन कीमट",
    heroTrackBtn: "आवेदन स्थिति चूमट",
    heroVoiceBtn: "कोया / गोंडी वाणी (Voice)",
    heroFastTrack: "जल्दी जांच:",
    heroDigiLocker: "डिजिलॉकर जोड़ट",
    heroDigiLockerConnected: "✓ डिजिलॉकर जुड़ता",
    heroNetraStudio: "नेत्रा-एसटी AI ओसीआर",
    heroImgCaption: "डीबीटी ना माध्यम ते 16.4 लाख ले जादा आदिवासी लइकास्कुन मदद वाटो मंता।",
    
    metricDbtValue: "₹2,757 करोड़+",
    metricDbtLabel: "आधार डीबीटी सीधा बैंक खाता",
    metricScholarsValue: "16.4+ लाख",
    metricScholarsLabel: "एसटी लइकास्कुन साह्य",
    metricSpeedValue: "3.5 मिनट",
    metricSpeedLabel: "नेत्रा-एसटी AI जांच गति",
    
    tabSchemes: "सब्बो योजना (5)",
    tabTracker: "आवेदन ट्रैक कीमट",
    tabFinder: "पात्रता जांच",
    tabDisbursement: "डीबीटी समय सारिणी",
    
    filterAll: "सब्बो योजना (5)",
    filterResearch: "उच्च शोध (Ph.D)",
    filterOverseas: "विदेश पढ़ाई (NOS)",
    filterPremier: "शीर्ष कॉलेज (IIT/IIM)",
    filterSchool: "स्कूल अउर कॉलेज (Pre/Post)",
    
    applyNow: "आवेदन कीमट",
    financialSupport: "पैसा साह्य",
    nfstTitle: "एसटी छात्रस्कुन बर राष्ट्रीय फेलोशिप (NFST)",
    nfstDesc: "UGC अउर CSIR कॉलेज ते M.Phil / Ph.D. शोध",
    nfstStipend: "₹31,000 – ₹35,000 / महीना + HRA अउर अनुदान",
    nosTitle: "राष्ट्रीय प्रवासी छात्रवृत्ति (NOS)",
    nosDesc: "दुनिया ना QS टॉप 500 विदेशी कॉलेज ते पढ़ाई",
    nosStipend: "USD $15,400 / GBP £9,900 / साल + 100% फीस",
    topClassTitle: "शीर्ष संस्थान ते उच्च शिक्षा",
    topClassDesc: "265+ IIT, IIM, NIT अउर AIIMS ते दाखिला",
    topClassStipend: "100% कॉलेज फीस + ₹86,000/साल खर्च",
    postMatricTitle: "एसटी छात्रस्कुन बर पोस्ट-मैट्रिक",
    postMatricDesc: "11वीं, 12वीं, ITI, डिप्लोमा अउर डिग्री बर",
    postMatricStipend: "₹2,500 – ₹13,500 / साल + पूरा फीस",
    preMatricTitle: "एसटी छात्रस्कुन बर प्री-मैट्रिक",
    preMatricDesc: "9वीं अउर 10वीं स्कूल लइकास्कुन बर",
    preMatricStipend: "₹3,500 – ₹7,000 / साल + किताब साह्य",
    
    trackerTitle: "आवेदन ना ताजा स्थिति",
    trackerSubtitle: "AI जांच, जाति प्रमाणपत्र अउर बैंक खाता ते पैसा जमा ना विवरण चूमट।",
    trackerSearchPlaceholder: "आवेदन नंबर वाटट (e.g. MOTA/NFST/2026/89124)...",
    trackerSearchBtn: "ट्रैक कीमट",
    trackerFilterAll: "सब्बो आवेदन",
    trackerFilterScrutiny: "AI जांच चालू मंता",
    trackerFilterAction: "कागजात सुधार कीले",
    trackerFilterSanctioned: "मंजूर अउर पैसा वत्ता",
    statusUnderScrutiny: "AI जांच चालू मंता",
    statusDeficiency: "कागजात सुधार आवश्यक",
    statusShortlisted: "कमेटी द्वारा स्वीकृत",
    statusSanctioned: "पैसा बैंक खाता ते जमा आता",
    statusRejected: "अपात्र घोषित",
    viewSanctionBtn: "मंजूरी पत्र चूमट",
    resolveDeficiencyBtn: "नया कागजात अपलोड कीमट",
    
    footerHelpdesk: "राष्ट्रीय जनजातीय छात्रवृत्ति AI हेल्पडेस्क",
    footerTollFree: "टोल-फ्री नंबर: 1800-11-7777 (सोम-शनि, 9AM-6PM)",
    footerRights: "जनजातीय कार्य मंत्रालय, भारत सरकार।"
  },
  
  bhi: {
    govIndia: "भारत सरकार",
    motaMinistry: "जनजातीय कार्य मंत्रालय",
    paperlessDbt: "100% पेपरलेस डीबीटी",
    circularsLabel: "समाचार",
    tickerText: "⚡ NFST 2026-27: नेत्रा-एसटी AI थी तपास चालू छे • 16.4 लाख एसटी विद्यार्थीयो ने सीधो वजीफो मळ्यो • ✈️ NOS विदेश छात्रवृत्ति: दुनिया नी टॉप 500 यूनिवर्सिटी मा 100% फीस • 🏛️ टॉप क्लास शिक्षा: डिजिलॉकर थी दाखलो वेराफाय थई गयो।",
    
    roleScholar: "विद्यार्थी पोर्टल",
    roleScrutiny: "तपास डेस्क",
    roleFellowship: "प्रगति-360 अध्येता",
    roleAdmin: "मंत्रालय डीबीटी कंसोल",
    roleInstitute: "कॉलेज नोडल डेस्क",
    
    heroBadge: "शैक्षणिक सत्र 2026-27 अर्ज चालू थई गया",
    heroTitle: "भारत अने दुनिया भर मा एसटी विद्यार्थीयो नुं सशक्तिकरण",
    heroSubtitle: "आदिमजाति मंत्रालय द्वारा AI-डीबीटी, कागळिया नी त्वरित तपास अने सीधा बैंक खाता मा शिष्यवृत्ति।",
    heroApplyBtn: "शिष्यवृत्ति माटे अर्ज करो",
    heroTrackBtn: "अर्ज नी स्थिति तपासी लो",
    heroVoiceBtn: "भीली वाणी (Voice)",
    heroFastTrack: "तातकालिक तपास:",
    heroDigiLocker: "डिजिलॉकर जोड़ो",
    heroDigiLockerConnected: "✓ डिजिलॉकर जोड़ी लीधो",
    heroNetraStudio: "नेत्रा-एसटी AI ओसीआर",
    heroImgCaption: "डीबीटी थी 16.4 लाख थी वधु आदिवासी छोकरा-छोकरिओ लाभ लेई रह्या छे।",
    
    metricDbtValue: "₹2,757 करोड़+",
    metricDbtLabel: "सीधा बैंक खाता मा जमा",
    metricScholarsValue: "16.4+ लाख",
    metricScholarsLabel: "एसटी विद्यार्थीयो ने साह्य",
    metricSpeedValue: "3.5 मिनट",
    metricSpeedLabel: "नेत्रा-एसटी त्वरित AI तपास",
    
    tabSchemes: "बधी योजनाओ (5)",
    tabTracker: "अर्ज ट्रैक करो",
    tabFinder: "लायकात तपासो",
    tabDisbursement: "डीबीटी तारीखो",
    
    filterAll: "बधी योजनाओ (5)",
    filterResearch: "उच्च शोध (Ph.D)",
    filterOverseas: "विदेश भणतर (NOS)",
    filterPremier: "टॉप कॉलेज (IIT/IIM)",
    filterSchool: "शाळा अने कॉलेज (Pre/Post)",
    
    applyNow: "अर्ज करो",
    financialSupport: "नाणाकीय मदद",
    nfstTitle: "एसटी विद्यार्थीयो माटे राष्ट्रीय फेलोशिप (NFST)",
    nfstDesc: "UGC अने CSIR मान्यता प्राप्त यूनिवर्सिटी मा M.Phil / Ph.D. रीसर्च",
    nfstStipend: "₹31,000 – ₹35,000 / महिना + घरभाडुं अने अनुदान",
    nosTitle: "राष्ट्रीय ओवरसीज स्कॉलरशिप (NOS)",
    nosDesc: "दुनिया नी QS टॉप 500 यूनिवर्सिटी मा मास्टर अने पी.एच.डी.",
    nosStipend: "USD $15,400 / GBP £9,900 / वर्ष + 100% कॉलेज फीस अने टिकट",
    topClassTitle: "उत्कृष्ट संस्थाओ मा टॉप क्लास शिक्षण",
    topClassDesc: "265+ IIT, IIM, NIT, AIIMS अने लॉ यूनिवर्सिटी मा प्रवेश",
    topClassStipend: "100% फीस + ₹86,000/वर्ष रहवानो खर्च + लैपटॉप",
    postMatricTitle: "एसटी विद्यार्थीयो माटे पोस्ट-मैट्रिक शिष्यवृत्ति",
    postMatricDesc: "ધોરણ 11, 12, ITI, पॉलिटेक्निक, डिप्लोमा अने डिग्री माटे",
    postMatricStipend: "₹2,500 – ₹13,500 / वर्ष + 100% कॉलेज फीस",
    preMatricTitle: "एसटी विद्यार्थीयो माटे प्री-मैट्रिक शिष्यवृत्ति",
    preMatricDesc: "ધોરણ 9 अने 10 ना शाळा ना विद्यार्थीयो माटे",
    preMatricStipend: "₹3,500 – ₹7,000 / वर्ष + चोपडी अनुदान",
    
    trackerTitle: "अर्ज नी चालु स्थिति तपासी लो",
    trackerSubtitle: "AI तपास, जाति दाखलो अने बैंक खाता मा जमा थयेल वजीफो जोवो।",
    trackerSearchPlaceholder: "अर्ज नंबर नाखो (उदा. MOTA/NFST/2026/89124)...",
    trackerSearchBtn: "तपासो",
    trackerFilterAll: "बधा अर्ज",
    trackerFilterScrutiny: "AI तपास चालू छे",
    trackerFilterAction: "कागळ सुधारवो पडशे",
    trackerFilterSanctioned: "मंजूर थई गयो",
    statusUnderScrutiny: "AI तपास चालू छे",
    statusDeficiency: "कागळिया मा सुधारो करो",
    statusShortlisted: "कमेटी द्वारा पसंदगी थई",
    statusSanctioned: "मंजूर थई गयो अने बैंक मा जमा",
    statusRejected: "अमान्य थयो",
    viewSanctionBtn: "मंजूरी पत्र जोवो",
    resolveDeficiencyBtn: "कागळ फरी अपलोड करो",
    
    footerHelpdesk: "राष्ट्रीय जनजातीय शिष्यवृत्ति AI हेल्पडेस्क",
    footerTollFree: "टोल-फ्री नंबर: 1800-11-7777 (सोम-शनि, 9AM-6PM)",
    footerRights: "जनजातीय कार्य मंत्रालय, भारत सरकार।"
  },
  
  od: {
    govIndia: "ଭାରତ ସରକାର",
    motaMinistry: "ଜନଜାତି ବ୍ୟାପାର ମନ୍ତ୍ରଣାଳୟ",
    paperlessDbt: "୧୦୦% ଡିଜିଟାଲ DBT",
    circularsLabel: "ବିଜ୍ଞପ୍ତି",
    tickerText: "⚡ NFST 2026-27: ନେତ୍ରା-ST AI ଦ୍ୱାରା ଯାଞ୍ଚ ଆରମ୍ଭ • ୧୬.୪ ଲକ୍ଷରୁ ଊର୍ଦ୍ଧ୍ୱ ST ଛାତ୍ରଛାତ୍ରୀ DBT ମାଧ୍ୟମରେ ଉପକୃତ • ✈️ NOS ବିଦେଶ ଛାତ୍ରବୃତ୍ତି: QS ଟପ୍ ୫୦୦ ବିଦେଶୀ ବିଶ୍ୱବିଦ୍ୟାଳୟ ପାଇଁ ୧୦୦% ଖର୍ଚ୍ଚ • 🏛️ ଟପ୍ କ୍ଲାସ୍ ଶିକ୍ଷା: ଡିଜିଲକର ଦ୍ୱାରା ନାମଲେଖା ସ୍ୱତଃ ଯାଞ୍ଚ।",
    
    roleScholar: "ଛାତ୍ରବୃତ୍ତି ପୋର୍ଟାଲ",
    roleScrutiny: "ଯାଞ୍ଚ ଡେସ୍କ",
    roleFellowship: "ପ୍ରଗତି-୩୬୦ ଅଧ୍ୟେତା",
    roleAdmin: "ମନ୍ତ୍ରଣାଳୟ DBT କନସୋଲ",
    roleInstitute: "ଅନୁଷ୍ଠାନ ନୋଡାଲ ଡେସ୍କ",
    
    heroBadge: "ଶିକ୍ଷାବର୍ଷ ୨୦୨୬-୨୭ ଆବେଦନ ଖୋଲା ଅଛି",
    heroTitle: "ଭାରତ ଓ ବିଶ୍ୱବ୍ୟାପୀ ଅନୁସୂଚିତ ଜନଜାତି ଛାତ୍ରଛାତ୍ରୀଙ୍କ ସଶକ୍ତୀକରଣ",
    heroSubtitle: "ଜନଜାତି ବ୍ୟାପାର ମନ୍ତ୍ରଣାଳୟ ଦ୍ୱାରା AI-ସକ୍ଷମ DBT, ସ୍ୱୟଂଚାଳିତ କାଗଜପତ୍ର ଯାଞ୍ଚ ଓ ସିଧାସଳଖ ବ୍ୟାଙ୍କ ଖାତାକୁ ଛାତ୍ରବୃତ୍ତି।",
    heroApplyBtn: "ଛାତ୍ରବୃତ୍ତି ପାଇଁ ଆବେଦନ କରନ୍ତୁ",
    heroTrackBtn: "ଆବେଦନ ସ୍ଥିତି ଯାଞ୍ଚ କରନ୍ତୁ",
    heroVoiceBtn: "ଆଦିବାସୀ ବାଣୀ (Voice)",
    heroFastTrack: "ଦ୍ରୁତ ଯାଞ୍ଚ:",
    heroDigiLocker: "ଡିଜିଲକର ସଂଯୋଗ କରନ୍ତୁ",
    heroDigiLockerConnected: "✓ ଡିଜିଲକର ଯୋଡ଼ାଗଲା",
    heroNetraStudio: "ନେତ୍ରା-ST AI OCR ଷ୍ଟୁଡିଓ",
    heroImgCaption: "DBT ମାଧ୍ୟମରେ ୧୬.୪ ଲକ୍ଷରୁ ଅଧିକ ଜନଜାତି ଛାତ୍ରଛାତ୍ରୀ ଉଚ୍ଚଶିକ୍ଷା ଗ୍ରହଣ କରୁଛନ୍ତି।",
    
    metricDbtValue: "₹୨,୭୫୭ କୋଟି+",
    metricDbtLabel: "ଆଧାର DBT ସିଧାସଳଖ ବ୍ୟାଙ୍କ ଖାତା",
    metricScholarsValue: "୧୬.୪+ ଲକ୍ଷ",
    metricScholarsLabel: "ST ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ସହାୟତା",
    metricSpeedValue: "୩.୫ ମିନିଟ୍",
    metricSpeedLabel: "ନେତ୍ରା-ST ତତ୍କାଳ AI ଯାଞ୍ଚ",
    
    tabSchemes: "ସମସ୍ତ ଯୋଜନା (୫)",
    tabTracker: "ଆବେଦନ ଟ୍ରାକ୍ କରନ୍ତୁ",
    tabFinder: "ଯୋଗ୍ୟତା ଯାଞ୍ଚ",
    tabDisbursement: "DBT କ୍ୟାଲେଣ୍ଡର",
    
    filterAll: "ସମସ୍ତ ଯୋଜନା (୫)",
    filterResearch: "ଉଚ୍ଚ ଗବେଷଣା (Ph.D)",
    filterOverseas: "ବିଦେଶ ଶିକ୍ଷା (NOS)",
    filterPremier: "ଶୀର୍ଷ ଅନୁଷ୍ଠାନ (IIT/IIM)",
    filterSchool: "ବିଦ୍ୟାଳୟ ଓ କଲେଜ (Pre/Post-Matric)",
    
    applyNow: "ଆବେଦନ କରନ୍ତୁ",
    financialSupport: "ଆର୍ଥିକ ସହାୟତା",
    nfstTitle: "ଜାତୀୟ ଫେଲୋସିପ୍ (NFST)",
    nfstDesc: "UGC ଓ CSIR ସ୍ୱୀକୃତିପ୍ରାପ୍ତ ବିଶ୍ୱବିଦ୍ୟାଳୟରେ M.Phil / Ph.D. ଗବେଷଣା",
    nfstStipend: "₹୩୧,୦୦୦ – ₹୩୫,୦୦୦ / ମାସିକ + ଘରଭଡ଼ା ଓ ଅନୁଦାନ",
    nosTitle: "ଜାତୀୟ ବିଦେଶୀ ଛାତ୍ରବୃତ୍ତି (NOS)",
    nosDesc: "ବିଶ୍ୱର QS ଟପ୍ ୫୦୦ ବିଶ୍ୱବିଦ୍ୟାଳୟରେ ମାଷ୍ଟର ଓ ଡକ୍ଟରେଟ୍",
    nosStipend: "USD $୧୫,୪୦᱐ / GBP £୯,୯୦᱐ / ବର୍ଷକୁ + ୧୦୦% ଫିସ୍ ଓ ବିମାନ ଭଡ଼ା",
    topClassTitle: "ଶୀର୍ଷ ଅନୁଷ୍ଠାନରେ ଉତ୍କୃଷ୍ଟ ଶିକ୍ଷା",
    topClassDesc: "୨୬୫+ ବିଜ୍ଞପ୍ତ IIT, IIM, NIT, AIIMS ଓ NLU ରେ ନାମଲେଖା",
    topClassStipend: "୧୦୦% ଫିସ୍ + ₹୮୬,୦୦᱐/ବାର୍ଷିକ ରହିବା ଖର୍ଚ୍ଚ + ଲାପଟପ୍",
    postMatricTitle: "ପୋଷ୍ଟ-ମେଟ୍ରିକ୍ ଛାତ୍ରବୃତ୍ତି",
    postMatricDesc: "ଯୁକ୍ତ ଦୁଇ, ITI, ପଲିଟେକନିକ୍, ଡିପ୍ଲୋମା, ଡିଗ୍ରୀ ଓ ପିଜି ପାଇଁ",
    postMatricStipend: "₹୨,୫୦᱐ – ₹୧୩,୫᱐᱐ / ବାର୍ଷିକ + ୧୦୦% କଲେଜ ଫିସ୍",
    preMatricTitle: "ପ୍ରି-ମେଟ୍ରିକ୍ ଛାତ୍ରବୃତ୍ତି",
    preMatricDesc: "ସମସ୍ତ ରାଜ୍ୟରେ ନବମ ଓ ଦଶମ ଶ୍ରେଣୀର ବିଦ୍ୟାଳୟ ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ",
    preMatricStipend: "₹୩,୫୦᱐ – ₹୭,୦୦᱐ / ବାର୍ଷିକ + ପୁସ୍ତକ ଅନୁଦାନ",
    
    trackerTitle: "ଆବେଦନର ବାସ୍ତବ ସ୍ଥିତି",
    trackerSubtitle: "AI ଯାଞ୍ଚ, ଜାତି ପ୍ରମାଣପତ୍ର ଓ ବ୍ୟାଙ୍କ ଖାତାକୁ DBT ପ୍ରେରଣ ବିବରଣୀ।",
    trackerSearchPlaceholder: "ଆବେଦନ ନମ୍ବର ଲେଖନ୍ତୁ (e.g. MOTA/NFST/2026/89124)...",
    trackerSearchBtn: "ଟ୍ରାକ୍ କରନ୍ତୁ",
    trackerFilterAll: "ସମସ୍ତ ଆବେଦନ",
    trackerFilterScrutiny: "AI ଯାଞ୍ଚ ଚାଲିଛି",
    trackerFilterAction: "ସଂଶୋଧନ ଆବଶ୍ୟକ",
    trackerFilterSanctioned: "ମଞ୍ଜୁର ଓ ପ୍ରଦାନ ସଫଳ",
    statusUnderScrutiny: "AI ଯାଞ୍ଚ ଚାଲିଛି",
    statusDeficiency: "କାଗଜପତ୍ର ସଂଶୋଧନ ଆବଶ୍ୟକ",
    statusShortlisted: "କମିଟି ଦ୍ୱାରା ମନୋନୀତ",
    statusSanctioned: "ମଞ୍ଜୁର ହୋଇ ବ୍ୟାଙ୍କକୁ ପଠାଗଲା",
    statusRejected: "ଅଗ୍ରାହ୍ୟ କରାଗଲା",
    viewSanctionBtn: "ମଞ୍ଜୁରି ପତ୍ର ଦେଖନ୍ତୁ",
    resolveDeficiencyBtn: "ସଂଶୋଧିତ କାଗଜ ଅପଲୋଡ କରନ୍ତୁ",
    
    footerHelpdesk: "ଜାତୀୟ ଜନଜାତି ଛାତ୍ରବୃତ୍ତି AI ହେଲ୍ପଡେସ୍କ",
    footerTollFree: "ଟୋଲ୍-ଫ୍ରି ନମ୍ବର: 1800-11-7777 (ସୋମ-ଶନି, 9AM-6PM)",
    footerRights: "ଜନଜାତି ବ୍ୟାପାର ମନ୍ତ୍ରଣାଳୟ, ଭାରତ ସରକାର।"
  }
};

export const getTranslation = (lang: string = 'en'): TranslationStrings => {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
};
