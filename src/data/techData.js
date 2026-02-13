export const personalInfo = {
  name: "Vishal Elaka",
  initials: "VE",
  title: "Software Engineer",
  tagline:
    "Building scalable distributed systems that power millions of users. 3+ years of experience in cloud-native architectures, microservices, and high-performance applications.",
  email: "elakavishal@gmail.com",
  phone: "+1 (352) 642-4873",
  location: "United States",
  linkedin: "https://www.linkedin.com/in/vishal-elaka-487302210/",
  github: "https://github.com/evishal2000",
  website: "",
  availability: "Open to full-time opportunities",
  summary:
    "Results-driven Software Engineer with expertise in designing and implementing large-scale distributed systems. Proven track record of optimizing performance, reducing costs by 40%, and collaborating with cross-functional teams. Passionate about clean code, system design, and delivering measurable business impact.",
};

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "John Hancock",
    type: "Full-time",
    period: "Aug 2025 - Jan 2026",
    location: "Boston, MA / Remote",
    description:
      "Owned backend service delivery for a customer-facing platform serving 3M+ monthly active users, architecting authentication, notification, and profile management APIs while maintaining 99.9% uptime.",
    achievements: [
      "Reduced API latency from 500ms to p95<150ms through query optimization and caching strategies",
      "Architected SendGrid notification pipeline handling 100K+ monthly emails with idempotency guarantees",
      "Implemented comprehensive test suite achieving 85%+ code coverage, reducing production incidents by 40%",
      "Mentored 2 junior engineers and established code review best practices across the team",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Azure AKS",
      "Kubernetes",
      "SendGrid",
      "Redis",
      "PostgreSQL",
    ],
    color: "cyan",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Optum (UnitedHealth Group)",
    type: "Full-time",
    period: "Jul 2022 - Jul 2024",
    location: "Hyderabad, India / Remote",
    description:
      "Core engineer for healthcare data platform processing 50TB+ Weekly. Built ETL pipelines, compliance automation, and analytics dashboards used by 200+ internal stakeholders.",
    achievements: [
      "Led Archive & Restore initiative migrating 500TB+ to AWS S3, achieving $40K annual cost savings",
      "Built 30+ production ETL pipelines processing healthcare data with 99.95% accuracy",
      "Optimized React analytics dashboard reducing load time from 5s to <1s (80% improvement)",
      "Implemented PII anonymization framework ensuring HIPAA compliance across all data pipelines",
    ],
    technologies: [
      "Python",
      "PySpark",
      "AWS",
      "React",
      "Spring Boot",
      "IBM DataStage",
      "Cosmos DB",
      "Snowflake",
    ],
    color: "blue",
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "NCR Corporation",
    type: "Internship",
    period: "Jan 2022 - Jul 2022",
    location: "Hyderabad, India",
    description:
      "Enterprise retail solutions team. Optimized legacy systems and built internal tooling for QA automation.",
    achievements: [
      "Refactored C#/.NET microservices achieving 15% runtime performance improvement",
      "Built automated testing framework reducing QA cycle time by 30%",
      "Implemented caching layer reducing database load by 25%",
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "Azure DevOps", "Selenium"],
    color: "purple",
  },
];

