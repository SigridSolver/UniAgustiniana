import { InterviewedStudent, Interviewer, ProjectMetadata, Question } from '../types';

export const initialMetadata: ProjectMetadata = {
  university: 'UniAgustiniana - Universitaria Agustiniana',
  faculty: 'Faculty of Humanities, Social Sciences and Education',
  program: 'Bachelor’s Degree in Foreign Languages (English Emphasis)',
  subject: 'Applied Sociolinguistics & Pedagogical Research',
  city: 'Bogotá D.C., Colombia',
  term: 'Academic Period 2026',
  title: 'Academic Life, Aspirations and Campus Perceptions in Film & Television',
  subtitle: 'A qualitative research fieldwork study: 8 structured interview questions administered to undergraduate students at UniAgustiniana Bogotá',
  generalObjective: 'To analyze student perceptions regarding their academic discipline, favorite subjects, campus spaces, internship opportunities, professional improvement, care for mascot Hugos, exchange destinations, and career practice.',
  methodologyType: 'Qualitative-descriptive survey and semi-structured English interview protocols with verbatim response analysis.',
  sampleDescription: 'Verified multi-program fieldwork sample (32 real undergraduate students with official student codes across Film & Television, Architecture, Engineering, and Hospitality & Tourism), Campus Tagaste, Bogotá.'
};

export const initialInterviewers: Interviewer[] = [
  {
    id: 'int-1',
    name: 'Alejandra Cruz',
    role: 'Lead Student Researcher / Project Coordinator',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'a.cruz@uniagustiniana.edu.co',
    reflection: 'Interviewing students across diverse programs in English revealed how their disciplinary passions shape their vocabulary and global goals. Real communicative practice gave them the confidence to speak about their dreams, exchange goals, and campus life.'
  },
  {
    id: 'int-2',
    name: 'Melany Casas',
    role: 'Lead Student Researcher / Fieldwork & Data Analyst',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'm.casas@uniagustiniana.edu.co',
    reflection: 'Working directly with the Cine y Televisión cohort showed that 100% of students cherish our campus green spaces and that language education must connect directly to real media channels like RCN, Caracol, Hollywood, and Netflix.'
  },
  {
    id: 'int-3',
    name: 'Paula Natalia Torres',
    role: 'Co-Researcher / Interviewer',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'p.torres@uniagustiniana.edu.co',
    reflection: 'Conducting these interviews in English allowed us to observe how university students express their vocational passions and future aspirations. It proved that language teaching must connect with real workplace registers.'
  },
  {
    id: 'int-4',
    name: 'Andrés Felipe Calderón',
    role: 'Co-Researcher / Data Analyst',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'a.calderon@uniagustiniana.edu.co',
    reflection: 'Listening to students talk about their internships, exchange desires, and caring for mascot Hugos showed a shared university identity that transcends individual faculties.'
  },
  {
    id: 'int-5',
    name: 'Laura Sofía Gómez',
    role: 'Co-Researcher / Fieldwork Scribe',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Suba Campus',
    email: 'l.gomez@uniagustiniana.edu.co',
    reflection: 'The survey demonstrated that students have high aspirations to work with international streaming networks and production companies, underscoring the vital role of English fluency.'
  },
  {
    id: 'int-6',
    name: 'María Fernanda Rodríguez',
    role: 'Lead Student Researcher / Architecture Fieldwork',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'mf.rodriguez@uniagustiniana.edu.co',
    reflection: 'Investigating students in Architecture revealed their deep commitment to spatial design, physical model making, and urban sustainability. Connecting English communication with technical architectural terminology demonstrated the global exchange and professional goals of future architects.'
  },
  {
    id: 'int-7',
    name: 'Helen Sofía Molina',
    role: 'Lead Student Researcher / Architecture Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'hs.molina@uniagustiniana.edu.co',
    reflection: 'Interviewing the 8 architecture students showed their dedication to studio workshops and international aspirations to study in Spain, Japan, Germany, and the USA. English proficiency directly empowers their international mobility dreams.'
  },
  {
    id: 'int-8',
    name: 'Jorge Bustos',
    role: 'Lead Student Researcher / Engineering Fieldwork',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'j.bustos@uniagustiniana.edu.co',
    reflection: 'Fieldwork research with the Engineering students demonstrated strong analytical passion for software architecture, coding flexibility, and international ambitions in tech enterprises, highlighting the critical role of English for global engineering careers.'
  },
  {
    id: 'int-9',
    name: 'Andres Parra',
    role: 'Lead Student Researcher / Engineering Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'a.parra@uniagustiniana.edu.co',
    reflection: 'Analyzing the 8 Engineering student responses showcased their interest in robotics, electronics, algorithm optimization, and ethical wildlife care for mascot Ugus. Fluency in technical English is their principal bridge to multinational tech giants.'
  },
  {
    id: 'int-10',
    name: 'Valerin Sophia Conde Hernández',
    role: 'Lead Student Researcher / Hospitality & Tourism Fieldwork',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'vs.conde@uniagustiniana.edu.co',
    reflection: 'Fieldwork investigation with Tourism and Hospitality students highlighted the decisive role of bilingualism and customer empathy. Connecting English communication with etiquette, customer care, and international hotel management directly opens career pathways abroad.'
  },
  {
    id: 'int-11',
    name: 'Tania Sarah Candela Ruiz',
    role: 'Lead Student Researcher / Hospitality & Tourism Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'ts.candela@uniagustiniana.edu.co',
    reflection: 'Interviewing the 8 hospitality students revealed their high motivation for international mobility in Spain, Mexico, USA, and Canada, as well as hands-on training in ESUNA facilities. English fluency is their essential bridge to luxury resorts and global travel agencies.'
  },
  {
    id: 'int-12',
    name: 'Ana Paula Manrique Mijares',
    role: 'Lead Student Researcher / Gastronomy Fieldwork Coordinator',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Suba & Tagaste Campuses',
    email: 'ap.manrique@uniagustiniana.edu.co',
    reflection: 'Fieldwork with Gastronomy students and Professor Katherine Avendaño revealed high passion for culinary arts, bakery, mixology, and international exchanges to France, Spain, and Mexico. Professional English empowers their culinary careers in global hospitality and cruise lines.'
  },
  {
    id: 'int-13',
    name: 'Carol Tatiana Caro Montaño',
    role: 'Lead Student Researcher / Gastronomy Fieldwork & Data Analysis',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Suba & Tagaste Campuses',
    email: 'ct.caro@uniagustiniana.edu.co',
    reflection: 'Interviewing the 9 culinary students alongside their instructor highlighted the vital bridge between communicative English, international kitchen brigades, hospitality service standards, and campus awareness regarding mascot Ugus.'
  }
];

export const universityCareersList: string[] = [
  'Film and Television (Cine y Televisión)',
  'Architecture (Arquitectura)',
  'Engineering (Ingenierías)',
  'Hospitality and Tourism (Hotelería y Turismo)',
  'Social Communication (Comunicación Social)',
  'International Business (Negocios Internacionales)',
  'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)',
  'Gastronomy (Gastronomía)',
  'Law (Derecho)',
  'Marketing (Mercadeo)',
  'Business Administration (Administración de Empresas)'
];

export const initialQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your career?',
    academicObjective: 'Explore student vocational motivation, core identity, and primary disciplinary appeal.',
    category: 'Program Appeal & Motivation',
    summaryInsight: 'In Film & TV, 63% (5 students) chose Photography, while 37% (3 students) highlighted the university’s specialized spaces.'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify key curricular courses that generate the highest intellectual and technical engagement.',
    category: 'Favorite Subjects',
    summaryInsight: 'Photoshop (38%) and Photography (38%) tied as the most selected subjects, followed by Narrative Workshop (25%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of the university?',
    academicObjective: 'Map spatial attachment and campus environment preferences across UniAgustiniana facilities.',
    category: 'Campus Spaces',
    summaryInsight: 'Unanimous 100% agreement: all 8 surveyed students selected the green area of the campus as their favorite location.'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do in your internships/practicums?',
    academicObjective: 'Assess student awareness of professional experiential learning and target broadcast/workplace media.',
    category: 'Internships & Practicum',
    summaryInsight: '100% of participants stated they can enter or work with RCN and Caracol TV (50% specifically targeting both networks together).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What can you do to improve in your career?',
    academicObjective: 'Evaluate commitment to self-directed learning, continuous training, and professional development.',
    category: 'Professional Improvement',
    summaryInsight: '88% of participants (7 students) stated they need to study and prepare more through continuous practice.'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'How can you take care of Hugos (Pet)?',
    academicObjective: 'Assess campus community consciousness, animal welfare, and institutional pet guardianship.',
    category: 'Hugos Mascot Care',
    summaryInsight: '63% (5 students) pledged to take care of his habitat and green areas, while 37% (3 students) noted they haven’t seen him around their classrooms.'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Would you like to do a student exchange? Where?',
    academicObjective: 'Measure international mobility aspirations and geographic study-abroad targets.',
    category: 'International Exchange',
    summaryInsight: '75% (6 students) wish to travel abroad to the USA, Mexico, and Hollywood; 25% (2 students) prefer to remain in Colombia.'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'Where do you think you can practice your career?',
    academicObjective: 'Identify target employment sectors, international markets, and professional media industries.',
    category: 'Career Practice & Employability',
    summaryInsight: '88% (7 students) project practicing their career in television, film, and streaming platforms like Netflix; 12% (1 student) aims for Canada.'
  }
];

