export type ResourceCategory = 'Mock papers' | 'Notes' | 'Teaching materials';

export type StudyResource = {
  title: string;
  provider: string;
  url: string;
  category: ResourceCategory;
  access: string;
};

export type ChapterSummary = { title: string; summary: string };

const summaries: Record<string, ChapterSummary[]> = {
  Mathematics: [
    { title: 'Number and proportion', summary: 'Use factors, multiples, fractions, decimals, percentages and ratio to compare quantities. Estimate first, keep units consistent, and check whether an answer is reasonable.' },
    { title: 'Algebra and graphs', summary: 'Translate statements into expressions, simplify by collecting like terms, solve equations with the same operation on both sides, and use coordinates to describe relationships.' },
    { title: 'Geometry and data', summary: 'Use angle facts and measurement formulae with labelled diagrams. For statistics, choose a suitable display and describe centre, spread and patterns in context.' },
  ],
  'Additional Mathematics': [
    { title: 'Functions and graphs', summary: 'Treat a function as a mapping from permitted inputs to outputs. Use notation, transformations and intersections to interpret graphs and solve equations.' },
    { title: 'Calculus', summary: 'Differentiation describes rate of change and stationary points; integration accumulates change and area. State the variable and include a constant of integration when needed.' },
    { title: 'Trigonometry', summary: 'Connect angles and side ratios, use identities to simplify expressions, and check the domain and units before solving trigonometric equations.' },
  ],
  'Mathematics Extended Part 1': [
    { title: 'Number and algebra', summary: 'Work accurately with surds, indices, logarithms and algebraic fractions. Record restrictions before cancelling or taking logarithms.' },
    { title: 'Functions and calculus', summary: 'Read function notation and transformations, then connect derivatives to gradients and rates of change in a stated context.' },
  ],
  'Mathematics Extended Part 2': [
    { title: 'Calculus applications', summary: 'Use differentiation to locate and classify stationary points. Use integration to find accumulated quantities and areas, with limits clearly stated.' },
    { title: 'Probability and statistics', summary: 'Choose a probability model that matches the assumptions, show the event being calculated, and interpret the result in context.' },
  ],
  English: [
    { title: 'Reading for meaning', summary: 'Identify the writer\'s purpose, audience and viewpoint. Support inferences with precise evidence and explain how a word or structural choice shapes meaning.' },
    { title: 'Writing and language', summary: 'Plan for audience and purpose, organize ideas into coherent paragraphs, vary sentence structures, and edit for accurate grammar, spelling and tone.' },
    { title: 'Listening and speaking', summary: 'Listen for main ideas, detail and attitude. In discussion, make a clear point, support it with reasons and respond directly to others.' },
  ],
  Chinese: [
    { title: '閱讀理解', summary: '先掌握文章主旨，再找出支持答案的關鍵句。回答推論題時，結合文本證據和合理解釋。' },
    { title: '寫作與表達', summary: '按題目、對象和文體選材；段落要有中心句和例子，完成後檢查語句、標點和前後連貫。' },
    { title: '詞語與修辭', summary: '從上下文判斷詞義，留意詞語感情色彩；分析修辭時說明表達效果，而不只指出名稱。' },
  ],
  Biology: [
    { title: 'Cells and life processes', summary: 'Relate cell structures to their functions. Explain how specialised cells, transport and energy transfer support life processes.' },
    { title: 'Inheritance and variation', summary: 'Distinguish genes, alleles and chromosomes. Use evidence to explain inheritance, variation and how selection can change populations.' },
    { title: 'Ecology', summary: 'Trace energy through food chains and webs, distinguish energy flow from nutrient cycling, and explain how changes affect populations.' },
  ],
  Chemistry: [
    { title: 'Particles and bonding', summary: 'Use particle arrangements and bonding to explain properties. Connect observable changes to models of atoms, ions and molecules.' },
    { title: 'Reactions and quantities', summary: 'Balance equations to conserve atoms, identify limiting information, and show mole calculations with units and significant figures.' },
    { title: 'Acids, rates and energy', summary: 'Describe reaction evidence, explain rate changes using collision ideas, and distinguish energy transferred to or from the surroundings.' },
  ],
  Physics: [
    { title: 'Motion and forces', summary: 'Use distance, displacement, speed, velocity and acceleration precisely. Draw force diagrams and connect resultant force to changes in motion.' },
    { title: 'Energy and waves', summary: 'Track energy transfers and conservation. For waves, distinguish frequency, wavelength, amplitude and speed, and use consistent units.' },
    { title: 'Electricity and fields', summary: 'Model current, potential difference and resistance in a circuit. Explain field interactions and show substitutions when using equations.' },
  ],
  'Integrated Science': [
    { title: 'Scientific investigation', summary: 'Ask a testable question, identify variables, control conditions, repeat measurements and use evidence to support a conclusion.' },
    { title: 'Matter, energy and systems', summary: 'Use particle and energy models to explain everyday changes, then identify the inputs, outputs and interactions in a system.' },
    { title: 'Living systems and environment', summary: 'Connect structures to functions in organisms and explain how changes in one part of an ecosystem can affect other populations.' },
  ],
  Geography: [
    { title: 'Patterns and processes', summary: 'Describe spatial patterns with evidence, explain the physical or human processes behind them, and use scale and location accurately.' },
    { title: 'Fieldwork and data', summary: 'Match methods to a question, record reliable observations, present data clearly and evaluate limitations before drawing conclusions.' },
    { title: 'People, place and sustainability', summary: 'Compare stakeholder perspectives, weigh short- and long-term impacts, and justify responses using evidence from different scales.' },
  ],
  History: [
    { title: 'Evidence and interpretation', summary: 'Separate source content from inference. Consider origin, purpose and context, then compare sources before judging how useful they are.' },
    { title: 'Change and continuity', summary: 'Build explanations around causes, consequences and turning points. Support claims with specific evidence and consider more than one factor.' },
    { title: 'Chronology and significance', summary: 'Place events in context and explain why they mattered to different groups, both at the time and over the longer term.' },
  ],
  'Chinese History': [
    { title: '政權與制度', summary: '按時序整理政權更替和制度變化，並分析政治、經濟和社會因素如何互相影響。' },
    { title: '史料與因果', summary: '先辨認史料背景和立場，再比較不同證據；解釋事件時區分遠因、近因和直接結果。' },
    { title: '人物與歷史評價', summary: '以具體史實評估人物或政策的影響，並說明評價會因時代背景和觀點而不同。' },
  ],
  Economics: [
    { title: 'Markets and choices', summary: 'Use scarcity and opportunity cost to explain choices. Show how demand and supply changes affect equilibrium, then distinguish a shift from movement along a curve.' },
    { title: 'Macroeconomic objectives', summary: 'Compare growth, inflation, employment and external balance. Explain trade-offs and use relevant indicators rather than assuming one policy solves every objective.' },
    { title: 'Policy and evaluation', summary: 'Explain a policy mechanism, identify who gains or loses, and evaluate likely effects over different time periods.' },
  ],
  'Business Studies': [
    { title: 'Business objectives and stakeholders', summary: 'Identify business aims and stakeholder interests, then explain where decisions create trade-offs between groups.' },
    { title: 'Operations and marketing', summary: 'Connect production choices to quality, cost and capacity. Match marketing decisions to a defined customer group and evidence.' },
    { title: 'Finance and performance', summary: 'Read basic financial information carefully, distinguish revenue from profit and use ratios with context to assess performance.' },
  ],
  'Business Management': [
    { title: 'Organizations and strategy', summary: 'Connect mission, objectives and strategy. Use internal and external evidence to explain why an organization chooses a particular direction.' },
    { title: 'People and operations', summary: 'Compare leadership and motivation approaches, then link operations decisions to quality, capacity and stakeholder needs.' },
    { title: 'Finance and evaluation', summary: 'Interpret financial data, state assumptions and evaluate options using both quantitative evidence and longer-term consequences.' },
  ],
  'Computer Science': [
    { title: 'Algorithms and programming', summary: 'Break a task into precise steps, trace variables carefully, and test normal, boundary and invalid inputs.' },
    { title: 'Data and systems', summary: 'Explain how data is represented and processed, and connect hardware, software, networks and security to a system\'s purpose.' },
    { title: 'Computational thinking', summary: 'Use decomposition, abstraction and pattern recognition to simplify a problem before choosing an algorithm or data structure.' },
  ],
  ICT: [
    { title: 'Information and data', summary: 'Choose suitable ways to collect, validate, organize and present data. Explain how data quality affects decisions.' },
    { title: 'Networks and security', summary: 'Describe how devices exchange information and assess risks such as weak authentication, unsafe sharing and data loss.' },
    { title: 'Digital solutions', summary: 'Define user needs, choose appropriate tools, test the result and consider accessibility, privacy and responsible use.' },
  ],
  'General Studies': [
    { title: 'People, community and health', summary: 'Use reliable observations and information to explain how choices, services and community conditions affect wellbeing.' },
    { title: 'Science and technology', summary: 'Ask questions about everyday phenomena, compare evidence and explain how a technology helps while considering its limitations.' },
    { title: 'Environment and society', summary: 'Connect human actions to environmental change and suggest practical responses at home, school and community level.' },
  ],
  'Citizenship and Social Development': [
    { title: 'Hong Kong and the nation', summary: 'Use evidence from credible sources to explain civic structures, identity and development, distinguishing facts from opinion.' },
    { title: 'Global development', summary: 'Compare perspectives on development issues and connect local experiences to wider economic, social and environmental changes.' },
    { title: 'Source-based discussion', summary: 'Identify a source\'s claim and evidence, check context and reliability, and form a balanced conclusion supported by facts.' },
  ],
  'Chinese Literature': [
    { title: '文本細讀', summary: '從情節、意象、語言和人物描寫找證據，說明它們如何共同建立主題和情感。' },
    { title: '文學手法', summary: '分析敘事角度、結構和修辭的效果，並把手法連繫到讀者感受及作品主旨。' },
    { title: '比較與評論', summary: '比較作品時先訂立清晰角度，再用具體文本細節支持判斷，避免只重述情節。' },
  ],
  'Literature in English': [
    { title: 'Close reading', summary: 'Track imagery, diction, tone and structure, then explain how details shape meaning rather than simply naming techniques.' },
    { title: 'Character and theme', summary: 'Build an interpretation from precise textual evidence and consider how a character or theme changes across the work.' },
    { title: 'Comparative response', summary: 'Organize comparison around a clear idea, integrate short quotations and explain similarities and differences in effect.' },
  ],
  'Visual Arts': [
    { title: 'Visual language', summary: 'Describe how line, shape, colour, texture, space and composition guide attention and communicate meaning.' },
    { title: 'Research and interpretation', summary: 'Connect an artwork to its context and intentions, using visual evidence instead of relying on unsupported opinion.' },
    { title: 'Developing a portfolio', summary: 'Document experiments, reflect on feedback and explain how each iteration moves an idea toward a resolved outcome.' },
  ],
  'Art and Design': [
    { title: 'Research and visual analysis', summary: 'Gather relevant references, annotate visual qualities and turn observations into a focused personal direction.' },
    { title: 'Materials and experimentation', summary: 'Test processes deliberately, record outcomes and use reflection to choose the next practical step.' },
    { title: 'Final outcome and evaluation', summary: 'Resolve work for its purpose and audience, then evaluate decisions with evidence from the development process.' },
  ],
  Music: [
    { title: 'Elements of music', summary: 'Listen for rhythm, pitch, texture, dynamics, timbre and structure, and describe how changes shape the character of a piece.' },
    { title: 'Reading and performance', summary: 'Practise short sections slowly, maintain pulse and use notation or listening cues to identify and correct errors.' },
    { title: 'Composition and reflection', summary: 'Develop a musical idea with contrast and structure, then explain how choices serve the intended effect.' },
  ],
  PE: [
    { title: 'Movement and performance', summary: 'Break a skill into observable phases, practise with feedback and connect technique to a measurable performance goal.' },
    { title: 'Training principles', summary: 'Match training to a goal, plan progression and recovery, and use evidence to judge whether a programme is effective.' },
    { title: 'Health and wellbeing', summary: 'Explain how physical activity supports health and identify safe, inclusive ways to participate.' },
  ],
  Psychology: [
    { title: 'Research methods', summary: 'Identify the question, variables, sample and procedure. Evaluate reliability, validity, ethics and whether conclusions follow from the evidence.' },
    { title: 'Approaches and explanations', summary: 'Compare how different approaches explain behaviour, noting assumptions, evidence and limitations.' },
    { title: 'Applying findings', summary: 'Use study findings carefully, distinguish correlation from causation and avoid generalizing beyond the sample.' },
  ],
  'Design and Applied Technology': [
    { title: 'Design process', summary: 'Define user needs and constraints, research options, develop alternatives and justify decisions against the brief.' },
    { title: 'Materials and systems', summary: 'Choose materials and processes for their properties, safety, sustainability and suitability for the intended use.' },
    { title: 'Prototyping and evaluation', summary: 'Test a prototype against measurable criteria, record feedback and explain how changes improve the design.' },
  ],
  'Tourism and Hospitality Studies': [
    { title: 'Tourism systems', summary: 'Explain how destinations, visitors, transport and services interact, and assess economic, social and environmental impacts.' },
    { title: 'Customer service', summary: 'Match service decisions to customer needs, communicate professionally and use feedback to improve the experience.' },
    { title: 'Planning and sustainability', summary: 'Balance visitor demand with local capacity and evaluate practical ways to protect people, place and resources.' },
  ],
  'Health Management and Social Care': [
    { title: 'Health and wellbeing', summary: 'Consider physical, mental and social dimensions of health, and explain how needs change across life stages.' },
    { title: 'Care and support', summary: 'Connect individual needs to appropriate services while respecting dignity, privacy, choice and safeguarding.' },
    { title: 'Health promotion', summary: 'Assess evidence behind a health message and consider accessibility, audience and barriers to participation.' },
  ],
  'Technology and Living': [
    { title: 'Food, nutrition and health', summary: 'Relate food choices to nutritional needs, safe handling and the wider context of budget, culture and sustainability.' },
    { title: 'Consumer and family decisions', summary: 'Compare options using reliable information and explain how household decisions affect wellbeing and resources.' },
    { title: 'Design for living', summary: 'Identify a user need, develop a practical solution and evaluate safety, usability, cost and environmental impact.' },
  ],
};

