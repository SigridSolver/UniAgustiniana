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
  sampleDescription: 'Verified cohort of 8 undergraduate students surveyed in Film and Television (Cine y Televisión), Campus Tagaste, Bogotá (Academic Year 2026).'
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
  }
];

export const universityCareersList: string[] = [
  'Film and Television (Cine y Televisión)',
  'Architecture (Arquitectura)',
  'Social Communication (Comunicación Social)',
  'International Business (Negocios Internacionales)',
  'Foreign Languages Degree (Licenciatura en Lenguas Extranjeras)',
  'Gastronomy (Gastronomía)',
  'Law (Derecho)',
  'Engineering (Ingenierías)',
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
  }
];

export const analyticalInsights = [
  {
    title: '1. Program Motivation & Favorite Subjects (Q1 & Q2)',
    description: 'In the official Film and Television survey, 63% (5 students) chose Photography as what they like most, while 37% (3 students) highlighted university spaces. Photoshop (38%) and Photography (38%) tied as top subjects, followed by Narrative Workshop (25%).',
    metric: '63% Photography · 38% Photoshop',
    tag: 'Disciplinary Passion'
  },
  {
    title: '2. Unanimous Spatial Attachment: Green Areas (Q3)',
    description: '100% of surveyed students (8 out of 8) in Film and Television chose the green area of the campus as their favorite part of UniAgustiniana, praising its light, outdoor peace, and utility for script reading.',
    metric: '100% Green Areas Consensus',
    tag: 'Campus Spatial Attachment'
  },
  {
    title: '3. Professional Media Projection: RCN, Caracol & Netflix (Q4 & Q8)',
    description: '100% of students see themselves doing internships with RCN and Caracol TV (50% specifically targeting both networks together). In addition, 88% project practicing their career in television, film, and Netflix, with 1 student targeting visual effects in Canada.',
    metric: '100% RCN/Caracol · 88% Netflix',
    tag: 'Industry & Employability'
  },
  {
    title: '4. International Mobility & Hugos Mascot Care (Q6 & Q7)',
    description: '75% desire an international exchange to the USA/Hollywood and Mexico; 25% prioritize staying in Colombia. For campus mascot Hugos, 63% prioritize taking care of his green habitat, while 37% have not encountered him yet.',
    metric: '75% Exchange · 63% Habitat Care',
    tag: 'Internationalization & Welfare'
  }
];
