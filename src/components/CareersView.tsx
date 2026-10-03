import React, { useState } from 'react';
import { InterviewedStudent, Question } from '../types';
import { 
  GraduationCap, 
  Users, 
  Award, 
  MapPin, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface CareersViewProps {
  students: InterviewedStudent[];
  questions: Question[];
  selectedCareer?: string;
  onSelectStudent: (studentId: string) => void;
  onSelectQuestion: (questionId: number) => void;
  onAddNewStudentToCareer: (career: string) => void;
}

export const CareersView: React.FC<CareersViewProps> = ({
  students,
  questions,
  selectedCareer: initialSelectedCareer,
  onSelectStudent,
  onSelectQuestion,
  onAddNewStudentToCareer
}) => {
  // Extract unique careers in structured order
  const careerOrder = [
    'Architecture (Arquitectura)',
    'Social Communication (Comunicación Social)',
    'International Business (Negocios Internacionales)',
    'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)',
    'Gastronomy (Gastronomía)',
    'Law (Derecho)',
    'Film and Television (Cine y Televisión)',
    'Engineering (Ingenierías)',
    'Marketing (Mercadeo)',
    'Business Administration (Administración de Empresas)'
  ];

  // Distinct list of all careers present in dataset
  const uniqueCareers = Array.from(new Set(students.map((s) => s.career)));
  // Sort according to careerOrder where possible
  const sortedCareers = uniqueCareers.sort((a, b) => {
    const idxA = careerOrder.indexOf(a);
    const idxB = careerOrder.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });

  const [activeCareer, setActiveCareer] = useState<string>(
    initialSelectedCareer && sortedCareers.includes(initialSelectedCareer)
      ? initialSelectedCareer
      : sortedCareers[0] || ''
  );

  const [activeStudentId, setActiveStudentId] = useState<string>('');

  // Filter students belonging to active career
  const careerStudents = students.filter((s) => s.career === activeCareer);
  const currentStudent = careerStudents.find((s) => s.id === activeStudentId) || careerStudents[0];

  // Calculate Interviewer-Assessed English Level distribution for this major
  const levelCounts: Record<string, number> = {
    'A1': 0,
    'A2': 0,
    'B1': 0,
    'B2': 0
  };

  careerStudents.forEach((s) => {
    if (s.perceivedEnglishLevel.startsWith('A1')) levelCounts['A1']++;
    else if (s.perceivedEnglishLevel.startsWith('A2')) levelCounts['A2']++;
    else if (s.perceivedEnglishLevel.startsWith('B1')) levelCounts['B1']++;
    else if (s.perceivedEnglishLevel.startsWith('B2')) levelCounts['B2']++;
  });

  const canAddMore = careerStudents.length < 8;

  return (
    <div className="space-y-6 pb-12">
      {/* Career Selector Tabs (Dedicated tab for each career) */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
          <span className="font-semibold text-slate-700">
            University Degree Programs ({sortedCareers.length} Majors):
          </span>
          <span className="text-[11px] text-amber-700 font-medium">
            Select a career tab to explore its interviewed student cohort
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {sortedCareers.map((career) => {
            const isSelected = career === activeCareer;
            const count = students.filter((s) => s.career === career).length;
            const shortName = career.split(' (')[0];

            return (
              <button
                key={career}
                onClick={() => {
                  setActiveCareer(career);
                  setActiveStudentId('');
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-lg shrink-0 transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border-slate-200/70'
                }`}
              >
                <span>{shortName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Career Header Banner */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>UniAgustiniana Academic Major</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 font-normal">
                {careerStudents[0]?.faculty || 'Faculty of UniAgustiniana'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {activeCareer}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                {careerStudents.length} of 8 max students interviewed
              </span>
              <span className="text-slate-400">·</span>
              <span>{careerStudents[0]?.campus || 'Tagaste Campus'}</span>
              <span className="text-slate-400">·</span>
              <span className="font-semibold text-emerald-700">Academic Period 2026</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {canAddMore ? (
              <button
                onClick={() => onAddNewStudentToCareer(activeCareer)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors"
                title="Add a new interviewed student to this major (max 8 per career)"
              >
                <Plus className="w-4 h-4" />
                <span>Add Student ({careerStudents.length}/8)</span>
              </button>
            ) : (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                Maximum reached (8/8 students)
              </span>
            )}
          </div>
        </div>

        {/* English Level & Quick Stats for this Career */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Cohort Size:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">{careerStudents.length}</span>
              <span className="text-xs text-slate-500">interviewed students (max 8)</span>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Interviewer-Assessed English Level:
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
              {['B2', 'B1', 'A2', 'A1'].map((lvl) => {
                const count = levelCounts[lvl];
                if (count === 0) return null;
                return (
                  <span key={lvl} className="bg-white px-2 py-0.5 rounded border border-slate-200 font-semibold text-slate-900">
                    {lvl}: {count}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Answers Recorded for this Major:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-600">{careerStudents.length * questions.length}</span>
              <span className="text-xs text-slate-500">verbatim responses (11 questions)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cohort Students Cards within this Career */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span className="font-semibold text-slate-800">
            Interviewed Students in {activeCareer} ({careerStudents.length}):
          </span>
          <span>Click a student to view their answers or select below</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {careerStudents.map((st) => {
            const isCurrent = currentStudent?.id === st.id;
            return (
              <div
                key={st.id}
                onClick={() => setActiveStudentId(st.id)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all shadow-xs flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900 text-white border-slate-900 ring-2 ring-amber-400'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-lg ${st.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0`}
                      >
                        {st.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <h4 className={`text-xs font-bold ${isCurrent ? 'text-white' : 'text-slate-900'}`}>
                          {st.name}
                        </h4>
                        <span className={`text-[11px] ${isCurrent ? 'text-slate-300' : 'text-slate-500'}`}>
                          {st.semester} · {st.age} yrs
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isCurrent
                          ? 'bg-amber-400 text-slate-950 border-amber-300'
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                      title="Interviewer-Assessed English Level"
                    >
                      {st.perceivedEnglishLevel.split(' - ')[0]}
                    </span>
                  </div>

                  <p className={`text-[11px] italic line-clamp-2 mt-1 ${isCurrent ? 'text-slate-300' : 'text-slate-600'}`}>
                    "{st.highlightQuote}"
                  </p>
                </div>

                <div className="pt-2 mt-3 border-t border-slate-200/50 flex items-center justify-between text-xs">
                  <span className={`text-[11px] ${isCurrent ? 'text-amber-300' : 'text-slate-500'}`}>
                    Interviewer-Assessed Level: <strong>{st.perceivedEnglishLevel.split(' - ')[0]}</strong>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectStudent(st.id);
                    }}
                    className={`font-semibold flex items-center gap-1 ${
                      isCurrent ? 'text-amber-400 hover:underline' : 'text-amber-700 hover:underline'
                    }`}
                  >
                    <span>Full dossier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Student Answers Dossier for this Career */}
      {currentStudent && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mb-0.5">
                <span>Fieldwork Answers</span>
                <span className="text-slate-400">·</span>
                <span>{currentStudent.name}</span>
                <span className="text-slate-400">·</span>
                <span>{activeCareer}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                All 11 Fieldwork Answers for {currentStudent.name}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">
                Interviewer-Assessed Level:
              </span>
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-2.5 py-0.5 rounded font-bold text-xs">
                {currentStudent.perceivedEnglishLevel}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((q) => {
              const answer = currentStudent.answers[q.id] || 'Answer not recorded.';
              return (
                <div
                  key={q.id}
                  className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {q.code}
                      </span>
                      <div>
                        <span className="text-[11px] font-medium text-slate-500 block">
                          {q.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                          {q.title}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectQuestion(q.id)}
                      className="text-amber-700 hover:text-amber-900 text-[11px] font-semibold shrink-0 flex items-center gap-1 hover:underline"
                    >
                      <span>Compare all majors</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="mt-2 pl-8 text-xs text-slate-700 leading-relaxed border-l-2 border-slate-300">
                    "{answer}"
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