const resource = (
  category: ResourceCategory,
  title: string,
  provider: string,
  url: string,
  access: string,
): StudyResource => ({ category, title, provider, url, access });

const hkeaaPapers = resource(
  'Mock papers',
  'HKDSE examination papers and marking schemes',
  'Hong Kong Examinations and Assessment Authority',
  'https://www.hkeaa.edu.hk/en/resources/publications/list_of_publications/hkdse_erqp_pub/',
  'Official catalogue; some materials are paid or subject to access terms.',
);

const cambridgePapers = resource(
  'Mock papers',
  'IGCSE past papers and specimen-paper access',
  'Cambridge International',
  'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/',
  'Official subject hub; past-paper availability can depend on school access.',
);

const ibPapers = resource(
  'Mock papers',
  'IB Diploma sample examination papers',
  'International Baccalaureate',
  'https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/sample-exam-papers/',
  'Official sample materials; some resources require school access.',
);

const hkeaaResources = resource(
  'Teaching materials',
  'HKDSE assessment information and subject resources',
  'Hong Kong Examinations and Assessment Authority',
  'https://www.hkeaa.edu.hk/en/hkdse/',
  'Official exam structure and assessment information.',
);

const edbSecondary = resource(
  'Teaching materials',
  'Secondary curriculum learning and teaching resources',
  'Hong Kong Education Bureau',
  'https://www.edb.gov.hk/en/curriculum-development/kla/index.html',
  'Official curriculum materials; check the selected level and subject.',
);

