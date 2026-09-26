import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Award, 
  Building2, 
  ShieldCheck, 
  QrCode,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { ApplicationRecord } from '../types';

interface SanctionLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: ApplicationRecord | null;
}

import { jsPDF } from 'jspdf';

export const SanctionLetterModal: React.FC<SanctionLetterModalProps> = ({
  isOpen,
  onClose,
  application
}) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!isOpen || !application) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    if (!application) return;

    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = doc.internal.pageSize.getWidth();

      // Top Tri-Color Line
      doc.setFillColor(249, 115, 22);
      doc.rect(0, 0, pageWidth / 3, 3, 'F');
      doc.setFillColor(255, 255, 255);
      doc.rect(pageWidth / 3, 0, pageWidth / 3, 3, 'F');
      doc.setFillColor(5, 150, 105);
      doc.rect((2 * pageWidth) / 3, 0, pageWidth / 3, 3, 'F');

      // National Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      doc.text('GOVERNMENT OF INDIA', pageWidth / 2, 16, { align: 'center' });

      doc.setFontSize(11);
      doc.setTextColor(5, 150, 105);
      doc.text('MINISTRY OF TRIBAL AFFAIRS', pageWidth / 2, 22, { align: 'center' });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text('Shastri Bhawan, Dr. Rajendra Prasad Road, New Delhi - 110001', pageWidth / 2, 27, { align: 'center' });
      doc.text('PRERNA-ST: AI-Enabled National Tribal Scholarship & Fellowship Management System', pageWidth / 2, 31, { align: 'center' });

      // Divider Line
      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.4);
      doc.line(15, 34, pageWidth - 15, 34);

      // Memo Number & Date
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.setFont('helvetica', 'bold');
      doc.text(`Sanction Memo: MoTA/EDU/${application.schemeCode}/2026/AW-${application.id.slice(-4)}`, 15, 41);
      doc.setFont('helvetica', 'normal');
      doc.text(`Date of Sanction: 25th September 2026`, pageWidth - 15, 41, { align: 'right' });

      // Recipient
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text('To,', 15, 49);
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(application.applicantName.toUpperCase(), 15, 54);
      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text(`ST Community: ${application.tribeGroup} ${application.isPVTG ? '(PVTG Category)' : ''}`, 15, 59);
      doc.text(`District / State: ${application.district}, ${application.state}`, 15, 64);
      doc.text(`Enrolled Institution: ${application.universityName}`, 15, 69);

      // Subject Box
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(217, 119, 6);
      doc.rect(15, 74, pageWidth - 30, 11, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(180, 83, 9);
      doc.text(`SUBJECT: Provisional Sanction & Award of ${application.schemeCode} for Academic Cycle 2026-27`, 18, 81);

      // Body Paragraphs
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(30, 41, 59);
      doc.setFontSize(9);

      let y = 92;
      const p1 = `Sir / Madam, with reference to application number ${application.applicationNumber}, the Ministry of Tribal Affairs (MoTA), Government of India, is pleased to convey the provisional sanction and award of fellowship under the ${application.schemeCode} Scheme for pursuing ${application.courseOfStudy}.`;
      const splitP1 = doc.splitTextToSize(p1, pageWidth - 30);
      doc.text(splitP1, 15, y);
      y += splitP1.length * 4.5 + 3;

      const p2 = `This award is approved pursuant to multi-tier automated scrutiny and biometric verification by the Netra-ST AI Scrutiny Engine, verifying Scheduled Tribe credentials, income validity, and academic admission compliance as notified under Central Government norms.`;
      const splitP2 = doc.splitTextToSize(p2, pageWidth - 30);
      doc.text(splitP2, 15, y);
      y += splitP2.length * 4.5 + 5;

      // Financial Details Box
      doc.setFillColor(241, 245, 249);
      doc.rect(15, y, pageWidth - 30, 30, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text('SANCTIONED FINANCIAL ASSISTANCE & DBT DISBURSEMENT PACKAGE:', 18, y + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      const isNosScheme = application.schemeCode === 'NOS';
      doc.text(`• Monthly Stipend / Living Allowance: ${isNosScheme ? 'USD $15,400 per annum (Direct Forex Wire)' : 'INR Rs. 31,000 / month (JRF) + HRA'}`, 20, y + 12);
      doc.text(`• Contingency / Book & Lab Grant: ${isNosScheme ? '100% Non-refundable Tuition Fees + Airfare' : 'INR Rs. 12,000 / annum (Non-refundable Grant)'}`, 20, y + 17);
      doc.text(`• Payment Mode: Direct Benefit Transfer (DBT) via Aadhaar Payment Bridge (APB / PFMS)`, 20, y + 22);
      doc.text(`• Tenure Duration: Up to 5 Academic Years (Subject to digital bi-annual progress reports)`, 20, y + 27);
      y += 36;

      const p3 = `The monthly financial assistance shall be disbursed directly into your Aadhaar-seeded bank account through PFMS. You are advised to maintain continuous full-time academic enrolment and submit quarterly research updates via the PRERNA-ST portal.`;
      const splitP3 = doc.splitTextToSize(p3, pageWidth - 30);
      doc.text(splitP3, 15, y);
      y += splitP3.length * 4.5 + 8;

      // Digital Signature & QR Info
      doc.setDrawColor(203, 213, 225);
      doc.line(15, y, pageWidth - 15, y);
      y += 8;

      doc.setFontSize(7.5);
      doc.setTextColor(71, 85, 105);
      doc.text('Verification Code: MOTA-ST-2026-CERT-OK', 15, y);
      doc.text(`Cryptographic SHA-256: 7f9a2b8e3104c99a81e35f992`, 15, y + 4.5);
      doc.setTextColor(5, 150, 105);
      doc.setFont('helvetica', 'bold');
      doc.text('✓ Digitally Signed & Authenticated via National e-Sign', 15, y + 9);

      doc.setTextColor(15, 23, 42);
      doc.text('Dr. Sanjeev Murmu, IAS', pageWidth - 15, y, { align: 'right' });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(71, 85, 105);
      doc.text('Joint Secretary to the Government of India', pageWidth - 15, y + 4.5, { align: 'right' });
      doc.text('Ministry of Tribal Affairs, Shastri Bhawan, New Delhi', pageWidth - 15, y + 9, { align: 'right' });

      // Save PDF
      const cleanAppNum = application.applicationNumber.replace(/[\/\\]/g, '_');
      doc.save(`MoTA_Sanction_Letter_${cleanAppNum}.pdf`);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('PDF generation error:', err);
      // Fallback to print
      window.print();
    }
  };

  const isNos = application.schemeCode === 'NOS';

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-4xl p-6 relative">
        
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                Official MoTA Provisional Sanction & Award Letter
              </h3>
              {downloadSuccess && (
                <span className="text-[11px] text-emerald-700 font-extrabold animate-pulse">
                  ✓ PDF successfully downloaded to your device!
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              title="Print letter or Save as PDF via system dialog"
            >
              <Printer className="w-3.5 h-3.5 text-slate-700" />
              <span>Print Letter</span>
            </button>
            <button
              onClick={handleDownloadPdf}
              className="btn btn-primary btn-sm bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer"
              title="Download signed official Government PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Government Letterhead Document */}
        <div className="bg-white p-8 md:p-12 border-2 border-slate-300 rounded-lg shadow-sm font-serif text-slate-900 text-sm leading-relaxed relative">
          
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none text-9xl font-black text-slate-900 rotate-[-25deg]">
            MoTA GOVT OF INDIA
          </div>

          {/* Letterhead Top */}
          <div className="text-center pb-6 border-b-2 border-slate-900/80 mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
            <h4 className="text-base font-bold tracking-wider uppercase text-slate-900">
              Government of India • Ministry of Tribal Affairs
            </h4>
            <h5 className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              जनजातीय कार्य मंत्रालय • भारत सरकार
            </h5>
            <p className="text-xs text-slate-600 mt-1">
              Shastri Bhawan, Dr. Rajendra Prasad Road, New Delhi - 110001
            </p>
          </div>

          {/* Reference & Date */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-700 mb-6 gap-2">
            <div>
              <strong>Sanction Memo No:</strong> MoTA/EDU/{application.schemeCode}/2026/AW-{application.id.slice(-4)}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span><strong>Dated:</strong> 25th September 2026</span>
            </div>
          </div>

          {/* Recipient */}
          <div className="mb-6 text-xs font-sans leading-normal">
            <p className="font-bold text-slate-900">To,</p>
            <p className="font-bold text-slate-900 text-sm">{application.applicantName}</p>
            <p className="text-slate-700">Tribe: {application.tribeGroup} {application.isPVTG && '(PVTG Category)'}</p>
            <p className="text-slate-700">{application.district}, {application.state}</p>
            <p className="text-slate-700 mt-1">
              <strong>Institution:</strong> {application.universityName} {application.foreignCountry ? `(${application.foreignCountry})` : ''}
            </p>
          </div>

          {/* Subject */}
          <div className="p-3 bg-slate-50 border-l-4 border-amber-600 rounded-r text-xs font-sans mb-6">
            <strong>SUBJECT:</strong> Provisional Award of {application.schemeCode === 'NFST' ? 'National Fellowship for Higher Education of ST Students (NFST)' : application.schemeCode === 'NOS' ? 'National Overseas Scholarship (NOS) for Master/Ph.D Abroad' : 'Top Class Higher Education Scholarship'} for Academic Cycle 2026-27.
          </div>

          {/* Letter Body */}
          <div className="space-y-4 text-xs font-sans text-slate-800 leading-relaxed text-justify mb-8">
            <p>
              Sir / Madam,
            </p>
            <p>
              With reference to your application number <strong>{application.applicationNumber}</strong>, the competent authority in the Ministry of Tribal Affairs (MoTA), Government of India, is pleased to convey the sanction and award of the fellowship under the <strong>{application.schemeCode}</strong> scheme for pursuing <strong>{application.courseOfStudy}</strong>.
            </p>
            <p>
              This award is made pursuant to rigorous scrutiny and automated validation by the <strong>Netra-ST AI Verification Engine</strong>, confirming your Scheduled Tribe credentials, income eligibility, and academic merit as notified under the constitutional provisions and scheme guidelines.
            </p>

            {/* Financial Package Details */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-2 uppercase text-[11px] tracking-wider">
                Sanctioned Financial Assistance Package:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500">Living Allowance / Stipend:</span>
                  <p className="font-bold text-slate-900">
                    {isNos ? 'USD $15,400 per annum (Direct Forex)' : '₹31,000 / month (JRF) + HRA'}
                  </p>
                </div>
                <div>
                  <span className="text-slate-500">Contingency / Educational Grant:</span>
                  <p className="font-bold text-slate-900">
                    {isNos ? '100% Non-refundable Tuition + Airfare' : '₹12,000 / annum (Book & Lab)'}
                  </p>
                </div>
                <div>
                  <span className="text-slate-500">Disbursement Channel:</span>
                  <p className="font-bold text-slate-900">Direct Benefit Transfer (PFMS - APB Mode)</p>
                </div>
                <div>
                  <span className="text-slate-500">Tenure:</span>
                  <p className="font-bold text-slate-900">Up to 5 Years subject to bi-annual progress</p>
                </div>
              </div>
            </div>

            <p>
              The monthly stipend shall be directly disbursed into your Aadhaar-seeded bank account through the Public Financial Management System (PFMS) upon receipt of your digital bi-annual progress reports counter-signed by your designated research guide / supervisor.
            </p>
          </div>

          {/* Signature & Verification Block */}
          <div className="pt-6 border-t border-slate-300 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-xs font-sans">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded border border-slate-200">
                <QrCode className="w-16 h-16 text-slate-900" />
              </div>
              <div className="text-[10px] text-slate-500 space-y-0.5 font-mono">
                <p className="font-bold text-slate-800">Scan to Verify Authenticity</p>
                <p>Hash: SHA256:4f81...9c2e</p>
                <p>e-Pramaan Token: MOTA-OK-2026</p>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Digitally Certified
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="inline-block border-b border-slate-400 pb-1 mb-1 font-mono text-[11px] text-blue-900 font-bold">
                [DIGITALLY SIGNED VIA e-SIGN]
              </div>
              <p className="font-bold text-slate-900">Dr. Sanjeev Murmu, IAS</p>
              <p className="text-slate-600">Joint Secretary to the Government of India</p>
              <p className="text-slate-500 text-[11px]">Ministry of Tribal Affairs, New Delhi</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