export const projects = [
  {
    id: 1,
    title: "Archive & Restore Platform",
    category: "Cloud Infrastructure",
    description:
      "Enterprise storage optimization pipeline migrating legacy workloads to AWS S3 with automated lifecycle management, integrity validation, and $40K annual cost savings.",
    fullDescription:
      "Architected a storage optimization pipeline migrating legacy workloads to AWS S3, resulting in $40K annual savings. Implemented archival workflows preserving permissions and metadata with integrity validation and automated lifecycle notifications. Delivered an on-demand restore utility guaranteeing 100% fidelity of ownership, timestamps, and access controls.",
    technologies: [
      "AWS S3",
      "Shell Scripting",
      "SQL",
      "Python",
      "IAM",
      "AWS Lambda",
    ],
    metrics: "$40K saved annually",
    duration: "6 months",
    role: "Software Engineer",
    icon: "database",
    features: [
      "Automated archival workflows with metadata preservation",
      "Integrity validation and checksum verification",
      "On-demand restore utility with 100% fidelity guarantee",
      "Automated lifecycle notifications",
      "Role-based secure delivery pipelines",
    ],
    github: "https://github.com/vishalelaka/archive-restore-platform",
    demo: null,
  },
  {
    id: 2,
    title: "Data Visualization & Analytics Platform",
    category: "Full Stack Application",
    description:
      "Healthcare analytics dashboard processing millions of records with responsive visualizations, reducing analysis time by 35% and dashboard latency from >5s to <1s.",
    fullDescription:
      "Produced a full-stack analytics application visualizing millions of records across multiple structured data sources. Crafted responsive dashboards and interactive views that reduced manual analysis time by 35%. Streamlined backend SQL queries and aggregation logic, cutting response times from >5s to <1s.",
    technologies: [
      "React",
      "Spring Boot",
      "SQL",
      "Azure",
      "Redis",
      "PostgreSQL",
    ],
    metrics: "80% latency reduction",
    duration: "8 months",
    role: "Software Engineer",
    icon: "code",
    features: [
      "Real-time data visualization of millions of records",
      "Responsive dashboards with interactive filtering",
      "Optimized SQL query performance",
      "Cross-platform data source integration",
      "35% reduction in manual analysis effort",
    ],
    github: "https://github.com/vishalelaka/analytics-platform",
    demo: "https://analytics-demo.vishalelaka.dev",
  },
  {
    id: 3,
    title: "Healthcare ETL Pipeline System",
    category: "Data Engineering",
    description:
      "End-to-end ETL pipeline infrastructure processing large healthcare datasets across 20+ upstream and downstream systems with strict SLA requirements.",
    fullDescription:
      "Constructed and sustained 30+ end-to-end ETL pipelines processing large healthcare datasets across 20+ upstream and downstream systems with strict SLA requirements. Executed high-volume ingestion from AWS S3, Cosmos DB, and enterprise warehouses using IBM DataStage, PySpark, SQL, and Shell scripting. Systematized compliance workflows including PII anonymization, deduplication, and historical backfills, improving regulatory adherence by 25%.",
    technologies: [
      "Python",
      "PySpark",
      "IBM DataStage",
      "AWS S3",
      "Cosmos DB",
      "SQL",
      "Shell",
    ],
    metrics: "30+ pipelines",
    duration: "12 months",
    role: "Software Engineer",
    icon: "cpu",
    features: [
      "30+ production ETL pipelines with 99.9% uptime",
      "High-volume ingestion from multiple data sources",
      "PII anonymization and HIPAA compliance",
      "Automated deduplication and data quality checks",
      "Historical backfill automation",
    ],
    github: "https://github.com/vishalelaka/healthcare-etl",
    demo: null,
  },
  {
    id: 4,
    title: "OneGrad – College Admission Platform",
    category: "Full Stack Application",
    description:
      "Full-stack college admissions platform supporting 10+ core workflows including search, comparison, onboarding, and application tracking with 15+ REST APIs.",
    fullDescription:
      "Created a full-stack college admissions platform supporting 10+ core workflows, including search, comparison, onboarding, and application tracking. Implemented 15+ REST APIs with JWT-based authentication and role-based access control. Integrated Stripe payment flows for application fees and premium features, handling validation and webhook-driven updates. Designed admin dashboards, loan EMI calculators, and alumni networking modules.",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Stripe", "AWS S3"],
    metrics: "15+ APIs built",
    duration: "6 months",
    role: "Full Stack Developer",
    icon: "code",
    features: [
      "JWT-based authentication and RBAC",
      "Stripe payment integration with webhooks",
      "College search and comparison engine",
      "Admin dashboard with analytics",
      "Loan EMI calculators and alumni networking",
    ],
    github: "https://github.com/vishalelaka/yocket-clone",
    demo: "https://yocket-demo.vishalelaka.dev",
  },
  {
    id: 5,
    title: "Cloud-Native Microservices Platform",
    category: "Backend System",
    description:
      "Engineered cloud-native microservices using Java Spring Boot and React, supporting 3M+ active users across authentication, notifications, and profile-management domains.",
    fullDescription:
      "Engineered cloud-native microservices using Java (Spring Boot) and React, supporting 3M+ active users across authentication, notifications, and profile-management domains. Authored 20+ low-latency REST APIs (p95<150ms) by strengthening validation logic, refining service orchestration, and tuning database access patterns under concurrent load. Coordinated deployments on Azure Kubernetes Service (AKS), improving session stability by 18% through health probes, autoscaling policies, rollout strategies, and runtime tuning.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Azure AKS",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
    ],
    metrics: "3M+ users served",
    duration: "6 months",
    role: "Full Stack Developer",
    icon: "cpu",
    features: [
      "Microservices architecture with 20+ REST APIs",
      "p95 latency <150ms under concurrent load",
      "Azure Kubernetes Service (AKS) deployment",
      "Health probes and autoscaling policies",
      "18% improvement in session stability",
    ],
    github: "https://github.com/vishalelaka/microservices-platform",
    demo: "https://microservices-demo.vishalelaka.dev",
  },
  {
    id: 6,
    title: "Enterprise Notification Service",
    category: "Backend System",
    description:
      "SendGrid-based communication workflows handling 100K+ monthly notifications with idempotency, retries, and delivery auditing to ensure reliability.",
    fullDescription:
      "Enabled SendGrid-based communication workflows handling 100K+ monthly notifications, incorporating idempotency, retries, and delivery auditing to ensure reliability. Reinforced release quality using JUnit, Mockito, and Jest by expanding unit, integration, and contract coverage to 85%+, reducing post-release defects. Contributed to design reviews, sprint planning, and production triage; documented operational playbooks that accelerated incident resolution.",
    technologies: [
      "Java",
      "Spring Boot",
      "SendGrid",
      "JUnit",
      "Mockito",
      "Jest",
      "Azure",
    ],
    metrics: "100K+ notifications/month",
    duration: "4 months",
    role: "Full Stack Developer",
    icon: "database",
    features: [
      "Idempotent notification delivery",
      "Exponential backoff retry mechanism",
      "Delivery auditing and tracking",
      "85%+ test coverage (unit, integration, contract)",
      "Operational playbooks for incident resolution",
    ],
    github: "https://github.com/vishalelaka/notification-service",
    demo: null,
  },
];