const edbPrimary = resource(
  'Teaching materials',
  'Primary curriculum learning materials',
  'Hong Kong Education Bureau',
  'https://www.edb.gov.hk/en/curriculum-development/major-level-of-edu/primary/materials/index.html',
  'Official primary teaching and learning materials.',
);

const cambridgeSyllabus = resource(
  'Teaching materials',
  'IGCSE syllabuses and subject information',
  'Cambridge International',
  'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/',
  'Official syllabus information; select the matching subject and exam series.',
);

const ibCurriculum = resource(
  'Teaching materials',
  'Diploma Programme curriculum and subject information',
  'International Baccalaureate',
  'https://www.ibo.org/programmes/diploma-programme/curriculum/',
  'Official programme information; check your subject guide and course level.',
);

const ibAssessment = resource(
  'Teaching materials',
  'Diploma Programme assessment and exams',
  'International Baccalaureate',
  'https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/',
  'Official assessment information and exam guidance.',
);

const khanMath = resource('Notes', 'Math lessons and practice', 'Khan Academy', 'https://www.khanacademy.org/math', 'Free concept explanations and exercises; supplementary, not a syllabus map.');
const khanScience = resource('Notes', 'Science lessons and practice', 'Khan Academy', 'https://www.khanacademy.org/science', 'Free concept explanations and exercises; supplementary, not a syllabus map.');
const khanHumanities = resource('Notes', 'Economics and history lessons', 'Khan Academy', 'https://www.khanacademy.org/humanities', 'Free topic lessons; compare content with your course syllabus.');
const khanComputing = resource('Notes', 'Computing lessons', 'Khan Academy', 'https://www.khanacademy.org/computing', 'Free computing lessons and exercises; supplementary course support.');
const britishCouncil = resource('Notes', 'English learning activities', 'British Council LearnEnglish', 'https://learnenglish.britishcouncil.org/', 'Free reading, listening, grammar and vocabulary activities.');
const recurso = resource('Notes', 'DSE revision notes and practice', 'Recurso', 'https://recurso.com.hk/', 'Free Hong Kong exam-focused resources; verify subject and exam year on the page.');