export const architectureQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your degree?',
    academicObjective: 'Explore student vocational motivation, spatial design interest, and aesthetic drive.',
    category: 'Degree Appeal & Motivation',
    summaryInsight: 'Creation and design of spaces: 57% (4 students) · Usefulness, challenges and art: 43% (3 students).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify key architectural workshops and representational courses generating highest engagement.',
    category: 'Favorite Subjects',
    summaryInsight: 'Architectural Workshop (29%) and Representation and Media (29%), followed by Urban Project (14%), Theory & History (14%), and Technological Project (14%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of university?',
    academicObjective: 'Map spatial satisfaction, collaborative studio culture, and academic life on campus.',
    category: 'University Spaces & Community',
    summaryInsight: 'Teamwork and sharing ideas with classmates: 57% (4 students); Architecture studio and model making: 29% (2 students); Daily learning: 14% (1 student).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do to improve your degree?',
    academicObjective: 'Assess self-directed discipline, time management, and technical drawing practice.',
    category: 'Academic Improvement & Skills',
    summaryInsight: 'Organization & time management (37.5%); Practice architectural drawing & techniques (37.5%); Study more & attention to details (25%).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'How can you take care of the university?',
    academicObjective: 'Assess physical plant responsibility, studio cleanliness, and material preservation.',
    category: 'Campus Stewardship & Care',
    summaryInsight: 'Care for classrooms, furniture and materials: 44% (4 students); Keep spaces clean and tidy: 33% (3 students); Respect others & responsible resources: 23% (2 students).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'Would you like to study in another country? Where would you like to go?',
    academicObjective: 'Measure international mobility aspirations and geographic study-abroad targets for architecture.',
    category: 'International Exchange',
    summaryInsight: 'Spain (29% · 2 students), United States (14%), Japan (14%), Germany (14%), Italy (14%), France (14%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Where do you think you can work in your degree?',
    academicObjective: 'Identify target professional workplaces, design studios, and construction firms.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Architecture studios/firms: 38% (5 students); Construction companies: 23% (3 students); Residential/interior design: 23% (3 students); Urban planning: 16% (2 students).'
  }
];

export const engineeringQuestions: Question[] = [
  {
    id: 2,
    code: 'Q2',
    title: 'What do you like most about your career?',
    academicObjective: 'Evaluate vocational passion, software development interest, and engineering problem-solving drive.',
    category: 'Career Appeal & Motivation',
    summaryInsight: 'Programming / software: 4 students (50%) · Variety of fields: 2 (25%) · Electronics: 1 (12.5%) · Problem solving: 1 (12.5%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify core engineering coursework engaging students most across computational and mathematical fields.',
    category: 'Favorite Subjects & Curriculum',
    summaryInsight: 'Programming / software: 3 students (37.5%) · Calculus (Integral & Differential): 3 (37.5%) · Intro to engineering: 1 (12.5%) · Campus green areas: 1 (12.5%).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What is your favorite part of Ugus (Campus / Mascot)?',
    academicObjective: 'Assess student connection with university mascot Ugus and preferred campus spaces.',
    category: 'University Mascot & Campus Life',
    summaryInsight: 'Ugus himself (The tail / El saco): 2 students (25%) · Library: 2 (25%) · Campus spaces (Green areas / Courts): 2 (25%) · Activities & dynamics: 1 (12.5%) · Off-topic: 1.'
  },
  {
    id: 5,
    code: 'Q5',
    title: "What don't you like about being a student/teacher?",
    academicObjective: 'Understand academic friction points, workload pressure, schedule demands, and student well-being.',
    category: 'Academic Challenges & Workload',
    summaryInsight: 'Nothing / Everything is fine: 3 students (37.5%) · Schedules / sleep late: 2 (25%) · Accumulated workload: 1 (12.5%) · Specific class (Algorithms): 1 (12.5%) · Other: 1.'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What can you do during your exchanges?',
    academicObjective: 'Explore student perception and intended activities during international academic exchanges.',
    category: 'Exchange Activities & Experience',
    summaryInsight: 'Cultural experience & learning: 3 students (37.5%) · Socializing & walking with peers: 2 (25%) · Study & play: 2 (25%) · Rest: 1 (12.5%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'What things can you do to improve in your career?',
    academicObjective: 'Measure self-improvement drive, curriculum demands, and practical technical project needs.',
    category: 'Career Improvement & Skills',
    summaryInsight: 'Self-improvement (Discipline, programming projects): 3 students (37.5%) · Curriculum modernization & class rigor: 3 (37.5%) · Everything well-done: 1 (12.5%) · Unclear: 1.'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'Which semester do you like to teach classes in?',
    academicObjective: 'Identify academic stage preferences and teaching/mentoring affinity across undergraduate levels.',
    category: 'Academic Teaching & Semesters',
    summaryInsight: '4th–5th semester: 2 students (28%) · 2nd semester: 1 (14%) · 3rd semester: 1 (14%) · 8th semester: 1 (14%) · None / other: 2 (28%).'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'How can you take care of Agus (Ugus / Mascot & Wildlife)?',
    academicObjective: 'Evaluate awareness of campus wildlife stewardship, animal welfare rules, and responsible campus behavior.',
    category: 'Campus Fauna & Mascot Stewardship',
    summaryInsight: 'Keep distance / do not stress him: 4 mentions · Keep area clean & trash disposal: 2 mentions · No processed food: 2 mentions · No flash photos: 2 mentions · Respect university values: 1.'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Would you like to do exchanges? Where?',
    academicObjective: 'Map international academic mobility aspirations and target universities for engineering.',
    category: 'International Exchange Destinations',
    summaryInsight: 'Spain: 3 students · Germany: 1 · Mexico: 1 · Brazil or Argentina: 1 · Chile: 1 · Technology Center: 1 · Not for now: 1.'
  },
  {
    id: 11,
    code: 'Q11',
    title: 'Where do you think you can practice your career?',
    academicObjective: 'Identify target tech industries, international markets, software firms, and corporate sectors.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Technology & software companies (Google, Cisco): 4 mentions · Any industrial sector: 2 · Own tech company: 1 · Banking & financial sector: 1 · Europe: 1.'
  },
  {
    id: 12,
    code: 'Q12',
    title: 'Do you think you could study another career? Which one?',
    academicObjective: 'Explore multidisciplinary vocations and complementary academic interests among engineering students.',
    category: 'Multidisciplinary Interests & Alternative Degrees',
    summaryInsight: 'Mechatronics engineering: 2 mentions · Software development: 2 mentions · Telecommunications: 1 · Chemical engineering: 1 · Film & TV: 1 · Languages / English: 1.'
  }
];

export const tourismQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your career?',
    academicObjective: 'Explore student motivation, cultural interest, and passion for hospitality and travel services.',
    category: 'Career Appeal & Motivation',
    summaryInsight: 'People, cultures & places: 4 students (50%) · Elective / fun classes: 2 (25%) · Variety of classes: 1 (12.5%) · Organize activities: 1 (12.5%).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'Which subject do you like the most?',
    academicObjective: 'Identify key academic courses and practical workshops generating highest engagement and vocational satisfaction.',
    category: 'Favorite Subjects & Practical Labs',
    summaryInsight: 'Elective / Etiquette & Table Service: 4 students (50%) · Tourism Theory: 1 (12.5%) · Labor Legislation: 1 (12.5%) · Tourism & Hotel Management: 1 (12.5%) · Food Safety: 1 (12.5%).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of UniAgustiniana?',
    academicObjective: 'Map student attachment to campus facilities, specialized ESUNA hospitality labs, and green spaces.',
    category: 'University Spaces & Campus Life',
    summaryInsight: 'ESUNA specialized facilities: 3 students (37.5%) · Green Zone (Zonas verdes): 3 (37.5%) · Campus & Classmates: 1 (12.5%) · Academic Experience: 1 (12.5%).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do during your internships?',
    academicObjective: 'Evaluate student operational competencies and task expectations for professional hotel and tourism practicums.',
    category: 'Internship Activities & Operations',
    summaryInsight: 'Customer service & helping people: 4 students (50%) · Hotel & tourism activities: 3 (37.5%) · Organization & admin tasks: 2 (25%) · Study & social interaction: 1 ea.'
  },
  {
    id: 5,
    code: 'Q5',
    title: "What can’t you do during your internships?",
    academicObjective: 'Assess understanding of professional ethics, operational boundaries, and workplace protocol restrictions.',
    category: 'Workplace Protocols & Restrictions',
    summaryInsight: 'Ignore rules / Act without authorization: 4 students (50%) · Academic responsibilities: 1 (12.5%) · Sleep / Go home: 1 (12.5%) · Unrelated response / Don’t know: 2 (25%).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What can you do to improve in your career?',
    academicObjective: 'Measure commitment to self-directed learning, foreign language fluency, and professional discipline.',
    category: 'Professional Improvement & Languages',
    summaryInsight: 'Study more / Academic effort: 3 students (37.5%) · Improve English & language skills: 2 (25%) · Commitment / Responsibility: 2 (25%) · Practical skills: 1 (12.5%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'How can you take care of others?',
    academicObjective: 'Explore empathy, guest satisfaction, active listening, and teamwork in hospitality contexts.',
    category: 'Empathy, Guest Care & Teamwork',
    summaryInsight: 'Active listening & empathy: 3 students (37.5%) · Be a good teammate: 2 (25%) · Be kind and respectful: 2 (25%) · Guest care and experience: 1 (12.5%).'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'Would you like to do an exchange program? Where?',
    academicObjective: 'Measure international mobility aspirations and preferred study-abroad hospitality destinations.',
    category: 'International Exchange Destinations',
    summaryInsight: 'Spain: 3 students (37.5%) · Mexico: 3 (37.5%) · United States: 2 (25%) · Canada: 2 (25%) · Brazil, Costa Rica, Puerto Rico, Dominican Republic: 1 ea (12.5%).'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'Do you think you can study another career? Which one?',
    academicObjective: 'Explore multidisciplinary vocations and complementary degrees among tourism students.',
    category: 'Multidisciplinary Interests & Degrees',
    summaryInsight: 'No / Only tourism: 3 students (37.5%) · Business Administration: 2 (25%) · Marketing: 1 (12.5%) · Languages: 1 (12.5%) · Marine Biology: 1 (12.5%).'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Where do you think you can work in the future?',
    academicObjective: 'Identify target employment sectors across hotel chains, international tourism, and airport operations.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Hotels: 4 students (50%) · Work abroad: 4 (50%) · Travel agencies: 2 (25%) · Airports: 2 (25%) · Tourism companies, resorts, own business: 1 ea (12.5%).'
  }
];

