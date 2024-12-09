import React, { useEffect } from "react";
import "../../src/styles/Skills.css";

function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".skills-category");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-description">
          I specialize in Full Stack Web Development with expertise in various
          technologies across both frontend and backend.
        </p>
        <div className="skills-content">
          <div className="skills-category">
            <h3>
              <i className="fab fa-react"></i> Frontend Development
            </h3>
            <ul>
              <li>
                <i className="fab fa-react"></i> ReactJS
              </li>
              <li>
                <i className="fab fa-node-js"></i> NextJS
              </li>
              <li>
                <i className="fas fa-code"></i> HTML5, CSS3
              </li>
              <li>
                <i className="fab fa-bootstrap"></i> Bootstrap
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>
              <i className="fas fa-server"></i> Backend Development
            </h3>
            <ul>
              <li>
                <i className="fas fa-code"></i> NestJS
              </li>
              <li>
                <i className="fab fa-php"></i> PHP
              </li>
              <li>
                <i className="fab fa-node-js"></i> Express.js
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>
              <i className="fas fa-language"></i> Languages
            </h3>
            <ul>
              <li>
                <i className="fab fa-js-square"></i> JavaScript (JS)
              </li>
              <li>
                <i className="fab fa-js-square"></i> TypeScript (TS)
              </li>
              <li>
                <i className="fas fa-html5"></i> HTML5
              </li>
              <li>
                <i className="fas fa-css3-alt"></i> CSS3
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>
              <i className="fas fa-cogs"></i> Other Tools & Technologies
            </h3>
            <ul>
              <li>
                <i className="fab fa-git"></i> Git
              </li>
              <li>
                <i className="fas fa-plug"></i> REST APIs
              </li>
              <li>
                <i className="fas fa-database"></i> SQL & NoSQL Databases
              </li>
              <li>
                <i className="fas fa-shield-alt"></i> Web Security Practices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