const pmtResources: Record<string, StudyResource> = {
  Mathematics: resource('Notes', 'IGCSE Mathematics notes and questions', 'Physics & Maths Tutor', 'https://www.physicsandmathstutor.com/maths-revision/igcse-cie/', 'Free CIE-specific revision materials; check your syllabus code.'),
  Biology: resource('Notes', 'IGCSE Biology notes and questions', 'Physics & Maths Tutor', 'https://www.physicsandmathstutor.com/biology-revision/igcse-cie/', 'Free CIE-specific revision materials; check your syllabus code.'),
  Chemistry: resource('Notes', 'IGCSE Chemistry notes and questions', 'Physics & Maths Tutor', 'https://www.physicsandmathstutor.com/chemistry-revision/igcse-cie/', 'Free CIE-specific revision materials; check your syllabus code.'),
  Physics: resource('Notes', 'IGCSE Physics notes and questions', 'Physics & Maths Tutor', 'https://www.physicsandmathstutor.com/physics-revision/igcse-cie/', 'Free CIE-specific revision materials; check your syllabus code.'),
};

const dsePaperLinks: Record<string, StudyResource[]> = {
  Geography: [resource('Mock papers', '2025 DSE Geography Paper 1 multiple-choice practice and solutions', 'Recurso', 'https://recurso.com.hk/dse-a/geog/p1mc-2025/', 'Free online practice; check the paper year and syllabus.' )],
  'Chinese Literature': [
    resource('Mock papers', '2025/26 Chinese Literature Paper 1', 'Recurso', 'https://recurso.com.hk/wp-content/uploads/2526-RECURSO-CHLIT-1.pdf', 'Free PDF practice paper.'),
    resource('Mock papers', '2025/26 Chinese Literature Paper 2', 'Recurso', 'https://recurso.com.hk/wp-content/uploads/2526-RECURSO-CHLIT-2.pdf', 'Free PDF practice paper.'),
  ],
};

