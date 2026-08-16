function Projects() {
  const projects = [
    {
      number: "01",
      title: "Apricot Disease Detection System",
      category: "AI / Machine Learning",
      description:
        "An AI-powered computer vision system designed to detect diseases in apricot fruits and leaves, with a focus on early-stage detection for the Skardu region.",
      technologies: [
        "Python",
        "YOLO",
        "Deep Learning",
        "Computer Vision",
        "Flask",
      ],
      featured: true,
    },

    {
      number: "02",
      title: "Apricot Guardian",
      category: "AI + Mobile Application",
      description:
        "A mobile application concept that combines apricot disease detection with a user-friendly interface to help users identify plant diseases.",
      technologies: [
        "Android",
        "Firebase",
        "Machine Learning",
        "Camera",
      ],
    },

    {
      number: "03",
      title: "MNIST Digit Classification",
      category: "Deep Learning",
      description:
        "A neural network project developed to recognize handwritten digits using the MNIST dataset and an Artificial Neural Network.",
      technologies: [
        "Python",
        "ANN",
        "MNIST",
        "NumPy",
        "Scikit-learn",
      ],
    },

    {
      number: "04",
      title: "YOLO Object Detection",
      category: "Computer Vision",
      description:
        "An object detection project using YOLO to explore real-time image detection, dataset preparation, training and model evaluation.",
      technologies: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "Computer Vision",
      ],
    },

    {
      number: "05",
      title: "MERN Stack Applications",
      category: "Full Stack Development",
      description:
        "Web application projects built while developing practical experience with modern JavaScript technologies and full-stack development.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
      ],
    },

    {
      number: "06",
      title: "Data Analysis & Visualization",
      category: "Data Science",
      description:
        "Data-focused projects involving data cleaning, analysis, visualization and extracting meaningful insights from datasets.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Power BI",
        "Data Visualization",
      ],
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <p className="section-label">03. Projects</p>

        <h2>
          Things I've <span>built.</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
            key={project.number}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              {project.featured && (
                <span className="featured-label">Featured</span>
              )}
            </div>

            <p className="project-category">{project.category}</p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

