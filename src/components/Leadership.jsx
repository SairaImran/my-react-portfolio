function Leadership() {
  const experiences = [
    {
      role: "Deputy General Secretary",
      organization: "Computing Society",
      description:
        "Contributed to organizing technical activities, coordinating students, and supporting events within the computing community.",
    },
    {
      role: "AI & Machine Learning Projects",
      organization: "Academic & Personal Projects",
      description:
        "Worked on practical AI and computer vision projects involving dataset preparation, model training, experimentation and application development.",
    },
    {
      role: "Web Development",
      organization: "Academic & Personal Projects",
      description:
        "Built and explored web applications using React and modern JavaScript technologies while continuously improving software development skills.",
    },
  ];

  return (
    <section className="leadership section" id="experience">
      <div className="section-heading">
        <p className="section-label">06. Experience</p>

        <h2>
          Beyond the <span>code.</span>
        </h2>
      </div>

      <div className="experience-list">
        {experiences.map((item) => (
          <div className="experience-card" key={item.role}>
            <div className="experience-dot"></div>

            <div>
              <h3>{item.role}</h3>

              <h4>{item.organization}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;