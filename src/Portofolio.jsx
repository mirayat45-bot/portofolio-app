cd ~/portofolio-app

cat > src/Portofolio.jsx <<'EOF'
import { useEffect, useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "GitHub",
  "UI Design",
];

const projects = [
  {
    title: "Kasir Abunawas",
    description:
      "A mobile-friendly printing cashier system with dashboard, transactions, reports, payment status, and clean business workflow.",
    stack: ["React", "Dashboard", "POS"],
    demo: "https://mirayat45-bot.github.io/portofolio-app/",
    github: "https://github.com/mirayat45-bot/portofolio-app",
  },
  {
    title: "Duitku AI",
    description:
      "A personal finance PWA concept with receipt scan, notes, budget, Telegram bot workflow, and financial reports.",
    stack: ["PWA", "AI Concept", "UI/UX"],
    demo: "https://mirayat45-bot.github.io/portofolio-app/",
    github: "https://github.com/mirayat45-bot/portofolio-app",
  },
  {
    title: "Sky Builder",
    description:
      "A modern website builder prototype with template library, preview mode, block system, SEO checklist, and HTML export concept.",
    stack: ["React", "Builder", "Prototype"],
    demo: "https://mirayat45-bot.github.io/portofolio-app/",
    github: "https://github.com/mirayat45-bot/portofolio-app",
  },
  {
    title: "Creative Landing Page",
    description:
      "A premium landing page concept for digital business with strong hero section, CTA buttons, responsive layout, and modern visual style.",
    stack: ["Landing Page", "CSS", "Responsive"],
    demo: "https://mirayat45-bot.github.io/portofolio-app/",
    github: "https://github.com/mirayat45-bot/portofolio-app",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Vite, designed with premium dark theme, glass cards, and smooth animations.",
    stack: ["React", "Vite", "Portfolio"],
    demo: "https://mirayat45-bot.github.io/portofolio-app/",
    github: "https://github.com/mirayat45-bot/portofolio-app",
  },
  {
    title: "Business Dashboard UI",
    description:
      "A clean dashboard interface concept for tracking stats, projects, tasks, performance, and business activity in one page.",
    stack: ["Dashboard", "UI Design", "Web App"],
    demo: "https://mirayat45-bot.github.io/portofolio-app/",
    github: "https://github.com/mirayat45-bot/portofolio-app",
  },
];

