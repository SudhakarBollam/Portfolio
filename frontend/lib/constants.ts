// lib/constants.ts
// All portfolio content and data organized in one place

export const PROFILE = {
  name: 'Sudhakar Bollam',
  role: 'Full-Stack Developer & AI Enthusiast',
  bio: 'B.Tech student specializing in Artificial Intelligence and Data Science. Passionate about building innovative full-stack solutions that merge modern web technologies with data-driven insights.',
  email: 'sudhakarbollam711948@gmail.com',
  phone: '+91 6305711948',
  location: 'Bhimavaram, Andhra Pradesh, India',
  profileImage: 'https://res.cloudinary.com/dvrusfmtu/image/upload/v1730278588/Portfolio_mainPic-Photoroom_uh2vph.png',
  aboutImage: 'https://res.cloudinary.com/qpkoucgc/image/upload/v1785620513/me_smpxlz.jpg',
  resumeUrl: 'https://drive.google.com/file/d/13HBNrBFZxheAoDo3NRTRn6PCwAtJTj7H/view?usp=sharing', // Add your resume to public folder
};

export const HERO_HIGHLIGHTS = [
  'Full-Stack Developer (MERN)',
  'Proficient in Java, Python & DSA',
  'Built ML projects, RAG & AI agents',
  'Winner, Amaravathi Quantum Valley Hackathon Finals',
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/SudhakarBollam',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sudhakarbollam/',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/SudhakarBollam6',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:sudhakarbollam711948@gmail.com',
    icon: 'Mail',
  },
];

export const SKILLS = {
  Languages: [
    { name: 'Java', icon: 'Code' },
    { name: 'Python', icon: 'Code' },
    { name: 'JavaScript', icon: 'Zap' },
    { name: 'SQL', icon: 'Database' },
    { name: 'C++', icon: 'Code' },
  ],
  Web: [
    { name: 'React.js', icon: 'Zap' },
    { name: 'Node.js', icon: 'Server' },
    { name: 'Express.js', icon: 'Server' },
    { name: 'HTML', icon: 'Code' },
    { name: 'CSS', icon: 'Palette' },
    { name: 'Tailwind CSS', icon: 'Palette' },
    { name: 'Bootstrap', icon: 'Grid' },
    { name: 'REST APIs', icon: 'Network' },
  ],
  Databases: [
    { name: 'MySQL', icon: 'Database' },
    { name: 'SQLite', icon: 'Database' },
    { name: 'MongoDB', icon: 'Database' },
  ],
  'Core CS': [
    { name: 'Data Structures & Algorithms', icon: 'Layers' },
    { name: 'OOP', icon: 'BookOpen' },
    { name: 'Operating Systems', icon: 'Cpu' },
    { name: 'DBMS', icon: 'Database' },
    { name: 'Computer Networks', icon: 'Network' },
  ],
  'ML & AI': [
    { name: 'Scikit-learn', icon: 'Brain' },
    { name: 'TensorFlow', icon: 'Brain' },
    { name: 'Pandas', icon: 'Brain' },
    { name: 'NumPy', icon: 'Brain' },
    { name: 'MobileNetV2', icon: 'Brain' },
    { name: 'Hugging Face', icon: 'Brain' },
    { name: 'ChromaDB', icon: 'Database' },
    { name: 'RAG', icon: 'Sparkles' },
    { name: 'Langchain', icon: 'Sparkles' },
    { name: 'LLMs', icon: 'Sparkles' },
  ],
  Quantum: [
    { name: 'Qiskit', icon: 'Atom' },
    { name: 'IBM Quantum', icon: 'Atom' },
    { name: 'Superdense Coding', icon: 'Atom' },
    { name: 'E91 QKD', icon: 'Atom' },
    { name: 'Quantum Error Correction', icon: 'Atom' },
  ],
  Tools: [
    { name: 'Git', icon: 'GitBranch' },
    { name: 'GitHub', icon: 'GitBranch' },
    { name: 'VS Code', icon: 'Terminal' },
    { name: 'Jupyter Notebook', icon: 'BookOpen' },
    { name: 'Google Colab', icon: 'Cloud' },
  ],
};

export const GITHUB_REPOS_URL = 'https://github.com/SudhakarBollam?tab=repositories';

