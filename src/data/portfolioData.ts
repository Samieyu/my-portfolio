import { Project, Certificate, SkillCategory, TimelineItem, CyberTrack } from '../types';

export const personalInfo = {
  name: "Samuel Woldemeskel",
  fullName: "Samuel Woldemeskel Wolde",
  title: "Software Engineering Student & Cybersecurity Enthusiast",
  headline: "Building Secure Digital Solutions Through Code and Creativity.",
  shortBio: "4th-year, 1st-semester Software Engineering student at Wachemo University, Ethiopia. Passionate about external & web penetration testing, secure software engineering, full-stack systems, and creative digital media.",
  fullBio: `I am a technology enthusiast and 4th-year Software Engineering student at Wachemo University with a deep passion for cybersecurity, secure software design, and digital innovation. 

Having participated in the prestigious 5th Batch of the INSA Cyber Talent Summer Camp in Ethiopia, I am actively building practical knowledge across external penetration testing, internal security assessments, web application security, SOC monitoring, and SIEM analysis using Kali Linux, Wazuh, Suricata, and virtualized lab environments.

Parallel to my cybersecurity journey, I develop full-stack web applications and cross-platform mobile apps with React, Node.js, Flutter, and cloud databases like Neon PostgreSQL and Firebase. Beyond engineering, I bring 6 years of piano performance and creative visual design skills in Adobe Photoshop and Illustrator, bringing a unique blend of discipline, aesthetic sensitivity, and technical rigor to everything I build.`,
  email: "samiweldemeskel@gmail.com",
  phone: "+251959828576",
  location: "Hossana / Addis Ababa, Ethiopia",
  university: "Wachemo University",
  department: "Software Engineering",
  academicStatus: "4th-Year, 1st-Semester Student",
  github: "https://github.com/Samieyu",
  linkedin: "https://linkedin.com/in/samuel-woldemeskel-956727354",
  telegram: "https://t.me/sameEyuW",
  telegramHandle: "@sameEyuW",
  creativePortfolioUrl: "https://scintillating-mooncake-34adbd.netlify.app/",
  creativeGithub: "https://github.com/Samieyu/Portfolio",
  profileImage: "/assets/samuel.jpg",
  cvPath: "/assets/Samuel_Woldemeskel_CV.pdf"
};

export const careerVision = {
  shortTerm: "Secure a challenging internship in Cybersecurity or Software Engineering at organizations like INSA or leading technology enterprises; master external, internal, and web application penetration testing while shipping production-grade applications.",
  longTerm: "Evolve into a world-class Cybersecurity Engineer and Security Researcher who builds resilient digital infrastructure, bridges AI with defensive and offensive security operations, and contributes impactful solutions to Ethiopia and the international tech ecosystem.",
  values: [
    { title: "Continuous Learning", desc: "Always exploring emerging vulnerabilities, modern frameworks, and novel defense mechanisms." },
    { title: "Practical Discipline", desc: "Building hands-on labs, writing real code, and testing real-world attack & defense scenarios." },
    { title: "Integrity & Ethics", desc: "Committed to responsible disclosure, legal security testing, and ethical hacking standards." },
    { title: "Creative Synergy", desc: "Combining musical rhythm and graphic design intuition with rigorous software architecture." }
  ]
};