export default function Portofolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.16 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-page">
      <div className="noise-layer" />
      <div className="grid-layer" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="glow glow-three" />

      <header className="site-header">
        <nav className="nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">M</span>
            <span>Mirayat Portfolio</span>
          </a>

          <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <a href="#contact" className="nav-cta">
            Contact Me
          </a>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-content reveal">
          <span className="eyebrow">
            Available for freelance & creative web projects
          </span>

          <h1>
            Hi, I’m <span>Mirayat</span>
            <br />
            Frontend Developer & Creative Web Builder
          </h1>

          <p>
            I build modern, responsive, and interactive websites with clean UI
            and smooth user experience.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>06+</strong>
              <span>Project Concepts</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Modern UI Style</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Mobile First</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-card">
            <div className="profile-top">
              <div className="profile-avatar">
                <span>M</span>
              </div>
              <div>
                <h2>Mirayat</h2>
                <p>Frontend Developer</p>
              </div>
            </div>

            <div className="profile-preview">
              <div className="preview-bar" />
              <div className="preview-line long" />
              <div className="preview-line" />
              <div className="preview-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="floating-tags">
              <span>React</span>
              <span>UI Design</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="orbit-card orbit-one">Clean UI</div>
          <div className="orbit-card orbit-two">Fast Web</div>
        </div>
      </section>

      <section id="about" className="section-shell content-section">
        <div className="section-heading reveal">
          <span className="section-label">About</span>
          <h2>Building clean digital experiences with focus and detail.</h2>
          <p>
            I focus on crafting user interfaces for websites and web apps that
            feel clean, responsive, and professional. My work combines visual
            design, structure, and practical frontend implementation for landing
            pages, dashboards, portfolio sites, and product prototypes.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card reveal">
            <span className="feature-icon">⌘</span>
            <h3>Clean Code</h3>
            <p>
              Organized structure, reusable components, readable naming, and
              lightweight implementation.
            </p>
          </article>

          <article className="feature-card reveal">
            <span className="feature-icon">◈</span>
            <h3>Responsive Design</h3>
            <p>
              Mobile-first layouts that adapt smoothly across phone, tablet,
              and desktop screens.
            </p>
          </article>

          <article className="feature-card reveal">
            <span className="feature-icon">⚡</span>
            <h3>Fast Performance</h3>
            <p>
              Lightweight assets, clean CSS, fast loading, and smooth
              interaction without unnecessary bloat.
            </p>
          </article>
        </div>
      </section>

      <section id="skills" className="section-shell content-section">
        <div className="section-heading reveal">
          <span className="section-label">Skills</span>
          <h2>Tools and skills I use to craft modern websites.</h2>
        </div>

        <div className="skills-grid reveal">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell content-section">
        <div className="section-heading reveal">
          <span className="section-label">Projects</span>
          <h2>Selected project showcase.</h2>
          <p>
            A collection of web app concepts, landing pages, portfolio work, and
            dashboard-style interfaces built with a clean modern approach.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-card-top">
                <span className="project-dot" />
                <span>Featured Project</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div className="contact-card reveal">
          <span className="section-label">Contact</span>
          <h2>Let’s work together</h2>
          <p>
            Need a portfolio, landing page, dashboard, or website prototype? I
            can help turn your idea into a clean, responsive, and professional
            web interface.
          </p>

          <div className="contact-actions">
            <a
              href="https://wa.me/6287890220255"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              WhatsApp
            </a>
            <a
              href="mailto:theskylitee@gmail.com"
              className="btn btn-ghost"
            >
              Email
            </a>
            <a
              href="https://github.com/mirayat45-bot"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2026 Mirayat. Built with passion.</p>
        <div>
          <a href="https://github.com/mirayat45-bot" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:theskylitee@gmail.com">Email</a>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </main>
  );
}
EOF

cat > src/index.css <<'EOF'
/* =========================
   2026 PORTFOLIO REDESIGN
========================= */

:root {
  --bg: #050812;
  --bg-soft: #0a1020;
  --card: rgba(13, 20, 38, 0.68);
  --card-strong: rgba(18, 28, 52, 0.82);
  --border: rgba(255, 255, 255, 0.11);
  --border-strong: rgba(91, 220, 255, 0.32);
  --text: #f5f7fb;
  --muted: #9ba6bd;
  --muted-2: #6f7a91;
  --cyan: #46e7ff;
  --blue: #4f8cff;
  --purple: #9b5cff;
  --radius: 18px;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  width: 100%;
}

body {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--text);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

.portfolio-page {
  position: relative;
  min-height: 100vh;
  isolation: isolate;
  overflow: hidden;
}

.noise-layer {
  position: fixed;
  inset: 0;
  z-index: -5;
  opacity: 0.18;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.16) 1px, transparent 0);
  background-size: 22px 22px;
}

