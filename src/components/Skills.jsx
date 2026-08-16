import {
  Code2,
  Brain,
  Database,
  Globe,
  Smartphone,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={26} />,
      title: "Programming",
      skills: ["Python", "JavaScript", "C++", "HTML", "CSS"],
    },
    {
      icon: <Brain size={26} />,
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "YOLO",
        "Neural Networks",
      ],
    },
    {
      icon: <Database size={26} />,
      title: "Data Science",
      skills: [
        "Data Analysis",
        "Data Visualization",
        "Pandas",
        "NumPy",
        "Power BI",
      ],
    },
    {
      icon: <Globe size={26} />,
      title: "Web Development",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
      ],
    },
    {
      icon: <Smartphone size={26} />,
      title: "Application Development",
      skills: [
        "Android Development",
        "Firebase",
        "Camera Integration",
        "Mobile UI",
      ],
    },
    {
      icon: <Wrench size={26} />,
      title: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Google Colab",
        "Jupyter Notebook",
        "Figma",
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p className="section-label">02. Skills</p>

        <h2>
          Tools I use to <span>build & solve.</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <div className="skill-icon">{category.icon}</div>

            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;