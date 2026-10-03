import { InterviewedStudent, Interviewer, ProjectMetadata, Question } from '../types';

export const initialMetadata: ProjectMetadata = {
  university: 'UniAgustiniana - Universitaria Agustiniana',
  faculty: 'Faculty of Humanities, Social Sciences and Education',
  program: 'Bachelor’s Degree in Foreign Languages (English Emphasis)',
  subject: 'Applied Sociolinguistics & Pedagogical Research',
  city: 'Bogotá D.C., Colombia',
  term: 'Academic Period 2026',
  title: 'Academic Life, Aspirations and Campus Perceptions Across University Majors',
  subtitle: 'A qualitative exploratory study: 11 structured questions administered to students from 10 distinct degree programs at UniAgustiniana',
  generalObjective: 'To analyze student perceptions regarding their academic discipline, university life, language proficiency, campus identity (including caring for Ugus), professional internships, and future career projections across diverse faculties.',
  methodologyType: 'Qualitative-descriptive fieldwork using semi-structured English interview protocols with cross-disciplinary comparative coding.',
  sampleDescription: 'Convenience purposeful sample composed of undergraduate students representing 10 different academic programs across Campus Tagaste and Campus Suba in Bogotá (maximum 8 students per career cohort).'
};

export const initialInterviewers: Interviewer[] = [
  {
    id: 'int-1',
    name: 'Paula Natalia Torres',
    role: 'Lead Student Researcher / Interviewer',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'p.torres@uniagustiniana.edu.co',
    reflection: 'Conducting these interviews in English allowed us to observe how university students from non-language programs express their professional passions and frustrations. It demonstrated that language teaching must connect directly with their real disciplinary interests.'
  },
  {
    id: 'int-2',
    name: 'Andrés Felipe Calderón',
    role: 'Co-Researcher / Data Analyst',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    email: 'a.calderon@uniagustiniana.edu.co',
    reflection: 'Listening to students from Architecture, Gastronomy, Law, Business Administration, and Engineering talk about their dreams—like studying abroad or caring for campus mascot Ugus—revealed a shared sense of university identity that transcends academic departments.'
  },
  {
    id: 'int-3',
    name: 'Laura Sofía Gómez',
    role: 'Co-Researcher / Fieldwork Scribe',
    program: 'Foreign Languages Degree',
    semester: '5th Semester',
    campus: 'Suba Campus',
    email: 'l.gomez@uniagustiniana.edu.co',
    reflection: 'The answers to Question 8 regarding Ugus (our beloved campus pet) proved that campus empathy and social responsibility are deeply ingrained values among UniAgustiniana students.'
  }
];

export const initialQuestions: Question[] = [
  {
    id: 1,
    code: 'Q1',
    title: 'What do you like most about your career?',
    academicObjective: 'Explore student vocational motivation, core identity, and primary disciplinary appeal.',
    category: 'Vocational Motivation',
    summaryInsight: 'Across all 10 careers, students prioritize hands-on creative problem solving, social impact, and tangible transformation over purely theoretical study.'
  },
  {
    id: 2,
    code: 'Q2',
    title: 'What is your favorite subject?',
    academicObjective: 'Identify the curricular milestone subjects that generate the highest intellectual engagement.',
    category: 'Curricular Highlights',
    summaryInsight: 'Studio workshops, strategic management, specialized legal theory, culinary techniques, and project-based labs are consistently ranked as the most stimulating courses.'
  },
  {
    id: 3,
    code: 'Q3',
    title: 'What is your favorite part of the university?',
    academicObjective: 'Map spatial preferences and campus attachment across UniAgustiniana facilities.',
    category: 'Campus Spaces',
    summaryInsight: 'The central green gardens, specialized laboratories, the modern library, and outdoor courtyards are universally celebrated for collaboration and relaxation.'
  },
  {
    id: 4,
    code: 'Q4',
    title: 'What do you dislike about being a student?',
    academicObjective: 'Diagnose common academic stressors, urban commute hurdles, and lifestyle compromises.',
    category: 'Student Challenges',
    summaryInsight: 'Heavy exam-period sleep deprivation, tight assignment deadlines, and long TransMilenio/SITP urban commutes across Bogotá are the chief frustrations.'
  },
  {
    id: 5,
    code: 'Q5',
    title: 'What can you do in your internships/practicums?',
    academicObjective: 'Assess student awareness of professional experiential learning and workplace application.',
    category: 'Internships & Practicum',
    summaryInsight: 'Students anticipate executing real client projects, corporate financial restructurings, court litigation drafting, international logistics tracking, kitchen station leadership, and school classroom instruction.'
  },
  {
    id: 6,
    code: 'Q6',
    title: 'What things can you do to improve in your career?',
    academicObjective: 'Evaluate commitment to continuous professional development, self-directed learning, and bilingualism.',
    category: 'Continuous Growth',
    summaryInsight: 'Strengthening English proficiency, mastering digital software tools, pursuing industry certifications, and building professional networking portfolios are chief priorities.'
  },
  {
    id: 7,
    code: 'Q7',
    title: 'Which semester would you like to teach?',
    academicObjective: 'Investigate pedagogical inclination, self-perceived mastery, and educational empathy.',
    category: 'Pedagogical Preference',
    summaryInsight: 'Strong bifurcation: half prefer 1st/2nd semester to inspire newcomers, while the other half prefer 6th to 8th semester to debate advanced strategic projects.'
  },
  {
    id: 8,
    code: 'Q8',
    title: 'How can you take care of Ugus (Pet)?',
    academicObjective: 'Assess awareness of animal welfare, institutional culture, and responsible pet guardianship on campus.',
    category: 'Campus Mascot & Welfare',
    summaryInsight: 'Consensus on providing clean water, avoiding harmful human snacks, respecting Ugus’s quiet rest zones, and supporting campus veterinary vaccination drives.'
  },
  {
    id: 9,
    code: 'Q9',
    title: 'Would you like to do a student exchange? Where?',
    academicObjective: 'Measure international mobility aspirations, geographic interests, and global career vision.',
    category: 'Global Mobility',
    summaryInsight: 'High ambition for academic exchanges to Spain, Germany, France, Canada, Mexico, and the United States to experience international methodologies.'
  },
  {
    id: 10,
    code: 'Q10',
    title: 'Where do you think you can practice your profession?',
    academicObjective: 'Identify target employment sectors, international markets, and entrepreneurial pathways.',
    category: 'Employability & Practice',
    summaryInsight: 'Diverse targets including multinational corporations, public sector ministries, private architectural firms, independent production studios, and international hotels.'
  },
  {
    id: 11,
    code: 'Q11',
    title: 'Do you think you can study another career? Which one?',
    academicObjective: 'Explore interdisciplinary curiosity, complementary education, and lifelong learning attitudes.',
    category: 'Interdisciplinary Vision',
    summaryInsight: 'All students view a complementary second degree (e.g., Psychology, Data Science, Marketing, Languages, Philosophy, Industrial Engineering) as a strategic booster for their primary career.'
  }
];

