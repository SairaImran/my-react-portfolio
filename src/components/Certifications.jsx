function Certifications() {
  const certifications = [
    {
      title: "MERN Stack Development",
      organization: "Professional Training",
      description:
        "Hands-on training in modern full-stack web development using MongoDB, Express.js, React and Node.js.",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      organization: "Professional Training",
      description:
        "Training focused on machine learning concepts, deep learning, computer vision and practical AI applications.",
    },
    {
      title: "Data Analytics",
      organization: "Professional Training",
      description:
        "Experience with data analysis, visualization, reporting and extracting insights from datasets.",
    },
    {
      title: "Harvard AI Course",
      organization: "Harvard Online",
      description:
        "Coursework covering fundamental concepts and applications of artificial intelligence.",
    },
  ];

  return (
    <section className="certifications section" id="certifications">
      <div className="section-heading">
        <p className="section-label">05. Certifications</p>

        <h2>
          Learning, growing & <span>upskilling.</span>
        </h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certificate) => (
          <div
            className="certificate-card"
            key={certificate.title}
          >
            <div className="certificate-icon">
              ✓
            </div>

            <h3>{certificate.title}</h3>

            <h4>{certificate.organization}</h4>

            <p>{certificate.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;