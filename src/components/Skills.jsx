import "./Skills.css";

export default function Skills() {
  const skills = [
    "C",
    "Java",
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "MongoDB",
    "Git / GitHub"
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}