export const gastronomyQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like the most about your career?',
    academicObjective: 'Analyze culinary vocational passion, hands-on cooking engagement, and kitchen creativity.',
    category: 'Vocational Motivation & Kitchen Passion',
    summaryInsight: 'Pastry & bread making: 3 (30%) · Cooking & learning techniques: 3 (30%) · Experimenting with food: 1 (10%) · Peace of mind: 1 (10%) · Kitchen atmosphere: 1 (10%) · Teaching & knowledge sharing: 1 (10% - Professor).'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify high-impact culinary subjects across baking, mixology, barista, and management.',
    category: 'Curriculum & Culinary Courses',
    summaryInsight: 'Baking & bread making: 3 (30%) · Mixology & cocktails: 3 (30%) · Barista skills: 1 (10%) · Latin American cuisine: 1 (10%) · Budgeting: 1 (10%) · Cocktails & service: 1 (10% - Professor).'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite area of the campus?',
    academicObjective: 'Assess spatial attachment to specialized culinary labs, barista rooms, and campus grounds.',
    category: 'Campus Spaces & Culinary Labs',
    summaryInsight: 'Kitchens & Gastronomy area: 4 (40%) · Barista classroom: 1 (10%) · Green area: 1 (10%) · ESUNA Spirituality office: 1 (10%) · Soccer fields: 1 (10%) · Cafeteria: 1 (10%) · Library: 1 (10%).'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What can you do in your practices?',
    academicObjective: 'Evaluate culinary skills applied in practical kitchen workshops and real-world simulations.',
    category: 'Culinary Practice & Workshops',
    summaryInsight: 'Cook, plate and prepare new dishes: 4 (40%) · Explore creativity & cultural roots: 2 (20%) · Cook international/Colombian recipes: 2 (20%) · Try different techniques: 1 (10%) · Real-world situations: 1 (10% - Professor).'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What can you do to get better in your career?',
    academicObjective: 'Measure self-improvement strategies, technical practice, and lifelong professional development.',
    category: 'Skills Improvement & Self-Learning',
    summaryInsight: 'Practice at home: 3 (30%) · Study beyond class & external sources: 3 (30%) · Learn English: 2 (20%) · Tutorials & teacher feedback: 1 (10%) · Continuous professional development: 1 (10% - Professor).'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What do you dislike about your career/being a teacher?',
    academicObjective: 'Identify academic difficulties, quantitative/math challenges, and pedagogical concerns.',
    category: 'Academic Challenges & Dislikes',
    summaryInsight: 'Mathematics, numbers & accounting: 3 (30%) · Budgeting class: 1 (10%) · Baking: 1 (10%) · Teacher comprehension/hardness: 2 (20%) · Cutting: 1 (10%) · Nothing / Loves career & teaching: 2 (20%).'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Would you like to go on a school exchange, if so, where would you go?',
    academicObjective: 'Map international academic exchange targets for gastronomic and culinary arts studies.',
    category: 'International Exchange Destinations',
    summaryInsight: 'France: 2 (20%) · Spain: 2 (20%) · Mexico: 2 (20%) · Europe & Peru: 1 (10% - Professor) · Italy/Brazil: 1 (10%) · Argentina: 1 (10%) · Norway & Spain: 1 (10%) · No / Prefers Colombia: 1 (10%).'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'What would you like to work in after you graduate?',
    academicObjective: 'Identify post-graduation employment goals across restaurants, pastry shops, cruises, and hotels.',
    category: 'Career Practice & Employability',
    summaryInsight: 'Own restaurant or pastry shop: 3 (30%) · Hotel industry abroad / local: 3 (30%) · Cruise ships internationally: 2 (20%) · Four-star restaurant: 1 (10%) · Hotel industry: 1 (10% - Professor).'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'Have you ever seen Ugus?',
    academicObjective: 'Evaluate visibility and encounters with campus mascot Ugus around gastronomy facilities.',
    category: 'Campus Mascot Ugus Encounters',
    summaryInsight: 'Yes, seen near kitchens, gastronomy area & parking lots: 6 (60%) · No / Haven’t seen him: 4 (40%).'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Would you study another career?',
    academicObjective: 'Explore multidisciplinary vocations and alternative career aspirations.',
    category: 'Alternative Careers & Disciplines',
    summaryInsight: 'No / 100% Loves Gastronomy: 4 (40%) · Psychology: 2 (20% - Valery & Prof. Katherine) · Software / Tech: 1 (10%) · Accounting: 1 (10%) · Food Engineering: 1 (10%) · Criminology: 1 (10%).'
  }
];

