import React, { useState } from 'react';
import { Question, InterviewedStudent } from '../types';
import { 
  Table2, 
  Search, 
  Maximize2, 
  X, 
  FileSpreadsheet, 
  ExternalLink 
} from 'lucide-react';

interface FullMatrixViewProps {
  questions: Question[];
  students: InterviewedStudent[];
  onSelectStudent: (studentId: string) => void;
  onSelectQuestion: (questionId: number) => void;
}

export const FullMatrixView: React.FC<FullMatrixViewProps> = ({
  questions,
  students,
  onSelectStudent,
  onSelectQuestion
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCell, setActiveCell] = useState<{
    question: Question;
    student: InterviewedStudent;
    answer: string;
  } | null>(null);

  // Export to CSV function
  const handleExportCSV = () => {
    const headers = ['Code', 'Question', 'Category', ...students.map((s) => `${s.career} (${s.name})`)];
    const rows = questions.map((q) => {
      const answers = students.map((s) => `"${(s.answers[q.id] || '').replace(/"/g, '""')}"`);
      return [`"${q.code}"`, `"${q.title.replace(/"/g, '""')}"`, `"${q.category}"`, ...answers].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `UniAgustiniana_Fieldwork_Research_Matrix.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Matrix Controls & Search */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Table2 className="w-5 h-5 text-amber-600" />
            <span>Cross-Data Matrix: {questions.length} Questions × {students.length} Majors</span>
          </h2>
          <p className="text-xs text-slate-500">
            Panoramic spreadsheet of all {questions.length * students.length} recorded answers across university majors
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts or words..."
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-slate-400 focus:bg-white w-48 sm:w-64"
            />
          </div>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="Download full matrix as Excel (.csv)"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Cross Table Container */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto max-h-[750px] no-scrollbar">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-900 text-white sticky top-0 z-20 shadow-xs">
              <tr>
                <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-64 min-w-[240px] border-r border-slate-800">
                  Research Question
                </th>
                {students.map((student) => (
                  <th
                    key={student.id}
                    className="p-3 font-semibold text-[11px] min-w-[210px] border-r border-slate-800 last:border-r-0 hover:bg-slate-800 transition-colors cursor-pointer"
                    onClick={() => onSelectStudent(student.id)}
                    title={`View profile of ${student.name}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-5 h-5 rounded ${student.avatarColor} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                        {student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <span className="font-bold text-amber-400 truncate">{student.career}</span>
                    </div>
                    <div className="text-[10px] text-slate-300 font-normal truncate">
                      {student.name} · {student.semester}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {questions.map((question, qIdx) => {
                const isEven = qIdx % 2 === 0;
                return (
                  <tr
                    key={question.id}
                    className={`${isEven ? 'bg-white' : 'bg-slate-50/50'} hover:bg-amber-50/30 transition-colors`}
                  >
                    {/* Question Column */}
                    <td className="p-3.5 align-top border-r border-slate-200 bg-inherit sticky left-0 z-10 shadow-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => onSelectQuestion(question.id)}
                            className="w-5 h-5 rounded bg-slate-800 text-amber-400 font-bold text-[10px] flex items-center justify-center hover:bg-amber-600 hover:text-slate-950 transition-colors"
                            title="Compare this question"
                          >
                            {question.code}
                          </button>
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                            {question.category}
                          </span>
                        </div>
                        <p
                          onClick={() => onSelectQuestion(question.id)}
                          className="font-medium text-slate-900 leading-snug hover:text-amber-800 cursor-pointer"
                        >
                          {question.title}
                        </p>
                      </div>
                    </td>

                    {/* Students Answers Columns */}
                    {students.map((student) => {
                      const answer = student.answers[question.id] || '—';
                      const isHighlighted = searchQuery.trim() !== '' && answer.toLowerCase().includes(searchQuery.toLowerCase());

                      return (
                        <td
                          key={student.id}
                          onClick={() => setActiveCell({ question, student, answer })}
                          className={`p-3 align-top border-r border-slate-200 last:border-r-0 cursor-pointer hover:bg-amber-100/60 transition-colors ${
                            isHighlighted ? 'bg-amber-200/50 font-medium' : ''
                          }`}
                        >
                          <p className="line-clamp-4 text-[11px] leading-relaxed text-slate-800">
                            "{answer}"
                          </p>
                          <span className="mt-1 inline-flex items-center gap-0.5 text-[10px] text-amber-800 font-medium hover:underline opacity-60 hover:opacity-100">
                            <Maximize2 className="w-2.5 h-2.5" />
                            <span>Expand</span>
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal for Expanded Cell */}
      {activeCell && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {activeCell.question.code}
                  </span>
                  <span>{activeCell.question.category}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {activeCell.question.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCell(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className={`w-10 h-10 rounded-lg ${activeCell.student.avatarColor} text-white font-bold flex items-center justify-center text-sm shrink-0`}>
                {activeCell.student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">
                  {activeCell.student.name}
                </h4>
                <p className="text-[11px] text-slate-600">
                  {activeCell.student.career} · {activeCell.student.semester} ({activeCell.student.campus})
                </p>
              </div>
            </div>

            <div className="bg-amber-50/40 p-4 rounded-lg border border-amber-200/60 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <span className="font-semibold text-slate-900 block mb-2">
                Full Recorded Answer:
              </span>
              "{activeCell.answer}"
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  onSelectStudent(activeCell.student.id);
                  setActiveCell(null);
                }}
                className="text-xs text-amber-700 hover:text-amber-900 font-semibold flex items-center gap-1"
              >
                <span>View full dossier of {activeCell.student.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveCell(null)}
                className="px-4 py-1.5 text-xs font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
