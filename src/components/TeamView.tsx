import React from 'react';
import { Interviewer, ProjectMetadata } from '../types';
import { 
  GraduationCap, 
  Mail, 
  MapPin, 
  BookOpen, 
  ShieldCheck, 
  Quote
} from 'lucide-react';

interface TeamViewProps {
  interviewers: Interviewer[];
  metadata: ProjectMetadata;
}

export const TeamView: React.FC<TeamViewProps> = ({
  interviewers,
  metadata
}) => {
  return (
    <div className="space-y-8 pb-12">
      {/* Team Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Pre-Service Language Educator Research Team</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Student Interviewers & Authors of the Study
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Fieldwork investigation conducted as part of the <strong>{metadata.program}</strong> at <strong>{metadata.university}</strong> (Bogotá, Colombia). This exploratory study connects pedagogical training with the authentic academic and vocational realities of students across faculties.
          </p>
        </div>
      </div>

      {/* Team Members Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interviewers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-bold text-base flex items-center justify-center shrink-0 shadow-xs">
                  {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-amber-700 block">
                    {member.role}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{member.campus}</span>
                    <span aria-hidden="true">·</span>
                    <span>{member.semester}</span>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                  <Quote className="w-3 h-3 text-amber-600" />
                  <span>Pedagogical & Fieldwork Reflection:</span>
                </div>
                <p className="italic text-slate-600 leading-relaxed text-[11px]">
                  "{member.reflection}"
                </p>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs text-slate-500">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate">{member.email}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fieldwork Protocol & Methodology */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Methodological Design */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <h3 className="font-bold text-slate-900 text-sm">
              Fieldwork Research Protocol
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">1. Research Instrument Design:</span>
              <p className="text-slate-600 leading-relaxed">
                An 11-question semi-structured English battery was formulated to encompass vocational motivation, curricular preferences, campus welfare (Ugus mascot), student challenges, practicums, teaching aspirations, and international mobility.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">2. Sample Diversity Criteria:</span>
              <p className="text-slate-600 leading-relaxed">
                Intentional convenience sampling: 1 representative student from 9 distinct degree programs at UniAgustiniana (Architecture, Social Communication, International Business, Foreign Languages, Gastronomy, Law, Film, Engineering, Marketing).
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">3. Data Recording & Transcription:</span>
              <p className="text-slate-600 leading-relaxed">
                Interviews conducted with verbal informed consent, audio recordings for transcription fidelity, and systematic cross-disciplinary qualitative coding.
              </p>
            </div>
          </div>
        </div>

        {/* Pedagogical Contribution */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-sm">
              Impact on Foreign Language Teacher Training
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-200 text-emerald-950 leading-relaxed">
              <strong>English for Specific Purposes (ESP):</strong> As future language teachers, this project proves that students from Gastronomy or Architecture require specialized linguistic registers and situated communicative tasks rather than generic grammar worksheets.
            </div>

            <div className="bg-amber-50/60 p-3 rounded-lg border border-amber-200 text-amber-950 leading-relaxed">
              <strong>Empathy and Campus Culture:</strong> The universal affection for Ugus and the shared struggle with sleep deprivation and Bogotá commuting remind educators to build compassionate, low-anxiety classroom spaces.
            </div>

            <div className="bg-blue-50/60 p-3 rounded-lg border border-blue-200 text-blue-950 leading-relaxed">
              <strong>Student Empowerment:</strong> Giving non-language majors the space to speak English while talking about their true passions created genuine communicative motivation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
