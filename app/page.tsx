import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <p className="hero-subtitle">Hello, I’m</p>
          <h1>
            <span className="hero-name">Agwuncha Adim</span>
          </h1>
          <p className="hero-description">
            I am a Full Stack Developer focused on creating high-performance, 
            accessible, and beautiful web experiences. Expert in turning 
            complex problems into elegant solutions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Explore Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="scroll-indicator"></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <div className="section-header">
          <p className="section-eyebrow">Technical Stack</p>
          <h2 className="section-title">My Expertise</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-content">
              <span className="skill-icon">⚛️</span>
              <h3>Frontend Development</h3>
              <p>Crafting responsive and interactive user interfaces using modern frameworks.</p>
              <div className="tech-stack">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Next.js</span>
              </div>
            </div>
          </div>
          {/* Add more skill-cards here as needed */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <div className="section-header">
          <p className="section-eyebrow">Selected Works</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">🚀</div>
            <div className="project-content">
              <h3>Project Title</h3>
              <p>Description of your amazing project goes here.</p>
              <div className="project-tags">
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Talk</h2>
        </div>
        <div className="contact-grid">
          <a href="mailto:your-email@example.com" className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>Click to send a message</p>
          </a>
        </div>
      </section>
    </>
  );
}