export const profile = {
  name: "Xuelu Feng",
  headline: "Building practical software for research, data, and interactive systems.",
  role: "Full stack developer | Computer science and AI",
  email: "fengxu@oregonstate.edu",
  phone: "(541) 908-7324",
  phoneHref: "+15419087324",
  visaStatus: "F-1 OPT",
  heroImage: {
    src: "assets/portfolio-workbench.png",
    alt: "Technical portfolio workspace with laptop, development materials, and clean desk lighting"
  },
  heroSummary: "I am a computer science graduate student at Oregon State University with full stack, AI, database, and game development experience. Choose a section below to expand the details.",
  heroCaption: {
    stack: "React, ASP.NET Core, SQL, Python, PyTorch",
    focus: "Research + product systems"
  },
  intro: "I focus on full stack systems, AI-powered data workflows, and interactive applications. My work spans React interfaces, ASP.NET Core and Express APIs, relational databases, PyTorch models, and 3D simulation pipelines.",
  education: {
    school: "Oregon State University",
    location: "Corvallis, Oregon",
    items: [
      "Master of Engineering in Computer Science, expected Jun. 2026.",
      "Minor in Artificial Intelligence, expected Jun. 2026.",
      "Bachelor of Science in Computer Science, Jun. 2023."
    ]
  },
  experience: [
    {
      title: "Full Stack Development, Tanguay Lab",
      date: "Jan. 2025 - Present",
      bullets: [
        "Built and deployed a React and ASP.NET Core application for zebrafish laboratory XML data processing and MariaDB workflows used by 20+ researchers.",
        "Redesigned the database schema with dimensional and fact-based models, then developed C# REST APIs that improved assay matching and metadata processing performance by 60%.",
        "Implemented frontend validation and backend API error handling to make request failures and workflow pipelines easier to troubleshoot."
      ]
    },
    {
      title: "Full Stack Development, Retro Next Door",
      date: "Oct. 2023 - Jun. 2024",
      bullets: [
        "Led a full stack inventory and sales management system for a retro gaming business using SQL, JavaScript, and Express.js.",
        "Normalized the SQL database schema for user management, order history, and historical pricing analytics.",
        "Delivered customer-facing web platform updates that improved inventory browsing and business accessibility."
      ]
    }
  ],
  resumeProjects: [
    {
      title: "Dasher Blitz, OSU Capstone",
      date: "Sep. 2022 - Jun. 2023",
      summary: "Vehicle driving simulation focused on collision detection, avoidance systems, realistic physics, Blender assets, Unreal Engine Blueprints, HUD systems, and customization features."
    },
    {
      title: "Zebrafish Phenotype Classification",
      date: "Jan. 2026 - Mar. 2026",
      summary: "PyTorch and ResNet-based deep learning workflow for zebrafish phenotype and mortality classification from high throughput brightfield imaging data, reaching a 96% F1 score."
    },
    {
      title: "Tarpaulin, Cloud Development Project",
      date: "Oct. 2024 - Jan. 2025",
      summary: "REST APIs for a course management site with Docker deployment, JWT authentication, role-based authorization, and backend endpoints that automated 70% of information gathering."
    }
  ],
  skills: [
    {
      group: "Languages",
      items: ["C/C++", "Python", "JavaScript", "Kotlin", "C#", "SQL", "HTML/CSS", "Swift"]
    },
    {
      group: "Frameworks",
      items: ["React", "ASP.NET Core", "Express.js", "Django", "PyTorch", "TensorFlow"]
    },
    {
      group: "Tools",
      items: ["Git", "Linux/Unix", "Docker", "REST APIs", "Unreal Engine 5", "Blender", "Unity"]
    }
  ]
};

export const tabs = [
  {
    id: "about",
    number: "01",
    title: "About Me",
    description: "Intro, education, work experience, projects, and technical skills from my resume."
  },
  {
    id: "portfolio",
    number: "02",
    title: "Portfolio",
    description: "Project highlights from research apps, AI classification, cloud APIs, and simulation work."
  },
  {
    id: "future",
    number: "03",
    title: "Future Space",
    description: "An open area for writing, experiments, coursework, photography, or anything you choose later."
  }
];

export const portfolioProjects = [
  {
    id: "lab-app",
    thumb: "LAB",
    title: "Zebrafish Lab Data Platform",
    meta: "React + ASP.NET Core",
    summary: "Full stack XML processing and MariaDB workflow application for lab researchers, including validation, error handling, and data visualization support.",
    tags: ["React", "C# APIs", "MariaDB", "Data workflows"]
  },
  {
    id: "ai-project",
    thumb: "AI",
    title: "Zebrafish Phenotype Classification",
    meta: "96% F1 score",
    summary: "Deep learning pipeline using PyTorch, ResNet-18, transfer learning, image preprocessing, augmentation, and evaluation on 4,000+ labeled imaging samples.",
    tags: ["PyTorch", "ResNet", "Computer vision", "Research data"]
  },
  {
    id: "cloud-api",
    thumb: "API",
    title: "Tarpaulin Course Management APIs",
    meta: "Docker + JWT",
    summary: "Cloud development project with RESTful endpoints, containerized deployment, JWT authentication, and role-based authorization.",
    tags: ["REST APIs", "Docker", "Auth", "Backend"]
  },
  {
    id: "simulation",
    thumb: "SIM",
    title: "Dasher Blitz Driving Simulation",
    meta: "Unreal Engine 5",
    summary: "Vehicle simulation with collision avoidance, realistic physics, Blender assets, wheel animations, HUD systems, and customization features.",
    tags: ["Unreal", "Blender", "Blueprints", "Simulation"]
  }
];
