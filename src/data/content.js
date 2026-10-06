// Site content. Edit here; the page renders straight from these arrays.
// Strings in `summary` / `description` support **bold** markup.

export const profile = {
  name: "Simon Lunay",
  photo: "/projects/headshot.jpg",
  // The first line always shows; the rest are hidden on phones.
  credentials: [
    "SWE Intern @ Fidelity Investments",
    "AI/ML Research @ Ohio State",
    "CSE @ Ohio State, Class of 2027",
  ],
  links: [
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/simonlunay" },
    { label: "GitHub", icon: "github", href: "https://github.com/simonlunay" },
    { label: "Email", icon: "email", href: "mailto:simonlunay@gmail.com" },
  ],
};

export const experience = [
  {
    org: "Fidelity Investments",
    role: "Software Engineering Intern",
    dates: "Jun 2026 – Aug 2026",
    summary:
      "Cut a manual workflow from **18 minutes to 2** by building an autonomous AI agent on an internal LLM platform, and redesigned two internal enterprise applications used by **300+ people** daily.",
  },
  {
    org: "Ohio State College of Engineering",
    role: "AI/ML Research Assistant",
    dates: "Aug 2026 – Present",
    summary:
      "Prototyping a multi-vector retrieval pipeline for rare medical cases that shows a preliminary **~21%** relative gain in Recall@10 over a single-vector baseline on OGCaReBench, using **PubMedBERT** embeddings and **FAISS**.",
  },
  {
    org: "Columbus/Central Ohio Colleges Agency",
    role: "Lead Developer",
    dates: "Nov 2025 – Present",
    summary:
      "Lead a **~20-person** student team building full-stack platforms for **10+ nonprofit clients**.",
  },
  {
    org: "JCL Equipment",
    role: "Software Engineering Intern",
    dates: "May 2024 – Aug 2025",
    summary:
      "Built the company's full-stack website and automated its database workflows.",
  },
];