function subjectSupport(subject: string, grade: string): StudyResource[] {
  const support: StudyResource[] = [];
  if (['Mathematics', 'Additional Mathematics', 'Mathematics Extended Part 1', 'Mathematics Extended Part 2'].includes(subject)) support.push(khanMath);
  else if (['Biology', 'Chemistry', 'Physics', 'Integrated Science', 'General Studies'].includes(subject)) support.push(khanScience);
  else if (['Economics', 'History', 'Chinese History', 'Business Studies', 'Business Management', 'Psychology', 'Geography', 'Citizenship and Social Development'].includes(subject)) support.push(khanHumanities);
  else if (['Computer Science', 'ICT', 'Design and Applied Technology'].includes(subject)) support.push(khanComputing);
  else if (subject === 'English' || subject === 'Literature in English') support.push(britishCouncil);

  if (grade === 'IGCSE' && pmtResources[subject]) support.push(pmtResources[subject]);
  if (grade.startsWith('HK S') && /^HK S[456]$/.test(grade)) support.push(recurso);
  return support;
}

export function getChapterSummaries(subject: string): ChapterSummary[] {
  return summaries[subject] ?? [
    { title: `${subject}: key ideas`, summary: `List the central terms and explain each in your own words. Connect each idea to an example from your class notes.` },
    { title: `${subject}: applying what you know`, summary: 'Work through a representative example, show the reasoning in order and check that your conclusion answers the question.' },
    { title: `${subject}: review and reflect`, summary: 'Summarize the chapter without looking at your notes, then use a question or source to identify what needs another review.' },
  ];
}