.grid-layer {
  position: fixed;
  inset: 0;
  z-index: -6;
  pointer-events: none;
  background:
    linear-gradient(rgba(70, 231, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(70, 231, 255, 0.03) 1px, transparent 1px),
    radial-gradient(circle at top left, rgba(79, 140, 255, 0.2), transparent 32%),
    radial-gradient(circle at 80% 10%, rgba(155, 92, 255, 0.18), transparent 28%),
    linear-gradient(180deg, #050812 0%, #080c18 48%, #050812 100%);
  background-size: 44px 44px, 44px 44px, auto, auto, auto;
}

.glow {
  position: fixed;
  z-index: -4;
  width: 420px;
  height: 420px;
  border-radius: 999px;
  filter: blur(95px);
  opacity: 0.38;
  pointer-events: none;
  animation: floatGlow 10s ease-in-out infinite alternate;
}

.glow-one {
  top: -140px;
  right: -120px;
  background: rgba(70, 231, 255, 0.55);
}

.glow-two {
  bottom: 10%;
  left: -180px;
  background: rgba(155, 92, 255, 0.5);
  animation-delay: -4s;
}

.glow-three {
  top: 42%;
  right: 12%;
  width: 280px;
  height: 280px;
  background: rgba(79, 140, 255, 0.35);
  animation-delay: -7s;
}

@keyframes floatGlow {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(22px, -18px, 0) scale(1.08);
  }
}

/* =========================
   HEADER
========================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 8, 18, 0.72);
  backdrop-filter: blur(18px);
}

.nav-container {
  width: min(1180px, calc(100% - 32px));
  height: 76px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.03em;
  white-space: nowrap;
}

.brand-mark {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background:
    linear-gradient(135deg, rgba(70, 231, 255, 0.22), rgba(155, 92, 255, 0.22));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 0 22px rgba(70, 231, 255, 0.18);
  color: var(--cyan);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 26px;
}

.nav-menu a {
  color: var(--muted);
  font-size: 0.94rem;
  font-weight: 600;
  transition: 0.22s ease;
}

.nav-menu a:hover {
  color: var(--text);
  text-shadow: 0 0 16px rgba(70, 231, 255, 0.45);
}

.nav-cta {
  padding: 10px 16px;
  border-radius: 12px;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  transition: 0.22s ease;
}

.nav-cta:hover {
  transform: translateY(-2px);
  border-color: var(--border-strong);
  background: rgba(70, 231, 255, 0.08);
}

.hamburger {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 99px;
  background: var(--text);
  transition: 0.22s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* =========================
   COMMON
========================= */

.section-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.content-section {
  padding: 92px 0;
}

.section-heading {
  max-width: 740px;
  margin-bottom: 34px;
}

.section-label,
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-bottom: 16px;
  padding: 8px 13px;
  border: 1px solid rgba(70, 231, 255, 0.2);
  border-radius: 999px;
  color: var(--cyan);
  background: rgba(70, 231, 255, 0.08);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-heading h2 {
  font-size: clamp(2rem, 5vw, 3.35rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
  margin-bottom: 16px;
}

.section-heading p {
  color: var(--muted);
  font-size: 1.02rem;
  max-width: 690px;
}

.btn {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 20px;
  border-radius: 13px;
  font-weight: 800;
  font-size: 0.95rem;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;
}

.btn-primary {
  color: #021018;
  background: linear-gradient(135deg, var(--cyan), var(--blue));
  box-shadow: 0 14px 34px rgba(70, 231, 255, 0.22);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 45px rgba(70, 231, 255, 0.34);
}

.btn-ghost {
  color: var(--text);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.055);
}

.btn-ghost:hover {
  transform: translateY(-3px);
  border-color: var(--border-strong);
  background: rgba(70, 231, 255, 0.08);
}

/* =========================
   HERO
========================= */

.hero {
  min-height: calc(100vh - 76px);
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 52px;
  padding: 74px 0 96px;
}

.hero-content h1 {
  max-width: 760px;
  font-size: clamp(2.55rem, 7vw, 5.55rem);
  line-height: 0.98;
  letter-spacing: -0.08em;
  margin-bottom: 24px;
}

.hero-content h1 span {
  color: transparent;
  background: linear-gradient(135deg, #ffffff 10%, var(--cyan), var(--purple));
  -webkit-background-clip: text;
  background-clip: text;
}

.hero-content p {
  max-width: 620px;
  color: var(--muted);
  font-size: clamp(1rem, 2vw, 1.14rem);
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 32px;
  max-width: 590px;
}

.hero-stats div {
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-stats strong {
  display: block;
  color: var(--text);
  font-size: 1.25rem;
  line-height: 1;
  margin-bottom: 7px;
}

.hero-stats span {
  color: var(--muted-2);
  font-size: 0.78rem;
  font-weight: 700;
}

.hero-visual {
  position: relative;
  min-height: 490px;
  display: grid;
  place-items: center;
}

.profile-card {
  position: relative;
  width: min(100%, 410px);
  min-height: 470px;
  padding: 24px;
  border-radius: 26px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.035)),
    rgba(10, 16, 32, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.profile-card::before {
  content: "";
  position: absolute;
  inset: -2px;
  z-index: -1;
  background: linear-gradient(135deg, rgba(70, 231, 255, 0.6), transparent 28%, rgba(155, 92, 255, 0.62));
  filter: blur(22px);
  opacity: 0.42;
}

.profile-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.profile-avatar {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background:
    radial-gradient(circle at 30% 20%, #ffffff 0, #7cf2ff 16%, #4f8cff 48%, #6b4dff 100%);
  box-shadow: 0 0 36px rgba(70, 231, 255, 0.24);
}

.profile-avatar span {
  color: #07101d;
  font-size: 2rem;
  font-weight: 900;
}

.profile-top h2 {
  font-size: 1.35rem;
  letter-spacing: -0.03em;
}

.profile-top p {
  color: var(--muted);
  font-size: 0.92rem;
}

.profile-preview {
  min-height: 230px;
  padding: 20px;
  border-radius: 20px;
  background: rgba(2, 8, 22, 0.66);
  border: 1px solid rgba(255, 255, 255, 0.09);
}

.preview-bar {
  width: 88px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--cyan), var(--purple));
  margin-bottom: 22px;
}

.preview-line {
  height: 12px;
  width: 62%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  margin-bottom: 12px;
}

.preview-line.long {
  width: 86%;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 28px;
}

.preview-grid span {
  height: 62px;
  border-radius: 16px;
  background:
    linear-gradient(135deg, rgba(70, 231, 255, 0.18), rgba(155, 92, 255, 0.14)),
    rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.floating-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.floating-tags span,
.orbit-card {
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(70, 231, 255, 0.09);
  border: 1px solid rgba(70, 231, 255, 0.18);
  color: #c8f9ff;
  font-size: 0.8rem;
  font-weight: 800;
}

.orbit-card {
  position: absolute;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.32);
  animation: floatCard 4.8s ease-in-out infinite alternate;
}

.orbit-one {
  top: 70px;
  right: 10px;
}

.orbit-two {
  bottom: 84px;
  left: 0;
  animation-delay: -2s;
}

@keyframes floatCard {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-12px);
  }
}