export const skills = {
  languages: [
    "Java",
    "Python",
    "C++",
    "Go",
    "C#",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Shell",
  ],
  backend: [
    "Spring Boot",
    "Node.js",
    "Express",
    "FastAPI",
    "REST APIs",
    "GraphQL",
    "gRPC",
  ],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  cloud: [
    "AWS (S3, Lambda, EC2, RDS, EKS)",
    "Azure (AKS, Functions, Cosmos DB)",
  ],
  data: [
    "PySpark",
    "Apache Spark",
    "Kafka",
    "IBM DataStage",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Cosmos DB",
  ],
  devops: [
    "Kubernetes",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    "Terraform",
  ],
  concepts: [
    "System Design",
    "Microservices",
    "Distributed Systems",
    "Data Structures",
    "Algorithms",
  ],
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Florida",
    period: "2024 - 2026",
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
      "DBMS",
    ],
  },
];

export const certifications = [
  {
    name: "AWS Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "aws-sap",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    badge: "cka",
  },
  {
    name: "Data Engineering with Google Cloud",
    issuer: "Google Cloud / Coursera",
    date: "2023",
    badge: "gcp-de",
  },
];

export const achievements = [
  {
    title: "Winner - Optum Global Hackathon 2023",
    description:
      "Built AI-powered patient risk prediction system. 1st place among 500+ participants globally.",
    icon: "trophy",
  },
  {
    title: "Speaker - AWS Community Day",
    description:
      "Presented 'Scaling Microservices with Kubernetes' to 200+ engineers.",
    icon: "mic",
  },
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to Apache Airflow and Kubernetes projects. 500+ GitHub stars.",
    icon: "github",
  },
];