export function getStudyResources(grade: string, subject: string): StudyResource[] {
  const resources: StudyResource[] = [];
  const isHongKong = grade.startsWith('HK ');
  const isDse = /^HK S[456]$/.test(grade);

  if (isHongKong) {
    resources.push(grade.startsWith('HK P') ? edbPrimary : edbSecondary);
    if (subject === 'Mathematics' && /^HK S[123]$/.test(grade)) {
      resources.push(resource('Teaching materials', 'Junior secondary Mathematics handouts', 'Hong Kong Education Bureau', 'https://www.edb.gov.hk/en/curriculum-development/kla/ma/res/js/handout.html', 'Official subject handouts.'));
    }
    if (subject === 'Mathematics' && isDse) {
      resources.push(resource('Teaching materials', 'Senior secondary Mathematics handouts', 'Hong Kong Education Bureau', 'https://www.edb.gov.hk/en/curriculum-development/kla/ma/res/ss/handoutss.html', 'Official subject handouts.'));
    }
    if (subject === 'English' && grade.startsWith('HK S')) {
      resources.push(resource('Teaching materials', 'Secondary English learning and teaching resources', 'Hong Kong Education Bureau', 'https://www.edb.gov.hk/en/curriculum-development/kla/eng-edu/references-resources/resource%20sec_AaL.html', 'Official secondary English resources.'));
    }
    if (isDse) {
      resources.push(hkeaaResources, hkeaaPapers, ...(dsePaperLinks[subject] ?? []));
    }
  } else if (grade === 'IGCSE') {
    resources.push(cambridgeSyllabus, cambridgePapers);
  } else if (grade === 'IB') {
    resources.push(ibCurriculum, ibAssessment, ibPapers);
  }

  resources.push(...subjectSupport(subject, grade));
  if (grade === 'IGCSE' || grade === 'IB') {
    resources.push(resource('Teaching materials', `${subject} learning resources`, grade === 'IGCSE' ? 'Cambridge International' : 'International Baccalaureate', grade === 'IGCSE' ? 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/' : 'https://www.ibo.org/programmes/diploma-programme/curriculum/', 'Use the official subject syllabus or guide to check topic coverage.'));
  }

  return resources.filter((item, index, list) => list.findIndex(other => other.url === item.url && other.category === item.category) === index);
}