export const projectsData: Project[] = [
  {
    id: "melodypass",
    title: "MelodyPass — Digital Music Album Platform",
    subtitle: "QR-code Access Control & Secure Streaming Architecture",
    category: "fullstack",
    description: "A production digital music album access platform where users scan physical QR codes, register securely, and stream premium music using unique 6-character access tokens with device-based access control.",
    keyFeatures: [
      "Physical-to-digital QR code authentication workflow",
      "Cryptographically generated unique 6-character access codes",
      "Device-based access control concept to prevent unauthorized credential sharing",
      "RESTful backend API deployed on Render with Neon PostgreSQL",
      "Ultra-responsive mobile-first player UI hosted on Vercel"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "Neon PostgreSQL", "Vercel", "Render"],
    liveUrl: "https://singer-abener.vercel.app/",
    backendLiveUrl: "https://melodypass-backend-5gs1.onrender.com",
    githubUrl: "https://github.com/Samieyu/melodypass-frontend",
    backendGithubUrl: "https://github.com/Samieyu/melodypass-backend",
    roleBadge: "Full-Stack Creator"
  },
  {
    id: "penuel-mkc",
    title: "Penuel MKC Church Management System",
    subtitle: "Role-Based Administrative Portal & Member CRM",
    category: "fullstack",
    description: "A comprehensive administrative MERN platform built for Penuel MKC to automate member directories, departmental records, financial oversight, and leadership communication workflows.",
    keyFeatures: [
      "Role-Based Access Control (Admin, Coordinator, Member)",
      "Secure stateless authentication using JWT tokens and bcrypt password hashing",
      "Dynamic administrative dashboards for member attendance and tracking",
      "REST API architecture with MongoDB schema validation",
      "Modern responsive UI with optimized database querying"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS", "Vercel", "Render"],
    liveUrl: "https://penuelmkc.vercel.app/",
    githubUrl: "https://github.com/Samieyu/Church-frontend",
    backendGithubUrl: "https://github.com/Samieyu/Church-backend",
    roleBadge: "Lead Full-Stack Developer"
  },
  {
    id: "ai-pentest-copilot",
    title: "AI SOC Analyst & Pentest Copilot",
    subtitle: "Threat Intelligence & Intelligent Log Reasoning",
    category: "cybersecurity",
    description: "An active research and engineering initiative exploring AI-assisted security monitoring. Integrates SIEM telemetry, Windows Event logs, and Suricata IDS alerts to provide human-readable threat explanations mapped to MITRE ATT&CK.",
    keyFeatures: [
      "Ingestion and automated parsing of Sysmon & Windows Security Event logs",
      "Integration concepts with Wazuh SIEM and Suricata Network IDS",
      "Automated MITRE ATT&CK tactic and technique correlation",
      "AI-driven incident triage: explains anomaly context and potential impact",
      "Generates actionable remediation playbooks for SOC analysts"
    ],
    techStack: ["Python", "Wazuh SIEM", "Suricata", "Sysmon", "Windows Event Logs", "MITRE ATT&CK", "AI/LLM"],
    githubUrl: "https://github.com/Samieyu/ai-pentest-copilot",
    isConcept: true,
    isInProgress: true,
    roleBadge: "Security Researcher / Concept"
  },
  {
    id: "lucy-ctf",
    title: "Lucy CTF — Security Labs & Exploits",
    subtitle: "Hands-on Offensive & Defensive Security Exercises",
    category: "cybersecurity",
    description: "A dedicated repository tracking practical penetration testing challenges, CTF write-ups, vulnerability assessment scripts, and hands-on Linux exploitation exercises.",
    keyFeatures: [
      "Network reconnaissance and service enumeration scripts",
      "Web application vulnerability testing (SQLi, XSS, IDOR vectors)",
      "Privilege escalation methodology notes for Linux & Windows",
      "Modular Python and Bash security automation utilities"
    ],
    techStack: ["Kali Linux", "Python", "Bash", "Nmap", "Burp Suite", "Metasploit", "WSL2"],
    githubUrl: "https://github.com/Samieyu/lucy-ctf",
    isInProgress: true,
    roleBadge: "CTF Researcher"
  },
  {
    id: "lezemer-lyrics",
    title: "Lezemer / Yisakor Lyrics Mobile App",
    subtitle: "Musical Scale & Choral Organization Ecosystem",
    category: "mobile",
    description: "A cross-platform mobile lyrics application tailored for musicians, singers, and choirs, structuring an extensive repertoire by musical scales, vocal styles, and multilingual categories.",
    keyFeatures: [
      "Categorization by musical scale, vocal genre, and song style",
      "Full offline support and client-side database caching",
      "Real-time Cloud Firestore synchronization and Firebase Storage assets",
      "Admin portal for authenticated lyric and chord sheet updates",
      "Dark mode-first mobile UX with customizable typography"
    ],
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Storage", "Provider State Management"],
    githubUrl: "https://github.com/Samieyu/lezemer_app",
    roleBadge: "Mobile Developer"
  },
  {
    id: "gymlearn-app",
    title: "GymLearn — Fitness & Workout Companion",
    subtitle: "Mobile Exercise Technique & Routine Guide",
    category: "mobile",
    description: "A sleek Flutter mobile app designed to educate fitness enthusiasts on proper biomechanics, workout splits, and structured exercise regimens with a fluid, modern interface.",
    keyFeatures: [
      "Interactive muscle-group breakdown and exercise catalog",
      "Structured routines categorized by fitness level",
      "Smooth micro-interactions and animated exercise instructions",
      "Clean Flutter state architecture with responsive UI elements"
    ],
    techStack: ["Flutter", "Dart", "Custom UI Components", "Mobile Responsive"],
    githubUrl: "https://github.com/Samieyu/gymlearn-flutter-app",
    roleBadge: "Mobile Developer"
  },
  {
    id: "dheirs-system",
    title: "DHEIRS — Digital Health Extension System",
    subtitle: "Healthcare Data Gathering & Reporting System",
    category: "academic",
    description: "An academic team software engineering project developed for Lich-Amba Primary Health Care Unit in Hossana, Ethiopia to streamline community healthcare data gathering and HMIS reporting.",
    keyFeatures: [
      "Digital workflow replacing paper-based Health Extension Worker registers",
      "Role-based hierarchy for Field Workers, Supervisors, and HMIS Focal Persons",
      "Aggregated health indicators and automated summary generation",
      "Relational MySQL database schema modeled for healthcare traceability"
    ],
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "WAMP"],
    githubUrl: "https://github.com/Nehimi/D-HIERS",
    roleBadge: "Academic Team Project"
  },
  {
    id: "banking-mvc",
    title: "Banking Transaction System",
    subtitle: "Enterprise Software Design Patterns in Java",
    category: "academic",
    description: "An academic software engineering implementation demonstrating clean object-oriented architecture and enterprise design patterns for transaction integrity.",
    keyFeatures: [
      "Strict Model-View-Controller (MVC) architectural separation",
      "Command Pattern for transaction queuing and rollback capability",
      "Singleton Pattern for thread-safe database connection pooling",
      "ACID compliant SQL operations ensuring zero financial discrepancies"
    ],
    techStack: ["Java", "MySQL", "JDBC", "OOP", "Design Patterns"],
    roleBadge: "Academic Project"
  },
  {
    id: "creative-portfolio",
    title: "Graphic Design & Visual Brand Portfolio",
    subtitle: "Digital Branding, Typography & Media Arts",
    category: "creative",
    description: "A showcase of graphic design, church media production, brand identity assets, and event photography crafted with Adobe Creative Cloud and Canva.",
    keyFeatures: [
      "Church media slides, sermon graphics, and social event posters",
      "Vector branding, typography treatments, and layout composition",
      "Photography color grading and digital asset optimization",
      "Live interactive portfolio hosted on Netlify"
    ],
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva", "Netlify"],
    liveUrl: "https://scintillating-mooncake-34adbd.netlify.app/",
    githubUrl: "https://github.com/Samieyu/Portfolio",
    roleBadge: "Creative Director"
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-insa",
    title: "Cyber Talent Summer Camp — 5th Batch",
    issuer: "INSA (Information Network Security Administration)",
    date: "Summer 2024 / 2025",
    category: "cybersecurity",
    credentialId: "INSA-CT-B5",
    badge: "Government Cybersecurity Camp",
    instructor: "INSA National Security Experts"
  },
  {
    id: "cert-pentest",
    title: "PenTest Planning & Information Gathering",
    issuer: "Total Seminars (via Coursera)",
    date: "July 18, 2026",
    verifyUrl: "https://coursera.org/verify/CSL02TSSQA94",
    category: "cybersecurity",
    credentialId: "CSL02TSSQA94",
    instructor: "Michael Solomon, Total Seminars"
  },
  {
    id: "cert-cyber-essentials",
    title: "Introduction to Cybersecurity Essentials",
    issuer: "IBM (via Coursera)",
    date: "March 31, 2026",
    verifyUrl: "https://coursera.org/verify/V5FVI1LK2N92",
    category: "cybersecurity",
    credentialId: "V5FVI1LK2N92",
    instructor: "Antonio Cangiano, IBM Skills Network"
  },
  {
    id: "cert-ml-for-all",
    title: "Machine Learning for All",
    issuer: "University of London (via Coursera)",
    date: "April 4, 2026",
    verifyUrl: "https://coursera.org/verify/6IDMXIFB3209",
    category: "ai",
    credentialId: "6IDMXIFB3209",
    instructor: "Prof. Marco Gillies, Goldsmiths University of London"
  },
  {
    id: "cert-soft-arch",
    title: "Software Architecture",
    issuer: "University of Alberta (via Coursera)",
    date: "April 25, 2026",
    verifyUrl: "https://coursera.org/verify/8IUHQW1BY5BN",
    category: "software",
    credentialId: "8IUHQW1BY5BN",
    instructor: "Kenny Wong, Assoc. Professor of Computing Science"
  },
  {
    id: "cert-ood",
    title: "Object-Oriented Design",
    issuer: "University of Alberta (via Coursera)",
    date: "April 14, 2026",
    verifyUrl: "https://coursera.org/verify/RKCLE1CLCPCL",
    category: "software",
    credentialId: "RKCLE1CLCPCL",
    instructor: "Kenny Wong, Assoc. Professor of Computing Science"
  },
  {
    id: "cert-client-req",
    title: "Client Needs and Software Requirements",
    issuer: "University of Alberta (via Coursera)",
    date: "April 10, 2026",
    verifyUrl: "https://coursera.org/verify/Z9Y1W15ZD2UV",
    category: "software",
    credentialId: "Z9Y1W15ZD2UV",
    instructor: "Kenny Wong, Assoc. Professor of Computing Science"
  },
  {
    id: "cert-python",
    title: "Programming in Python",
    issuer: "Meta (via Coursera)",
    date: "July 21, 2026",
    verifyUrl: "https://coursera.org/verify/C2H1ML4R260W",
    category: "software",
    credentialId: "C2H1ML4R260W",
    instructor: "Meta Staff Engineers"
  },
  {
    id: "cert-js",
    title: "Programming with JavaScript",
    issuer: "Meta (via Coursera)",
    date: "March 4, 2026",
    verifyUrl: "https://coursera.org/verify/IZHN6ZF4HSGV",
    category: "frontend",
    credentialId: "IZHN6ZF4HSGV",
    instructor: "Meta Staff Engineers"
  },
  {
    id: "cert-frontend",
    title: "Introduction to Front-End Development",
    issuer: "Meta (via Coursera)",
    date: "February 17, 2026",
    verifyUrl: "https://coursera.org/verify/AVHZQIU5LFN9",
    category: "frontend",
    credentialId: "AVHZQIU5LFN9",
    instructor: "Meta Staff Engineers"
  },
  {
    id: "cert-version-control",
    title: "Version Control (Git & GitHub)",
    issuer: "Meta (via Coursera)",
    date: "March 14, 2026",
    verifyUrl: "https://coursera.org/verify/3PYEJOBC84OO",
    category: "software",
    credentialId: "3PYEJOBC84OO",
    instructor: "Meta Staff Engineers"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity & Offensive / Defensive Security",
    icon: "ShieldAlert",
    description: "Hands-on security testing, threat detection, and lab analysis.",
    skills: [
      { name: "Kali Linux / Linux", level: "Intermediate", tag: "OS" },
      { name: "Penetration Testing Fundamentals", level: "Intermediate", tag: "Offensive" },
      { name: "Web Application Security (OWASP)", level: "Intermediate", tag: "Web Sec" },
      { name: "Network Security & Nmap", level: "Intermediate", tag: "Recon" },
      { name: "Vulnerability Assessment", level: "Intermediate", tag: "Audit" },
      { name: "Wazuh SIEM", level: "Fundamentals", tag: "SOC / Def" },
      { name: "Suricata IDS/IPS", level: "Fundamentals", tag: "Network" },
      { name: "Windows Event Logs & Sysmon", level: "Fundamentals", tag: "Forensics" },
      { name: "MITRE ATT&CK Framework", level: "Intermediate", tag: "Intel" },
      { name: "Reverse Engineering Basics", level: "Fundamentals", tag: "Analysis" }
    ]
  },
  {
    title: "Programming & Core Engineering",
    icon: "Code2",
    description: "Object-oriented, functional, and scripting languages.",
    skills: [
      { name: "Python", level: "Proficient", tag: "Scripting / AI" },
      { name: "JavaScript / TypeScript", level: "Proficient", tag: "Web Core" },
      { name: "Java", level: "Intermediate", tag: "OOP / MVC" },
      { name: "C++", level: "Intermediate", tag: "Systems" },
      { name: "PHP", level: "Intermediate", tag: "Backend" },
      { name: "Dart", level: "Intermediate", tag: "Mobile" }
    ]
  },
  {
    title: "Full-Stack Web Development",
    icon: "Globe",
    description: "Modern component architectures, RESTful APIs, and responsive design.",
    skills: [
      { name: "React", level: "Proficient", tag: "Frontend" },
      { name: "Node.js & Express.js", level: "Intermediate", tag: "Backend" },
      { name: "MERN Stack", level: "Intermediate", tag: "Full-Stack" },
      { name: "Tailwind CSS", level: "Proficient", tag: "Styling" },
      { name: "REST APIs & JWT Auth", level: "Intermediate", tag: "Security" },
      { name: "HTML5 & CSS3", level: "Proficient", tag: "Foundation" }
    ]
  },
  {
    title: "Mobile Development & Databases",
    icon: "Smartphone",
    description: "Native-quality mobile applications and cloud-native persistence.",
    skills: [
      { name: "Flutter", level: "Intermediate", tag: "Cross-Platform" },
      { name: "Dart", level: "Intermediate", tag: "Mobile" },
      { name: "Neon PostgreSQL", level: "Intermediate", tag: "Cloud SQL" },
      { name: "MongoDB", level: "Intermediate", tag: "NoSQL" },
      { name: "Firebase Firestore", level: "Intermediate", tag: "Realtime" },
      { name: "MySQL", level: "Intermediate", tag: "Relational" }
    ]
  },
  {
    title: "DevOps, Tools & Virtualization",
    icon: "Terminal",
    description: "Security environments, virtualization, version control, and deployment.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", tag: "VCS" },
      { name: "VirtualBox & WSL2", level: "Proficient", tag: "Lab Infra" },
      { name: "VS Code & Android Studio", level: "Proficient", tag: "IDE" },
      { name: "Vercel & Render", level: "Intermediate", tag: "Hosting" },
      { name: "WAMP", level: "Intermediate", tag: "Server" }
    ]
  },
  {
    title: "Creative Arts, Design & Music",
    icon: "Palette",
    description: "Visual branding, digital media production, and 6+ years of musicianship.",
    skills: [
      { name: "Adobe Photoshop", level: "Intermediate", tag: "Design" },
      { name: "Adobe Illustrator", level: "Intermediate", tag: "Vector" },
      { name: "Adobe InDesign", level: "Intermediate", tag: "Print" },
      { name: "Canva Pro", level: "Proficient", tag: "Media" },
      { name: "Piano & Church Keyboard", level: "Proficient", tag: "6+ Years" },
      { name: "Music Theory & Scales", level: "Intermediate", tag: "Songwriting" }
    ]
  }
];