export const initialStudents: InterviewedStudent[] = [
  // 1. Architecture (Arquitectura)
  {
    id: 'arq-1',
    name: 'Sebastián Mora Villamil',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '7th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-amber-600',
    highlightQuote: 'Architecture allows us to design living spaces that transform human well-being and social coexistence in a city as complex as Bogotá.',
    audioTime: '04:15 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I love most is the ability to turn abstract ideas and community needs into physical, tangible spaces that bring dignity to people’s daily lives.',
      2: 'Architectural Design Workshop (Taller de Diseño) because it pushes our creativity to the limit through physical mockups, 3D renders, and real urban site analyses.',
      3: 'The model-making workshop and the central courtyard gardens at Tagaste, where natural lighting and open spaces inspire new spatial concepts.',
      4: 'The constant sleep deprivation during final jury project deliveries and the financial cost of architectural materials, acrylics, and 3D printing filaments.',
      5: 'I can assist in urban planning permits, draft structural plans in Revit and AutoCAD, calculate material budgets, and oversee construction site progress.',
      6: 'I need to master BIM modeling software, improve my technical English to read international building codes, and study sustainable bioclimatic architecture.',
      7: 'I would love to teach 3rd semester, because students already know basic drawing tools and begin tackling their first real residential design projects.',
      8: 'By never feeding him processed human junk food, ensuring fresh water bowls are placed around the green areas, and letting him sleep peacefully when he is resting near the main courtyard.',
      9: 'Yes, absolutely. I would love to do an exchange in Spain at the Polytechnic University of Madrid or in Germany to learn about sustainable urbanism and Bauhaus heritage.',
      10: 'In international urban design studios, public housing entities, restoration projects in historical centers, or running my own sustainable architectural firm.',
      11: 'Yes, Civil Engineering or Interior Design. Combining structural calculation with spatial aesthetics would make me a much more complete builder.'
    }
  },
  {
    id: 'arq-2',
    name: 'Valeria Castro Sarmiento',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-amber-700',
    highlightQuote: 'Bioclimatic architecture is the key to creating sustainable cities that respect our Andean ecology.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'I love sketching sustainable facades that utilize natural airflow and passive solar heating, especially for affordable housing projects.',
      2: 'Urban Planning and Environmental Habitat, because it teaches us how public parks and mass transit connect urban communities.',
      3: 'The central library mezzanine where architectural monographs and foreign design blueprints are stored.',
      4: 'Carrying heavy balsa wood models in crowded TransMilenio buses at peak morning hours.',
      5: 'I can participate in public plaza renovation tenders, 3D spatial simulations, and community participatory mapping in Bogotá.',
      6: 'Studying international LEED green building standards and reading architectural journals published in the UK and Netherlands.',
      7: 'I would like to teach 2nd semester, to mentor students on freehand perspective drawing and spatial proportions.',
      8: 'Ensuring he is gently petted and that students never leave sharp acrylic scraps or craft knife blades on the ground after model sessions.',
      9: 'Yes, to Italy (Politecnico di Milano) to study historical architectural restoration and urban landscape conservation.',
      10: 'In municipal urban planning offices, heritage conservation institutes, or international NGOs dedicated to habitat improvement.',
      11: 'Yes, Environmental Engineering, to develop scientific expertise in rainwater harvesting and urban microclimates.'
    }
  },
  {
    id: 'arq-3',
    name: 'Julián David Cárdenas',
    career: 'Architecture (Arquitectura)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-yellow-600',
    highlightQuote: 'Parametric architecture and computational design are redefining how structures stand and breathe.',
    audioTime: '04:02 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The integration of algorithmic coding with physical geometry to create dynamic organic structures that feel alive.',
      2: 'Digital Fabrication and Parametric Modeling using Rhino and Grasshopper.',
      3: 'The digital fab-lab with laser cutters and 3D printing equipment where our digital designs become solid models.',
      4: 'When computer software crashes after rendering a high-resolution file for six consecutive hours overnight.',
      5: 'Producing detailed construction blueprints, parametric structural detailing, and BIM coordination for commercial complexes.',
      6: 'Enhancing algorithmic scripting in Python and mastering advanced architectural terminology in English.',
      7: 'I would teach 4th semester, when students transition from manual modeling into computational digital fabrication.',
      8: 'We can build him a weather-insulated dog shelter with recycled laser-cut wood from our workshop scraps.',
      9: 'Yes, to ETH Zurich in Switzerland or TU Delft in the Netherlands for cutting-edge computational architecture.',
      10: 'In multinational architectural tech firms, facade engineering consultancies, or building prefabricated sustainable modular houses.',
      11: 'Yes, Software Engineering, to create custom algorithmic plugins for architectural 3D software.'
    }
  },

  // 2. Social Communication (Comunicación Social)
  {
    id: 'com-1',
    name: 'Valentina Restrepo Castro',
    career: 'Social Communication (Comunicación Social)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-rose-600',
    highlightQuote: 'Journalism and communication give voice to untold community stories and hold power accountable in our society.',
    audioTime: '03:52 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I enjoy most is investigating human stories, connecting with communities in Bogotá, and using multimedia narratives to generate social empathy and awareness.',
      2: 'Investigative Journalism and Digital Storytelling. Analyzing source credibility, conducting in-depth interviews, and crafting investigative video reports is exhilarating.',
      3: 'The audiovisual media studio and the television set at Tagaste. Having real professional cameras, audio mixers, and teleprompters makes you feel inside a real newsroom.',
      4: 'Information overload, strict deadlines that cause stress, and having to balance heavy group projects with reading dozens of academic communication theories.',
      5: 'I can manage corporate social media campaigns, produce institutional video podcasts, write press releases, and conduct community reporting for NGOs.',
      6: 'Enhancing my fluency in English for international reporting, learning advanced data journalism and analytics, and practicing live public speaking.',
      7: 'I would like to teach 5th semester, where students develop digital media strategies and conduct their first comprehensive investigative reporting pieces.',
      8: 'By keeping his dedicated feeding stations clean, taking care not to disturb him with loud equipment during video shoots on campus, and reporting any health symptoms to campus security.',
      9: 'Yes, in Argentina (University of Buenos Aires) or the UK, because of their renowned investigative journalism traditions and independent media critique.',
      10: 'In national television networks, international press agencies (like EFE or Reuters), digital content agencies, or corporate communications for humanitarian organizations.',
      11: 'Yes, Political Science or International Relations. A solid understanding of geopolitical systems enhances the depth and rigour of political journalism.'
    }
  },
  {
    id: 'com-2',
    name: 'Juan David Ortiz Pineda',
    career: 'Social Communication (Comunicación Social)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '7th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-rose-700',
    highlightQuote: 'Radio and podcasting create an intimate bond that no other medium can replicate.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'The power of spoken narrative—crafting audio soundscapes and radio chronicles that capture the authentic pulse of Bogotá neighborhoods.',
      2: 'Radio Production and Audio Storytelling, where we direct live broadcasts and mix multi-track documentaries.',
      3: 'The acoustic recording booths of the campus radio station, where the soundproofing makes everything feel focused and magical.',
      4: 'The erratic working hours when covering breaking live events during weekend evenings.',
      5: 'I can host news segments, edit multi-track radio episodes, write broadcast scripts, and manage community audio platforms.',
      6: 'Listening to foreign radio networks like BBC Radio 4 and NPR in English to learn how to structure narrative investigative podcasts.',
      7: 'I would love to teach 3rd semester, when students step into the radio studio for their first live broadcast test.',
      8: 'By recording a fun audio capsule for UniAgustiniana Radio educating the student body on how to treat Ugus with respect and care.',
      9: 'Yes, to Spain (Universidad Complutense de Madrid) or the United States (Columbia University) for broadcast narrative audio journalism.',
      10: 'In public radio networks, podcast production houses, investigative newsrooms, or diplomatic cultural affairs agencies.',
      11: 'Yes, History or Cultural Anthropology, because journalism needs historical depth to avoid superficial reporting.'
    }
  },
  {
    id: 'com-3',
    name: 'Camila Morales Vega',
    career: 'Social Communication (Comunicación Social)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '4th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-pink-600',
    highlightQuote: 'Corporate communication is the strategic heart that keeps organizational purpose aligned with community expectations.',
    audioTime: '03:44 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Connecting company culture with ethical sustainability and designing brand campaigns that actively help society.',
      2: 'Organizational Communication and Crisis Management, where we simulate brand crisis scenarios and draft emergency press releases.',
      3: 'The open green lawns where student communication groups brainstorm storytelling pitches with natural sunlight.',
      4: 'Having to read hundreds of theoretical pages about 20th-century communication paradigms before doing practical media work.',
      5: 'I can audit internal communications, design employee newsletters, coordinate press conferences, and monitor digital public relations.',
      6: 'Practicing English corporate writing to draft bilingual press releases and international media statements.',
      7: 'I would choose 4th semester, when students analyze corporate crisis cases and understand public opinion dynamics.',
      8: 'We can create an institutional social media campaign titled "Friends of Ugus" to spread responsible campus pet guidelines.',
      9: 'Yes, to Mexico (UNAM) or Canada to study strategic organizational communication and multicultural public relations.',
      10: 'In international sustainability foundations, corporate communications departments in multinational companies, or strategic PR consultancies.',
      11: 'Yes, Business Administration, to understand corporate balance sheets and boardroom executive decision-making.'
    }
  },

  // 3. International Business (Negocios Internacionales)
  {
    id: 'neg-1',
    name: 'Mateo Gómez Restrepo',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '7th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-blue-600',
    highlightQuote: 'Global trade connects economies, brings cultural exchange, and opens limitless cross-border entrepreneurial possibilities.',
    audioTime: '04:10 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'What I like most is understanding how global supply chains operate, analyzing foreign market expansion strategies, and negotiating across diverse cultures.',
      2: 'International Logistics and Global Geopolitics. Learning customs tariffs, maritime freight regulations, and currency risk management is fascinating.',
      3: 'The business simulation lab and the library study cubicles, where we simulate stock market trading and analyze foreign trade balance sheets.',
      4: 'The stress of exam seasons, memorizing complex tariff classification codes, and coordinating schedules with teammates who also work part-time jobs.',
      5: 'I can manage export-import documentation, track customs clearances at ports (Buenaventura/Cartagena), perform foreign market intelligence, and audit international suppliers.',
      6: 'Achieving an advanced C1 English level, learning conversational Mandarin, and gaining certified mastery in SAP and international trade software.',
      7: 'I would love to teach 8th semester, leading international negotiation simulations where students defend real trade agreements in foreign languages.',
      8: 'We can care for Ugus by setting up community fundraising for his veterinary checkups, ensuring clean drinking water stations, and teaching new students to pet him gently.',
      9: 'Definitely! I would love to go to Canada or Germany to experience their advanced logistics hubs and multinational corporate governance models.',
      10: 'In multinational consumer goods corporations, freight forwarding logistics operators, foreign trade ministries, or running an export agency for Colombian specialty coffee.',
      11: 'Yes, Data Science or Financial Engineering. Nowadays, international commerce relies heavily on predictive algorithms and big data analytics.'
    }
  },
  {
    id: 'neg-2',
    name: 'Mariana Ruiz Benítez',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-blue-700',
    highlightQuote: 'Cross-cultural intelligence is what turns a formal negotiation into a lasting international partnership.',
    audioTime: '03:48 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Understanding how cultural etiquette influences trade agreements in Asia, Europe, and the Middle East.',
      2: 'Cross-Cultural Negotiations and Foreign Direct Investment, where we role-play bilateral trade disputes.',
      3: 'The university library business section with subscriptions to the Financial Times and The Economist.',
      4: 'Having early 6:00 AM classes after studying late night for international customs tariffs exams.',
      5: 'I can analyze Free Trade Agreements (FTAs), prepare export market entry studies, and negotiate international shipping rates.',
      6: 'Studying conversational French and practicing technical English negotiations for international commodities.',
      7: 'I would like to teach 5th semester, where students participate in their first multilateral trade negotiation simulations.',
      8: 'Ensuring he is safe from moving vehicles in the campus parking area and giving him fresh water every afternoon.',
      9: 'Yes, to South Korea (Seoul National University) or Singapore to witness world-class container ports and fintech hubs.',
      10: 'In foreign trade chambers, diplomatic trade promotion agencies (ProColombia), or multinational retail trading houses.',
      11: 'Yes, International Commercial Law, to draft cross-border dispute resolution clauses and joint venture contracts.'
    }
  },
  {
    id: 'neg-3',
    name: 'Santiago Beltrán Osorio',
    career: 'International Business (Negocios Internacionales)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-sky-600',
    highlightQuote: 'E-commerce and cross-border digital logistics are reshaping how Colombian agricultural products reach global consumers.',
    audioTime: '04:05 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Connecting Colombian local producers (like cacao and exotic fruits) with international consumers through digital supply networks.',
      2: 'International Maritime Transport and Supply Chain Analytics.',
      3: 'The student computer lab with Bloomberg Terminal and statistical trade software.',
      4: 'The unpredictability of foreign currency exchange swings when calculating course project budgets.',
      5: 'I can coordinate customs brokers, prepare letters of credit, track maritime containers, and calculate Incoterms 2020 costs.',
      6: 'Deepening English proficiency in maritime terminology and learning customs data management systems.',
      7: 'I would teach 6th semester, focusing on Incoterms and international multimodal freight operations.',
      8: 'Promoting a culture where students take turns refilling his water bowl near the business administration corridor.',
      9: 'Yes, to the Netherlands (Erasmus University Rotterdam) to study port economics at the largest port in Europe.',
      10: 'In global logistics integrators (DHL Global Forwarding, Maersk), port terminals, or agricultural export consortiums.',
      11: 'Yes, Software Engineering, to develop blockchain traceability systems for agricultural coffee and cacao exports.'
    }
  },

  // 4. Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)
  {
    id: 'len-1',
    name: 'Camila Andrea Méndez',
    career: 'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-emerald-600',
    highlightQuote: 'Teaching a language is not just grammar; it is opening a door for students to think, feel, and dream beyond borders.',
    audioTime: '04:25 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'What I love most is discovering how the human brain acquires languages and creating engaging pedagogical activities that help children and adults overcome the fear of speaking.',
      2: 'Second Language Acquisition Didactics and Sociolinguistics. Understanding phonetics and pedagogical methodology gives you real classroom superpower.',
      3: 'The language resource center, the conversation circles in the campus gardens, and the university library reading rooms.',
      4: 'The lingering social misconception that education is easy, plus the anxiety of lesson planning and designing rubric materials late into the night.',
      5: 'I can plan and deliver communicative English classes, design bilingual pedagogical resources, assess language competencies, and conduct classroom action research.',
      6: 'Practicing everyday English conversation to build natural accent fluency, learning French as a second foreign language, and mastering digital gamification tools.',
      7: 'I would love to teach 1st semester, because that is where students arrive with doubts and fears; building their foundational confidence is the most rewarding experience.',
      8: 'By respecting his natural rhythm, keeping water bowls refreshed in our building corridor, not pulling his tail or stressing him, and organizing animal awareness campaigns.',
      9: 'Yes, to France or the United Kingdom. Immersing myself in a native linguistic environment would tremendously sharpen my cultural and phonetic pedagogical repertoire.',
      10: 'In bilingual schools, university language institutes, international educational publishing houses, or developing online educational language courses.',
      11: 'Yes, Educational Psychology or Speech Therapy. Understanding cognitive speech development and psychological barriers would make my teaching even more empathetic.'
    }
  },
  {
    id: 'len-2',
    name: 'Kevin Andrés Arévalo',
    career: 'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-emerald-700',
    highlightQuote: 'When language learners discover they can actually communicate ideas rather than memorizing conjugations, their eyes light up.',
    audioTime: '04:12 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Witnessing student communicative breakthroughs—when someone who was terrified of English starts having a spontaneous conversation.',
      2: 'Phonetics & Phonology and Task-Based Language Teaching (TBLT).',
      3: 'The outdoor amphitheater where we practice communicative theater and drama games in English and French.',
      4: 'The exhaustion of juggling morning school teaching practicums with afternoon university coursework and lesson preparation.',
      5: 'I can lead high school English classrooms, design diagnostic proficiency exams, and facilitate English conversation clubs on campus.',
      6: 'Expanding my French and German vocabulary, and reading peer-reviewed academic journals on applied linguistics.',
      7: 'I would teach 2nd semester, when prospective teachers discover how phonetics and IPA symbols explain pronunciation difficulties.',
      8: 'By making sure he is not teased and including him as a character in bilingual classroom storytelling exercises for children.',
      9: 'Yes, to Canada (McGill University or Toronto) to research bilingual French-English educational policies and immersion methods.',
      10: 'In international baccalaureate (IB) academies, collegiate language departments, or educational research institutes.',
      11: 'Yes, Applied Linguistics or Educational Technology, to design intelligent digital language assessment platforms.'
    }
  },
  {
    id: 'len-3',
    name: 'Sofía Salamanca Toro',
    career: 'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '7th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-teal-600',
    highlightQuote: 'Bilingualism is social equity; giving public school students foreign language tools breaks generational cycles of inequality.',
    audioTime: '03:55 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'The social transformation aspect of education—helping Colombian youth from all socioeconomic backgrounds gain global access through English.',
      2: 'Curriculum Design and Critical Pedagogy, exploring how education can empower underprivileged communities.',
      3: 'The campus chapel garden where the peaceful atmosphere allows quiet academic reading and lesson reflection.',
      4: 'Grading dozens of student essays during final exam weeks when deadlines pile up simultaneously.',
      5: 'I can design institutional language curricula, lead pedagogical workshops for in-service teachers, and conduct educational field research.',
      6: 'Perfecting advanced academic writing (C2 level) and mastering second language educational research methodologies.',
      7: 'I would love to teach 6th semester, supervising novice student teachers during their first real classroom school placements.',
      8: 'Organizing student volunteers to brush his coat and keep his bedding warm during cold Bogotano rainy mornings.',
      9: 'Yes, to the United States (University of Illinois or Harvard GSE) to study bilingual education and curriculum policy.',
      10: 'In the Ministry of National Education, international bilingual accreditation bodies, or leading teacher training colleges.',
      11: 'Yes, Sociology or Human Rights Education, to advocate for equitable language access policies across public schools.'
    }
  },

  // 5. Gastronomy (Gastronomía)
  {
    id: 'gas-1',
    name: 'Nicolás Felipe Duarte',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '4th Semester',
    campus: 'Suba Campus',
    age: 21,
    avatarColor: 'bg-orange-600',
    highlightQuote: 'Cooking is art, science, and cultural heritage on a plate; each dish communicates our identity and ancestral flavors.',
    audioTime: '03:45 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'What I like most is the creative alchemy of transforming fresh regional ingredients into sensory experiences that bring joy and memories to people.',
      2: 'Colombian Ancestral Cuisine and Classical French Culinary Techniques. Mastering mother sauces while rediscovering Colombian Pacific and Andean tubers is pure magic.',
      3: 'The state-of-the-art culinary kitchens and baking labs at Campus Suba, equipped with industrial ovens, blast chillers, and butcher preparation stations.',
      4: 'The intense physical exhaustion, standing for 8 hours in high-heat kitchens, burns and cuts, and the constant rush against kitchen service ticket timers.',
      5: 'I can work line stations in fine-dining restaurants, manage kitchen inventory and HACCP hygiene standards, prepare catering banquets, and assist menu design.',
      6: 'Practicing professional knife precision, learning hospitality English and French culinary terminology, and deepening knowledge of food cost control.',
      7: 'I would like to teach 2nd semester, where students start foundational culinary techniques and learn the discipline of kitchen station cleanliness (mise en place).',
      8: 'Never giving him kitchen scraps, cooked chicken bones, or seasoned restaurant leftovers which can poison him. Always providing clean pet food in safe outdoor areas.',
      9: 'Yes, to France (Lyon) or Peru (Lima) to train alongside world-renowned Michelin-starred chefs and learn their culinary discipline and seafood handling.',
      10: 'In international resort hotel restaurants, luxury cruise lines, food consulting agencies, or launching my own signature contemporary Colombian bistro.',
      11: 'Yes, Food Engineering or Agro-Industrial Management. Understanding the biochemical preservation of ingredients would allow me to innovate in artisan food products.'
    }
  },
  {
    id: 'gas-2',
    name: 'Isabella Peñuela Soto',
    career: 'Gastronomy (Gastronomía)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '5th Semester',
    campus: 'Suba Campus',
    age: 20,
    avatarColor: 'bg-orange-700',
    highlightQuote: 'Pastry and baking demand mathematical precision, chemical understanding, and delicate visual sensitivity.',
    audioTime: '04:00 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'The delicate craftsmanship of pastry arts—tempering chocolate, laminating croissants, and creating desserts that look like sculptures.',
      2: 'Artisanal Bakery & Contemporary Pastry, and Sensory Analysis & Enology.',
      3: 'The chocolate and pastry temperature-controlled kitchen at Suba, where humidity is regulated for sugar and cocoa work.',
      4: 'The extreme heat of deck ovens and spending whole weekends washing heavy industrial baking trays.',
      5: 'I can formulate dessert menus, run bakery production lines, manage dessert stations in luxury hotels, and conduct food costing.',
      6: 'Studying international pastry terminology in French and conversational English to work in high-end international pastry boutiques.',
      7: 'I would teach 3rd semester, when students tackle artisan sourdough breads and classical French pastry doughs.',
      8: 'Never leaving chocolate crumbs or sweet cocoa glazes near outdoor benches where Ugus could ingest them, since chocolate is toxic to dogs and cats.',
      9: 'Yes, to France (Le Cordon Bleu Paris or ENSP) or Spain (Basque Culinary Center) to master avant-garde pastry.',
      10: 'In world-class pastry boutiques, 5-star hotel banquet pastry kitchens, or establishing my own boutique patisserie in Bogotá.',
      11: 'Yes, Business Administration, to manage food business margins, marketing, and commercial franchising profitably.'
    }
  },

  // 6. Law (Derecho)
  {
    id: 'der-1',
    name: 'Daniela Sofía Beltrán',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-indigo-600',
    highlightQuote: 'Law is the institutional compass that guarantees democratic justice, protects human rights, and balances social equity.',
    audioTime: '04:05 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I appreciate most is developing persuasive legal argumentation and utilizing constitutional jurisprudence to defend vulnerable people against arbitrary injustice.',
      2: 'Constitutional Law and Criminal Procedure. Analyzing constitutional court rulings and practicing oral litigation simulations in mock trial courtrooms is thrilling.',
      3: 'The mock courtroom (Sala de Audiencias) and the quiet jurisprudence floor of the library where legal codes and landmark court rulings are catalogued.',
      4: 'The overwhelming volume of dense legal doctrine to read every week, memorizing statutory articles, and the stress of oral interrogatory exams.',
      5: 'I can draft petitions of rights (tutelas), assist clients in the university legal clinic (Consultorio Jurídico), research jurisprudence briefs, and review commercial contracts.',
      6: 'Improving my legal English for corporate compliance, practicing formal debate rhetoric, and staying continuously updated on new legislative statutory reforms.',
      7: 'I would like to teach 4th semester, when students transition into Civil Obligations and procedural litigation, where theoretical law starts demanding tactical application.',
      8: 'Ensuring he is vaccinated and dewormed through the university veterinary alliance, preventing students from teasing him, and treating him with affectionate respect as a living campus resident.',
      9: 'Yes, to Argentina or Germany (Heidelberg or Freiburg) to study comparative constitutional law and international human rights jurisprudence.',
      10: 'In judicial courts, state control agencies (Procuraduría / Defensoría del Pueblo), prestigious corporate law firms, or international human rights organizations.',
      11: 'Yes, Criminology or Philosophy. Deepening philosophical ethics and criminal psychology provides essential insight into the sociological motives behind human conduct.'
    }
  },
  {
    id: 'der-2',
    name: 'Felipe Caicedo Marín',
    career: 'Law (Derecho)',
    faculty: 'Faculty of Humanities, Social Sciences and Education',
    semester: '7th Semester',
    campus: 'Tagaste Campus',
    age: 23,
    avatarColor: 'bg-indigo-700',
    highlightQuote: 'Commercial and corporate law protects the economic fabric, fostering trust between investors and entrepreneurs.',
    audioTime: '03:52 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Structuring complex commercial deals, resolving corporate shareholder conflicts, and advising technology startups.',
      2: 'Corporate Commercial Law and International Arbitration.',
      3: 'The legal clinic offices where we assist real low-income citizens with legal counseling under faculty supervision.',
      4: 'The heavy bureaucracy and delayed timelines of the public court system when following up on case filings.',
      5: 'I can draft commercial contracts, perform corporate legal audits (due diligence), write legal opinions, and represent clients in conciliation hearings.',
      6: 'Achieving fluent legal English for cross-border mergers and acquisitions, and learning legaltech contract automation software.',
      7: 'I would teach 5th semester, leading commercial contract negotiation workshops with real case studies.',
      8: 'Respecting his peace when he sleeps near the main law faculty garden benches and notifying campus welfare if he appears limping.',
      9: 'Yes, to the United States (Columbia Law School or NYU) or Spain to study international commercial arbitration.',
      10: 'In tier-one corporate law firms, multinational corporate legal departments, or international dispute arbitration centers.',
      11: 'Yes, Economics or Finance, because corporate lawyers who truly understand financial balance sheets are far more effective.'
    }
  },

  // 7. Film and Television (Cine y Televisión)
  {
    id: 'cin-1',
    name: 'Santiago Cruz Ortiz',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 20,
    avatarColor: 'bg-violet-600',
    highlightQuote: 'Cinema allows us to construct worlds, freeze time, and evoke emotions that words alone can never capture.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'A2 - Elementary',
    answers: {
      1: 'What I love most is visual storytelling—shaping mood through cinematography, color palette, camera movement, and sound design to touch human emotions.',
      2: 'Cinematography & Lighting and Film Directing. Experimenting with anamorphic lenses, shadows, and directing actors in front of the lens is pure passion.',
      3: 'The sound mixing rooms, the film editing suites equipped with color grading monitors, and the main auditorium where student short films are premiered.',
      4: 'Heavy filming equipment to carry across the city, overnight shooting schedules in cold Bogotá weather, and the anxiety of video files corrupting during rendering.',
      5: 'I can operate cinema cameras, set up three-point lighting schemes, edit narrative sequences in DaVinci Resolve and Premiere, and record boom microphone sound.',
      6: 'Enhancing my technical English to understand international camera manuals and film festival submission dossiers, and shooting more independent short films.',
      7: 'I would choose 3rd semester, when students write and direct their very first narrative short film and discover their unique aesthetic directorial voice.',
      8: 'By not scaring him with sudden camera flashes, boom poles, or loud film set noises, and letting him take sunny naps in the grass undisturbed.',
      9: 'Yes, to the Film and Television School of the Academy of Performing Arts in Prague (FAMU) in the Czech Republic or USC in California.',
      10: 'In international streaming production companies (Netflix, Amazon Studios), advertising agencies, music video production, or as an independent film director.',
      11: 'Yes, Literature or Philosophy. Great cinematic stories require deep literary storytelling roots, rich character psychology, and existential questioning.'
    }
  },
  {
    id: 'cin-2',
    name: 'Juliana Andrea Vargas',
    career: 'Film and Television (Cine y Televisión)',
    faculty: 'Faculty of Art, Communication and Culture',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-violet-700',
    highlightQuote: 'Screenwriting is the unseen soul of every moving image; if it is not on the page, it will never be on the screen.',
    audioTime: '04:05 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Writing screenplays with complex female characters and exploring Colombian magical realism through modern narrative lenses.',
      2: 'Screenwriting & Dramaturgy, and Film History & Aesthetics.',
      3: 'The projection theater where we screen 35mm film classics and hold director Q&A debates.',
      4: 'The financial struggle of funding student film productions and finding reliable filming locations in Bogotá without permits being cancelled.',
      5: 'I can develop script bibles, work as a script supervisor on set (continuity), edit dialogue tracks, and manage casting calls.',
      6: 'Reading screenplays in English to analyze Hollywood three-act and alternative European narrative structures.',
      7: 'I would like to teach 2nd semester, guiding students through character arcs and writing their first ten-page short screenplay.',
      8: 'We can feature Ugus as a symbolic character in student short films, treating him with utmost kindness on set without any forced scenes.',
      9: 'Yes, to Cuba (EICTV in San Antonio de los Baños) or Spain (ECAM Madrid) for auteur screenwriting and directing.',
      10: 'In international film festivals, television scriptwriting rooms, documentary production units, or independent film collectives.',
      11: 'Yes, Creative Writing or History, because understanding social memory fuels deeply grounded cinematic narratives.'
    }
  },

  // 8. Engineering (Ingenierías)
  {
    id: 'ing-1',
    name: 'Cristian Camilo Pardo',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-cyan-700',
    highlightQuote: 'Engineering is about transforming complex theoretical physics and mathematics into functional technology that solves real societal problems.',
    audioTime: '04:12 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I enjoy most is designing automated hardware systems, programming microcontrollers, and seeing a mechanical prototype come alive and work.',
      2: 'Robotics & Automation and Embedded Systems Programming. Coding C++ and Python to interface microchips with servo-actuators and sensors is exhilarating.',
      3: 'The mechatronics and electronics engineering laboratories at Tagaste, stocked with oscilloscopes, 3D printers, CNC milling machines, and soldering stations.',
      4: 'Brutal differential equation exams, long hours troubleshooting tiny software bugs, and the frustration when an electronic circuit burns right before evaluation.',
      5: 'I can program industrial PLCs, design printed circuit boards (PCBs) in Altium, perform predictive industrial equipment maintenance, and optimize automation lines.',
      6: 'Mastering technical English to read scientific datasheets and GitHub repositories, learning cloud robotics protocols, and contributing to open-source hardware projects.',
      7: 'I would like to teach 6th semester, where students build comprehensive automation capstone projects and integrate mechanical design with intelligent software.',
      8: 'We can build him a weather-proof thermal wooden doghouse in the campus garden using recycled laser-cut materials from our engineering lab, keeping him warm and dry.',
      9: 'Yes, to Germany (TU Munich or RWTH Aachen), the world cradle of precision engineering, Industry 4.0, and robotics innovation.',
      10: 'In multinational manufacturing plants, biomedical equipment maintenance firms, automotive automation lines, or creating an IoT tech startup in Bogotá.',
      11: 'Yes, Biomedical Engineering or Computer Science. Integrating artificial intelligence algorithms with medical robotics is the future of healthcare technology.'
    }
  },
  {
    id: 'ing-2',
    name: 'Natalia Becerra Gómez',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '7th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-cyan-800',
    highlightQuote: 'Industrial engineering eliminates waste, streamlines human effort, and makes industrial systems safe and productive.',
    audioTime: '03:45 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Analyzing process workflows and applying lean manufacturing to make production lines cleaner, faster, and more ergonomic.',
      2: 'Operations Research & Simulation, and Quality Management Systems (ISO 9001/14001).',
      3: 'The industrial ergonomics and work-study laboratory with digital timing and motion capture gear.',
      4: 'Heavy statistical modeling and staying until 10:00 PM calculating stochastic inventory simulations.',
      5: 'I can map value streams, calculate cycle times, design warehouse layouts, and implement occupational health and safety protocols.',
      6: 'Getting certified in Six Sigma Green Belt and practicing business English presentations for manufacturing executives.',
      7: 'I would teach 5th semester, leading process mapping workshops and Lean 5S implementations.',
      8: 'Designing a clean water dispenser with a float valve so Ugus always has fresh water without spilling in the garden.',
      9: 'Yes, to Sweden or Germany to study sustainable supply chain management and automated logistics distribution.',
      10: 'In food processing conglomerates, pharmaceutical manufacturing plants, third-party logistics warehouses, or operations consulting.',
      11: 'Yes, Environmental Engineering, to measure carbon footprints and implement circular economy systems in factories.'
    }
  },
  {
    id: 'ing-3',
    name: 'Diego Fernando Fonseca',
    career: 'Engineering (Ingenierías)',
    faculty: 'Faculty of Engineering',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-teal-800',
    highlightQuote: 'Telecommunications and IoT networks are the digital nervous system connecting humanity.',
    audioTime: '04:00 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Configuring wireless antenna arrays and deploying smart IoT sensor networks that monitor agricultural crops remotely.',
      2: 'Telecommunications Networks & Protocols, and Cloud Computing Architecture.',
      3: 'The telecommunications network lab with Cisco routers, spectrum analyzers, and fiber optic splicing tools.',
      4: 'Abstract signal processing equations and configuring network switches when IP routing protocols misbehave.',
      5: 'I can configure enterprise routers, deploy fiber-optic campus drops, audit cybersecurity vulnerabilities, and configure cloud servers.',
      6: 'Studying for Cisco CCNA and AWS Cloud certifications, both of which require reading technical documentation in English.',
      7: 'I would like to teach 4th semester, when students configure their first routed LAN network and diagnose network packets with Wireshark.',
      8: 'We can program a small RFID smart tag on his collar connected to a campus dashboard so students can see when he was last fed.',
      9: 'Yes, to Finland (Aalto University) or Canada to research 5G/6G wireless networks and satellite communications.',
      10: 'In telecommunications carriers (Claro, Tigo), cloud infrastructure providers (AWS, Azure), or internet service providers.',
      11: 'Yes, Cyber Defense & Network Security, to protect public infrastructure against cyberattacks.'
    }
  },

  // 9. Marketing (Mercadeo)
  {
    id: 'mer-1',
    name: 'Mariana López Galeano',
    career: 'Marketing (Mercadeo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-fuchsia-600',
    highlightQuote: 'Marketing is the bridge between human consumer psychology and creative brand value; it turns everyday products into memorable experiences.',
    audioTime: '03:40 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I like most is consumer behavior analysis—uncovering the emotional triggers, habits, and cultural trends that lead people to connect with a brand.',
      2: 'Digital Marketing & Growth Strategies and Brand Management. Running real advertising experiments, AB testing, and creating brand identity systems is addictive.',
      3: 'The business innovation incubator space and the open-air social tables near the cafeteria where we brainstorm marketing campaign pitches.',
      4: 'The unpredictability of social algorithms, memorizing complex pricing equations, and the pressure to deliver viral creative ideas on tight client schedules.',
      5: 'I can design digital marketing funnels, configure Meta and Google Ads campaigns, analyze conversion metrics with Google Analytics, and conduct focus group testing.',
      6: 'Sharpening my English copywriting skills to target international audiences, studying consumer neuroscience, and mastering data visualization dashboards.',
      7: 'I would love to teach 4th semester, when students design their first full marketing plan and present campaign pitches to simulated client boards.',
      8: 'We can launch a campus marketing campaign titled "Love Ugus Responsibly", placing friendly QR code posters with pet care rules and food safety guidelines.',
      9: 'Yes, to the United States (New York or Chicago) or Spain (ESIC), the hubs of global creative brand storytelling and neuromarketing research agencies.',
      10: 'In multinational consumer goods corporations (Unilever, Nestlé), creative advertising agencies, high-growth tech startups, or launching a brand consultancy.',
      11: 'Yes, Behavioral Psychology or Visual Graphic Design. Understanding subconscious behavioral biases is the ultimate secret weapon for modern marketers.'
    }
  },
  {
    id: 'mer-2',
    name: 'Esteban Rueda Salcedo',
    career: 'Marketing (Mercadeo)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-fuchsia-700',
    highlightQuote: 'Data-driven marketing takes the guesswork out of business growth; numbers reveal consumer truth.',
    audioTime: '03:55 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Analyzing big data analytics and web traffic cohorts to pinpoint customer lifetime value and optimize marketing ROI.',
      2: 'Marketing Analytics & Big Data, and Pricing & Revenue Management.',
      3: 'The coworking tables near the main library entrance where student growth marketers debate marketing funnels.',
      4: 'When advertising platforms change their ad account policies overnight and campaigns have to be restarted.',
      5: 'I can build automated email nurturing sequences, conduct multivariate A/B testing on landing pages, and configure Google Tag Manager.',
      6: 'Mastering SQL and Python for customer segmentation, and reading English marketing blogs like HubSpot and Reforge.',
      7: 'I would teach 5th semester, guiding students on conversion rate optimization (CRO) and performance advertising.',
      8: 'By keeping dog food bowls filled in the garden and avoiding student photography that stresses him with camera flashlights.',
      9: 'Yes, to the UK (London School of Economics) or Spain to study econometric marketing models and predictive analytics.',
      10: 'In fintech unicorns, e-commerce retail giants, digital performance agencies, or managing growth marketing in tech startups.',
      11: 'Yes, Data Analytics or Software Engineering, to build predictive machine learning marketing models.'
    }
  },

  // 10. Business Administration (Administración de Empresas)
  {
    id: 'adm-1',
    name: 'Daniel Felipe Pinzón',
    career: 'Business Administration (Administración de Empresas)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '6th Semester',
    campus: 'Tagaste Campus',
    age: 22,
    avatarColor: 'bg-teal-700',
    highlightQuote: 'Strategic administration is the engine of any sustainable organization; leading teams with ethical vision turns ideas into thriving companies.',
    audioTime: '04:08 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'What I like most is strategic planning and organizational leadership—learning how to coordinate financial, human, and technological resources to create real employment and economic value.',
      2: 'Strategic Management and Corporate Finance. Analyzing business model canvases, assessing investment portfolios, and evaluating company risk scenarios is intellectually stimulating.',
      3: 'The business conference rooms and the central square at Tagaste, where students gather between classes to discuss entrepreneurial ventures and network.',
      4: 'Long administrative theory lectures when they are disconnected from practice, and the struggle of balancing working full-time with nighttime study commitments.',
      5: 'I can formulate business plans, audit organizational workflows, calculate corporate financial statements, optimize supply chain overhead, and structure human resource management policies.',
      6: 'Achieving advanced business English fluency to pitch projects to international venture capitalists, getting certified in Scrum/Agile project management, and mastering Excel financial modeling.',
      7: 'I would like to teach 6th semester, leading organizational strategy case studies where students solve turnaround challenges in simulated corporate crises.',
      8: 'We can coordinate with the student council to establish a dedicated university pet welfare fund for Ugus, guaranteeing quality dry food, flea medication, and safe bedding during rainy Bogotá seasons.',
      9: 'Yes, to Spain (IE Business School or Universidad Complutense de Madrid) or Chile (Universidad de Chile) to study sustainable corporate governance and Latin American family business models.',
      10: 'In multinational management consulting firms (like Deloitte or McKinsey), commercial banking institutions, technology start-ups as an operations director, or expanding my family business.',
      11: 'Yes, Industrial Engineering or Commercial Law. Combining administrative strategy with production process optimization or commercial contract jurisprudence is an unbeatable asset.'
    }
  },
  {
    id: 'adm-2',
    name: 'Gabriela Herrera Moreno',
    career: 'Business Administration (Administración de Empresas)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '7th Semester',
    campus: 'Tagaste Campus',
    age: 23,
    avatarColor: 'bg-emerald-800',
    highlightQuote: 'Human talent is an organization’s most precious capital; leading with empathy and clear incentives drives success.',
    audioTime: '03:50 min',
    perceivedEnglishLevel: 'B2 - Upper Intermediate',
    answers: {
      1: 'Designing ethical human resource policies and empowering cross-functional teams to achieve organizational milestones.',
      2: 'Human Capital Management & Leadership, and Organizational Behavior.',
      3: 'The business auditorium where visiting enterprise CEOs and startup founders share real leadership failure and success stories.',
      4: 'Managing team members who don’t pull their weight in group projects right before final submission deadlines.',
      5: 'I can design talent recruitment rubrics, structure employee performance evaluations, conduct payroll audits, and coordinate leadership retreats.',
      6: 'Studying organizational psychology in English and learning modern HR software suites like Workday and SAP SuccessFactors.',
      7: 'I would teach 4th semester, when students transition into organizational psychology and team management dynamics.',
      8: 'Ensuring he is fed on a consistent schedule and that his resting space in the courtyard is treated with gentleness by all students.',
      9: 'Yes, to France (HEC Paris) or Spain (ESADE) to study international leadership and corporate social responsibility.',
      10: 'In corporate HR directorates in multinational enterprises, leadership training consultancies, or public administration entities.',
      11: 'Yes, Organizational Psychology, to develop scientifically grounded talent assessment and workplace mental wellness programs.'
    }
  },
  {
    id: 'adm-3',
    name: 'Carlos Andrés Meza',
    career: 'Business Administration (Administración de Empresas)',
    faculty: 'Faculty of Economic and Administrative Sciences',
    semester: '5th Semester',
    campus: 'Tagaste Campus',
    age: 21,
    avatarColor: 'bg-slate-700',
    highlightQuote: 'Financial sustainability is the prerequisite for any business to generate lasting social and environmental value.',
    audioTime: '04:15 min',
    perceivedEnglishLevel: 'B1 - Intermediate',
    answers: {
      1: 'Evaluating financial ratios and turning loss-making company divisions into profitable, efficient business units.',
      2: 'Corporate Finance & Budgeting, and Business Valuation.',
      3: 'The finance lab where we analyze real-time market stock indices and corporate balance sheets.',
      4: 'Balancing full-time workday employment with evening classes and weekend financial spreadsheet assignments.',
      5: 'I can prepare discounted cash flow valuations, build operating budgets, audit expense variances, and formulate working capital strategies.',
      6: 'Practicing English financial pitch presentations and preparing for financial analyst certifications.',
      7: 'I would teach 5th semester, leading financial modeling simulations where students value companies and forecast revenues.',
      8: 'We can organize an annual campus charity raffle where part of the proceeds go to Ugus’s veterinary vaccination fund.',
      9: 'Yes, to the United States or the UK (London Business School) to study corporate private equity and international finance.',
      10: 'In investment banking institutions, private equity funds, financial controllership roles, or leading a family enterprise.',
      11: 'Yes, Economics or Financial Engineering, to master macroeconomic monetary policy and algorithmic market trading.'
    }
  }
];