export const initialStudents: InterviewedStudent[] = [
  // CINE Y TELEVISIÓN - Official Real Survey Sample (8 Verified Students, 0 Fictitious)
  {
    id: 'cin-1',
    name: 'Garzón Prieto Eily Catalina',
    studentCode: '720261009',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Photography allows us to capture the visual soul of any story and freeze emotion through light.',
    audioTime: '03:45 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Photography. I love mastering camera composition, working with lighting angles, and expressing deep emotions through still and moving images.',
      2: 'Photography. It is the core subject where we experiment with studio flashes, portraiture, and natural light on campus.',
      3: 'The green area of the campus. It gives us an inspiring outdoor environment to relax and shoot natural light scenes.',
      4: 'RCN and Caracol TV. We can participate in audiovisual production crews and gain experience inside Colombia’s leading television networks.',
      5: 'Study and prepare more. Continuous technical reading, watching classic cinema, and training on professional cameras is essential.',
      6: 'Take care of its habitat. Ensuring the campus gardens and green spaces are clean and protected so Hugos can live peacefully.',
      7: 'Yes, to the USA and Hollywood. Visiting California studios would be a dream to understand high-budget international cinematography.',
      8: 'In television, film, and international streaming platforms like Netflix where cinematic storytelling reaches global audiences.'
    }
  },
  {
    id: 'cin-2',
    name: 'Menez Vargas José Guillermo',
    studentCode: '720261033',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-violet-700',
    highlightQuote: 'Photoshop and digital color grading bring the director’s visual vision to life with precision.',
    audioTime: '03:52 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Photography. The technical craft of camera lenses, aperture controls, and capturing cinematic frames.',
      2: 'Photoshop. Learning digital image manipulation, layer compositing, and visual color treatment is amazing.',
      3: 'The green area of the campus. The open gardens and lawns provide a fresh space to brainstorm film ideas between classes.',
      4: 'Both together: RCN and Caracol TV. Entering both national networks to work in studio filming and live broadcasting.',
      5: 'Study and prepare more. Practicing editing daily and expanding our theoretical knowledge of audiovisual aesthetics.',
      6: 'Take care of its habitat. Keeping food bowls clean and never leaving waste in the green areas where he walks.',
      7: 'Yes, to Mexico. Mexico has an incredible cinematic heritage, top television production houses, and world-class directors.',
      8: 'In television broadcast, film productions, and digital series created for Netflix and international networks.'
    }
  },
  {
    id: 'cin-3',
    name: 'Martínez Enríquez Juan David',
    studentCode: '720261037',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-purple-600',
    highlightQuote: 'Narrative Workshop taught me that a film without a compelling script is just an empty sequence of frames.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Photography. Understanding visual framing, shadow contrasts, and cinematic focal length to communicate dramatic tension.',
      2: 'Narrative Workshop. Writing character backstories, creating three-act screenplay structures, and analyzing narrative conflict.',
      3: 'The green area of the campus. It is by far the most peaceful spot at UniAgustiniana for script reading and reflection.',
      4: 'RCN and Caracol TV. Assisting television directors, learning floor management, and handling studio camera operations.',
      5: 'Study and prepare more. Reading screenplays in English, analyzing foreign films, and sharpening our narrative instincts.',
      6: 'Haven’t seen it around my classroom areas, but if I encounter Hugos I will treat him with gentle care.',
      7: 'Yes, to the USA and Hollywood. Immersing myself in Los Angeles film schools to master Hollywood screenwriting and directing.',
      8: 'In television, independent film festivals, and streaming content catalogs on Netflix.'
    }
  },
  {
    id: 'cin-4',
    name: 'López García Ana María',
    studentCode: '720261028',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-fuchsia-600',
    highlightQuote: 'UniAgustiniana’s campus spaces provide the perfect natural soundstages for shooting student short films.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The university’s spaces. The audiovisual studios, editing suites, and campus grounds give us practical creative freedom.',
      2: 'Photoshop. Developing visual posters, concept art, and matte painting backgrounds for audiovisual projects.',
      3: 'The green area of the campus. It has great natural lighting, trees, and quiet spaces where students connect.',
      4: 'Both together: RCN and Caracol TV. Gaining professional credits across both major Colombian commercial television channels.',
      5: 'Study and prepare more. Taking specialized technical workshops and continuing our self-directed practice.',
      6: 'Take care of its habitat. Making sure nobody disturbs him when he is resting and respecting his territory.',
      7: 'Yes, to the United States (Hollywood). Experiencing the epicenter of global cinema and learning studio organization.',
      8: 'In television series, documentary filmmaking, and streaming productions on Netflix.'
    }
  },
  {
    id: 'cin-5',
    name: 'Marulanda Durán Thomas Samuel',
    studentCode: '720261015',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Shooting with natural lighting on campus taught me how to maximize visual storytelling with minimal gear.',
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Photography. The passion of capturing authentic human moments with cinematic depth of field.',
      2: 'Photography. Learning optical mechanics, lens choices, and shutter speeds to convey emotion.',
      3: 'The green area of the campus. The central green spaces bring nature right into our university life.',
      4: 'RCN and Caracol TV. Working as camera assistants, boom operators, or video playback coordinators on set.',
      5: 'Study and prepare more. Watching masterclasses online, reading film theory, and shooting on weekends.',
      6: 'Take care of its habitat. Ensuring clean water is accessible in the courtyards and not feeding him toxic junk food.',
      7: 'Yes, to Mexico. Learning from their vibrant film culture, contemporary documentary schools, and cinematographers.',
      8: 'In television productions, national feature films, and digital platforms like Netflix.'
    }
  },
  {
    id: 'cin-6',
    name: 'Castro Castillo John Sebastian',
    studentCode: '720261002',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-violet-800',
    highlightQuote: 'The green areas are the best spot to gather with our film crew and map out storyboard sequences.',
    audioTime: '04:02 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The university’s spaces. Having access to dedicated camera gear, lighting kits, and university studio sets.',
      2: 'Narrative Workshop. Crafting believable dialogue, narrative pace, and dramatic structure for fiction shorts.',
      3: 'The green area of the campus. 100% my favorite part—it is spacious, breezy, and great for crew meetings.',
      4: 'Both together: RCN and Caracol TV. Getting involved in multi-camera television drama and daily news operations.',
      5: 'Study and prepare more. Deepening our scriptwriting craft, camera techniques, and audiovisual grammar.',
      6: 'Haven’t seen it around my usual campus routes, but respecting campus animal life is always a priority.',
      7: 'No. Right now I prefer staying in Colombia to focus on national stories and local film productions.',
      8: 'In television, independent cinema in Colombia, and international streaming networks like Netflix.'
    }
  },
  {
    id: 'cin-7',
    name: 'Viñas Moreno Nicolás',
    studentCode: '720261019',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-purple-700',
    highlightQuote: 'Post-production and VFX are where the visual magic truly takes form and reaches international standards.',
    audioTime: '04:15 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Photography. The power to control how light interacts with the subject and shapes visual mood.',
      2: 'Photoshop. Digital image retouching, color grading LUTs, and creating concept visuals for film projects.',
      3: 'The green area of the campus. It gives us space to breathe between long hours inside dark editing suites.',
      4: 'RCN and Caracol TV. Performing video editing, color correction, and broadcast post-production workflows.',
      5: 'Other / practical experience. Gaining direct hands-on shooting experience and producing independent short films.',
      6: 'Take care of its habitat. Protecting campus green spaces and making sure he is safe from moving vehicles.',
      7: 'Yes, to the USA and Hollywood. Visiting California VFX and production companies to learn industry pipelines.',
      8: 'In Canada, working inside international visual effects, animation, and digital film production studios.'
    }
  },
  {
    id: 'cin-8',
    name: 'Pacheco Parra Samuel Juan',
    studentCode: '720261027',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-fuchsia-700',
    highlightQuote: 'Cameras are our instruments to tell the stories of our communities and document reality.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The university’s spaces. The campus courtyards, editing rooms, and sound studios that support our training.',
      2: 'Photography. Developing a sharp eye for visual details, framing composition, and street photography.',
      3: 'The green area of the campus. It is peaceful, open, and provides natural backdrops for camera exercises.',
      4: 'Both together: RCN and Caracol TV. Working across both major media networks in television broadcasting.',
      5: 'Study and prepare more. Reading specialized film books, practicing lighting, and mastering camera gear.',
      6: 'Haven’t seen it yet on my daily commute between classes.',
      7: 'No. I want to build a solid production portfolio in Bogotá before considering an exchange abroad.',
      8: 'In television broadcasting, commercial cinema, and streaming series on Netflix.'
    }
  },
  // ARQUITECTURA - Official Real Survey Sample (8 Verified Students, 0 Fictitious)
  {
    id: 'arch-1',
    name: 'Alejandra Olaya',
    studentCode: '2820261020',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'Designing spaces allows us to transform human everyday life through proportion, light, and architectural function.',
    audioTime: '03:42 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Creation and design of spaces. I love how architecture combines technical blueprints with creative spatial experiences to improve how people live.',
      2: 'Architectural Workshop (Taller de Arquitectura). It is where we experiment with spatial concepts, structural models, and receive constructive critique.',
      3: 'Teamwork / sharing ideas with classmates. Working together in the workshop helps us solve complex design challenges and learn from each other.',
      4: 'Improve organization, time management and complete projects on time. Managing long drafting deadlines and model submissions requires strict planning.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. We must treat our cutting tables, drafting desks, and model workshops with great respect.',
      6: 'Yes, to Spain. Spain has an outstanding balance of historic preservation and cutting-edge contemporary urban architecture in Barcelona and Madrid.',
      7: 'In architecture studios and architectural firms, working on public and residential projects from conceptualization to final detail.'
    }
  },
  {
    id: 'arch-2',
    name: 'Andrés Fernández',
    studentCode: '2820261005',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'Architecture shapes the cities of tomorrow; balancing structural safety with artistic expression is our mission.',
    audioTime: '04:05 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Creation and design of spaces. I am passionate about creating functional, sustainable buildings that integrate harmoniously into the urban landscape.',
      2: 'Architectural Workshop. Translating two-dimensional sketches into physical models and volumetric studies is the core of our learning process.',
      3: 'Teamwork / sharing ideas with classmates. Brainstorming structural solutions together in the drafting rooms fosters creative innovation.',
      4: 'Improve organization, time management and complete projects on time. Setting daily milestones for technical drafting and render deliveries.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. Using drafting equipment safely and keeping workshop machinery in good condition.',
      6: 'Yes, to the United States. Exploring high-rise structural engineering and sustainable commercial architecture in Chicago and New York.',
      7: 'In construction companies and large architecture firms, coordinating BIM models and supervising on-site building execution.'
    }
  },
  {
    id: 'arch-3',
    name: 'Angie Rueda',
    studentCode: '2820261035',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'Representation and media give voice to architectural concepts through precise drawings and digital visualization.',
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Creation and design of spaces. Bringing spatial ideas into physical reality to solve human spatial and community living needs.',
      2: 'Representation and Media (Representación y Medios). Developing digital rendering skills, axonometric perspectives, and architectural visual storytelling.',
      3: 'Teamwork / sharing ideas with classmates. The camaraderie during late studio hours and group model construction makes university life special.',
      4: 'Practice architectural drawing and techniques. Refining freehand sketching, axonometric geometry, and digital drafting tools like Revit and AutoCAD.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. Protecting cutting mats and keeping drafting boards clean for everyone.',
      6: 'Yes, to Spain. Studying European architectural typologies and sustainable Mediterranean spatial design.',
      7: 'In residential, commercial, or interior design, as well as collaborative architecture studios focusing on bespoke spaces.'
    }
  },
  {
    id: 'arch-4',
    name: 'Sara Vargas',
    studentCode: '2820261021',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Digital representation connects our architectural imagination with physical structure and tactile materials.',
    audioTime: '03:25 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Creation and design of spaces. The ability to envision empty space and transform it into a meaningful environment for people.',
      2: 'Representation and Media. Learning digital drawing software, 3D modeling, and producing clean graphical sheets.',
      3: 'Teamwork / sharing ideas with classmates. Exchanging constructive feedback with peers pushes our designs to higher quality.',
      4: 'Practice architectural drawing and techniques. Spending extra time practicing perspective drafting and line-weight hierarchy.',
      5: 'Keep spaces clean and tidy / don’t leave trash. Always clearing scraps of cardboard, foam board, and adhesive residues after model making.',
      6: 'Yes, to Japan. I admire Japanese minimalist architecture, seismic wood construction, and spatial harmony with nature.',
      7: 'In architecture studios and residential or interior design, combining clean spatial volumes with natural lighting.'
    }
  },
  {
    id: 'arch-5',
    name: 'Anakarina Rojas',
    studentCode: '2820261039',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Urban projects allow us to understand how architecture impacts whole communities and public infrastructure.',
    audioTime: '03:55 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Usefulness, challenges and art. Architecture is not just aesthetic; it solves real social challenges through artistic and technical discipline.',
      2: 'Urban Project (Proyecto Urbano). Analyzing city density, transit networks, public plazas, and social equity in urban master planning.',
      3: 'Architecture study / studio and making models. Working inside the dedicated architecture workshops surrounded by models and tools.',
      4: 'Study more, read about architecture and pay attention to details. Reading international architectural theory and analyzing classic structural solutions.',
      5: 'Take care of classrooms, furniture, facilities and use materials responsibly. Using modeling cutters responsibly and turning off equipment when finished.',
      6: 'Yes, to Germany. Experiencing the Bauhaus architectural tradition, ecological building standards, and urban regeneration.',
      7: 'In urban planning / public spaces design, collaborating with governmental agencies and architecture firms on sustainable cities.'
    }
  },
  {
    id: 'arch-6',
    name: 'Juliana Rojas',
    studentCode: '2820261010',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Understanding architectural history provides the theoretical foundation to build meaningful contemporary structures.',
    audioTime: '04:12 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Creation and design of spaces. I love conceiving spatial geometries that inspire people and respect their natural surroundings.',
      2: 'Theory and History (Teoría e Historia). Discovering how architectural movements evolved across centuries and influenced civilization.',
      3: 'Architecture study / studio and making models. Spending hours crafting scaled cardboard and wood models to test structural lighting.',
      4: 'Practice architectural drawing and techniques. Honing manual and computer-aided drafting techniques to convey exact technical specifications.',
      5: 'Keep spaces clean and tidy / don’t leave trash. Maintaining spotless drafting tables and sorting recyclable cardboard materials properly.',
      6: 'Yes, to Italy. Immersing myself in classical Renaissance architecture, urban conservation, and Italian design heritage.',
      7: 'In architecture studios / architecture firms, as well as historic restoration and urban planning.'
    }
  },
  {
    id: 'arch-7',
    name: 'Sara Muñoz',
    studentCode: '2820261014',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'Technological systems and bioclimatic design are turning architecture into an environmentally conscious discipline.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Usefulness, challenges and art. The rigorous intellectual challenge of combining structural physics with artistic elegance.',
      2: 'Technological Project (Proyecto Tecnológico). Understanding construction materials, bioclimatic ventilation, and building technology.',
      3: 'Learning new things every day. Discovering innovative construction methodologies and spatial theories in every single class.',
      4: 'Improve organization, time management and complete projects on time. Managing fabrication schedules so model deliveries are never rushed.',
      5: 'Keep spaces clean and tidy / don’t leave trash. Leaving workshops in pristine condition for the next group of students.',
      6: 'Yes, to France. Visiting contemporary Parisian architectural landmarks and historical bioclimatic projects.',
      7: 'In construction companies and architecture firms, overseeing technological systems and building installations.'
    }
  },
  {
    id: 'arch-8',
    name: 'Danna Monroy',
    studentCode: '2820261030',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'Architecture is an artistic responsibility: we build the environments where future generations will grow.',
    audioTime: '03:48 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Usefulness, challenges and art. Tackling architectural problems with artistic creativity and civic purpose.',
      2: 'Architectural Workshop (Taller de Arquitectura). Developing volumetric scale studies and integrating technical drawings with physical models.',
      3: 'Learning new things every day / sharing ideas with peers. Expanding our world view through lectures, workshops, and campus dialogue.',
      4: 'Study more, read about architecture and pay attention to details. Researching architectural case studies, detailing joints, and mastering scale.',
      5: 'Respect other students and be responsible with resources. Supporting peers during critiques and avoiding wasteful consumption of studio materials.',
      6: 'Yes, to Spain. Studying contemporary European urban architecture and participating in international design workshops in Madrid.',
      7: 'In architecture studios / architecture firms, as well as residential and interior design projects.'
    }
  },
  // INGENIERÍAS - Official Real Survey Sample (8 Verified Students)
  {
    id: 'eng-1',
    name: 'David Santiago Mesa Miranda',
    studentCode: '2620261012',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'Analizar todo lo que lleva un software por detrás es lo que más me apasiona de la ingeniería de sistemas.',
    audioTime: '03:42 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Analizar todo lo que lleva un software por detrás.',
      2: 'Analizar todo lo que lleva un software por detrás.',
      3: 'Arquitectura de software.',
      4: 'Las dinámicas.',
      5: 'Los horarios.',
      6: 'Descansar.',
      7: 'Mas exigencia en algunas clases.',
      8: 'segundo',
      9: 'No molestándolo.',
      10: 'España.',
      11: 'En europa.',
      12: 'Cine y televisión.'
    }
  },
  {
    id: 'eng-2',
    name: 'Adrian Felipe Ballares Angel',
    studentCode: 'P2220262004',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'I can improve my learnings programando and try to make more circuits and projects in robotics.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The mechanic and electrónicos part.',
      2: 'The mechanic and electrónicos part.',
      3: 'Programing.',
      4: 'The tail.',
      5: 'Sleep late.',
      6: "I'm can see more World.",
      7: 'I can improve my learnings programando and try to make more circuits and projects.',
      8: '8 semester.',
      9: 'No interactin whit him.',
      10: "I'm want exange to Alemania.",
      11: 'In any industry.',
      12: 'I think i can study software development or some carrer that can improve my avilities in mechatronics or entrepreneurship.'
    }
  },
  {
    id: 'eng-3',
    name: 'Sebastián Molano',
    studentCode: 'P2220262017',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Me visualizo en empresas de tecnología y software creando aplicaciones y plataformas innovadoras.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'la parte que veremos sobre programación.',
      2: 'la parte que veremos sobre programación.',
      3: 'introducción a la ingeniería.',
      4: 'los campos verdes.',
      5: 'no hay nada realmente que no me gusta.',
      6: 'pasear con mis compañeros dentro de la uni.',
      7: 'realmente nada, todo está bien hecho.',
      8: 'jmm, creo que 4 o 5 semestre.',
      9: 'En mi experiencia en el campus, el cuidado de Ugus y de la fauna silvestre de la Uniagustiniana depende de acciones muy puntuales: no alimentarlos con comida procesada para no alterar su dieta, mantener la distancia sin acorralarlos ni estresarlos, hacer un uso correcto de las canecas de basura para evitar que busquen residuos en las zonas verdes y reportar a Bienestar Universitario o seguridad si se observa algún animal herido o en riesgo.',
      10: 'Sí, me encantaría. Me gustaría hacer un intercambio en México o España, ya que cuentan con universidades con excelentes facultades de tecnología. Sería una gran oportunidad para ampliar mi red de contactos, adaptarme a nuevas metodologías de estudio y fortalecer mi perfil profesional antes de graduarme.',
      11: 'Me visualizo ejerciendo mi career en empresas de tecnología y software, creando aplicaciones, plataformas y soluciones digitales innovadoras que faciliten los procesos de las personas y las organizaciones. Asimismo, me interesa mucho el sector financiero y la banca, ya que es un campo que exige altos estándares de seguridad, manejo de bases de datos y sistemas transaccionales robustos. En ambos sectores puedo aportar desarrollando software de alta calidad, optimizando procesos y garantizando la eficiencia tecnológica que estas industrias necesitan.',
      12: 'no creo, si lo haría estudiaría algo para aprender un idioma como inglés o otro idioma.'
    }
  },
  {
    id: 'eng-4',
    name: 'Mateo Camacho González',
    studentCode: 'P3220262010',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Mejoraría el enfoque hacia las tecnologías de hoy en día para conectar el pensum con la industria actual.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'La gran variedad de temas y las distintas ramas que me puedo especializar y dedicarme para poder ejercerla.',
      2: 'La gran variedad de temas y las distintas ramas que me puedo especializar y dedicarme para poder ejercerla.',
      3: 'Mi materia favorita es cálculo integral.',
      4: 'Mi parte favorita de la universidad es la biblioteca ya que es tranquila y muy útil con la información.',
      5: 'Lo que no me gusta de ser estudiante es que aveces se acumula demasiado los trabajos porque los dejan el mismo día incluso para el mismo día de entrega.',
      6: 'Aprender de las personas que me rodean, un poco de sus costumbres y por supuesto disfrutar de las cosas nuevas que miraré y aprenderé.',
      7: 'Mejoraría un poco más el enfoque a las tecnologías de hoy en día ya que hay algunas cosas en el pensum que hoy en día casi no se usan y cambiarlas por algo más actual.',
      8: 'En cuarto semestre.',
      9: 'Tomándole fotos sin flash, no tocándolo y tampoco dejando algún residuo en el suelo que pueda afectarle.',
      10: 'Si, si me gustaría en España realizar el intercambio.',
      11: 'En alguna empresa tecnológica sea a nivel nacional como internacional.',
      12: 'Podría estudiar Ingeniería en Telecomunicaciones o Desarrollo especializado en software ya que son bastantes complementarias y similares con la Ingeniería en sistemas.'
    }
  },
  {
    id: 'eng-5',
    name: 'Santiago Torres',
    studentCode: 'P3220262022',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'La flexibilidad a la hora de resolver problemas mediante el pensamiento algorítmico y matemático.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'La flexibilidad a la hora de resolver problemas.',
      2: 'La flexibilidad a la hora de resolver problemas.',
      3: 'Calculo.',
      4: 'El saco.',
      5: 'La clase de algoritmia.',
      6: 'Compartir mi cultura con la gente.',
      7: 'Cursos de muchos lenguajes.',
      8: 'Tercero.',
      9: 'No dandole comida procesada.',
      10: 'Si en Brasil o Argentina.',
      11: 'Google, Ciisco.',
      12: 'Si seria ingeniería mecatrónica.'
    }
  },
  {
    id: 'eng-6',
    name: 'Diego Alian',
    studentCode: 'P3220251033',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Programming is my favorite subject; building functional software inspires continuous learning.',
    audioTime: '03:05 min',
    perceivedEnglishLevel: 'A1 - Beginner',
    answers: {
      1: 'My favorite subject is programming.',
      2: 'My favorite subject is programming.',
      3: 'I like the Green áreas on campus.',
      4: "I don't like midterms.",
      5: 'Playing volleyball.',
      6: 'Studying at home.',
      7: 'During the three few semestre.',
      8: 'Not scaring him.',
      9: 'Yes, in spain.',
      10: 'At a techonology Center.',
      11: 'No.',
      12: 'No.'
    }
  },
  {
    id: 'eng-7',
    name: 'Juan David Bautista',
    studentCode: 'P3220251023',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '3rd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'Me gusta aprender y reforzar la algoritmia y programación para crear mi propia empresa en la industria.',
    audioTime: '03:25 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Me gusta aprender y reforzar sobre la programacion.',
      2: 'Me gusta aprender y reforzar sobre la programacion.',
      3: 'Algoritmia y programación.',
      4: 'La biblioteca.',
      5: 'No tengo ningún disgusto hasta el momento.',
      6: 'Aveces jugamos y otra veces estudiamos.',
      7: 'Tener más disciplina y dejar la pereza.',
      8: 'En ninguno.',
      9: 'Aplicando los valores de la misma y pues respetandola.',
      10: 'Si, a Chile.',
      11: 'En varias empresas industriales y la propia.',
      12: 'No lo creo.'
    }
  },
  {
    id: 'eng-8',
    name: 'Alexis',
    studentCode: '2620261037',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-rose-600',
    highlightQuote: "What I like most about my career is that it's very fun and has a lot of variety in work fields.",
    audioTime: '03:35 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: "What I like most about my career is that it's very fun and has a lot of variety in work fields.",
      2: "What I like most about my career is that it's very fun and has a lot of variety in work fields.",
      3: 'I like differential calculus.',
      4: 'The courts.',
      5: "Nothing, Everything's fine.",
      6: 'Talking to my friends.',
      7: 'Class hours.',
      8: 'En ninguno.',
      9: 'Do not take flash photos.',
      10: 'Not for now.',
      11: 'I could practice on Google.',
      12: 'Chemical Engineering.'
    }
  },

  // HOSPITALITY AND TOURISM (HOTELERÍA Y TURISMO) - Official Real Survey Sample (8 Verified Students)
  {
    id: 'hosp-1',
    name: 'Rubio Sánchez Juan Martín',
    studentCode: '1220262015',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'Meeting people from diverse cultures and learning etiquette and service standards in ESUNA is what inspires me most.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Connecting with people, discovering different cultures and exploring new places.',
      2: 'Etiquette and table service elective.',
      3: 'ESUNA specialized hospitality labs and kitchen facilities.',
      4: 'Providing excellent customer service and attending to hotel guests directly.',
      5: 'Ignoring protocol rules or acting without supervisor authorization.',
      6: 'Studying harder and reinforcing theoretical foundation.',
      7: 'Listen to others attentively to anticipate what guests require.',
      8: 'Yes, an exchange program in Spain or Canada.',
      9: 'Business Administration, to strengthen hotel management competencies.',
      10: 'In international hotel chains and working abroad.'
    }
  },
  {
    id: 'hosp-2',
    name: 'Osorio Garzón Juan Pablo',
    studentCode: '1220261010',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'Learning table service protocol and tourism theory gives us direct operational readiness for international hotels.',
    audioTime: '02:50 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Learning about new cultures, international destinations and interacting with people.',
      2: 'Tourism Theory and destination development.',
      3: 'The green zone on campus, it is peaceful for study groups.',
      4: 'Hotel and tourism operational activities, room management and front desk.',
      5: 'Violating institutional regulations or taking decisions without authorization.',
      6: 'Improving my English and communication skills for international guests.',
      7: 'Be a good teammate and support colleagues under high workload.',
      8: 'Yes, I would love to go to Spain or Mexico.',
      9: 'Marketing, to promote eco-tourism destinations.',
      10: 'Working abroad in travel agencies or hotel chains.'
    }
  },
  {
    id: 'hosp-3',
    name: 'Lugo Rojas Juan Nicolás',
    studentCode: '1220261013',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'Understanding labor legislation and food safety is essential to manage luxury hospitality businesses.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Elective classes and practical interactive workshops.',
      2: 'Labor Legislation applied to tourism contracts.',
      3: 'ESUNA simulation spaces and practical reception areas.',
      4: 'Organization, administrative paperwork and booking operations.',
      5: 'Neglecting assigned academic and training responsibilities.',
      6: 'Greater commitment and responsibility with deadlines and coursework.',
      7: 'Being kind and respectful with every visitor and colleague.',
      8: 'Yes, an exchange to the United States or Costa Rica.',
      9: 'No, I am fully focused on Hospitality and Tourism.',
      10: 'In international airports and major hotel companies.'
    }
  },
  {
    id: 'hosp-4',
    name: 'Gamboa Melo Damar Julián',
    studentCode: '1220261029',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'Organizing tourism activities and serving people with genuine warmth is what hospitality is all about.',
    audioTime: '03:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Organizing group activities, recreational tours and travel plans.',
      2: 'Elective etiquette, table service and protocol.',
      3: 'The university campus and spending time with my classmates.',
      4: 'Assisting guests, guiding travelers and solving customer inquiries.',
      5: 'Sleeping on shift or leaving early to go home without permission.',
      6: 'Improving professional and practical front-desk skills.',
      7: 'Guest care and experience, making sure every need is met.',
      8: 'Yes, Mexico or the Dominican Republic.',
      9: 'Languages / Foreign Languages, to expand fluency.',
      10: 'In luxury resorts and establishing my own tourism business.'
    }
  },
  {
    id: 'hosp-5',
    name: 'Martínez Otálora Karen Dayana',
    studentCode: '1220242015',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'Tourism and hotel management combined with bilingual customer service opens doors anywhere in the world.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Understanding different cultures, geographic regions and human diversity.',
      2: 'Tourism & Hotel Management.',
      3: 'The green zone, relaxing under the trees between classes.',
      4: 'Hotel and tourism operations, guiding visitors and coordination.',
      5: 'Disobeying supervisor instructions or breaking hotel policies.',
      6: 'Dedicate more hours to study and reading international hospitality case studies.',
      7: 'Listen to others and empathize with guest feedback.',
      8: 'Yes, an exchange to Spain or Mexico.',
      9: 'No, I want to complete my degree and specialize in ecotourism.',
      10: 'Working abroad in corporate hotel chains or international travel agencies.'
    }
  },
  {
    id: 'hosp-6',
    name: 'Rodríguez Villamarín Nicole Vanessa',
    studentCode: '1220261006',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Etiquette and food safety protocols in ESUNA allow us to deliver world-class guest experiences.',
    audioTime: '02:45 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The fun elective courses and practical training dynamics.',
      2: 'Elective etiquette and formal dining protocol.',
      3: 'ESUNA simulation restaurant and bar laboratories.',
      4: 'Customer service, welcoming arrivals and providing guidance.',
      5: 'Acting arbitrarily without operational authorization.',
      6: 'Improving English proficiency to attend international tourists confidently.',
      7: 'Be kind and respectful to all people regardless of background.',
      8: 'Yes, Canada or the United States.',
      9: 'Marine Biology, because of my love for coastal nature and marine life.',
      10: 'Work abroad in multinational tourism companies and cruise lines.'
    }
  },
  {
    id: 'hosp-7',
    name: 'López Sánchez Sharon Julieth',
    studentCode: '1220261011',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-purple-600',
    highlightQuote: 'Learning food safety standards and managing tourism services gives us the foundation to lead teams.',
    audioTime: '03:20 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The variety of classes, from geography and management to gastronomy.',
      2: 'Food Safety and sanitary standards in culinary preparation.',
      3: 'The academic experience and knowledge gained from professors.',
      4: 'Administrative management, logistical scheduling and inventory.',
      5: 'I am not sure yet about all specific workplace restrictions.',
      6: 'More dedication, academic effort and continuous reading.',
      7: 'Active listening and showing solidarity with teammates.',
      8: 'Yes, Brazil or Puerto Rico.',
      9: 'Business Administration, as a dual degree option.',
      10: 'At El Dorado international airport or global hotel companies.'
    }
  },
  {
    id: 'hosp-8',
    name: 'Chaguala Giraldo Karen Lucía',
    studentCode: '1220261024',
    career: 'Hospitality and Tourism (Hotelería y Turismo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Tagaste Campus',
    age: 19,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Customer service and cultural exchange are the core of our profession; ESUNA prepares us thoroughly.',
    audioTime: '03:00 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'Meeting people, sharing diverse cultural traditions and discovering places.',
      2: 'Elective etiquette and service protocol.',
      3: 'The green areas of campus, surrounded by nature.',
      4: 'Direct customer service, assisting guests and intercultural learning.',
      5: 'I do not have a specific restriction answer at the moment.',
      6: 'Greater personal commitment, discipline and proactive attitude.',
      7: 'Be a collaborative teammate and foster harmonious environment.',
      8: 'Not for now, though Spain or Mexico would be great in later semesters.',
      9: 'No, I prefer to specialize within hotel and tourism operations.',
      10: 'Hotels, resorts and international travel destinations abroad.'
    }
  },

  // GASTRONOMY (GASTRONOMÍA) - Official Real Survey Sample (9 Students + 1 Faculty Professor)
  {
    id: 'gas-1',
    name: 'Alexandra Corte Díaz',
    studentCode: '3020251061',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Suba Campus',
    age: 19,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'The thing I like the most in my career is pastry making; my dream is opening my own pastry shop.',
    audioTime: '03:15 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most in my career is pastry making.',
      2: 'My favorite subject is bread making.',
      3: 'I like the barista classroom.',
      4: 'We can explore our creativity and out roots.',
      5: 'I could learn more maths.',
      6: "I don't like the math.",
      7: "I'd like to do it in France.",
      8: "I'd like to have my own pastry shop.",
      9: "I haven't seen Ugus.",
      10: 'Yes, I love criminology, I would study that.'
    }
  },
  {
    id: 'gas-2',
    name: 'Maria Camila Alonso',
    studentCode: '3020251048',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Suba Campus',
    age: 20,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'I like bread making the most, and practicing at home is how I get better every day.',
    audioTime: '02:50 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'I like the bread making the most.',
      2: 'My favorite subject is mixeology.',
      3: 'I like the green area the most.',
      4: 'In my practices I can make bread and different kinds of dishes.',
      5: 'The thing I could do to get better in my career is practicing at my house.',
      6: 'The thing I dislike about my career is the cost accounting professor.',
      7: 'Yes, I would like to go to Mexico in a school Exchange.',
      8: 'I would like to work in a pastry shop.',
      9: 'Yes, I have seen Ugus near the parking lots.',
      10: 'Yes, I could study accounting.'
    }
  },
  {
    id: 'gas-3',
    name: 'Gonzalez Vargas Esteban',
    studentCode: '3020251038',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Suba Campus',
    age: 20,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'The thing I like the most is experimenting with food and cooking traditional Colombian recipes.',
    audioTime: '03:30 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most is experimenting with the food.',
      2: 'My favorite subject is baking.',
      3: 'My favorite part of the campus is the Office of Spirituality (ESUNA).',
      4: 'We can cook Colombian recipes.',
      5: 'I could ask questions to the teachers, go to tutorials and practice at home.',
      6: 'I dislike having to work with numbers.',
      7: 'Yes, I would like to go to France.',
      8: 'I would like to work in a hotel abroad.',
      9: 'Yes, I have seen it a lot of times around the kitchens.',
      10: "Yes, I'd like to study software, because I also like tech."
    }
  },
  {
    id: 'gas-4',
    name: 'Santiago Millan Castiblanco',
    studentCode: '3020242010',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Suba Campus',
    age: 21,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'What I like the most about my career is cooking and learning international food; I love my career.',
    audioTime: '03:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'What I like the most about my career is cooking and learning.',
      2: 'My favorite subject is budgeting.',
      3: 'My favorite part of the campus are the soccer fields.',
      4: 'In our practices we could cook international food.',
      5: 'I could learn English.',
      6: 'I dislike baking.',
      7: 'Yes, I would like to go on a school exchange to Argentina.',
      8: 'I would love to work in a restaurant after graduating.',
      9: 'Yes, I have seen Ugus near the gastronomy area.',
      10: 'No, I love my career.'
    }
  },
  {
    id: 'gas-5',
    name: 'David Felipe Caceres',
    studentCode: '3020242045',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Suba Campus',
    age: 21,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'What I like the most about my career is that it gives me peace of mind to create, plate and learn.',
    audioTime: '02:40 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'What I like the most about my career is that it gives me peace of mind.',
      2: 'My favorite subject is Latin American cuisine.',
      3: 'My favorite area in the campus is the cafeteria.',
      4: 'In our practices we can create, plate and learn.',
      5: 'Practice at home and pay attention to our classes.',
      6: 'I dislike that some teachers are hard to understand.',
      7: "No, I wouldn't go on a school exchange, I love my country.",
      8: 'I would work in a four star restaurant after graduating.',
      9: "No, I haven't seen Ugus.",
      10: "No I wouldn't study another thing, I love gastronomy."
    }
  },
  {
    id: 'gas-6',
    name: 'Loren Sofia Salazar',
    studentCode: '3020242022',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Suba Campus',
    age: 20,
    avatarColor: 'bg-purple-600',
    highlightQuote: 'Learning new culinary techniques and mixology allows us to innovate and create on cruises outside Colombia.',
    audioTime: '03:45 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I like the most about my career is learning new techniques.',
      2: 'My favorite subject is mixology and drinks.',
      3: 'My favorite area of the university is the library.',
      4: 'In our practices we could innovate and create.',
      5: 'I could learn English and take additional subjects with a greater focus on gastronomy.',
      6: 'I dislike the hard some classes can be.',
      7: 'Yes, I would like to go on a school exchange to Italy or Brazil.',
      8: 'I would like to work on a cruise outside of Colombia.',
      9: "I haven't seen Ugus yet.",
      10: 'Yes, I would like to study Food Engineering.'
    }
  },
  {
    id: 'gas-7',
    name: 'Valery Yohana Pulido',
    studentCode: '3020242015',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Suba Campus',
    age: 20,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Gastronomy clears my mind and teaches me creativity; I would love to work on cruises after graduating.',
    audioTime: '03:20 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most about my career is clearing my mind and learning to be creative.',
      2: 'My favorite subjects are baking, Latin American cuisine, and mixology.',
      3: 'My favorite area on campus are the kitchens.',
      4: 'In our practices we can plate, cook and make drinks.',
      5: 'To get better, I could get information from external sources.',
      6: 'The thing I dislike the most about gastronomy is the budgeting class.',
      7: 'Yes, I would like to go on a school exchange to Mexico or Spain.',
      8: 'I would like to work on a cruise after graduating.',
      9: "I haven't seen him.",
      10: 'Yes, I would like to study psychology.'
    }
  },
  {
    id: 'gas-8',
    name: 'Manuel David Ramirez',
    studentCode: '3020251060',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Suba Campus',
    age: 19,
    avatarColor: 'bg-cyan-600',
    highlightQuote: 'Baking and preparing new culinary dishes in the kitchens inspires me to work in a hotel after graduating.',
    audioTime: '02:55 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'The thing I like the most is baking.',
      2: 'My favorite subject is baking.',
      3: 'My favorite area of campus are the kitchen.',
      4: 'I can cook, plate and prepare new things.',
      5: 'I could practice at home to get better at my career.',
      6: 'The thing I dislike the most is cutting.',
      7: 'I would like to go on a school exchange to Spain.',
      8: 'I would like to work in a hotel after graduating.',
      9: 'Yes, I’ve seen it a few times.',
      10: 'No, I love gastronomy.'
    }
  },
  {
    id: 'gas-9',
    name: 'Andres Mauricio Quiroga',
    studentCode: '3020261009',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '2nd Semester',
    campus: 'Suba Campus',
    age: 19,
    avatarColor: 'bg-orange-600',
    highlightQuote: 'The atmosphere in the kitchen and barista skills are my favorite part; my goal is having my own restaurant.',
    audioTime: '03:10 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The thing I like the most about my career are the subjects and the atmosphere in the kitchen.',
      2: 'My favorite subject is barista skills.',
      3: 'My favorite place in the campus are the kitchens.',
      4: 'In our practices, we try different techniques.',
      5: 'I could study beyond what the teachers teach.',
      6: 'Nothing, I love this career.',
      7: 'I would like to go to Norway and Spain.',
      8: 'My goal is having my own restaurant.',
      9: 'I have seen it in the parking lots.',
      10: 'No, I love studying gastronomy.'
    }
  },
  {
    id: 'gas-10',
    name: 'Katherine Avendaño',
    studentCode: 'DOCENTE',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: 'Faculty Professor / Docente',
    campus: 'Suba Campus',
    age: 34,
    avatarColor: 'bg-amber-500',
    highlightQuote: 'The thing I like the most about the career is teaching and sharing knowledge about coffee, cocktails, wines and service.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    isTeacher: true,
    role: 'Docente / Faculty Professor',
    answers: {
      1: 'The thing I like the most about the career is teaching and sharing knowledge about coffee, cocktails, wines and service.',
      2: 'My favorite subject is cocktails.',
      3: 'My favorite area around the campus is the gastronomy one, kitchens and dining rooms.',
      4: 'In the practices, students can take classes into real world situations.',
      5: 'I could get better in my field continuing to learn and developing professionally.',
      6: 'Nothing, I love being a teacher.',
      7: 'I would like to go anywhere in Europe and Peru.',
      8: 'When I graduated, I wanted to work in the hotel industry.',
      9: "I've seen it near the gastronomy area.",
      10: 'I would like to study psychology.'
    }
  }
];

