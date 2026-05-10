export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>

      <div className="card">
        <h2>Frontend Developer</h2>
<br/>
        <p>
          I am a passionate Frontend Developer and B.Tech Computer Engineering
          student at Marwadi University with a current CGPA of 9.19.
          <br />
          <br />
          Turning ideas into clean, responsive, and interactive web experiences
          is what excites me the most as a developer.
          <br />
          <br />
          I enjoy solving real-world problems through technology, building
          creative projects, and exploring emerging fields like AI, ML, and
          research-driven innovation.
        </p>

     <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
  <a
    href="#contact"
    className="btn"
    style={{ textDecoration: "none" }}
  >
    Get in Touch
  </a>

  <a
    href="/resume.pdf"
    download
    className="btn"
    style={{ textDecoration: "none" }}
  >
    Download Resume
  </a>
</div>
   </div>
    </section>
  );
}