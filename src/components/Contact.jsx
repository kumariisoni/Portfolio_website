import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <p>
        Feel free to reach out to me through any of the following channels:
      </p>

      <div className="card">
        <h3>Contact Information</h3>
<br/>
        <p>
          <strong>Email:</strong> nsonikumari000@gmail.com
        </p>

        <p>
          <strong>Location:</strong> Rajkot, Gujarat
        </p>

        <p>
          <strong>Availability:</strong> Mon - Fri : 1:30 PM - 7:30 PM | Sat -
          Sun : All Day
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "2rem",
            marginTop: "20px",
          }}
        >
          <a
            href="https://github.com/kumariisoni"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="white" />
          </a>

          <a
            href="https://www.linkedin.com/in/soni-kumari-6a522a313/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="white" />
          </a>

          <a href="mailto:nsonikumari000@gmail.com">
            <FaEnvelope color="white" />
          </a>
        </div>
      </div>
    </section>
  );
}