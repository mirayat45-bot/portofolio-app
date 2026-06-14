import { useState } from "react";

export default function Portofolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "React", "JavaScript", "HTML", "CSS", "Vite",
    "UI/UX", "Dashboard", "Landing Page", "PWA Concept", "GitHub"
  ];

  const projects = [
    {
      category: "Web App",
      title: "Kasir Abunawas",
      desc: "Sistem kasir percetakan dengan dashboard, transaksi, laporan, status pembayaran, dan tampilan mobile friendly.",
      tags: ["React", "Vite", "Dashboard"]
    },
    {
      category: "PWA",
      title: "Duitku AI",
      desc: "Konsep aplikasi keuangan pribadi berbasis PWA dengan scan struk, catatan, budget, Telegram bot, dan laporan.",
      tags: ["PWA", "AI Concept", "React"]
    },
    {
      category: "Prototype",
      title: "Sky Builder",
      desc: "Prototype website builder dengan template, preview, block library, SEO, checklist, dan export HTML.",
      tags: ["React", "UI/UX", "Builder"]
    },
    {
      category: "Landing Page",
      title: "Landing Page Percetakan",
      desc: "Landing page modern untuk bisnis percetakan dengan katalog produk, CTA WhatsApp, efek visual, dan responsive layout.",
      tags: ["Landing Page", "CSS", "Responsive"]
    }
  ];

  return (
    <div className="page">
      {/* Background layers */}
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-inner">
          <span className="logo">
            Sky<span className="logo-accent">Lite</span>
          </span>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-text">
          <span className="badge">Available for Freelance Projects</span>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">SkyLite</span>
            <br />
            Frontend Developer &amp; Digital Product Builder
          </h1>
          <p className="hero-desc">
            Saya membangun website modern, aplikasi kasir, landing page,
            dashboard, dan prototype digital product dengan tampilan clean,
            cepat, dan responsif.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Hubungi WhatsApp</a>
            <a href="#projects" className="btn btn-secondary">Lihat Project</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card main-card">
            <div className="visual-dot" />
            <span className="visual-label">React</span>
            <span className="visual-sub">Component-based UI</span>
          </div>
          <div className="visual-mini-grid">
            <div className="visual-card mini">Vite</div>
            <div className="visual-card mini">UI Design</div>
            <div className="visual-card mini">Web App</div>
            <div className="visual-card mini">Dashboard</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          Saya fokus membuat interface website dan aplikasi web yang enak
          dipakai, responsif, dan punya tampilan profesional. Saya suka
          membangun sistem seperti kasir, dashboard bisnis, katalog produk,
          landing page, dan prototype aplikasi AI.
        </p>

        <div className="highlight-grid">
          <div className="highlight-card">
            <span className="highlight-icon">◆</span>
            <h3>Clean UI</h3>
            <p>Desain rapi, minim noise, fokus pada konten dan fungsi.</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">▣</span>
            <h3>Responsive Layout</h3>
            <p>Tampil maksimal di HP, tablet, maupun desktop.</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">▲</span>
            <h3>Fast Development</h3>
            <p>Proses cepat dengan struktur kode yang ringan dan rapi.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-wrap">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <span className="project-category">{p.category}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a href="#contact" className="btn btn-small">View Detail</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Let's Build Something</h2>
        <p className="section-text">
          Butuh website, landing page, dashboard, atau prototype aplikasi?
          Saya siap bantu bikin tampilan yang rapi dan siap dikembangkan.
        </p>
        <div className="hero-buttons contact-buttons">
          <a href="#" className="btn btn-primary">WhatsApp</a>
          <a href="#" className="btn btn-secondary">GitHub</a>
        </div>
        <p className="contact-meta">Fast response • Mobile first • Clean code</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 SkyLite. Built with React + Vite.</p>
      </footer>
    </div>
  );
}

