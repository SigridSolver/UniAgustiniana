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
  Users, 
  Tv, 
  Camera, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Clapperboard,
  Heart
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
  const [activeChartTab, setActiveChartTab] = useState<'all' | 'language' | 'academics' | 'internships' | 'mobility'>('all');
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);

  // 1. Calculate English Level Counts dynamically
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

  const totalStudents = students.length || 1;
  const b2Percent = Math.round((levelCounts['B2'] / totalStudents) * 100);
  const b1Percent = Math.round((levelCounts['B1'] / totalStudents) * 100);
  const a2Percent = Math.round((levelCounts['A2'] / totalStudents) * 100);
  const a1Percent = Math.round((levelCounts['A1'] / totalStudents) * 100);

  // 2. Q1 Data: Program Appeal
  const q1Data = [
    { label: 'Photography (Framing, light & camera technique)', count: 5, pct: 63, color: 'bg-violet-600', students: 'Eily Garzón, José Menez, Juan Martínez, Thomas Marulanda, Nicolás Viñas' },
    { label: 'University Spaces (Studios, editing suites & gear)', count: 3, pct: 37, color: 'bg-amber-500', students: 'Ana María López, John Sebastian Castro, Samuel Pacheco' }
  ];

  // 3. Q2 Data: Favorite Subjects
  const q2Data = [
    { subject: 'Photoshop', count: 3, pct: 38, color: 'bg-blue-600', desc: 'Digital color grading, matte art, image manipulation' },
    { subject: 'Photography', count: 3, pct: 38, color: 'bg-purple-600', desc: 'Composition, studio flash, natural light on campus' },
    { subject: 'Narrative Workshop', count: 2, pct: 25, color: 'bg-emerald-600', desc: 'Screenplay structure, dialogue, dramatic tension' }
  ];

  // 4. Q4 Data: Internships / Practicums
  const q4Data = [
    { network: 'Both RCN and Caracol TV together', count: 4, pct: 50, color: 'bg-amber-600', focus: 'Multi-camera studio filming, live broadcast and production' },
    { network: 'RCN and Caracol TV (Audiovisual crews)', count: 4, pct: 50, color: 'bg-indigo-600', focus: 'Floor assistance, camera operations, video editing workflows' }
  ];

  // 5. Q5 Data: Career Improvement
  const q5Data = [
    { strategy: 'Study and prepare more (Theory & technical reading)', count: 7, pct: 88, color: 'bg-emerald-600' },
    { strategy: 'Direct hands-on shooting & independent production', count: 1, pct: 12, color: 'bg-amber-600' }
  ];

  // 6. Q6 Data: Hugos Campus Pet Care
  const q6Data = [
    { action: 'Take care of its habitat & keep green areas clean', count: 5, pct: 63, color: 'bg-emerald-600', desc: 'Fresh water bowls, no litter or toxic human food' },
    { action: 'Haven’t encountered him yet on class commute', count: 3, pct: 37, color: 'bg-slate-500', desc: 'Respect animal life when crossing campus pathways' }
  ];

  // 7. Q7 Data: Student Exchange Destinations
  const q7Data = [
    { destination: 'USA / Hollywood', count: 4, pct: 50, flag: '🇺🇸', color: 'bg-blue-600', note: 'California studios, film directing & cinematography' },
    { destination: 'Mexico', count: 2, pct: 25, flag: '🇲🇽', color: 'bg-emerald-600', note: 'Cinematographic heritage, documentary schools & production houses' },
    { destination: 'Remain in Colombia', count: 2, pct: 25, flag: '🇨🇴', color: 'bg-amber-600', note: 'Focus on national stories and local short films first' }
  ];

  // 8. Q8 Data: Practice Career
  const q8Data = [
    { target: 'Television, Film & Streaming (Netflix)', count: 7, pct: 88, color: 'bg-rose-600', desc: 'National television networks, cinema festivals, global series' },
    { target: 'Canada (VFX & Digital Animation Studios)', count: 1, pct: 12, color: 'bg-cyan-600', desc: 'International visual effects and digital post-production' }
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
            Visual Fieldwork Analytics & Empirical Infographics
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Statistical charts synthesizing the 8 research questions answered by the 8 interviewed students in Film and Television (UniAgustiniana): CEFR language levels, vocational preferences, campus space consensus, broadcast internships, and global exchange targets.
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-700/80">
            <div>
              <span className="block text-2xl font-bold text-amber-400">{students.length}</span>
              <span className="text-xs text-slate-300">Interviewed Students</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">{b1Percent + b2Percent}%</span>
              <span className="text-xs text-slate-300">CEFR Intermediate (B1/B2)</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">100%</span>
              <span className="text-xs text-slate-300">Green Area Affinity (Q3)</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">100%</span>
              <span className="text-xs text-slate-300">RCN / Caracol TV Reach (Q4)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto bg-white p-2 rounded-xl border border-slate-200 shadow-xs no-scrollbar">
        {[
          { id: 'all', label: 'All 8 Question Charts', icon: Layers },
          { id: 'language', label: 'CEFR English Levels', icon: Award },
          { id: 'academics', label: 'Vocation & Subjects (Q1 & Q2)', icon: Camera },
          { id: 'internships', label: 'Media & Practicums (Q4 & Q8)', icon: Tv },
          { id: 'mobility', label: 'Exchanges & Mascot Hugos (Q6 & Q7)', icon: Globe2 }
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeChartTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveChartTab(tab.id as any)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION 1: LANGUAGE PROFICIENCY (Donut Chart & Distribution) */}
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  CEFR Distribution Donut Chart
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Assessment based on fluency, syntactic clarity, and ease answering the 8 questions in English:
                </p>

                <div className="flex items-center justify-center py-4">
                  <div className="relative w-44 h-44">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      {/* B2 slice (12.5%): dasharray 12.5 87.5 */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="transparent"
                        stroke="#059669"
                        strokeWidth="3.8"
                        strokeDasharray={`${b2Percent} ${100 - b2Percent}`}
                        strokeDashoffset="0"
                        className="transition-all duration-500 hover:opacity-80"
                      />
                      {/* B1 slice (50%): dashoffset -12.5 */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="transparent"
                        stroke="#2563eb"
                        strokeWidth="3.8"
                        strokeDasharray={`${b1Percent} ${100 - b1Percent}`}
                        strokeDashoffset={`-${b2Percent}`}
                        className="transition-all duration-500 hover:opacity-80"
                      />
                      {/* A2 slice (37.5%): dashoffset -62.5 */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="transparent"
                        stroke="#f59e0b"
                        strokeWidth="3.8"
                        strokeDasharray={`${a2Percent} ${100 - a2Percent}`}
                        strokeDashoffset={`-${b2Percent + b1Percent}`}
                        className="transition-all duration-500 hover:opacity-80"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                      <span className="text-xl font-black text-slate-900">{b1Percent + b2Percent}%</span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Intermediate+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend with Counts */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center">
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                  <span className="block text-[11px] font-bold text-emerald-800">B2 Upper</span>
                  <span className="text-sm font-black text-emerald-900">{levelCounts['B2']} ({b2Percent}%)</span>
                </div>
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-200">
                  <span className="block text-[11px] font-bold text-blue-800">B1 Interm.</span>
                  <span className="text-sm font-black text-blue-900">{levelCounts['B1']} ({b1Percent}%)</span>
                </div>
                <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">
                  <span className="block text-[11px] font-bold text-amber-800">A2 Elem.</span>
                  <span className="text-sm font-black text-amber-900">{levelCounts['A2']} ({a2Percent}%)</span>
                </div>
              </div>
            </div>

            {/* Individual Student Evaluation Ledger */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Student-by-Student Qualitative CEFR Mapping
                  </h4>
                  <p className="text-xs text-slate-500">
                    Perceived communicative level linked with verified student codes
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {students.map((st) => (
                  <div
                    key={st.id}
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg ${st.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                        {st.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 leading-tight">
                          {st.name}
                        </span>
                        <span className="font-mono text-[10px] text-amber-800 font-semibold">
                          ID: {st.studentCode}
                        </span>
                      </div>
                    </div>

                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
                      st.perceivedEnglishLevel.startsWith('B2')
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : st.perceivedEnglishLevel.startsWith('B1')
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : 'bg-amber-100 text-amber-900 border-amber-300'
                    }`}>
                      {st.perceivedEnglishLevel.split(' - ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: ACADEMICS & VOCATION (Q1 & Q2) */}
      {(activeChartTab === 'all' || activeChartTab === 'academics') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-600" />
                <span>Program Appeal & Favorite Subjects (Q1 & Q2)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Core vocational identity and engagement across the curriculum
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Q1: What do you like most? */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                    Question 1 Analysis
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    What do you like most about your career?
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {q1Data.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800">{item.label}</span>
                      <span className="font-bold text-slate-900">{item.count} std. ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 italic">
                      Mentioned by: {item.students}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Q2: Favorite Subjects */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                    Question 2 Analysis
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    What is your favorite subject?
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {q2Data.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800">{item.subject}</span>
                      <span className="font-bold text-slate-900">{item.count} std. ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Q3: Unanimous Campus Space Banner */}
          <div className="bg-emerald-50/90 rounded-xl p-5 border border-emerald-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-lg">
                100%
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Question 3 Unanimous Finding
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Campus Space Preference: The Green Area of UniAgustiniana
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  All 8 surveyed students (100%) unanimously selected the green area of Campus Tagaste as their favorite location, citing open natural lighting, peaceful atmosphere for script reading, and crew meeting space.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-200/60 px-3 py-1.5 rounded-lg shrink-0">
              8 of 8 Students in Total Consensus
            </span>
          </div>
        </section>
      )}

      {/* SECTION 3: MEDIA, INTERNSHIPS & PRACTICE (Q4, Q5 & Q8) */}
      {(activeChartTab === 'all' || activeChartTab === 'internships') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Tv className="w-5 h-5 text-amber-600" />
                <span>Media Internships & Employability Projections (Q4, Q5 & Q8)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Industry alignment with Colombian television networks and streaming platforms
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Q4: Internships */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                  Question 4 (Internships)
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Where to do practicums?
                </h4>
              </div>

              <div className="space-y-3">
                {q4Data.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-900">
                      <span>{item.network}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500">{item.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Q5: Career Improvement */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                  Question 5 (Improvement)
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Actions to improve in career?
                </h4>
              </div>

              <div className="space-y-3">
                {q5Data.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-800">
                      <span>{item.strategy}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                      <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Q8: Practice Profession */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                  Question 8 (Employability)
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Where to practice career?
                </h4>
              </div>

              <div className="space-y-3">
                {q8Data.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-900">
                      <span>{item.target}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: MOBILITY & MASCOT HUGOS (Q6 & Q7) */}
      {(activeChartTab === 'all' || activeChartTab === 'mobility') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-amber-600" />
                <span>Exchange Mobility & Mascot Hugos Guardianship (Q6 & Q7)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Internationalization destinations and animal welfare in the university ecosystem
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Q7: Exchange Destinations */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                    Question 7 Analysis
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Would you like to do a student exchange? Where?
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {q7Data.map((dest, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span className="flex items-center gap-1.5">
                        <span className="text-base">{dest.flag}</span>
                        <span>{dest.destination}</span>
                      </span>
                      <span>{dest.count} std. ({dest.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={`${dest.color} h-2 rounded-full`} style={{ width: `${dest.pct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500">{dest.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Q6: Hugos Mascot Care */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <Dog className="w-4 h-4 text-amber-600" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      Question 6 Analysis
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      How can you take care of Hugos?
                    </h4>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {q6Data.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-900">
                      <span>{item.action}</span>
                      <span>{item.count} std. ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