export const analyticalInsights = [
  {
    title: '1. Program Motivation & Favorite Subjects (Q1 & Q2)',
    description: 'In Film and Television, 63% (5 students) chose Photography as what they like most, while 37% (3 students) highlighted university spaces. In Architecture, 57% (4 students) chose Creation and design of spaces, while 43% (3 students) emphasized Usefulness, challenges and art. Top architecture subjects include Architectural Workshop (29%) and Representation and Media (29%).',
    metric: 'Film: 63% Photo · Arch: 57% Spaces',
    tag: 'Disciplinary Passion'
  },
  {
    title: '2. Spatial Attachment & Campus Experience (Q3)',
    description: '100% of Film & TV students highlighted campus green areas as their favorite space. In Architecture, 57% highlighted teamwork and sharing ideas with classmates, 29% chose the architecture studio and making models, and 14% highlighted learning new things every day.',
    metric: '100% Green Areas · 57% Studio Teamwork',
    tag: 'Campus Spatial Attachment'
  },
  {
    title: '3. Professional Projection & Employability (Q4 & Q7/Q8)',
    description: 'In Film & TV, 100% aim for internships with RCN/Caracol and 88% project working in TV/film/Netflix. In Architecture, 38% project working in architecture studios and firms, 23% in construction companies, 23% in residential/interior design, and 16% in urban planning and public spaces.',
    metric: 'Film: 100% Networks · Arch: 38% Studios',
    tag: 'Industry & Employability'
  },
  {
    title: '4. International Mobility & Campus Stewardship (Q5 & Q6)',
    description: 'International exchange targets show high global ambition: Film students target the USA/Hollywood and Mexico (75%), while Architecture students target Spain (29%), USA, Japan, Germany, Italy, and France (14% each). Stewardship focuses on classroom/furniture care (44%) and green habitat care (63%).',
    metric: 'Europe & USA Mobility · 88%+ Stewardship',
    tag: 'Internationalization & Welfare'
  },
  {
    title: '5. Engineering & Software Development Passion (Q2 & Q3)',
    description: 'In Engineering, 50% (4 students) chose Programming and software as what they like most, followed by 25% highlighting the variety of specialization branches. Top subjects are tied between Programming/Software (37.5%) and Calculus (37.5%), with software architecture and algorithms standing out.',
    metric: '50% Programming · 37.5% Calculus',
    tag: 'Computational Logic'
  },
  {
    title: '6. Tech Industry Employability & Global Mobility (Q10 & Q11)',
    description: 'In Engineering, 50% target major technology companies including Google and Cisco, while others project working in banking/financial systems or launching their own tech ventures. Target exchange destinations include Spain (38%), Germany, Mexico, Brazil, Argentina, and Chile.',
    metric: '50% Tech Giants / Google · 38% Spain Exchange',
    tag: 'Tech Industry & Global Mobility'
  },
  {
    title: '7. Hospitality Vocation, Etiquette & ESUNA Practical Labs (Q1, Q2 & Q3)',
    description: 'In Hospitality and Tourism, 50% (4 students) chose People, cultures and places as what they like most, with 50% choosing Etiquette and Table Service as their favorite subject. Favorite campus spaces are evenly divided between ESUNA specialized simulation facilities (37.5%) and the campus Green Zones (37.5%).',
    metric: '50% People & Cultures · 50% Etiquette Lab',
    tag: 'Hospitality & Protocol'
  },
  {
    title: '8. Global Employability & International Mobility (Q8 & Q10)',
    description: 'In Hospitality and Tourism, 50% of students project working directly abroad and 50% in luxury hotel chains, with additional aspirations in international airports (25%) and travel agencies (25%). Top study abroad destinations include Spain (37.5%), Mexico (37.5%), the USA (25%), and Canada (25%).',
    metric: '50% Work Abroad · 50% Hotel Chains · 37.5% Spain/Mexico',
    tag: 'Global Tourism & Mobility'
  },
  {
    title: '9. Culinary Arts Vocation, Bread Making & Practical Kitchens (Q1, Q2 & Q3)',
    description: 'In Gastronomy, 30% chose pastry & bread making as what they like most, alongside 30% highlighting cooking and learning techniques. Baking/bread making (30%) and Mixology/cocktails (30%) lead subject preferences. Dedicated culinary kitchens and dining areas represent 40% of favorite spaces, with barista classrooms (10%) and ESUNA spirituality offices (10%) also standing out.',
    metric: '60% Pastry & Cooking · 60% Baking & Mixology · 40% Kitchens',
    tag: 'Culinary Vocation & Labs'
  },
  {
    title: '10. International Exchanges, Mascot Ugus Encounters & Teacher Perspectives (Q7, Q8, Q9)',
    description: 'Gastronomy students aim high globally: France (20%), Spain (20%), and Mexico (20%) are top study-abroad choices, with 30% aspiring to open their own restaurant/pastry shop and 30% aiming for international hotels. 60% of students and faculty report having seen campus mascot Ugus near kitchens and parking lots. Professor Katherine Avendaño highlighted pedagogical knowledge sharing, cocktails, European mobility, and translating classroom theory into real kitchen situations.',
    metric: '60% Ugus Sightings · 60% France/Spain/Mexico Mobility · Docente Included',
    tag: 'Global Mobility & Faculty Insights'
  }
];

