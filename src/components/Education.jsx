function Education() {
  const education = [
    {
      year: "2022 — 2026",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Baltistan, Skardu",
      description:
        "Studied computer science with a focus on software development, artificial intelligence, machine learning, databases, data analysis and modern computing technologies.",
    },
  ];

  return (
    <section className="education section" id="education">
      <div className="section-heading">
        <p className="section-label">04. Education</p>

        <h2>
          My <span>academic journey.</span>
        </h2>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <div className="education-card" key={item.degree}>
            <div className="education-year">
              {item.year}
            </div>

            <div className="education-content">
              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;