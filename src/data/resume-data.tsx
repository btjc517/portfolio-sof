import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import BenCheesebroughCV from "@public/BenCheesebrough-CV.pdf";
import { ImpactOSLogo } from "@public/impactOS-logo";
import { AccessTechLogo } from "@/components/AccessTechLogo";
import { AMF1Logo } from "@/components/AMF1Logo";
import { ChatBubbleLeftRightIcon, GlobeEuropeAfricaIcon, LightBulbIcon, PuzzlePieceIcon, ScaleIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Gavel, Hotel, PawPrint } from "lucide-react";
import { HandshakeIcon } from 'lucide-react';
import { CubeTransparentIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
 

export const RESUME_DATA = {
  name: "Sofia Norman Polacios",
  initials: "SNP",
  location: "Madrid, Spain",
  about: "B.Sc. Vetinary Medicine",
  summary:
    "Ambitious Vetinary Medicine student with hands-on experience in both vetinary clinics and the hospitality industry.",
  avatarUrl: "/BenCVPhoto.JPG",
  personalWebsiteUrl: "https://bencheesebrough.com",
  resumeUrl: BenCheesebroughCV,
  contact: {
    email: "[email]",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/btjc517",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ben-cheesebrough-12b18b220/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/SriNath693",
      //   icon: XIcon,
      // },
    ],
  },
  achievements: [
    {
      title: "Vetinary Clinic in Madrid",
      icon: <LightBulbIcon className="size-4" />,
      content: "Successfully set up a fully foreign- owned prop-tech company in Saudi Arabia with endorsement from PIF (Saudi's sovereign wealth fund) accelerators."
    },
    {
      title: "The Edition - Madrid (Marriott)",
      icon: <ChatBubbleLeftRightIcon className="size-4" />,
      content: "Engaged in high-level discussions with influential industry leaders in Saudi Arabia to advance prop-tech solutions."
    },
    {
      title: "Vetinary Clinic - Milton Keynes",
      icon: <ScaleIcon className="size-4" />,
      content: "Developed shareholder agreements and other essential legal documents to secure company structure and ensure compliance."
    },
  ],
  education: [
    {
      school: "UAX",
      title: "B.Sc. Vetinary Medicine",
      logo: "/UoB-logo.png",
      location: "Birmingham, UK",
      grades: ["2nd Year"],
      start: "2024",
      end: "2027",
    },
    {
      school: "[School]",
      logo: "/CC-logo.png",
      title: "A-Levels",
      grades: ["Mathematics: A", "Computer Science: A", "Physics: A"],
      location: "Cheltenham, UK",
      start: "2021",
      end: "2023",
    },
    {
      school: "[School]",
      logo: "/JC-logo.png",
      title: "GCSEs",
      grades: ["Mathematics: A*", "Computer Science: A*", "Physics: A*", "Biology: A*", "Chemistry: A*", "Economics: A", "English Language: A", "English Literature: A", "History: B", "French: B"],
      // title: "GCSEs in Computer Science, Mathematics, Physics, Economics, History, Chemistry, Biology, English Language, English Literature, French",
      location: "Dubai, UAE",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Vetinary Clinic in Madrid",
      companyDescription: "AI platform turning messy ESG & social-value data into decision-grade, audit-ready metrics and reports",
      animatedLogo: <PawPrint />,
      location: "London, UK",
      link: "https://www.impactos.tech/",
      liveWebsite: true,
      badges: ["Public Sector", "AI", "Data Management"],
      title: "Consultant",
      start: "July 2025",
      end: "present",
      workType: "Remote",
      shortDescription: "AI platform turning messy ESG & social-value data into decision-grade, audit-ready metrics and reports",
      description: "AI platform turning messy ESG & social-value data into decision-grade, audit-ready metrics and reports. Ingests spreadsheets/PDFs, maps to frameworks (UN SDG, UK SVM, CSRD, etc.), and enables natural- language analytics. Pre-revenue, MVP stage. Sister product to https://www.my-dayapp.com",
      lineItems: [
        "Designed the end-to-end system architecture and shipped the MVP independently (frontend + backend + data).",
        "Built the AI/data layer to handle messy tabular inputs: fuzzy matching, vector embeddings, semantic retrieval, late-interaction retrieval, NL2SQL, LLM-orchestrated pipelines, knowledge graphs, and ontologies; columnar storage with DuckDB/Parquet.",
        "Prototyped privacy-first analytics via synthetic data generation (diffusion-model approach) to avoid exposing PII.",
        "Designed a medallion (Bronze/Silver/Gold) ingestion & retrieval architecture with adaptive schema mapping and vectorized indexing; improved query latency and learned from usage/feedback.",
        "Created agentic research workflows using knowledge-graph traversal heuristic A* to evaluate tools/frameworks and auto-synthesize findings.",
        "Built the client-facing portal end-to-end: Next.js (React), shadcn/ui + Tailwind, Framer Motion, Supabase auth/DB, and documented custom APIs.",
        "Pitched the MVP to multinational enterprises, government entities, and top universities; iterated roadmap and product narrative based on feedback."
      ],
      techBadges: [
        "Next.js/React", 
        "JavaScript",
        "Supabase (Postgres/RLS)",
        "DuckDB + Parquet",
        "embeddings/vector search",
        "NL2SQL",
        "knowledge graphs/ontologies",
      ]
    },
    {
      company: "The Edition - Madrid (Marriott)",
      companyDescription: "Sport SaaS startup providing a platform for sports organizations to manage their operations and data",
      animatedLogo: <Hotel />,
      location: "Riyadh, Saudi Arabia",
      link: "https://www.accesstechnologies.co/",
      liveWebsite: true,
      badges: ["SportsTech", "B2B SaaS", "Partnerships & BD"],
      workType: "Remote",
      title: "Hostess",
      start: "2023",
      end: "2024 (Gap Year)",
      description: "‘Functionality without aesthetic sacrifice’. Specializing in full stack bespoke software solutions for residential compounds within the Kingdom of Saudi Arabia. At our core we believe that UI/UX shouldn't have to be sacrificed for functionality, instead we incorporate it into every aspect of our platforms to ensure the highest user experience.",
      lineItems: [
        "Developed a backend web portal for admin management and a consumer-facing mobile app for iOS and Android, focused on sports booking administration.",
        "Established a fully foreign-owned business in Saudi Arabia with endorsements from PIF-backed accelerators (Saudi's sovereign wealth fund).",
        "Pitched to potential clients across Saudi Arabia.",
        "Drafted and implemented shareholder agreements and other key legal documents.",
        "Recruited top technical students from leading UK universities.",
        "Led and managed the sales team.",
        "Collaborated with leading regional prop-tech firms to integrate our technology, transitioning our operations as part of their larger platforms.",
        "Attended big tech events across the Kingdom such as LEAP to gain critical insights into market trends."
      ]
    },
    {
      company: "Vetinary Clinic - Milton Keynes",
      companyDescription: "UK real estate arm of Fiera Capital, a Canadian-based asset manager with $160 billion in AUM.",
      // logo: "https://github.com/evilrabbit.png",
      animatedLogo: <PawPrint />,
      location: "London, UK",
      link: "https://www.fierarealestate.co.uk/",
      badges: ["Fintech Tools", "Fund Ops", "Data Insights"],
      workType: "On Site",
      title: "Summer Internship",
      start: "2022",
      end: "",
      description:
        "Worked alongside the fintech team at a leading asset management firm, exploring the crucial role of fintech in fund management. This experience provided a deep understanding of how digital infrastructure enhances operational efficiency and supports strategic investment initiatives.",
      lineItems: [
        "Attended a quarterly update meeting with senior management, gaining insight into high-level financial and operational decision-making.",
        "Shadowed key team members to understand both the technical and financial aspects of fund management.",
        "Supported in developing and optimizing internal tools, observing the critical role of technology in daily operations.",
        "Enhanced knowledge of fintech’s impact on fund management, focusing on efficiency and strategic growth."        
      ]
    }
  ],
  skills: {
    "AI Research": ["PyTorch", "TensorFlow", "Transformers", "Diffusers", "Hugging Face"],
    "MLOps & Deployment": ["FastAPI", "Docker", "Kubernetes", "SageMaker", "Langchain"],
    "Data Engineering": ["Pandas", "Polars", "DuckDB", "PostgreSQL"],
    "Frontend & APIs": ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express"],
    "Vector Search": ["FAISS", "Qdrant"],
    "Cloud & Infra": ["AWS", "Azure", "Cloudflare", "E2E Cloud", "GCP"],
    "Languages": ["Python", "TypeScript", "PL/pgSQL", "JavaScript", "Java", "C", "iOS Development (Swift)"],
  },
  projects: [
    {
      title: "IntelliServe: Scalable LLM API Service",
      techStack: ["FastAPI", "Docker", "LangChain", "PostgreSQL", "AWS Lambda"],
      description:
        "Designed and deployed a production-ready API layer for serving multiple LLMs with dynamic routing, prompt templates, and user session tracking. Implemented usage-based rate limiting, caching, and custom logging middleware to support real-time integrations for over 15+ enterprise clients.",
      link: {
        label: "github.com",
        href: "https://github.com/yourusername/intelliserve-llm-api",
      },
    },
    {
      title: "IntelliServe: Scalable LLM API Service",
      techStack: ["FastAPI", "Docker", "LangChain", "PostgreSQL", "AWS Lambda"],
      description:
        "Designed and deployed a production-ready API layer for serving multiple LLMs with dynamic routing, prompt templates, and user session tracking. Implemented usage-based rate limiting, caching, and custom logging middleware to support real-time integrations for over 15+ enterprise clients.",
    },
    {
      title: "IntelliServe: Scalable LLM API Service",
      techStack: ["FastAPI", "Docker", "LangChain", "PostgreSQL", "AWS Lambda"],
      description:
        "Designed and deployed a production-ready API layer for serving multiple LLMs with dynamic routing, prompt templates, and user session tracking. Implemented usage-based rate limiting, caching, and custom logging middleware to support real-time integrations for over 15+ enterprise clients.",
      link: {
        label: "github.com",
        href: "https://github.com/yourusername/intelliserve-llm-api",
      },
    },
    {
      title: "IntelliServe: Scalable LLM API Service",
      techStack: ["FastAPI", "Docker", "LangChain", "PostgreSQL", "AWS Lambda"],
      description:
        "Designed and deployed a production-ready API layer for serving multiple LLMs with dynamic routing, prompt templates, and user session tracking. Implemented usage-based rate limiting, caching, and custom logging middleware to support real-time integrations for over 15+ enterprise clients.",
      link: {
        label: "github.com",
        href: "https://github.com/yourusername/intelliserve-llm-api",
      },
    },
    {
      title: "IntelliServe: Scalable LLM API Service",
      techStack: ["FastAPI", "Docker", "LangChain", "PostgreSQL", "AWS Lambda"],
      description:
        "Designed and deployed a production-ready API layer for serving multiple LLMs with dynamic routing, prompt templates, and user session tracking. Implemented usage-based rate limiting, caching, and custom logging middleware to support real-time integrations for over 15+ enterprise clients.",
    },
    {
      title: "IntelliServe: Scalable LLM API Service",
      techStack: ["FastAPI", "Docker", "LangChain", "PostgreSQL", "AWS Lambda"],
      description:
        "Designed and deployed a production-ready API layer for serving multiple LLMs with dynamic routing, prompt templates, and user session tracking. Implemented usage-based rate limiting, caching, and custom logging middleware to support real-time integrations for over 15+ enterprise clients.",
    }                        
  ],
  extraCurricular: [
    {
      title: "Google Developers Student Club Lead",
      description:
        "Led the Google Developers Student Club, fostering a collaborative environment for technology enthusiasts at PES University.",
    },
    {
      title: "Samarpana, Shunya Technical Head",
      description:
        "Directed technical teams for Samarpana (a fundraising marathon for families of martyrs) and Shunya (Math club) events.",
    },
    {
      title: "Hackathons Participant",
      description:
        "Won National Level Hackathons in Generative-AI - GenAI-Rush and Kodikon3. Participated in over 25 Hackathons with a 90% finalist selection rate.",
    },
  ]
} as const;