export const EXPERIENCE = [
  {
    id: 1,
    title: '1M1B Green Internship',
    company: 'GitHub',
    date: 'May – June 2025',
    bullets: [
      'Developed a deep learning-based waste segregation system using TensorFlow and MobileNetV2 transfer learning, achieving 85–88% classification accuracy for recyclable waste detection.',
      'Built data-driven sustainability insights using Tableau and ESG datasets (5K+ records), supporting waste management strategies to improve recycling efficiency and reduce carbon footprint.',
    ],
    icon: 'Leaf',
  },
  {
    id: 2,
    title: 'MERN Stack 24-Hour Hackathon',
    company: 'College Hackathon',
    date: '2024',
    description: 'Participated in an intense 24-hour hackathon and secured a merit certificate for innovative MERN stack solution.',
    icon: 'Trophy',
  },
  {
    id: 3,
    title: 'Generative AI Workshop',
    company: 'nxtWave (Microsoft SDE)',
    date: '2024',
    description: 'Completed a pitch-ready project using 10+ generative AI tools. Created AI-powered landing page and video presentation.',
    icon: 'Zap',
  },
  {
    id: 4,
    title: 'AWS Workshop',
    company: 'Amazon Web Services',
    date: '2024',
    description: 'Hands-on workshop covering AWS cloud services, deployment, and scalable architecture design.',
    icon: 'Cloud',
  },
  {
    id: 5,
    title: 'Full-Stack Web Development',
    company: 'NxtWave',
    date: '2023 - Present',
    description: 'Comprehensive course covering HTML, CSS, Bootstrap, JavaScript, React, Node.js, and databases.',
    icon: 'Code',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'AI Powered Waste Segregation',
    description: 'Developed a deep learning-based waste segregation system using TensorFlow and MobileNetV2 transfer learning, achieving 85–88% classification accuracy for recyclable waste detection.',
    tags: ['TensorFlow', 'MobileNetV2', 'Deep Learning', 'Computer Vision', 'Python'],
    image: 'https://res.cloudinary.com/qpkoucgc/image/upload/v1785621834/f3162f7c-d8d8-42d4-8a4b-017b53724e06_dgbyge.png',
    url: 'https://github.com/SudhakarBollam/AI_Waste_Segregation',
    pitchUrl: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Crypto Portfolio & Trade Intelligence Platform',
    description: 'Full-stack demo: Node.js (Express) + MongoDB REST API with JWT authentication, role-based access control (User, Admin, Analyst), trade journaling with filtering and pagination, analyst analytics, CoinGecko market data, Swagger docs, rate limiting, structured logging, and a React (Vite) client with dark mode, protected routes, and CRUD UX.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT', 'CoinGecko'],
    image: 'https://res.cloudinary.com/qpkoucgc/image/upload/v1785621557/Screenshot_2026-08-02_032802_jk4uuw.png',
    url: 'https://github.com/SudhakarBollam/CRYPTO_TRADE_APP',
    pitchUrl: '',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-Time Multiplayer Drawing Game',
    description: 'Built and deployed a scalable MERN-based multiplayer drawing game using React, Node.js, Express.js, MongoDB, and Socket.IO featuring room creation, turn-based gameplay, live chat, score tracking, and real-time synchronization across multiple users.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'MERN'],
    image: 'https://res.cloudinary.com/qpkoucgc/image/upload/v1785621557/Screenshot_2026-08-02_032802_jk4uuw.png',
    url: 'https://github.com/SudhakarBollam/skribbl',
    pitchUrl: '',
    featured: true,
  },
  {
    id: 4,
    title: 'Quantum Secure Communication System',
    description: 'Developed a quantum-secure communication prototype using Python, Qiskit, Flask, React, and IBM Quantum Cloud implementing Superdense Coding, quantum noise simulation, and Shor’s 9-Qubit Error Correction Code.',
    tags: ['Python', 'Qiskit', 'IBM Quantum', 'React', 'Flask', 'Quantum'],
    image: 'https://res.cloudinary.com/qpkoucgc/image/upload/v1785621404/ChatGPT_Image_Aug_2_2026_03_26_26_AM_aaopoe.png',
    url: 'https://github.com/SudhakarBollam/AQVH_Superdense-coding',
    pitchUrl: 'ADD_GITHUB_URL_HERE',
    featured: true,
  },
  {
    id: 5,
    title: 'AutoML-RAG',
    description: 'Built an end-to-end AutoML pipeline using Scikit-learn and integrated LangChain, Hugging Face embeddings, and ChromaDB to enable Retrieval-Augmented Generation (RAG) for intelligent dataset querying and AI-driven analytics.',
    tags: ['Python', 'Scikit-learn', 'LangChain', 'ChromaDB', 'Hugging Face', 'RAG'],
    image: 'https://res.cloudinary.com/qpkoucgc/image/upload/v1785621077/ChatGPT_Image_Aug_2_2026_03_20_56_AM_ykun21.png',
    url: 'https://github.com/SudhakarBollam/AutoML_RAG',
    pitchUrl: 'ADD_GITHUB_URL_HERE',
    featured: true,
  },
];
export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Winner – Amaravathi Quantum Valley Hackathon Grand Finale',
    date: 'Feb 6, 2026',
    description:
      'Designed secure aircraft communication using Superdense Coding integrated with E91 protocol.',
    proofUrl: '',
  },
  {
    id: 2,
    title: 'Won – National-Level MERN Stack Hackathon',
    date: 'April 6, 2024',
    description:
      'Recognized for outstanding performance in a competitive national-level MERN stack development hackathon.',
    proofUrl:
      'https://res.cloudinary.com/dvrusfmtu/image/upload/v1730654492/projectMERN_hbiip6.jpg',
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco',
    date: '2024',
    description: 'Foundational and intermediate Python programming certification from Cisco Networking Academy.',
    proofUrl:
      'https://res.cloudinary.com/dvrusfmtu/image/upload/v1730656539/Screenshot_2024-11-03_232438_kj2wac.png',
  },
  {
    id: 2,
    title: 'Introduction to Databases (SQL)',
    issuer: 'NxtWave',
    date: '2024',
    description: 'Comprehensive SQL training covering relational database design, queries, and data management.',
    proofUrl: '',
  },
  {
    id: 3,
    title: 'Node.js Certification',
    issuer: 'NxtWave',
    date: '2024',
    description:
      'REST APIs, JWT authentication, and development of scalable backend services with Node.js and Express.',
    proofUrl: '',
  },
  {
    id: 4,
    title: 'Building and Deploying Applications on AWS',
    issuer: 'NxtWave',
    date: '2024',
    description:
      'Hands-on AWS deployment covering EC2, RDS, Route 53, S3, and CloudFront for production-ready applications.',
    proofUrl: '',
  },
  {
    id: 5,
    title: 'IoT',
    issuer: 'NPTEL',
    date: '2024',
    description: 'Internet of Things fundamentals covering sensors, connectivity, and embedded system integration.',
    proofUrl: '',
  },
];

