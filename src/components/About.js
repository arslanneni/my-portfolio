import React from "react";
import "../../src/styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <strong>Arslan Ali</strong>, a passionate developer with a
              knack for solving problems and building user-friendly
              applications. I specialize in front-end and back-end development,
              and I love turning ideas into reality using modern technologies.
            </p>
            <p>
              With a strong background in programming and design, My goal is to
              continuously improve my skills and create meaningful digital
              experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              reading tech blogs, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className="about-image">
            <img src="/img/pfp.jpeg" alt="Arslan PFP" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
