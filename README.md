# PRERNA-ST | प्रेरणा-एसटी
### AI-Enabled Scholarship & Fellowship Management System
**Ministry of Tribal Affairs (MoTA) • Government of India (भारत सरकार)**

![PRERNA-ST Portal](public/hero_scholars.jpg)

---

## 🏛️ Overview
**PRERNA-ST** is a state-of-the-art, AI-powered scholarship and fellowship lifecycle portal designed for the **Ministry of Tribal Affairs (MoTA)** to support Scheduled Tribe (ST) students and scholars across India and abroad.

The system replaces manual scrutiny, paper correspondence, and verification bottlenecks with **multimodal AI intelligence**, **real-time DigiLocker integration**, **fraud-detection forensics**, and **direct Aadhaar-seeded PFMS/DBT transfers**.

---

## ⚡ Key Highlights & Core Capabilities

- **🌿 Netra-ST AI OCR & Tamper Forensics (v4.2)**:
  - Deep-learning multimodal document intelligence for instant verification of Scheduled Tribe Community Certificates, Tehsildar income proofs, and foreign offer letters.
  - Multi-page vector and 300 DPI raster scan inspection.
  - Real-time tamper forensic checks (zero pixel displacement, font kerning consistency, EXIF audit, and SHA-256 state gazette cryptographic verification).
  - Supports live uploads of `.pdf`, `.jpg`, `.jpeg`, and `.png` documents.

- **🗣️ Setu-AI Tribal Voice Assistant (आदिवासी वाणी)**:
  - Multilingual voice-first assistant designed for scholars from remote tribal districts.
  - Full native translations and speech support in **6 languages**:
    - **English (`en`)**
    - **हिन्दी (`hi` - Hindi)**
    - **ᱥᱟᱱᱛᱟᱲᱤ (`sat` - Santhali / Ol Chiki)**
    - **कोया (`gon` - Gondi)**
    - **भीली (`bhi` - Bhili)**
    - **ଓଡ଼ିଆ (`od` - Odia)**

- **📜 Official MoTA Provisional Sanction & Award Letter Generator**:
  - Client-side cryptographic PDF letter synthesis via `jsPDF`.
  - Formats national emblem, Shastri Bhawan letterhead, candidate particulars, approved monthly stipends & living allowances, PFMS-APB disbursement channel, and digital signature of the Joint Secretary.

- **🔎 Real-Time Live Application Tracker**:
  - 5-stage visual progress pipeline (*Digital Application -> Netra-ST AI Scrutiny -> Ministry Officer Desk -> Sanction Committee -> DBT PFMS Release*).
  - One-click deficiency auto-resolution workflow.

- **🎓 Comprehensive Coverage of 5 National ST Schemes**:
  1. **NFST (National Fellowship for ST Students)**: M.Phil / Ph.D. research fellowships across UGC & CSIR recognized Indian universities (₹31k–₹35k/month + HRA).
  2. **NOS (National Overseas Scholarship)**: Master's & Ph.D. in QS World Top 500 universities abroad (USD $15,400 / GBP £9,900 / yr + 100% fees & airfare).
  3. **Top Class Education in Premier Institutes**: 265+ notified IITs, IIMs, NITs, AIIMS, and NLUs (100% tuition + ₹86,000/yr living allowance + laptop grant).
  4. **Post-Matric Scholarship for ST Students**: Class 11, 12, ITI, Polytechnic, Diploma, UG, and PG degrees across all States/UTs.
  5. **Pre-Matric Scholarship for ST Students**: Secondary education retention in Classes 9 and 10 with annual book grants.

- **🎨 Multi-Theme Accessibility**:
  - Clean light themes: White & Emerald Green, White & Royal Blue, White, Green & Yellow, White & Teal Cyan.
  - Font size scaler (A-, A, A+) and WCAG AAA compliant contrast.
  - Moving announcement ticker for circulars with hover-pause functionality.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Vanilla CSS Design Tokens + Tailwind CSS
- **Document & PDF Generation**: `jsPDF`, `html2canvas`
- **Icons**: Lucide React
- **Celebrations**: `canvas-confetti`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation
```bash
git clone https://github.com/hemalathabe2526-hub/PRERNA-ST-Tribal-Scholarship-AI.git
cd PRERNA-ST-Tribal-Scholarship-AI
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🔒 Security & Standards Compliance
- Cryptographic hash verification via SHA-256 for all official gazette records.
- DigiLocker API integration standard compliant.
- PFMS / Aadhaar Payment Bridge (APB) direct debit protocol aligned.
- Privacy-first client-side document processing for sensitive identity documents.

---

## 🇮🇳 Ministry Attribution
Developed for the **Ministry of Tribal Affairs (MoTA)**, Government of India.
Shastri Bhawan, Dr. Rajendra Prasad Road, New Delhi - 110001.