/* =========================
   ABOUT / FEATURES
========================= */

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.feature-card,
.project-card,
.contact-card {
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.025)),
    var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);
}

.feature-card {
  min-height: 210px;
  padding: 24px;
  transition: 0.24s ease;
}

.feature-card:hover,
.project-card:hover {
  transform: translateY(-7px);
  border-color: var(--border-strong);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34), 0 0 36px rgba(70, 231, 255, 0.08);
}

.feature-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 13px;
  color: var(--cyan);
  background: rgba(70, 231, 255, 0.09);
  border: 1px solid rgba(70, 231, 255, 0.18);
  font-weight: 900;
}

.feature-card h3 {
  font-size: 1.12rem;
  margin-bottom: 9px;
  letter-spacing: -0.03em;
}

.feature-card p {
  color: var(--muted);
  font-size: 0.94rem;
}

/* =========================
   SKILLS
========================= */

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
}

.skill-pill {
  padding: 12px 16px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid var(--border);
  color: #dce5f7;
  font-weight: 800;
  font-size: 0.95rem;
  transition: 0.22s ease;
}

.skill-pill:hover {
  transform: translateY(-4px);
  color: var(--cyan);
  border-color: var(--border-strong);
  background: rgba(70, 231, 255, 0.075);
}

/* =========================
   PROJECTS
========================= */

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.project-card {
  min-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 22px;
  transition: 0.24s ease;
}

