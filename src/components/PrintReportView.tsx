import React from 'react';
import { ProjectMetadata, Question, InterviewedStudent, Interviewer } from '../types';
import { Printer, ArrowLeft } from 'lucide-react';

interface PrintReportViewProps {
  metadata: ProjectMetadata;
  questions: Question[];
  students: InterviewedStudent[];
  interviewers: Interviewer[];
  onBack: () => void;
}

export const PrintReportView: React.FC<PrintReportViewProps> = ({
  metadata,
  questions,
  students,
  interviewers,
  onBack
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 min-h-screen py-6 px-4 print:p-0 print:bg-white text-slate-900">
      {/* Top action bar (hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 shadow-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Interactive Portal</span>
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors"
        >
          <Printer className="w-4 h-4 text-amber-400" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Formal Academic Paper Layout */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-md border border-slate-200 print:border-none print:shadow-none print:p-0 space-y-8 font-serif">
        {/* Institutional Formal Header */}
        <div className="text-center border-b-2 border-slate-900 pb-6 space-y-1">
          <div className="uppercase tracking-widest text-xs font-sans font-bold text-amber-800">
            {metadata.university}
          </div>
          <div className="uppercase text-xs font-sans tracking-wide text-slate-600 font-semibold">
            {metadata.faculty}
          </div>
          <div className="uppercase text-sm font-sans tracking-wide text-slate-900 font-bold">
            {metadata.program}
          </div>
          <div className="text-xs font-sans text-slate-500 pt-1">
            {metadata.subject} · {metadata.city} · {metadata.term}
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="text-center space-y-3 pt-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
            {metadata.title}
          </h1>
          <p className="text-sm font-sans italic text-slate-600 max-w-2xl mx-auto">
            {metadata.subtitle}
          </p>
        </div>

        {/* Authors / Interviewers Box */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs font-sans space-y-2">
          <div className="font-bold text-slate-900 uppercase tracking-wide text-[11px]">
            Student Research & Fieldwork Interview Team:
          </div>
          <div className="grid sm:grid-cols-3 gap-2 text-slate-700">
            {interviewers.map((inv) => (
              <div key={inv.id}>
                <span className="font-semibold block">{inv.name}</span>
                <span className="text-slate-500 text-[11px]">{inv.role}</span>
                <span className="text-slate-500 text-[11px] block">{inv.email}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Sheet */}
        <div className="space-y-3">
          <h2 className="text-base font-bold font-sans uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            1. Fieldwork Technical Sheet & Sample
          </h2>
          <div className="text-xs font-sans text-slate-700 leading-relaxed space-y-2">
            <p>
              <strong>General Objective:</strong> {metadata.generalObjective}
            </p>
            <p>
              <strong>Methodology & Instrument:</strong> {metadata.methodologyType} ({questions.length} questions applied to {students.length} students across diverse majors).
            </p>
          </div>

          {/* Table of Interviewees */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs font-sans border border-slate-300">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="p-2 border border-slate-300">#</th>
                  <th className="p-2 border border-slate-300">Interviewed Student</th>
                  <th className="p-2 border border-slate-300">Degree Program / Major</th>
                  <th className="p-2 border border-slate-300">Semester</th>
                  <th className="p-2 border border-slate-300">Campus</th>
                  <th className="p-2 border border-slate-300">Interviewer-Assessed Level (CEFR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {students.map((st, i) => (
                  <tr key={st.id} className="hover:bg-slate-50">
                    <td className="p-2 border border-slate-300 font-bold">{i + 1}</td>
                    <td className="p-2 border border-slate-300 font-medium">{st.name}</td>
                    <td className="p-2 border border-slate-300">{st.career}</td>
                    <td className="p-2 border border-slate-300">{st.semester}</td>
                    <td className="p-2 border border-slate-300">{st.campus}</td>
                    <td className="p-2 border border-slate-300 font-semibold">{st.perceivedEnglishLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Results by Question */}
        <div className="space-y-6 pt-4">
          <h2 className="text-base font-bold font-sans uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            2. Qualitative Fieldwork Results by Question ({questions.length} Items)
          </h2>

          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="space-y-2 border-b border-slate-200 pb-4">
                <div className="flex items-start gap-2">
                  <span className="font-sans font-bold text-xs bg-slate-900 text-white px-2 py-0.5 rounded shrink-0">
                    {q.code}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold font-sans text-slate-900 leading-snug">
                      {q.title}
                    </h3>
                    <p className="text-[11px] font-sans text-slate-500 italic">
                      Category: {q.category} · Objective: {q.academicObjective}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/50 p-2.5 rounded border border-amber-200 text-xs font-sans text-amber-950">
                  <strong>Pattern synthesis:</strong> {q.summaryInsight}
                </div>

                {/* Answers Table */}
                <table className="w-full text-left border-collapse text-xs font-sans border border-slate-200 mt-2">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="p-2 border border-slate-200 w-1/3">Major & Student</th>
                      <th className="p-2 border border-slate-200">Verbatim Recorded Answer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {students.map((st) => (
                      <tr key={st.id}>
                        <td className="p-2 border border-slate-200 align-top font-semibold text-slate-900">
                          {st.career}
                          <span className="block font-normal text-[11px] text-slate-500">{st.name} ({st.semester})</span>
                        </td>
                        <td className="p-2 border border-slate-200 align-top text-slate-700 italic">
                          "{st.answers[q.id] || '—'}"
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Pedagogical Conclusions */}
        <div className="space-y-3 pt-4">
          <h2 className="text-base font-bold font-sans uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            3. Conclusions & Didactic Implications for Foreign Language Education
          </h2>
          <div className="text-xs font-sans text-slate-700 leading-relaxed space-y-2">
            <p>
              1. <strong>Situated Communicative Language Teaching (ESP):</strong> Students are intrinsically motivated when the language classroom connects with their actual trade (e.g., architectural specs, legal oral arguments, international customs, or culinary menus).
            </p>
            <p>
              2. <strong>Institutional Community & Compassion:</strong> The unanimous enthusiasm for protecting campus pet Ugus (Question 8) proves that empathetic community values run deep across all faculties.
            </p>
            <p>
              3. <strong>Global Mobility Preparation:</strong> Because every student dreams of international exchange (to Germany, France, Spain, Canada, Mexico, USA), foreign language educators must equip them with intercultural competence, academic reading, and spontaneous conversational fluency.
            </p>
          </div>
        </div>

        {/* Signature Box */}
        <div className="pt-8 border-t border-slate-300 grid grid-cols-2 gap-8 text-center text-xs font-sans">
          <div className="space-y-6">
            <div className="h-10 border-b border-slate-400 w-48 mx-auto" />
            <span>Student Lead Researcher Signature</span>
          </div>
          <div className="space-y-6">
            <div className="h-10 border-b border-slate-400 w-48 mx-auto" />
            <span>Academic Course Instructor / Research Adviser</span>
          </div>
        </div>
      </div>
    </div>
  );
};