export const TECH_STACK = [
  {
    category: 'Frontend',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'Backend',
    technologies: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Nodemailer',
    ],
  },
  {
    category: 'Databases',
    technologies: [
      'MongoDB',
      'SQL',
      'Firebase',
    ],
  },
  {
    category: 'Tools & Services',
    technologies: [
      'Git & GitHub',
      'VS Code',
      'Figma',
      'AWS',
      'Vercel',
      'Cloudinary',
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    institution: 'SRKR Engineering College',
    degree: 'B.Tech',
    field: 'Artificial Intelligence & Data Science',
    year: '2022 - 2026',
    details: 'Currently pursuing B.Tech with specialization in AI and Data Science. Focus on modern web development and software engineering practices.',
  },
  {
    id: 2,
    institution: 'nxtWave',
    degree: 'Full-Stack Web Development Course',
    field: 'Web Development',
    year: '2023 - Present',
    details: 'Comprehensive course covering HTML, CSS, Bootstrap, JavaScript, React, Node.js, and database management.',
  },
  {
    id: 3,
    institution: 'Narayana Junior College',
    degree: 'Intermediate (Class 11 & 12)',
    field: 'Science',
    year: '2020 - 2022',
    details: 'Strong foundation in Physics, Chemistry, and Mathematics.',
  },
  {
    id: 4,
    institution: 'Aditya Public School',
    degree: 'Secondary School Certificate',
    field: 'General Education',
    year: '2008 - 2020',
    details: 'Completed secondary education with strong fundamentals in all subjects.',
  },
];
