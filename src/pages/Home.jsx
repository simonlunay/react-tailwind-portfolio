import { useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import { RichText } from "../components/RichText";
import { experience, profile, projects } from "../data/content";

const projectIds = new Set(projects.map((p) => p.id));

// The URL hash picks the tab: #experience, #projects, or a project id
// (opens Projects and scrolls to that card). Anything else shows About.
const tabFor = (hash) => {
  if (hash === "experience") return "experience";
  if (hash === "projects" || projectIds.has(hash)) return "projects";
  return "about";
};

const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash.slice(1));
  useEffect(() => {
    const onChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
};

const isExternal = (href) => /^https?:\/\//.test(href);

const Link = ({ href, children, ...props }) =>
  isExternal(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  );

const tabs = [
  { id: "about", label: profile.name },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const Navbar = ({ active }) => (
  <nav className="navbar">
    <div className="container nav-links">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          className={`nav-link${tab.id === active ? " active" : ""}`}
          aria-current={tab.id === active ? "page" : undefined}
        >
          {tab.label}
        </a>
      ))}
    </div>
  </nav>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="profile-section">
      <img src={profile.photo} alt={profile.name} className="profile-image" />
      <div className="profile-info">
        <h1 className="name">{profile.name}</h1>
        {profile.credentials.map((line, i) => (
          <p key={line} className={i ? "title title-extra" : "title"}>
            {line}
          </p>
        ))}
        <div className="divider" />
        <div className="contact-info">
          {profile.links.map(({ label, icon, href }) => (
            <Link key={label} href={href} className="contact-item" aria-label={label}>
              <Icon name={icon} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="divider-mobile" />
  </aside>
);

const About = () => (
  <>
    <section className="text-section">
      <h2>About</h2>
      <p>
        Hi there! I'm Simon, a Computer Science and Engineering student at{" "}
        <Link href="https://cse.osu.edu/" className="link">
          The Ohio State University
        </Link>
        , specializing in AI with a minor in Math.
      </p>
      <p>
        This summer I interned at{" "}
        <Link href="https://www.fidelity.com/" className="link">
          Fidelity Investments
        </Link>{" "}
        as a Software Engineering Intern, where I worked on agentic AI and automation projects. Now I do AI/ML research for the Ohio State College of
        Engineering and lead a student dev team that builds software for nonprofits.
      </p>
      <p>
        I love building things people actually use, whether that's AI tools or websites I've
        built for paying clients. Outside of tech, I love pickup basketball, skiing,
        and card games like cribbage and hearts.
      </p>
    </section>

    <section className="text-section featured-projects">
      <h2>Featured Projects</h2>
      <p>
        A few of the things I've built recently.{" "}
        <a href="#projects" className="projects-link">
          View all projects →
        </a>
      </p>
      <div className="project-list">
        {projects
          .filter((p) => p.featured)
          .map((p) => (
            <a key={p.id} href={`#${p.id}`} className="project-item">
              <span className="featured-project-link">
                {p.title} - {p.subtitle}
              </span>
              <span className="featured-badge">{p.highlight}</span>
            </a>
          ))}
      </div>
    </section>
  </>
);

const Experience = () => (
  <section className="text-section">
    <h2>Experience</h2>
    {experience.map((job) => (
      <div key={job.org} className="project-card">
        <div className="experience-header">
          <h3 className="project-title">{job.org}</h3>
          <span className="experience-dates">{job.dates}</span>
        </div>
        <p className="experience-role">{job.role}</p>
        <p className="project-description">
          <RichText text={job.summary} />
        </p>
      </div>
    ))}
  </section>
);

const Projects = () => (
  <section className="text-section">
    <h2>Projects</h2>
    {projects.map((p) => (
      <div key={p.id} id={p.id} className="project-card">
        <div className="project-header">
          <h3 className="project-title">
            {p.href ? (
              <Link href={p.href} className="project-link">
                {p.title} - {p.subtitle}
              </Link>
            ) : (
              `${p.title} - ${p.subtitle}`
            )}
          </h3>
          <div className="project-tech">
            {p.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="project-description">
          <RichText text={p.description} />
        </p>
        {p.links.length > 0 && (
          <div className="project-extra-links">
            {p.links.map(({ label, href }) => (
              <Link key={label} href={href} className="link">
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </section>
);

export const Home = () => {
  const hash = useHash();
  const tab = tabFor(hash);

  // Switching tabs starts at the top; a project id scrolls to and briefly highlights its card.
  useEffect(() => {
    const card = projectIds.has(hash) && document.getElementById(hash);
    if (!card) {
      window.scrollTo(0, 0);
      return;
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    card.classList.add("project-highlight");
    const timer = setTimeout(() => card.classList.remove("project-highlight"), 1800);
    return () => {
      clearTimeout(timer);
      card.classList.remove("project-highlight");
    };
  }, [hash]);

  return (
    <>
      <Navbar active={tab} />
      <div className="container">
        <div className="main-content">
          <Sidebar />
          <main className="content" key={tab}>
            {tab === "about" && <About />}
            {tab === "experience" && <Experience />}
            {tab === "projects" && <Projects />}
          </main>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Simon Lunay</p>
        </div>
      </footer>
    </>
  );
};
