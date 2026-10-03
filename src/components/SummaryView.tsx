import React from 'react';
import { ProjectMetadata, Question, InterviewedStudent } from '../types';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Globe2, 
  Quote, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Dog,
  Award
} from 'lucide-react';

interface SummaryViewProps {
  metadata: ProjectMetadata;
  questions: Question[];
  students: InterviewedStudent[];
  insights: Array<{ title: string; description: string; metric: string; tag: string }>;
  onSelectStudent: (studentId: string) => void;
  onSelectQuestion: (questionId: number) => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({
  metadata,
  questions,
  students,
  insights,
  onSelectStudent,
  onSelectQuestion
}) => {
  const totalAnswers = questions.length * students.length;

  // Calculate English level distribution
  const levelCounts: Record<string, number> = {
    'A1': 0,
    'A2': 0,
    'B1': 0,
    'B2': 0
  };

  students.forEach((s) => {
    if (s.perceivedEnglishLevel?.startsWith('A1')) levelCounts['A1']++;
    else if (s.perceivedEnglishLevel?.startsWith('A2')) levelCounts['A2']++;
    else if (s.perceivedEnglishLevel?.startsWith('B1')) levelCounts['B1']++;
    else if (s.perceivedEnglishLevel?.startsWith('B2')) levelCounts['B2']++;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Institutional Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-700/60 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-medium mb-3">
            <span>{metadata.university}</span>
            <span aria-hidden="true">·</span>
            <span>{metadata.program}</span>
            <span aria-hidden="true">·</span>
            <span>{metadata.city}</span>
            <span aria-hidden="true">·</span>
            <span className="font-bold text-amber-400">{metadata.term}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 leading-snug">
            {metadata.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
            {metadata.generalObjective}
          </p>

          {/* Quick Technical Sheet */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-700/80">
            <div>
              <span className="block text-2xl font-bold text-amber-400">{students.length}</span>
              <span className="text-xs text-slate-300">University Majors</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">{questions.length}</span>
              <span className="text-xs text-slate-300">Structured Questions</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">{totalAnswers}</span>
              <span className="text-xs text-slate-300">Recorded Answers</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">
                {Math.round(((levelCounts['B1'] + levelCounts['B2']) / students.length) * 100)}%
              </span>
              <span className="text-xs text-slate-300">Intermediate CEFR (B1/B2)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Context: Methodological Sheet & CEFR Level Distribution */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Methodological Context */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-semibold text-slate-900 text-base">
                Fieldwork Research Technical Sheet
              </h3>
              <p className="text-xs text-slate-500">
                Methodology and academic scope by Foreign Languages Degree students
              </p>
            </div>
            <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded font-medium">
              Bogotá · {metadata.term}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Research Approach & Technique:</span>
              <p className="text-slate-600 leading-relaxed">
                {metadata.methodologyType}
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Participating Sample:</span>
              <p className="text-slate-600 leading-relaxed">
                {metadata.sampleDescription}
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Key Inquiries Explored:</span>
              <p className="text-slate-600 leading-relaxed">
                Vocational passion, favorite subjects, campus spaces, student fatigue, practicums, teaching aspirations, responsible care for Ugus (pet), student exchange goals, and second careers.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Foreign Language Pedagogy Link:</span>
              <p className="text-slate-600 leading-relaxed">
                Empowers pre-service language teachers to design English for Specific Purposes (ESP) modules customized to the genuine vocabulary and workflows of 10 distinct career paths.
              </p>
            </div>
          </div>
        </div>

        {/* Interviewer-Assessed English Proficiency Level Distribution Card */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-amber-100 text-amber-800">
                  <Award className="w-4 h-4" />
                </span>
                <h3 className="font-semibold text-slate-900 text-base">
                  Interviewer-Assessed English Levels
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                CEFR Scale
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Pedagogical qualitative appraisal made by the student interviewers during fieldwork
            </p>

            <div className="space-y-3">
              {[
                { level: 'B2', label: 'Upper Intermediate', count: levelCounts['B2'], color: 'bg-emerald-600' },
                { level: 'B1', label: 'Intermediate', count: levelCounts['B1'], color: 'bg-blue-600' },
                { level: 'A2', label: 'Elementary', count: levelCounts['A2'], color: 'bg-amber-600' },
                { level: 'A1', label: 'Beginner', count: levelCounts['A1'], color: 'bg-slate-400' }
              ].map((item) => {
                const percent = Math.round((item.count / students.length) * 100);
                return (
                  <div key={item.level} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-slate-800">
                        {item.level} ({item.label})
                      </span>
                      <span className="text-slate-600 font-semibold">
                        {item.count} std. ({percent}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} transition-all duration-500`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {Math.round(((levelCounts['B1'] + levelCounts['B2']) / students.length) * 100)}% of students possess intermediate communicative grounding.
            </span>
          </div>
        </div>
      </section>

      {/* Spotlight: Ugus the Campus Mascot */}
      <section className="bg-amber-50/80 rounded-xl p-5 border border-amber-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
            <Dog className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-amber-800 tracking-wider">
                Question 8 Focus
              </span>
              <span className="text-amber-400">·</span>
              <span className="text-xs font-semibold text-slate-800">Campus Identity & Mascot Care</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Caring for Ugus (UniAgustiniana's Campus Pet)
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mt-1">
              All 10 interviewed degree programs proposed actionable welfare measures for Ugus: maintaining fresh water bowls in campus courtyards, eliminating harmful human junk food, respecting his peaceful rest zones, and funding university veterinary vaccination drives.
            </p>
          </div>
        </div>
        <div className="shrink-0 self-start md:self-center">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% Student Consensus</span>
          </span>
        </div>
      </section>

      {/* Analytical Insights */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Major Research Findings & Patterns
            </h3>
            <p className="text-xs text-slate-500">
              Cross-cutting qualitative patterns identified across the {students.length} academic disciplines
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-amber-700 tracking-wide">
                    {insight.tag}
                  </span>
                  <span className="text-slate-400">Finding #{index + 1}</span>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mb-2">
                  {insight.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {insight.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-800">
                  Recorded Evidence:
                </span>
                <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                  {insight.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 10 Interviewed Majors Directory */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Participating Students & Majors ({students.length})
            </h3>
            <p className="text-xs text-slate-500">
              Click any major to explore their complete 11 answers and profile dossier
            </p>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {students.length} degree programs at UniAgustiniana Bogotá ({metadata.term})
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {students.map((student) => (
            <button
              key={student.id}
              onClick={() => onSelectStudent(student.id)}
              className="group text-left bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg ${student.avatarColor} text-white font-bold flex items-center justify-center text-xs shadow-xs shrink-0`}
                  >
                    {student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                      {student.name}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-600 truncate">
                      {student.career.split(' (')[0]}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 space-y-1 mb-2.5">
                  <div className="flex items-center justify-between">
                    <span>Semester:</span>
                    <span className="font-medium text-slate-700">{student.semester}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Campus:</span>
                    <span className="font-medium text-slate-700">{student.campus.replace(' Campus', '')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>English Level:</span>
                    <span className="font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                      {student.perceivedEnglishLevel.split(' - ')[0]}
                    </span>
                  </div>
                </div>

                {/* Highlight Quote */}
                <div className="bg-slate-50 rounded-lg p-2 text-[11px] text-slate-600 italic border-l-2 border-amber-500 mb-2.5 line-clamp-3">
                  "{student.highlightQuote}"
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-amber-700 font-medium group-hover:translate-x-0.5 transition-transform">
                <span>11 answers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* The 11 Questions Quick Directory */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              The 11 Research Questions Applied
            </h3>
            <p className="text-xs text-slate-500">
              Select any question to see how each of the {students.length} majors answered and contrast them
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(q.id)}
              className="text-left bg-white rounded-lg p-4 border border-slate-200 hover:border-slate-400 hover:bg-slate-50/50 transition-all flex items-start gap-3 group"
            >
              <span className="w-7 h-7 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-slate-950 transition-colors">
                {q.code}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1">
                  <span className="font-medium text-slate-700">{q.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{students.length} answers available</span>
                </div>
                <h4 className="text-xs font-semibold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                  {q.title}
                </h4>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 shrink-0 self-center" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
