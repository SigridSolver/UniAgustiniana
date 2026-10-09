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
  ChevronRight,
  Hash,
  Clapperboard,
  Camera,
  Tv,
  Film,
  Play,
  ExternalLink,
  FileCheck,
  ZoomIn,
  X,
  Maximize2,
  FileText,
  Upload,
  ShieldCheck
} from 'lucide-react';
import { universityCareersList } from '../data/initialData';

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
  // Use all 10 university careers
  const sortedCareers = universityCareersList;

  const [activeCareer, setActiveCareer] = useState<string>(
    initialSelectedCareer && sortedCareers.includes(initialSelectedCareer)
      ? initialSelectedCareer
      : sortedCareers[0] || 'Film and Television (Cine y Televisión)'
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
  const isCineTV = activeCareer.includes('Cine');
  const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState<boolean>(false);
  const [evidenceImageSrc, setEvidenceImageSrc] = useState<string>('/documentary-evidence-students.jpeg');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  return (
    <div className="space-y-6 pb-12">
      {/* Career Selector Tabs (Dedicated tab for each career) */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
          <span className="font-semibold text-slate-700">
            University Degree Programs ({sortedCareers.length} Careers):
          </span>
          <span className="text-[11px] text-amber-700 font-medium">
            Select a career tab to explore its interviewed student cohort (max 8/career)
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {sortedCareers.map((career) => {
            const isSelected = career === activeCareer;
            const count = students.filter((s) => s.career === career).length;
            const shortName = career.split(' (')[0];
            const isCine = career.includes('Cine');

            return (
              <button
                key={career}
                onClick={() => {
                  setActiveCareer(career);
                  setActiveStudentId('');
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-lg shrink-0 transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-xs ring-2 ring-amber-400'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border-slate-200/70'
                }`}
              >
                {isCine && <Clapperboard className="w-3.5 h-3.5 text-amber-400" />}
                <span>{shortName}</span>
                {isCine && (
                  <span className="text-[9px] bg-red-600 text-white font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5 tracking-wider uppercase">
                    <Play className="w-2.5 h-2.5 fill-current" /> Video
                  </span>
                )}
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-amber-400 text-slate-950' : count > 0 ? 'bg-slate-200 text-slate-800' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {count}/8
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
                {careerStudents[0]?.faculty || 'Faculty of Art, Communication and Culture'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              {isCineTV && <Clapperboard className="w-6 h-6 text-amber-600" />}
              <span>{activeCareer}</span>
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                {careerStudents.length} of 8 max students interviewed
              </span>
              <span className="text-slate-400">·</span>
              <span>{careerStudents[0]?.campus || (activeCareer.includes('Gastronomía') ? 'Suba Campus' : 'Tagaste Campus')}</span>
              <span className="text-slate-400">·</span>
              <span className="font-semibold text-emerald-700">Academic Period 2026</span>
              {isCineTV && (
                <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded text-[11px] border border-emerald-300">
                  Verified Real Cohort: 8/8 Complete
                </span>
              )}
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
                Quota filled (8/8 students)
              </span>
            )}
          </div>
        </div>

        {/* English Level & Quick Stats for this Career with Visual Infographics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          {/* Cohort Quota Slot Meter */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Cohort Capacity Meter
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {careerStudents.length} / 8 Max
                </span>
              </div>
              <div className="flex items-center gap-1.5 my-2.5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((slot) => {
                  const isFilled = slot <= careerStudents.length;
                  return (
                    <div
                      key={slot}
                      className={`flex-1 h-3 rounded-full transition-all ${
                        isFilled
                          ? 'bg-amber-500 shadow-2xs'
                          : 'bg-slate-200 border border-slate-300/60'
                      }`}
                      title={isFilled ? `Interviewed Student #${slot}` : `Available Slot #${slot} (up to 8 max)`}
                    />
                  );
                })}
              </div>
            </div>
            <p className="text-[11px] text-slate-500">
              {careerStudents.length === 8 
                ? 'Full sample capacity reached for this degree program.' 
                : `${8 - careerStudents.length} slot(s) remaining for interview recording.`}
            </p>
          </div>

          {/* CEFR Level Breakdown */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Interviewer-Assessed Level
              </span>
              <Award className="w-3.5 h-3.5 text-amber-600" />
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-center">
              {[
                { label: 'B2', count: levelCounts['B2'], color: 'text-emerald-700 bg-emerald-100 border-emerald-300' },
                { label: 'B1', count: levelCounts['B1'], color: 'text-blue-700 bg-blue-100 border-blue-300' },
                { label: 'A2', count: levelCounts['A2'], color: 'text-amber-700 bg-amber-100 border-amber-300' },
                { label: 'A1', count: levelCounts['A1'], color: 'text-rose-700 bg-rose-100 border-rose-300' }
              ].map((lvl) => (
                <div key={lvl.label} className={`p-1.5 rounded-lg border ${lvl.color}`}>
                  <span className="block text-[10px] font-bold">{lvl.label}</span>
                  <span className="text-xs font-black">{lvl.count}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-500 mt-2">
              Interviewer qualitative evaluation during fieldwork.
            </p>
          </div>

          {/* Campus Location Card */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                University Campus
              </span>
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
            </div>

            <div className="my-1">
              <span className="text-sm font-bold text-slate-900 block">
                {careerStudents[0]?.campus || (activeCareer.includes('Gastronomía') ? 'Suba Campus' : 'Tagaste Campus')}
              </span>
              <span className="text-[11px] text-slate-500">UniAgustiniana · Bogotá D.C.</span>
            </div>

            <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
              Questions applied: <strong>{questions.length} Items</strong>
            </div>
          </div>
        </div>

        {/* Survey Highlights for Cine y TV */}
        {isCineTV && (
          <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-amber-700" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Verified Fieldwork Highlights (8 Real Students Interviewed):
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-amber-200/60">
                <span className="text-slate-500 text-[11px] block">Q1. Program Appeal:</span>
                <span className="font-bold text-slate-900">Photography (63%)</span>
                <span className="text-slate-500 text-[11px] block">Spaces (37%)</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200/60">
                <span className="text-slate-500 text-[11px] block">Q3. Favorite Space:</span>
                <span className="font-bold text-emerald-700">Green area (100%)</span>
                <span className="text-slate-500 text-[11px] block">8 of 8 students</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200/60">
                <span className="text-slate-500 text-[11px] block">Q4. Internships:</span>
                <span className="font-bold text-slate-900">RCN & Caracol TV</span>
                <span className="text-slate-500 text-[11px] block">100% agreement</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200/60">
                <span className="text-slate-500 text-[11px] block">Q8. Practice Career:</span>
                <span className="font-bold text-slate-900">TV, Film & Netflix (88%)</span>
                <span className="text-slate-500 text-[11px] block">Canada (12%)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Empty State if career has 0 students */}
      {careerStudents.length === 0 && (
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 text-center space-y-3">
          <GraduationCap className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No Interviewed Students Recorded Yet for {activeCareer}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            All fictitious placeholder students have been removed. The verified survey has been completed for Film and Television (8 students). You can register up to 8 real interviewees for this major using the button below.
          </p>
          <button
            onClick={() => onAddNewStudentToCareer(activeCareer)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Register First Student for {activeCareer.split(' ')[0]}</span>
          </button>
        </div>
      )}

      {/* Cohort Students Cards within this Career */}
      {careerStudents.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span className="font-semibold text-slate-800">
              Interviewed Students in {activeCareer} ({careerStudents.length}):
            </span>
            <span>Click a student card to load their verbatim answers below</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-lg ${st.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0`}
                        >
                          {st.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <h4 className={`text-xs font-bold leading-tight ${isCurrent ? 'text-white' : 'text-slate-900'}`}>
                            {st.name}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${isCurrent ? 'bg-slate-800 text-amber-300' : 'bg-amber-50 text-amber-900 border border-amber-200'}`}>
                              ID: {st.studentCode}
                            </span>
                            <span className={`text-[11px] ${isCurrent ? 'text-slate-300' : 'text-slate-500'}`}>
                              {st.semester}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className={`text-[11px] italic line-clamp-2 mt-2 ${isCurrent ? 'text-slate-300' : 'text-slate-600'}`}>
                      "{st.highlightQuote}"
                    </p>
                  </div>

                  <div className="pt-2 mt-3 border-t border-slate-200/50 flex items-center justify-between text-xs">
                    <span className={`text-[11px] ${isCurrent ? 'text-amber-300' : 'text-slate-500'}`}>
                      Level: <strong>{st.perceivedEnglishLevel.split(' - ')[0]}</strong>
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
      )}

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
                <span className="font-mono bg-amber-50 px-2 py-0.5 rounded text-amber-900 border border-amber-200 font-bold">
                  Student ID: {currentStudent.studentCode}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                All {questions.length} Fieldwork Answers for {currentStudent.name}
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
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                          {q.title}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectQuestion(q.id)}
                      className="text-amber-700 hover:text-amber-900 text-[11px] font-medium flex items-center gap-1 hover:underline self-end sm:self-start"
                    >
                      <span>Analyze question</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="mt-3 pl-8 text-xs text-slate-700 leading-relaxed border-l-2 border-slate-300">
                    "{answer}"
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Audiovisual & Fieldwork Evidence Section for Film and Television */}
      {isCineTV && (
        <div className="pt-2">
          <div className="bg-slate-900 text-white rounded-xl border border-slate-800 shadow-md overflow-hidden">
            {/* Header Bar */}
            <div className="px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/70">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                  <Film className="w-4 h-4 text-slate-950" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block leading-tight">
                    UniAgustiniana Audiovisual &amp; Fieldwork Evidence Record
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    Film &amp; Television · Program Presentation &amp; Student Interview Evidence
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.youtube.com/watch?v=FZe-EKnNCo4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors shrink-0 group shadow-2xs"
                  title="Open video on YouTube in a new tab"
                >
                  <Play className="w-3 h-3 text-red-500 fill-red-500" />
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Content Body: Video Player + Official Evidence Image */}
            <div className="p-4 sm:p-5 bg-slate-950/40 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                {/* Column 1: Compact YouTube Video (Restrained width, not taking full screen) */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 text-amber-400" />
                      <span>Program Presentation Video</span>
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                      YouTube · UniAgustiniana
                    </span>
                  </div>

                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-inner border border-slate-800 ring-1 ring-white/5">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/FZe-EKnNCo4"
                      title="Film & Television - Agustiniana University"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Institutional video presentation of the Film &amp; Television academic program at Agustiniana University (Tagaste Campus), showcasing the television studios, editing suites, audio labs, and photography facilities evaluated during the student interviews.
                  </p>
                </div>

                {/* Column 2: Accompanying Student Interview Evidence Image */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Documentary Evidence of Interviewed Students</span>
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-medium">
                      Verified Fieldwork Log
                    </span>
                  </div>

                  {/* Evidence Image / Document Preview with Zoom Trigger */}
                  <div
                    onClick={() => {
                      setZoomLevel(1);
                      setIsEvidenceModalOpen(true);
                    }}
                    className="group relative cursor-pointer rounded-lg overflow-hidden border border-slate-700 bg-slate-950 flex flex-col items-center justify-center hover:border-amber-400/60 transition-all shadow-inner"
                    title="Click to view full-size evidence document"
                  >
                    <img
                      src={evidenceImageSrc}
                      alt="UniAgustiniana Film & Television Student Interview Evidence"
                      className="w-full max-h-[220px] object-contain bg-white group-hover:scale-[1.02] transition-transform duration-200"
                      onError={() => {
                        if (evidenceImageSrc !== '/evidence-fieldwork-cinetv.svg') {
                          setEvidenceImageSrc('/evidence-fieldwork-cinetv.svg');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                      <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Enlarge Evidence Document</span>
                      </span>
                    </div>
                  </div>

                  {/* Student ID Verification Registry Badges */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Verified Cohort (8 Interviewees):</span>
                      <button
                        type="button"
                        onClick={() => {
                          setZoomLevel(1);
                          setIsEvidenceModalOpen(true);
                        }}
                        className="text-amber-400 hover:text-amber-300 font-semibold text-[11px] flex items-center gap-1"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect document</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-300 font-mono">
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#1</span> J. Martínez (20231015012)
                      </div>
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#2</span> A. López (20222018045)
                      </div>
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#3</span> S. Pacheco (20241009022)
                      </div>
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#4</span> E. Garzón (20232014088)
                      </div>
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#5</span> J. Castro (20211022005)
                      </div>
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#6</span> T. Marulanda (20221019034)
                      </div>
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#7</span> N. Viñas (20231011077)
                      </div>
                      <div className="bg-slate-950/80 px-2 py-1 rounded border border-slate-800/80 truncate">
                        <span className="text-amber-400 font-bold">#8</span> J. Menez (20242005019)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Subtitle / Attribution Credits */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-400 gap-2 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Tagaste Campus · Agustiniana University (UniAgustiniana)</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500">Fieldwork Research &amp; Evidence: </span>
                  <span className="text-amber-400 font-medium">Alejandra Cruz &amp; Melany Casas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Evidence Fullscreen Modal Viewer */}
      {isEvidenceModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsEvidenceModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-white animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between gap-3 bg-slate-950/90">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <h3 className="text-sm font-bold text-white truncate">
                    UniAgustiniana Fieldwork Evidence Document
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate">
                    Student Interview Attendance &amp; ID Registry · Film &amp; Television (Cine y TV)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((prev) => Math.max(0.75, prev - 0.25))}
                    className="px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded"
                    title="Zoom out"
                  >
                    -
                  </button>
                  <span className="px-2 font-mono text-slate-300 text-[11px]">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((prev) => Math.min(2, prev + 0.25))}
                    className="px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded"
                    title="Zoom in"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(1)}
                    className="px-2 py-1 text-amber-400 hover:bg-slate-700 rounded text-[11px] font-semibold"
                    title="Reset zoom"
                  >
                    Reset
                  </button>
                </div>

                <a
                  href="/evidence-fieldwork-cinetv.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open SVG</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsEvidenceModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  title="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Body with Zoom */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-950/60 flex items-center justify-center min-h-[300px]">
              <div 
                className="transition-transform duration-150 origin-center max-w-full"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={evidenceImageSrc}
                  alt="UniAgustiniana Film & Television Student Interview Evidence Document"
                  className="max-h-[65vh] w-auto mx-auto rounded-lg shadow-2xl border border-slate-700 bg-white"
                  onError={() => {
                    if (evidenceImageSrc !== '/evidence-fieldwork-cinetv.svg') {
                      setEvidenceImageSrc('/evidence-fieldwork-cinetv.svg');
                    }
                  }}
                />
              </div>
            </div>

            {/* Modal Footer with Verification Table */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>8 Students Verified:</span>
                </span>
                <span className="text-slate-300">
                  Juan Martínez, Ana López, Samuel Pacheco, Eily Garzón, John Castro, Thomas Marulanda, Nicolás Viñas, José Menez.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <label className="cursor-pointer text-amber-400 hover:text-amber-300 font-semibold text-[11px] flex items-center gap-1">
                  <Upload className="w-3 h-3" />
                  <span>Load image from device</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setEvidenceImageSrc(url);
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