// `featured` + `highlight` put a project in the Featured list (in array order).
// `href` links the title; `links` are extra links shown under the description.
export const projects = [
  {
    id: "graspiq",
    title: "GraspIQ",
    subtitle: "AI Study Assistant for Canvas",
    href: "https://github.com/simonlunay/GraspIQ",
    featured: true,
    highlight: "100+ users in 2 weeks",
    tags: ["Next.js", "TypeScript", "Claude API", "pgvector", "Supabase", "Stripe", "Docker"],
    description:
      "**Reached 100+ users in its first two weeks.** A **Chrome side panel extension** plus **Next.js** web app where a **Claude** tool-use agent generates study guides, practice tests, and answers grounded in the student's own course files via **pgvector** search. The agent runs as its own **Dockerized** service with an **MCP server**, and paid plans are live through **Stripe**.",
    links: [
      { label: "Website", href: "https://grasp-iq-pi.vercel.app" },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/graspiq/pmhbfohnlaeipmfpjmmnnjgjlachgjcc",
      },
    ],
  },
  {
    id: "codebase-agent",
    title: "Codebase Intelligence Agent",
    subtitle: "AI Agent for GitHub Repositories",
    href: "https://github.com/simonlunay/MongoDB-codebase-agent",
    featured: true,
    highlight: "16 custom agent tools",
    tags: ["Python", "Google ADK", "Gemini", "MongoDB Atlas", "Vector Search", "MCP"],
    description:
      "**Built in 48 hours for the Google Cloud Rapid Agent Hackathon.** Indexes any GitHub repo into **MongoDB Atlas Vector Search** with **Gemini** embeddings, then reviews pull requests, files issues for bugs it finds, audits dependencies, and answers plain-English questions about the code. Built with **Google ADK** and **Gemini 2.5 Flash** on Vertex AI, using **16 custom tools** plus the MongoDB MCP server. It never submits a review or merges a PR without explicit confirmation.",
    links: [],
  },
  {
    id: "gitlab-devops-agent",
    title: "GitLab DevOps Agent",
    subtitle: "Autonomous CI/CD and Code Review Agent",
    href: "https://github.com/simonlunay/gitlab-devops-agent",
    tags: ["Python", "Google ADK", "Gemini", "MCP", "Docker", "Cloud Run"],
    description:
      "**Built in 48 hours for the Google Cloud Rapid Agent Hackathon.** Diagnoses CI/CD pipeline failures, triages issues, reviews merge requests, and writes release notes from plain-English commands. Built with **Google ADK** and **Gemini 2.5 Flash** on Vertex AI, pairing custom **python-gitlab** tools with GitLab's official **MCP server**. Containerized for **Google Cloud Run**, with secrets in Secret Manager.",
    links: [],
  },
  {
    id: "privatedoc",
    title: "PrivateDoc",
    subtitle: "Zero-Knowledge AI Symptom Checker",
    href: "https://github.com/simonlunay/Private-Doc",
    tags: ["TypeScript", "React", "Express", "Claude API", "Midnight", "Zero-Knowledge Proofs"],
    description:
      "**Built in 48 hours for the Midnight Hackathon.** A privacy-preserving AI symptom checker where symptoms are processed as a private witness inside a **Midnight** zero-knowledge circuit, so only a session ID is ever written on-chain. **Claude** returns structured guidance: possible conditions, urgency, self-care steps, and emergency warning signs. Built with **React**, **Express**, and **Compact** smart contracts.",
    links: [{ label: "Demo video", href: "https://www.youtube.com/watch?v=3NScEWbn9F4" }],
  },
  {
    id: "fitai",
    title: "FitAI",
    subtitle: "Fitness App for Gym Beginners",
    href: "https://github.com/ChuckyT15/FitAI",
    featured: true,
    highlight: "Built in 24 hours @ HackOHI/O",
    tags: ["React", "Gemini API", "TensorFlow.js", "PostgreSQL"],
    description:
      "**Built in 24 hours at HackOHI/O.** A fitness app that helps Ohio State students start at the gym. **TensorFlow.js** body scanning and the **Gemini API** generate a personalized workout and diet plan, drawing on a **PostgreSQL** database of OSU gym and dining information. A built-in chatbot answers fitness and nutrition questions.",
    links: [{ label: "Demo video", href: "https://youtu.be/K5WOeHgslAE" }],
  },
  {
    id: "rare-case-retrieval",
    title: "Rare Case Retrieval",
    subtitle: "Research at Ohio State College of Engineering",
    href: null,
    tags: ["PubMedBERT", "FAISS"],
    description:
      "**Shows a preliminary ~21% relative gain in Recall@10 over a single-vector baseline on OGCaReBench.** Represents each case report as multiple vectors, so a query can match any part of a rare case's clinical picture, using **PubMedBERT** embeddings and **FAISS** search.",
    links: [],
  },
  {
    id: "fantasy-predictor",
    title: "AI Stat/Fantasy Predictor",
    subtitle: "NFL and NBA Player Stat Forecasts",
    href: "https://github.com/simonlunay/fantasy-predictor",
    tags: ["React", "Express", "Python", "Flask", "scikit-learn", "pandas"],
    description:
      "**Predicts NFL and NBA player stats within a ~8% margin of error** to help with fantasy drafts. Built the full pipeline: scraping game logs with **nba_api** and **nfl_data_py**, grouping each player's stats by opponent defensive tier and home/away, and training **Random Forest** multi-output models in **scikit-learn**. The models are served from a **Flask** API to a **React** frontend with an **Express** backend. The demo's backend runs on Render's free tier, so the first search can take a minute while it wakes up.",
    links: [{ label: "Live demo", href: "https://fantasy-predictor-pi.vercel.app" }],
  },
  {
    id: "jcl-equipment",
    title: "JCL Equipment Website",
    subtitle: "Full-Stack Site for a Local Business",
    href: "https://jclequipment.com",
    tags: ["JavaScript", "Node.js", "SQL", "HTML/CSS"],
    description:
      "A modern full-stack site for a local business, including a system that lets the owners list **used parts for sale** themselves. Built with **Node.js** and **SQL**.",
    links: [],
  },
];