export const analyticalInsights = [
  {
    title: '1. Shared Passion for Practical & Creative Problem Solving',
    description: 'Students across all 10 degree programs emphasize that what they love most is tangible application: designing livable spaces, uncovering investigative stories, closing trade contracts, teaching languages, cooking ancestral recipes, litigation defense, robotics, and strategic business leadership.',
    metric: '10 out of 10 careers',
    tag: 'Disciplinary Motivation'
  },
  {
    title: '2. Interviewer-Assessed English Level Distribution',
    description: 'Based on the interviewers’ pedagogical evaluation during oral fieldwork, 75% of respondents demonstrate intermediate communicative competency (B1/B2), with professional reading being strong while spontaneous speaking registers remain the main area for improvement.',
    metric: '75% Intermediate (B1/B2)',
    tag: 'Language Proficiency'
  },
  {
    title: '3. Ugus as an Iconic Symbol of Campus Empathy & Community',
    description: 'All interviewed students instantly recognized Ugus (the campus pet) and detailed responsible care protocols: avoiding harmful human leftovers, keeping clean water bowls in courtyards, respecting his quiet resting spots, and supporting student veterinary campaigns.',
    metric: '100% Campus Awareness',
    tag: 'Campus Mascot & Welfare'
  },
  {
    title: '4. Interdisciplinary Vision as a Professional Superpower',
    description: 'When asked about studying another career (Q11), every single student selected a complementary degree (e.g., Law + Philosophy, Architecture + Civil Engineering, Engineering + Biomedicine, Languages + Psychology, Administration + Industrial Engineering) rather than an unrelated field.',
    metric: 'Strategic Lifelong Learning',
    tag: 'Interdisciplinary Mindset'
  }
];