.project-card-top {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted-2);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 18px;
}

.project-dot {
  width: 9px;
  height: 9px;
  border-radius: 99px;
  background: var(--cyan);
  box-shadow: 0 0 18px var(--cyan);
}

.project-card h3 {
  font-size: 1.25rem;
  line-height: 1.2;
  letter-spacing: -0.04em;
  margin-bottom: 10px;
}

.project-card p {
  color: var(--muted);
  font-size: 0.93rem;
  flex: 1;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0;
}

.tech-list span {
  padding: 7px 9px;
  border-radius: 9px;
  color: #c7d4eb;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.085);
  font-size: 0.75rem;
  font-weight: 800;
}

.project-actions {
  display: flex;
  gap: 10px;
}

.project-actions a {
  flex: 1;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 800;
  transition: 0.22s ease;
}

.project-actions a:first-child {
  color: #021018;
  background: linear-gradient(135deg, var(--cyan), var(--blue));
  border-color: transparent;
}

.project-actions a:hover {
  transform: translateY(-2px);
  border-color: var(--border-strong);
}

/* =========================
   CONTACT / FOOTER
========================= */

.contact-section {
  padding: 90px 0 108px;
}

.contact-card {
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(28px, 6vw, 54px);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: "";
  position: absolute;
  inset: auto 10% -120px 10%;
  height: 220px;
  background: radial-gradient(circle, rgba(70, 231, 255, 0.22), transparent 68%);
  pointer-events: none;
}

.contact-card h2 {
  position: relative;
  font-size: clamp(2rem, 6vw, 3.7rem);
  line-height: 1;
  letter-spacing: -0.07em;
  margin-bottom: 16px;
}

.contact-card p {
  position: relative;
  max-width: 620px;
  margin: 0 auto 26px;
  color: var(--muted);
}

.contact-actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 13px;
}

.site-footer {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: var(--muted-2);
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.site-footer div {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.site-footer a {
  transition: 0.22s ease;
}

.site-footer a:hover {
  color: var(--cyan);
}

/* =========================
   REVEAL ANIMATION
========================= */

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 980px) {
  .nav-cta {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 36px;
    min-height: auto;
    padding-top: 62px;
  }

  .hero-visual {
    min-height: 430px;
  }

  .feature-grid,
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .nav-container,
  .section-shell,
  .site-footer {
    width: min(100% - 24px, 1180px);
  }

  .site-header {
    background: rgba(5, 8, 18, 0.88);
  }

  .hamburger {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 76px;
    left: 12px;
    right: 12px;
    display: grid;
    gap: 6px;
    padding: 12px;
    border-radius: 18px;
    background: rgba(8, 13, 28, 0.96);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
    transition: 0.22s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-menu a {
    padding: 13px 12px;
    border-radius: 12px;
  }

  .nav-menu a:hover {
    background: rgba(255, 255, 255, 0.055);
  }

  .hero {
    padding: 48px 0 72px;
  }

  .hero-content h1 {
    font-size: clamp(2.4rem, 13vw, 4rem);
  }

  .hero-actions,
  .contact-actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    min-height: auto;
  }

  .profile-card {
    min-height: auto;
    width: 100%;
  }

  .orbit-card {
    display: none;
  }

  .content-section {
    padding: 70px 0;
  }

  .feature-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    min-height: auto;
  }

  .project-actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 420px) {
  .brand span:last-child {
    max-width: 155px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nav-container {
    height: 68px;
  }

  .nav-menu {
    top: 68px;
  }

  .hero {
    padding-top: 38px;
  }

  .profile-preview {
    padding: 15px;
  }

  .preview-grid span {
    height: 50px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  .reveal,
  .glow,
  .orbit-card {
    animation: none !important;
    transition: none !important;
  }

  html {
    scroll-behavior: auto;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
EOF

npm run build

git add .
git commit -m "redesign portfolio ui 2026" || true
git push
npm run deploy
