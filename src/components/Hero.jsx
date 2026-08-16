import { ArrowRight, /*Download*/ } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>
          Saira <span>Batool</span>
        </h1>

        <h2>AI/ML • Data Science • Software Development</h2>

        <p className="hero-description">
          A Computer Science graduate passionate about building intelligent,
          data-driven and practical software solutions for real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn secondary-btn">
            Let's Connect
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow"></div>

        <div className="code-card">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>

          <div className="code-content">
            <p>
              <b>const</b> developer = {"{"}
            </p>
            <p>&nbsp;&nbsp;name: <i>"Saira"</i>,</p>
            <p>&nbsp;&nbsp;focus: <i>"AI & Data"</i>,</p>
            <p>&nbsp;&nbsp;passion: <i>"Building"</i></p>
            <p>{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;