import { useState } from "react";

export default function Portofolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="page">
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="logo">
            Mirayat<span> Portfolio</span>
          </a>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div>
          <p className="badge">Available for Freelance Projects</p>
          <h1>
            Hi, I’m <span>Mirayat</span>
            <br />
            Frontend Developer & Creative Web Builder
          </h1>
          <p>
            I build modern, responsive, and interactive websites with clean UI
            and smooth user experience.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="profile-card">
          <div className="avatar">M</div>
          <h2>Mirayat</h2>
          <p>Frontend Developer</p>
          <div className="chips">
            <span>React</span>
            <span>Vite</span>
            <span>UI Design</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">About</p>
        <h2>Building clean digital experiences.</h2>
        <p className="section-desc">
          I focus on crafting professional websites and web apps that feel
          clean, responsive, fast, and easy to use.
        </p>

        <div className="grid cards-3">
          <div className="card">
            <h3>Clean Code</h3>
            <p>Readable structure and simple component-based implementation.</p>
          </div>
          <div className="card">
            <h3>Responsive Design</h3>
            <p>Layouts that work smoothly on mobile, tablet, and desktop.</p>
          </div>
          <div className="card">
            <h3>Fast Performance</h3>
            <p>Lightweight pages with smooth interactions and clean CSS.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="section-label">Skills</p>
        <h2>Skills & Tools</h2>

        <div className="skills">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GitHub", "UI Design"].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Projects</p>
        <h2>Project Showcase</h2>

        <div className="grid projects">
          {[
            "Kasir Abunawas",
            "Duitku AI",
            "Sky Builder",
            "Landing Page Percetakan",
            "Portfolio Website",
            "Business Dashboard UI"
          ].map((project) => (
            <div className="card project-card" key={project}>
              <p className="project-label">Featured Project</p>
              <h3>{project}</h3>
              <p>
                Modern responsive web project with clean UI, fast layout, and
                professional visual direction.
              </p>
              <div className="chips">
                <span>React</span>
                <span>CSS</span>
                <span>UI</span>
              </div>
              <div className="project-buttons">
                <a href="https://mirayat45-bot.github.io/portofolio-app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href="https://github.com/mirayat45-bot/portofolio-app" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact" >
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>Let’s work together</h2>
          <p>
            Need a portfolio, landing page, dashboard, or web prototype? Let’s
            build something clean and professional.
          </p>

          <div className="buttons">
            <a href="https://wa.me/6287890220255" className="btn primary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="mailto:theskylitee@gmail.com" className="btn secondary">
              Email
            </a>
            <a href="https://github.com/mirayat45-bot" className="btn secondary" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Mirayat. Built with passion.</p>
      </footer>
    </main>
  );
}