export interface CareerProgramData {
  careerName: string;
  shortName: string;
  faculty: string;
  campus: string;
  video: {
    title: string;
    embedUrl: string;
    externalUrl: string;
    description: string;
    researchTeam: string;
  } | null;
  highlights: {
    title: string;
    cards: Array<{ label: string; primary: string; secondary: string; highlightColor?: string }>;
  } | null;
  questions: Question[];
}

export const careerProgramsRegistry: Record<string, CareerProgramData> = {
  'Film and Television (Cine y Televisión)': {
    careerName: 'Film and Television (Cine y Televisión)',
    shortName: 'Film and Television',
    faculty: 'Faculty of Art, Communication and Culture',
    campus: 'Tagaste Campus',
    video: {
      title: 'Film & Television · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/FZe-EKnNCo4',
      externalUrl: 'https://www.youtube.com/watch?v=FZe-EKnNCo4',
      description: 'Institutional video presentation of the Film & Television academic program at Agustiniana University (Tagaste Campus), showcasing the television studios, editing suites, audio labs, and photography facilities evaluated during the student interviews.',
      researchTeam: 'Alejandra Cruz & Melany Casas'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Program Appeal:', primary: 'Photography (63%)', secondary: 'Spaces (37%)' },
        { label: 'Q3. Favorite Space:', primary: 'Green area (100%)', secondary: '8 of 8 students', highlightColor: 'text-emerald-700' },
        { label: 'Q4. Internships:', primary: 'RCN & Caracol TV', secondary: '100% agreement' },
        { label: 'Q8. Practice Career:', primary: 'TV, Film & Netflix (88%)', secondary: 'Canada (12%)' }
      ]
    },
    questions: initialQuestions
  },
  'Architecture (Arquitectura)': {
    careerName: 'Architecture (Arquitectura)',
    shortName: 'Architecture',
    faculty: 'Faculty of Art, Communication and Culture',
    campus: 'Tagaste Campus',
    video: {
      title: 'Architecture (Arquitectura) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/b4peewNbSaA',
      externalUrl: 'https://youtu.be/b4peewNbSaA?si=BXec7k2QICBWOLw2',
      description: 'Institutional presentation video of the Architecture (Arquitectura) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus), highlighting spatial design workshops, scale model construction studios, representation media labs, and urban projects evaluated during student interviews.',
      researchTeam: 'María Fernanda Rodríguez & Helen Sofía Molina'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Program Appeal:', primary: 'Creation of spaces (57%)', secondary: 'Challenges & art (43%)' },
        { label: 'Q2. Top Subjects:', primary: 'Workshop & Rep. (29% ea)', secondary: 'Urban & Tech (14%)' },
        { label: 'Q3. Favorite Part:', primary: 'Teamwork & Ideas (57%)', secondary: 'Studio & models (29%)', highlightColor: 'text-emerald-700' },
        { label: 'Q7. Employability:', primary: 'Studios & firms (38%)', secondary: 'Construction & design (23%)' }
      ]
    },
    questions: architectureQuestions
  },
  'Engineering (Ingenierías)': {
    careerName: 'Engineering (Ingenierías)',
    shortName: 'Engineering',
    faculty: 'Faculty of Engineering',
    campus: 'Tagaste Campus',
    video: {
      title: 'Engineering (Ingenierías / Software) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/BlmMsVKWs0Q',
      externalUrl: 'https://www.youtube.com/watch?v=BlmMsVKWs0Q',
      description: 'Institutional presentation video of the Engineering (Ingenierías / Software) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus), highlighting computer science laboratories, software architecture, algorithm training, electronics workshops, and student perspectives on technology and campus life.',
      researchTeam: 'Jorge Bustos & Andres Parra'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q2. Program Appeal:', primary: 'Programming & Software (50%)', secondary: 'Variety of fields (25%)' },
        { label: 'Q3. Top Subjects:', primary: 'Programming & Calculus (37.5% ea)', secondary: 'Intro & Green areas (12.5%)' },
        { label: 'Q9. Ugus Mascot Care:', primary: 'Keep distance & No flash (50%)', secondary: 'No processed food (25%)', highlightColor: 'text-emerald-700' },
        { label: 'Q11. Employability:', primary: 'Tech Companies & Google (50%)', secondary: 'Software & Banking (25%)' }
      ]
    },
    questions: engineeringQuestions
  },
  'Hospitality and Tourism (Hotelería y Turismo)': {
    careerName: 'Hospitality and Tourism (Hotelería y Turismo)',
    shortName: 'Hospitality and Tourism',
    faculty: 'Faculty of Economic and Administrative Sciences (ESUNA)',
    campus: 'Tagaste Campus / ESUNA Labs',
    video: {
      title: 'Hospitality and Tourism (Hotelería y Turismo) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/Pfmh4pQMmt4',
      externalUrl: 'https://youtu.be/Pfmh4pQMmt4?feature=shared',
      description: 'Institutional presentation video of the Hospitality and Tourism (Hotelería y Turismo) academic program at Agustiniana University (UniAgustiniana - Tagaste Campus & ESUNA), showcasing practical hotel simulation laboratories, table service dining halls, culinary safety spaces, reception suites, and tourism management workshops evaluated during student fieldwork.',
      researchTeam: 'Valerin Sophia Conde Hernández & Tania Sarah Candela Ruiz'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (8 Real Students Interviewed):',
      cards: [
        { label: 'Q1. Program Appeal:', primary: 'People & Cultures (50%)', secondary: 'Fun Electives (25%)' },
        { label: 'Q2. Top Subject:', primary: 'Etiquette & Table Service (50%)', secondary: 'Theory & Mgmt (12.5%)' },
        { label: 'Q3. Favorite Space:', primary: 'ESUNA & Green Zones (37.5% ea)', secondary: '75% combined', highlightColor: 'text-emerald-700' },
        { label: 'Q10. Future Workplace:', primary: 'Hotels & Abroad (50% ea)', secondary: 'Airports & Agencies (25%)' }
      ]
    },
    questions: tourismQuestions
  },
  'Gastronomy (Gastronomía)': {
    careerName: 'Gastronomy (Gastronomía)',
    shortName: 'Gastronomy',
    faculty: 'Faculty of Economic and Administrative Sciences',
    campus: 'Suba Campus (Main Culinary Labs) & Tagaste Campus',
    video: {
      title: 'Gastronomy (Gastronomía) · Program Presentation Video',
      embedUrl: 'https://www.youtube-nocookie.com/embed/n0QLKB5ekpU',
      externalUrl: 'https://www.youtube.com/watch?v=n0QLKB5ekpU',
      description: 'Institutional presentation video of the Gastronomy (Gastronomía) academic program at Agustiniana University (UniAgustiniana - Suba Campus & Tagaste), featuring professional baking kitchens, barista classrooms, mixology cocktail stations, dining room service facilities, and interviews with 9 students and Professor Katherine Avendaño.',
      researchTeam: 'Ana Paula Manrique Mijares & Carol Tatiana Caro Montaño'
    },
    highlights: {
      title: 'Verified Fieldwork Highlights (9 Students + 1 Professor Interviewed):',
      cards: [
        { label: 'Q1. Top Appeal:', primary: 'Pastry & Cooking (60%)', secondary: 'Techniques & Creativity' },
        { label: 'Q2. Top Subjects:', primary: 'Baking & Mixology (60%)', secondary: 'Barista & Cuisine (20%)' },
        { label: 'Q9. Ugus Mascot:', primary: '60% Have Seen Ugus', secondary: 'Around kitchens & lots', highlightColor: 'text-emerald-700' },
        { label: 'Faculty Insight:', primary: 'Prof. Katherine Avendaño', secondary: 'Cocktails, wines & service', highlightColor: 'text-amber-700' }
      ]
    },
    questions: gastronomyQuestions
  }
};
