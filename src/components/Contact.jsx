function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">

        <div className="section-heading">
          <p className="section-label">07. Contact</p>

          <h2>
            Let's build something <span>meaningful.</span>
          </h2>

          <p className="contact-intro">
            I'm always interested in learning, collaborating and working
            on meaningful technology projects.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <a
              href="mailto:sairashigri7786@example.com"
              className="contact-item"
            >
              <span className="contact-icon">✉</span>

              <div>
                <small>Email</small>
                <strong>sairashigri7786@example.com</strong>
              </div>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">⌘</span>

              <div>
                <small>GitHub</small>
                <strong>github.com/sairaimran406</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">in</span>

              <div>
                <small>LinkedIn</small>
                <strong>linkedin.com/in/sairaimran4068</strong>
              </div>
            </a>

          </div>

          <div className="contact-message">
            <p>
              Have an idea, opportunity, or project in mind?
            </p>

            <a
              href="mailto:your.email@example.com"
              className="btn primary-btn"
            >
              Get In Touch →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;