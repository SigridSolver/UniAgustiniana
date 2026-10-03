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
  Award,
  BarChart3,
  PieChart
} from 'lucide-react';

interface SummaryViewProps {
  metadata: ProjectMetadata;
  questions: Question[];
  students: InterviewedStudent[];
  insights: Array<{ title: string; description: string; metric: string; tag: string }>;
  onSelectStudent: (studentId: string) => void;
  onSelectQuestion: (questionId: number) => void;
  onGoToAnalytics?: () => void;
  onGoToCareers?: () => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({
  metadata,
  questions,
  students,
  insights,
  onSelectStudent,
  onSelectQuestion,
  onGoToAnalytics,
  onGoToCareers
}) => {
  const totalAnswers = questions.length * students.length;

  // Calculate English level distribution
  const levelCounts: Record<string, number> = {
    'B2': 0,
    'B1': 0,
    'A2': 0,
    'A1': 0
  };

  students.forEach((s) => {
    if (s.perceivedEnglishLevel?.startsWith('B2')) levelCounts['B2']++;
    else if (s.perceivedEnglishLevel?.startsWith('B1')) levelCounts['B1']++;
    else if (s.perceivedEnglishLevel?.startsWith('A2')) levelCounts['A2']++;
    else if (s.perceivedEnglishLevel?.startsWith('A1')) levelCounts['A1']++;
  });

  const b2Pct = Math.round((levelCounts['B2'] / students.length) * 100) || 0;
  const b1Pct = Math.round((levelCounts['B1'] / students.length) * 100) || 0;
  const a2Pct = Math.round((levelCounts['A2'] / students.length) * 100) || 0;
  const a1Pct = Math.round((levelCounts['A1'] / students.length) * 100) || 0;

  // Distinct majors
  const uniqueCareers = Array.from(new Set(students.map((s) => s.career)));

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
              <span className="block text-2xl font-bold text-amber-400">{uniqueCareers.length}</span>
              <span className="text-xs text-slate-300">University Majors</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">{students.length}</span>
              <span className="text-xs text-slate-300">Interviewed Students</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">{totalAnswers}</span>
              <span className="text-xs text-slate-300">Recorded Answers</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">{b1Pct + b2Pct}%</span>
              <span className="text-xs text-slate-300">Intermediate CEFR (B1/B2)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Infographics Callout Banner */}
      <section className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
            <PieChart className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Visual Analytics Hub
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-slate-600 font-medium">Infographic charts available</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Explore Dynamic Charts & Infographics
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
              Interactive SVG Donut charts, stacked major comparisons, global exchange destinations, and teaching preference funnels.
            </p>
          </div>
        </div>

        {onGoToAnalytics && (
          <button
            onClick={onGoToAnalytics}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors shrink-0"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Open Infographics Dashboard</span>
          </button>
        )}
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

        {/* Visual Donut & CEFR Level Card */}
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
            <p className="text-xs text-slate-500 mb-3">
              Qualitative appraisal across the {students.length} interviewed students
            </p>

            {/* Mini Donut Chart */}
            <div className="flex items-center justify-center my-3 relative">
              <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#059669"
                  strokeWidth="12"
                  strokeDasharray={`${(b2Pct * 2.387).toFixed(1)} 238.7`}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#2563eb"
                  strokeWidth="12"
                  strokeDasharray={`${(b1Pct * 2.387).toFixed(1)} 238.7`}
                  strokeDashoffset={`${-(b2Pct * 2.387)}`}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#d97706"
                  strokeWidth="12"
                  strokeDasharray={`${(a2Pct * 2.387).toFixed(1)} 238.7`}
                  strokeDashoffset={`${-((b2Pct + b1Pct) * 2.387)}`}
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-lg font-bold text-slate-900 block leading-tight">
                  {b1Pct + b2Pct}%
                </span>
                <span className="text-[9px] uppercase font-semibold text-slate-500">
                  B1 / B2
                </span>
              </div>
            </div>

            {/* Level Bars */}
            <div className="space-y-2 pt-1">
              {[
                { level: 'B2', label: 'Upper Intermediate', count: levelCounts['B2'], pct: b2Pct, color: 'bg-emerald-600' },
                { level: 'B1', label: 'Intermediate', count: levelCounts['B1'], pct: b1Pct, color: 'bg-blue-600' },
                { level: 'A2', label: 'Elementary', count: levelCounts['A2'], pct: a2Pct, color: 'bg-amber-600' },
                { level: 'A1', label: 'Beginner', count: levelCounts['A1'], pct: a1Pct, color: 'bg-slate-400' }
              ].map((item) => (
                <div key={item.level} className="space-y-0.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-medium text-slate-800">
                      {item.level} ({item.label})
                    </span>
                    <span className="text-slate-600 font-semibold">
                      {item.count} std. ({item.pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Intermediate dominance
            </span>
            {onGoToAnalytics && (
              <button
                onClick={onGoToAnalytics}
                className="text-amber-700 hover:underline font-semibold"
              >
                Detailed chart →
              </button>
            )}
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
              Cross-cutting qualitative patterns identified across the {uniqueCareers.length} academic disciplines
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
              Participating Majors ({uniqueCareers.length} Programs)
            </h3>
            <p className="text-xs text-slate-500">
              Explore individual cohorts of students (up to 8 students per career)
            </p>
          </div>
          {onGoToCareers && (
            <button
              onClick={onGoToCareers}
              className="text-xs text-amber-700 hover:underline font-semibold flex items-center gap-1"
            >
              <span>View dedicated career tabs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {uniqueCareers.map((career) => {
            const careerStudents = students.filter((s) => s.career === career);
            const firstStudent = careerStudents[0];
            const shortName = career.split(' (')[0];

            return (
              <div
                key={career}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Major #{uniqueCareers.indexOf(career) + 1}
                    </span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {careerStudents.length}/8 std.
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                    {shortName}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate mb-3">
                    {firstStudent?.faculty || 'Faculty of UniAgustiniana'}
                  </p>

                  {/* Mini capacity bar */}
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3 overflow-hidden">
                    <div
                      className="bg-amber-500 h-1.5 rounded-full"
                      style={{ width: `${(careerStudents.length / 8) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400">
                    {firstStudent?.campus.replace(' Campus', '')}
                  </span>
                  {onGoToCareers && (
                    <button
                      onClick={onGoToCareers}
                      className="text-amber-700 font-semibold hover:underline text-xs"
                    >
                      Explore →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
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
              Select any question to see how each of the {uniqueCareers.length} majors answered and contrast them
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
