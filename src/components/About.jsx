function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="section-label">01. About Me</p>
        <h2>Turning ideas into <span>real solutions.</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Saira Batool, a Computer Science graduate with a strong
            interest in Artificial Intelligence, Machine Learning, Data
            Science, and Software Development.
          </p>

          <p>
            I enjoy working on practical problems where technology can make
            a meaningful difference. My experience includes building
            machine learning and computer vision projects, developing
            web and mobile applications, and working with data-driven
            solutions.
          </p>

          <p>
            One of my key projects is an Apricot Disease Detection System,
            where I explored computer vision and deep learning to address
            a real-world agricultural problem.
          </p>

          <p>
            I'm continuously improving my technical skills and looking for
            opportunities where I can learn, contribute, and build
            impactful technology.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>AI & ML</h3>
            <p>
              Exploring intelligent systems, deep learning and computer
              vision.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Data</h3>
            <p>
              Working with data to discover insights and support
              data-driven solutions.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Development</h3>
            <p>
              Building practical web, mobile and software applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;