export const cyberTracks: CyberTrack[] = [
  {
    stage: "Phase 01",
    title: "External Penetration Testing",
    status: "Active Learning",
    description: "Reconnaissance, active scanning, sub-domain discovery, perimeter vulnerability enumeration, and external attack surface mapping.",
    keyTopics: ["OSINT & Passive Recon", "Port Scanning (Nmap, Masscan)", "DNS Enumeration", "Vulnerability Scanning", "Network Mapping"],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Amass"]
  },
  {
    stage: "Phase 02",
    title: "Internal Penetration Testing",
    status: "Active Learning",
    description: "Internal network lateral movement, Active Directory enumeration concepts, privilege escalation, and internal host assessments.",
    keyTopics: ["Internal Host Scanning", "Privilege Escalation Fundamentals", "Password Auditing & Hash Cracking", "Service Misconfigurations"],
    tools: ["Metasploit", "Netcat", "John the Ripper", "Hydra", "VirtualBox Labs"]
  },
  {
    stage: "Phase 03",
    title: "Web Application Penetration Testing",
    status: "Hands-on Labs",
    description: "Identifying OWASP Top 10 vulnerabilities, authentication bypass, SQL injection, XSS, CSRF, and broken access controls in modern web apps.",
    keyTopics: ["OWASP Top 10", "Burp Suite Proxy & Repeater", "Authentication & Session Flaws", "Input Validation & Sanitization", "API Security"],
    tools: ["Burp Suite Community", "OWASP ZAP", "SQLmap", "Postman", "Browser DevTools"]
  },
  {
    stage: "Phase 04",
    title: "Cloud Penetration Testing & AI Sec",
    status: "Upcoming",
    description: "Future horizon: cloud IAM misconfigurations, AWS/Azure threat modeling, container security, and LLM adversarial attack defense.",
    keyTopics: ["Cloud Architecture Auditing", "IAM Security", "Container Vulnerability Assessment", "AI/ML Model Security"],
    tools: ["Cloud Security Frameworks", "Python", "Wazuh Cloud Agent", "Docker Sec"]
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "time-wachemo",
    period: "2023 — Present (Graduating 2026/27)",
    title: "B.Sc. in Software Engineering",
    institution: "Wachemo University",
    location: "Hossana, Ethiopia",
    type: "education",
    description: "4th-year, 1st-semester undergraduate studies focusing on advanced software design, operating systems, distributed architectures, algorithms, and cybersecurity fundamentals.",
    highlights: [
      "Rigorous coursework in OOP (Java, C++), Data Structures, and Software Architecture",
      "Led and collaborated on academic engineering systems including DHEIRS and Banking MVC",
      "Active peer collaborator on technical code reviews and project presentations"
    ]
  },
  {
    id: "time-insa",
    period: "Summer 2024 / 2025",
    title: "Cyber Talent Summer Camp — 5th Batch Participant",
    institution: "INSA (Information Network Security Administration)",
    location: "Addis Ababa, Ethiopia",
    type: "cyber",
    description: "Selected to participate in the prestigious national cyber talent training program conducted by Ethiopia's Information Network Security Administration.",
    highlights: [
      "Intensive training in ethical hacking, networking security protocols, and cyber defense",
      "Hands-on immersion with Kali Linux, vulnerability identification, and mitigation strategies",
      "Direct mentorship from leading national cybersecurity experts and red team researchers"
    ]
  },
  {
    id: "time-certs",
    period: "2026",
    title: "Professional Specializations & Certifications",
    institution: "Meta, IBM, University of Alberta, Total Seminars (Coursera)",
    location: "Online / International Credentials",
    type: "education",
    description: "Earned 10 verified technical certifications across penetration testing planning, cybersecurity essentials, machine learning, software architecture, object-oriented design, Python, and frontend engineering.",
    highlights: [
      "Verified credentials issued by Meta, IBM, University of London, and University of Alberta",
      "Deepened practical understanding of software lifecycle requirements and threat modeling"
    ]
  },
  {
    id: "time-music-media",
    period: "2020 — Present (6+ Years)",
    title: "Keyboardist, Piano Instructor & Church Media Designer",
    institution: "Penuel MKC & Community Church",
    location: "Ethiopia",
    type: "community",
    description: "Serving the local community through music performance, beginner piano pedagogy for children, church media design, and developing full-stack church management systems.",
    highlights: [
      "6+ years of keyboard and piano playing in live church services and choir leadership",
      "Mentoring and teaching beginner piano to children and youth musicians",
      "Designing graphics, flyers, and projection media using Adobe Photoshop & Illustrator"
    ]
  }
];
