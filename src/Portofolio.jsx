import { useState } from "react";

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
      "Sistem kasir percetakan dengan dashboard, transaksi, laporan, status pembayaran, dan tampilan mobile friendly.",
    stack: ["React", "Dashboard", "POS"],
  },
  {
    title: "Duitku AI",
    description:
      "Konsep aplikasi keuangan pribadi berbasis PWA dengan scan struk, catatan, budget, Telegram bot, dan laporan.",
    stack: ["PWA", "AI Concept", "UI/UX"],
  },
  {
    title: "Sky Builder",
    description:
      "Prototype website builder dengan template, preview, block library, SEO, checklist, dan export HTML.",
    stack: ["React", "Builder", "Prototype"],
  },
  {
    title: "Landing Page Percetakan",
    description:
      "Landing page modern untuk bisnis percetakan dengan katalog produk, CTA WhatsApp, efek visual, dan responsive layout.",
    stack: ["Landing Page", "CSS", "Responsive"],
  },
];

export default function Portofolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page">
      <div className="bg-grid" />
      <div className="bg-glow glow-a" />
      <div className="bg-glow glow-b" />

      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            Mirayat<span>Portfolio</span>
          </a>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="nav-btn">Contact Me</a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section id="home" className="hero container">
        <div className="hero-text">
          <p className="badge">Available for freelance projects</p>
          <h1>
            Hi, I’m <span>Mirayat</span>
            <br />
            Frontend Developer & Creative Web Builder
          </h1>
          <p className="hero-desc">
            I build modern, responsive, and interactive websites with clean UI
            and smooth user experience.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-avatar">M</div>
          <h2>Mirayat</h2>
          <p>Frontend Developer</p>

          <div className="mockup">
            <span />
            <span />
            <span />
            <div />
            <div />
          </div>

          <div className="floating-tags">
            <span>React</span>
            <span>Vite</span>
            <span>UI Design</span>
          </div>
        </div>
      </section>

      <section id="about" className="section container">
        <div className="section-head">
          <p className="section-label">About</p>
          <h2>Clean digital experiences with focus and detail.</h2>
          <p>
            I focus on crafting user interfaces for websites and web apps that
            feel clean, responsive, and professional. My work combines visual
            design, structure, and practical frontend implementation.
          </p>
        </div>

        <div className="feature-grid">
          <article className="glass-card">
            <span className="icon">⌘</span>
            <h3>Clean Code</h3>
            <p>Readable structure, reusable components, and lightweight implementation.</p>
          </article>
          <article className="glass-card">
            <span className="icon">◈</span>
            <h3>Responsive Design</h3>
            <p>Mobile-first layout that adapts smoothly across all screen sizes.</p>
          </article>
          <article className="glass-card">
            <span className="icon">⚡</span>
            <h3>Fast Performance</h3>
            <p>Fast loading interface with smooth interaction and simple structure.</p>
          </article>
        </div>
      </section>

      <section id="skills" className="section container">
        <div className="section-head">
          <p className="section-label">Skills</p>
          <h2>Tools and skills I use.</h2>
        </div>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section container">
        <div className="section-head">
          <p className="section-label">Projects</p>
          <h2>Selected project showcase.</h2>
          <p>
            A collection of web app concepts, landing pages, portfolio work, and
            dashboard-style interfaces.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-label">Featured Project</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href="https://mirayat45-bot.github.io/portofolio-app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href="https://github.com/mirayat45-bot/portofolio-app" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section container">
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>Let’s work together</h2>
          <p>
            Need a portfolio, landing page, dashboard, or website prototype?
            I can help turn your idea into a clean and responsive web interface.
          </p>

          <div className="contact-actions">
            <a className="btn primary" href="https://wa.me/6287890220255" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn secondary" href="mailto:theskylitee@gmail.com">
              Email
            </a>
            <a className="btn secondary" href="https://github.com/mirayat45-bot" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p>© 2026 Mirayat. Built with passion.</p>
        <div>
          <a href="https://github.com/mirayat45-bot" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:theskylitee@gmail.com">Email</a>
          <a href="#home">Top</a>
        </div>
      </footer>
    </main>
  );
}
