import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>
          Hi, I'm <span>Soni Kumari</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p>A computer engineering student with a strong foundation in programming and web development. Skilled in C , java , javascript and React , with a hands on experience in building responsive and user-friendly websites using MERN Stack.
        
        </p>

        <a href="#projects">
          <button className="btn">View Projects</button>
        </a>
      </div>

     
    </section>
  );
}