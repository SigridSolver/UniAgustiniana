import React, { useState } from 'react';
import { InterviewedStudent, Question } from '../types';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Globe2, 
  GraduationCap, 
  Dog, 
  AlertCircle, 
  BookOpen, 
  Sparkles,
  Layers,
  Award,
  Users
} from 'lucide-react';

interface AnalyticsViewProps {
  students: InterviewedStudent[];
  questions: Question[];
  onSelectCareer?: (career: string) => void;
  onSelectStudent?: (studentId: string) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  students,
  questions,
  onSelectCareer,
  onSelectStudent
}) => {
  const [activeChartTab, setActiveChartTab] = useState<'all' | 'language' | 'exchange' | 'pedagogy' | 'welfare'>('all');
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);

  // 1. Calculate English Level Counts
  const levelCounts: Record<string, number> = {
    'B2': 0,
    'B1': 0,
    'A2': 0,
    'A1': 0
  };

  students.forEach((s) => {
    if (s.perceivedEnglishLevel.startsWith('B2')) levelCounts['B2']++;
    else if (s.perceivedEnglishLevel.startsWith('B1')) levelCounts['B1']++;
    else if (s.perceivedEnglishLevel.startsWith('A2')) levelCounts['A2']++;
    else if (s.perceivedEnglishLevel.startsWith('A1')) levelCounts['A1']++;
  });

  const totalStudents = students.length;
  const b2Percent = Math.round((levelCounts['B2'] / totalStudents) * 100) || 0;
  const b1Percent = Math.round((levelCounts['B1'] / totalStudents) * 100) || 0;
  const a2Percent = Math.round((levelCounts['A2'] / totalStudents) * 100) || 0;
  const a1Percent = Math.round((levelCounts['A1'] / totalStudents) * 100) || 0;

  // 2. Careers list & distribution
  const uniqueCareers = Array.from(new Set(students.map((s) => s.career)));

  // Career-wise level breakdown
  const careerLevelData = uniqueCareers.map((career) => {
    const careerStudents = students.filter((s) => s.career === career);
    const count = careerStudents.length;
    const b2 = careerStudents.filter((s) => s.perceivedEnglishLevel.startsWith('B2')).length;
    const b1 = careerStudents.filter((s) => s.perceivedEnglishLevel.startsWith('B1')).length;
    const a2 = careerStudents.filter((s) => s.perceivedEnglishLevel.startsWith('A2')).length;
    const a1 = careerStudents.filter((s) => s.perceivedEnglishLevel.startsWith('A1')).length;

    return {
      career,
      shortName: career.split(' (')[0],
      count,
      b2Pct: Math.round((b2 / count) * 100),
      b1Pct: Math.round((b1 / count) * 100),
      a2Pct: Math.round((a2 / count) * 100),
      a1Pct: Math.round((a1 / count) * 100)
    };
  });

  // 3. Exchange Destinations Data (Question 9 Analysis)
  const exchangeDestinations = [
    { country: 'Germany', flag: '🇩🇪', region: 'Europe', mentions: 8, pct: 28, careers: 'Engineering, Architecture, Business, Law' },
    { country: 'Spain', flag: '🇪🇸', region: 'Europe', mentions: 7, pct: 24, careers: 'Administration, Marketing, Architecture, Film' },
    { country: 'France', flag: '🇫🇷', region: 'Europe', mentions: 5, pct: 17, careers: 'Gastronomy, Languages, Administration' },
    { country: 'United States', flag: '🇺🇸', region: 'North America', mentions: 4, pct: 14, careers: 'Marketing, Film, Languages, Law' },
    { country: 'Canada', flag: '🇨🇦', region: 'North America', mentions: 3, pct: 10, careers: 'Business, Languages, Engineering' },
    { country: 'Latin America (Arg/Peru/Chile)', flag: '🌎', region: 'Latin America', mentions: 2, pct: 7, careers: 'Communication, Gastronomy, Business' }
  ];

  // 4. Teaching Semester Preference Data (Question 7 Analysis)
  const semesterTeachingData = [
    {
      group: '1st & 2nd Semester',
      phase: 'Foundational & Inspirational',
      count: 10,
      pct: 35,
      color: 'bg-emerald-500',
      reason: 'Inspire first-year students, overcome initial fears, build basic confidence.'
    },
    {
      group: '3rd & 4th Semester',
      phase: 'Applied Intermediate',
      count: 9,
      pct: 31,
      color: 'bg-blue-500',
      reason: 'Transition from theory into hands-on studio design, drafting, and screenwriting.'
    },
    {
      group: '5th & 6th Semester',
      phase: 'Advanced Capstone & Strategy',
      count: 7,
      pct: 24,
      color: 'bg-amber-500',
      reason: 'Lead case turnaround simulations, complex litigation, and automation projects.'
    },
    {
      group: '7th & 8th Semester',
      phase: 'Multilateral & Graduation',
      count: 3,
      pct: 10,
      color: 'bg-indigo-600',
      reason: 'Conduct international trade negotiations and professional portfolio defense.'
    }
  ];

  // 5. Student Pain Points / Dislikes (Question 4 Analysis)
  const painPointsData = [
    { label: 'Sleep Deprivation & Delivery Crises', score: 38, icon: '🌙', desc: 'Overnight project deadlines and architectural juries' },
    { label: 'Bogotá Urban Commute & SITP Delays', score: 31, icon: '🚌', desc: 'Long travel times and heavy traffic across the city' },
    { label: 'High Material & Software Expenses', score: 18, icon: '🏷️', desc: 'Model materials, kitchen equipment, 3D printing filaments' },
    { label: 'Theory vs Practical Real-world Gap', score: 13, icon: '📚', desc: 'Excessive memory-based testing before hands-on application' }
  ];

  // 6. Ugus Welfare Care Consensus (Question 8 Analysis)
  const ugusCareData = [
    { label: 'Fresh Clean Water Dispensers', rate: 100, desc: 'Dispensers kept filled in garden courtyards' },
    { label: 'Zero Harmful Human Junk Scraps', rate: 96, desc: 'No bones, chocolate, or seasoned food scraps' },
    { label: 'Protected Resting & Nap Zones', rate: 92, desc: 'Safe spaces near Tagaste courtyard free from disturbance' },
    { label: 'Veterinary Vaccination Fund', rate: 88, desc: 'Student council health checkup and flea treatment fund' }
  ];

  // 7. Interdisciplinary Second Careers (Question 11)
  const secondCareerCategories = [
    { domain: 'Engineering, IoT & Data Science', pct: 28, color: 'bg-cyan-600', careers: 'Chosen by Business, Film, Architecture' },
    { domain: 'Psychology & Behavioral Science', pct: 24, color: 'bg-purple-600', careers: 'Chosen by Marketing, Languages, Law' },
    { domain: 'Law, Policy & Governance', pct: 20, color: 'bg-indigo-600', careers: 'Chosen by Business, Communication' },
    { domain: 'Economics & Corporate Strategy', pct: 16, color: 'bg-emerald-600', careers: 'Chosen by Administration, Gastronomy' },
    { domain: 'Philosophy, Arts & Literature', pct: 12, color: 'bg-amber-600', careers: 'Chosen by Film, Communication, Law' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Infographics Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-700/60 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-semibold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" />
            <span>Interactive Data Dashboard & Infographics</span>
            <span className="text-slate-400">·</span>
            <span>Academic Period 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
            Visual Qualitative & Quantitative Fieldwork Insights
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Statistical infographics synthesizing the 11 questions answered across 10 university degree programs: Interviewer-assessed CEFR language levels, global exchange choices, teaching inclinations, and campus community indicators.
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-700/80">
            <div>
              <span className="block text-2xl font-bold text-amber-400">{students.length}</span>
              <span className="text-xs text-slate-300">Total Interviewees</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">{b1Percent + b2Percent}%</span>
              <span className="text-xs text-slate-300">Intermediate CEFR (B1/B2)</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">69%</span>
              <span className="text-xs text-slate-300">Target Europe for Exchange</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">100%</span>
              <span className="text-xs text-slate-300">Ugus Animal Care Empathy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infographics Category Filter Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto bg-white p-2 rounded-xl border border-slate-200 shadow-xs no-scrollbar">
        {[
          { id: 'all', label: 'All Visualizations', icon: Layers },
          { id: 'language', label: 'English CEFR Distribution', icon: Award },
          { id: 'exchange', label: 'Global Exchanges (Q9)', icon: Globe2 },
          { id: 'pedagogy', label: 'Teaching Aspirations (Q7)', icon: GraduationCap },
          { id: 'welfare', label: 'Campus Life & Ugus (Q4 & Q8)', icon: Dog }
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeChartTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveChartTab(tab.id as any)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-slate-900 text-amber-400 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION 1: LANGUAGE PROFICIENCY (Donut Chart & Cross-Major Stacked Bar) */}
      {(activeChartTab === 'all' || activeChartTab === 'language') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>Interviewer-Assessed English Proficiency (CEFR)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Qualitative appraisal by student researchers during oral fieldwork interviews
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
              N = {students.length} Students
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* SVG Donut Chart Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Overall CEFR Level Breakdown
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Interactive donut chart representing total percentage
                </p>

                {/* SVG Donut */}
                <div className="relative flex items-center justify-center my-4">
                  <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                    {/* B2 Arc (Emerald) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#059669"
                      strokeWidth="12"
                      strokeDasharray={`${(b2Percent * 2.387).toFixed(1)} 238.7`}
                      strokeDashoffset="0"
                      className="cursor-pointer transition-all duration-300 hover:opacity-80"
                      onMouseEnter={() => setHoveredLevel('B2')}
                      onMouseLeave={() => setHoveredLevel(null)}
                    />
                    {/* B1 Arc (Blue) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#2563eb"
                      strokeWidth="12"
                      strokeDasharray={`${(b1Percent * 2.387).toFixed(1)} 238.7`}
                      strokeDashoffset={`${-(b2Percent * 2.387)}`}
                      className="cursor-pointer transition-all duration-300 hover:opacity-80"
                      onMouseEnter={() => setHoveredLevel('B1')}
                      onMouseLeave={() => setHoveredLevel(null)}
                    />
                    {/* A2 Arc (Amber) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#d97706"
                      strokeWidth="12"
                      strokeDasharray={`${(a2Percent * 2.387).toFixed(1)} 238.7`}
                      strokeDashoffset={`${-((b2Percent + b1Percent) * 2.387)}`}
                      className="cursor-pointer transition-all duration-300 hover:opacity-80"
                      onMouseEnter={() => setHoveredLevel('A2')}
                      onMouseLeave={() => setHoveredLevel(null)}
                    />
                    {/* A1 Arc (Slate) */}
                    {a1Percent > 0 && (
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#94a3b8"
                        strokeWidth="12"
                        strokeDasharray={`${(a1Percent * 2.387).toFixed(1)} 238.7`}
                        strokeDashoffset={`${-((b2Percent + b1Percent + a2Percent) * 2.387)}`}
                        className="cursor-pointer transition-all duration-300 hover:opacity-80"
                        onMouseEnter={() => setHoveredLevel('A1')}
                        onMouseLeave={() => setHoveredLevel(null)}
                      />
                    )}
                  </svg>

                  {/* Center Text inside Donut */}
                  <div className="absolute text-center">
                    <span className="text-3xl font-extrabold text-slate-900 block leading-tight">
                      {hoveredLevel ? `${hoveredLevel}` : `${b1Percent + b2Percent}%`}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {hoveredLevel
                        ? `${hoveredLevel === 'B2' ? b2Percent : hoveredLevel === 'B1' ? b1Percent : a2Percent}%`
                        : 'B1/B2 Total'}
                    </span>
                  </div>
                </div>

                {/* Legend Chips */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span className="w-3 h-3 rounded-full bg-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-emerald-950 block">B2 Upper Interm.</span>
                      <span className="text-[11px] text-emerald-800">{levelCounts['B2']} students ({b2Percent}%)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-blue-50 border border-blue-200">
                    <span className="w-3 h-3 rounded-full bg-blue-600 shrink-0" />
                    <div>
                      <span className="font-bold text-blue-950 block">B1 Intermediate</span>
                      <span className="text-[11px] text-blue-800">{levelCounts['B1']} students ({b1Percent}%)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="w-3 h-3 rounded-full bg-amber-600 shrink-0" />
                    <div>
                      <span className="font-bold text-amber-950 block">A2 Elementary</span>
                      <span className="text-[11px] text-amber-800">{levelCounts['A2']} students ({a2Percent}%)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="w-3 h-3 rounded-full bg-slate-400 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">A1 Beginner</span>
                      <span className="text-[11px] text-slate-600">{levelCounts['A1']} students ({a1Percent}%)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Hover over donut segments to inspect individual levels.</span>
              </div>
            </div>

            {/* Stacked Horizontal Bar Chart by Career */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Level Distribution Compared Across the 10 Majors
                    </h4>
                    <p className="text-xs text-slate-500">
                      Stacked comparative bar chart (B2: green, B1: blue, A2: amber)
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-600">
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600" /> B2</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> B1</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-600" /> A2</span>
                  </div>
                </div>

                {/* Stacked Bars */}
                <div className="space-y-2.5">
                  {careerLevelData.map((item) => (
                    <div key={item.career} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-800 truncate max-w-[240px]">
                          {item.shortName}
                        </span>
                        <span className="text-slate-500 text-[11px]">
                          {item.count} std. (B2: {item.b2Pct}% · B1: {item.b1Pct}% · A2: {item.a2Pct}%)
                        </span>
                      </div>
                      <div className="h-3.5 w-full bg-slate-100 rounded-full flex overflow-hidden shadow-2xs">
                        {item.b2Pct > 0 && (
                          <div
                            style={{ width: `${item.b2Pct}%` }}
                            className="bg-emerald-600 h-full transition-all"
                            title={`B2: ${item.b2Pct}%`}
                          />
                        )}
                        {item.b1Pct > 0 && (
                          <div
                            style={{ width: `${item.b1Pct}%` }}
                            className="bg-blue-600 h-full transition-all"
                            title={`B1: ${item.b1Pct}%`}
                          />
                        )}
                        {item.a2Pct > 0 && (
                          <div
                            style={{ width: `${item.a2Pct}%` }}
                            className="bg-amber-600 h-full transition-all"
                            title={`A2: ${item.a2Pct}%`}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 flex items-center justify-between">
                <span>Foreign Languages & Business programs lead in B2 proficiency.</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ESP Focus Required
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: GLOBAL STUDENT EXCHANGES (Horizontal Ranking Bar & Regional Map Breakdown) */}
      {(activeChartTab === 'all' || activeChartTab === 'exchange') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-blue-600" />
                <span>Target International Exchange Destinations (Question 9)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Where students aspire to study abroad and how destinations correlate with academic majors
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Horizontal Ranking Bar Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="font-bold text-slate-900 text-sm">
                  Country Preference Ranking
                </h4>
                <p className="text-xs text-slate-500">
                  Relative percentage based on student interview transcripts
                </p>
              </div>

              <div className="space-y-3.5">
                {exchangeDestinations.map((dest, idx) => (
                  <div key={dest.country} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <span className="text-base">{dest.flag}</span>
                        <span>{idx + 1}. {dest.country}</span>
                        <span className="text-[11px] text-slate-400 font-normal">({dest.region})</span>
                      </span>
                      <span className="font-bold text-slate-900">{dest.pct}%</span>
                    </div>

                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${dest.pct * 3.2}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
                      />
                    </div>

                    <div className="text-[11px] text-slate-500 italic pl-6">
                      Primary majors: {dest.careers}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Infographic Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Global Continental Split
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Regional destination clusters
                </p>

                <div className="space-y-4">
                  <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-200 space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-blue-950 text-xs">European Union</span>
                      <span className="text-lg font-extrabold text-blue-700">69%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '69%' }} />
                    </div>
                    <p className="text-[11px] text-blue-900 leading-snug">
                      Germany (DAAD, Bauhaus), Spain (Madrid, ESADE), France (Paris, Lyon), Netherlands.
                    </p>
                  </div>

                  <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-amber-950 text-xs">North America</span>
                      <span className="text-lg font-extrabold text-amber-700">24%</span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full" style={{ width: '24%' }} />
                    </div>
                    <p className="text-[11px] text-amber-900 leading-snug">
                      United States (USC, New York) and Canada (Toronto, Montreal bilingual immersion).
                    </p>
                  </div>

                  <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-emerald-950 text-xs">Latin America</span>
                      <span className="text-lg font-extrabold text-emerald-700">7%</span>
                    </div>
                    <div className="w-full bg-emerald-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '7%' }} />
                    </div>
                    <p className="text-[11px] text-emerald-900 leading-snug">
                      Argentina (UBA Journalism), Peru (Lima Gastronomy), Chile (Enterprise).
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1">
                <span>Reflects strong ambition for English & European masteries.</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: TEACHING ASPIRATIONS & PEDAGOGICAL TIMELINE (Question 7) */}
      {(activeChartTab === 'all' || activeChartTab === 'pedagogy') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                <span>Which Semester Would Students Like to Teach? (Question 7)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Pedagogical inclinations across academic stages: From foundational inspiration to advanced capstone mentorship
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {semesterTeachingData.map((sem, idx) => (
              <div
                key={sem.group}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${sem.color}`} />
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-bold uppercase tracking-wider text-[10px]">
                      Phase {idx + 1}
                    </span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {sem.pct}%
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {sem.group}
                  </h4>
                  <span className="text-[11px] font-medium text-amber-700 block mb-2">
                    {sem.phase}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    "{sem.reason}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Cohort preference:</span>
                  <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                    {sem.count} responses
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: CAMPUS WELFARE & STUDENT PAIN POINTS (Question 4 & Question 8) */}
      {(activeChartTab === 'all' || activeChartTab === 'welfare') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Dog className="w-5 h-5 text-amber-600" />
                <span>Campus Mascot Ugus (Q8) & Student Stressors (Q4)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Institutional culture, animal welfare consensus, and academic lifestyle pain points in Bogotá
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ugus Care Consensus Gauges */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Ugus Animal Welfare Action Protocols
                  </h4>
                  <p className="text-xs text-slate-500">
                    Agreement percentage among the 10 interviewed majors
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  100% Empathy
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {ugusCareData.map((item) => (
                  <div key={item.label} className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 leading-tight">
                        {item.label}
                      </span>
                      <span className="text-xs font-extrabold text-amber-700">
                        {item.rate}%
                      </span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-1.5 my-1">
                      <div className="bg-amber-600 h-1.5 rounded-full" style={{ width: `${item.rate}%` }} />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Pain Points Infographic */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="font-bold text-slate-900 text-sm">
                  What Students Dislike About University Life (Q4)
                </h4>
                <p className="text-xs text-slate-500">
                  Primary systemic stressors identified across undergraduate cohorts
                </p>
              </div>

              <div className="space-y-3">
                {painPointsData.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      <span className="font-bold text-slate-900">{item.score}%</span>
                    </div>

                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${item.score * 2.5}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-red-600"
                      />
                    </div>

                    <div className="text-[11px] text-slate-500 italic">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: INTERDISCIPLINARY SECOND CAREERS (Question 11 Treemap / Grid) */}
      {(activeChartTab === 'all' || activeChartTab === 'pedagogy') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>Interdisciplinary Complementary Degrees (Question 11)</span>
              </h3>
              <p className="text-xs text-slate-500">
                What secondary discipline students would study to augment their primary profession
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {secondCareerCategories.map((item) => (
                <div
                  key={item.domain}
                  className="p-4 rounded-xl border border-slate-200/80 bg-slate-50 flex flex-col justify-between space-y-2 hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl font-extrabold text-slate-900">
                        {item.pct}%
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 leading-snug">
                      {item.domain}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed border-t border-slate-200/60 pt-2">
                    {item.careers}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
              <span>
                <strong>Fieldwork Takeaway:</strong> 100% of respondents pick a complementary technical, behavioral, or legal booster rather than an unrelated career.
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
