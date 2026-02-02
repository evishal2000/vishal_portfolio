export const personalInfo = {
  name: "Vishal Elaka",
  initials: "VE",
  title: "Software Engineer & Photographer",
  email: "elakavishal@gmail.com",
  phone: "+1 (352) 642-4873",
  location: "United States",
  linkedin: "https://linkedin.com/in/vishalelaka",
  github: "https://github.com/evishal2000",
  tagline:
    "Crafting scalable cloud-native solutions by day, capturing moments through photography by night.",
  availability: "Available for opportunities",
};

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "John Hancock",
    period: "Aug 2025 - Jan 2026",
    location: "USA",
    description:
      "Engineered cloud-native microservices supporting 3M+ users across authentication, notifications, and profile management. Optimized REST APIs to p95<150ms and implemented SendGrid workflows processing 100K+ monthly notifications.",
    achievements: [
      "Reduced API latency to p95<150ms",
      "Improved session stability by 18%",
      "Achieved 85%+ test coverage",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Azure AKS",
      "SendGrid",
      "Kubernetes",
    ],
    color: "cyan",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Optum (UnitedHealth Group)",
    period: "Jul 2022 - Jul 2024",
    location: "India",
    description:
      "Built 30+ ETL pipelines processing large healthcare datasets with strict SLA requirements. Led Archive & Restore initiative migrating legacy workloads to AWS S3.",
    achievements: [
      "Saved $40K annually through storage optimization",
      "Reduced dashboard latency from >5s to <1s",
      "Improved regulatory adherence by 25%",
    ],
    technologies: [
      "Python",
      "PySpark",
      "AWS S3",
      "React",
      "IBM DataStage",
      "Cosmos DB",
    ],
    color: "blue",
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "NCR Corporation",
    period: "Jan 2022 - Jul 2022",
    location: "India",
    description:
      "Optimized enterprise retail components using C#/.NET, achieving 15% runtime performance gains. Automated QA tooling infrastructure.",
    achievements: [
      "15% runtime performance improvement",
      "Automated verification cycles",
    ],
    technologies: ["C#", ".NET", "Automation", "QA Tools"],
    color: "purple",
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Florida",
    period: "2024 - Present",
    coursework: [
      "Distributed Operating Systems",
      "Machine Learning",
      "NLP Applications",
      "Internet Storage",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Osmania University",
    period: "2018 - 2022",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Distributed Systems",
      "Computer Networks",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Archive & Restore Platform",
    description:
      "Enterprise storage optimization pipeline migrating legacy workloads to AWS S3 with automated lifecycle management, integrity validation, and $40K annual cost savings.",
    technologies: ["AWS S3", "Shell Scripting", "SQL", "Python", "IAM"],
    metrics: "$40K saved annually",
    icon: "database",
  },
  {
    id: 2,
    title: "Healthcare Analytics Dashboard",
    description:
      "Full-stack analytics platform processing millions of healthcare records. Features real-time data visualization, role-based access control, and automated compliance reporting.",
    technologies: ["React", "Spring Boot", "SQL", "Azure", "Redis"],
    metrics: "80% latency reduction",
    icon: "cpu",
  },
  {
    id: 3,
    title: "College Admission Portal",
    description:
      "Scalable admission platform supporting 10+ core workflows including application tracking, document verification, and payment processing with Stripe integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
    metrics: "10+ workflows automated",
    icon: "code",
  },
];

export const skills = [
  "Java",
  "Python",
  "C++",
  "Go",
  "C#",
  "JavaScript",
  "TypeScript",
  "Spring Boot",
  "React",
  "Node.js",
  ".NET",
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "PySpark",
  "SQL",
  "MongoDB",
  "Redis",
  "System Design",
  "Microservices",
  "Distributed Systems",
];
