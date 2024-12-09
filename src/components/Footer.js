import React, { useEffect } from "react";
import "../../src/styles/Footer.css";

function Footer() {
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

    const elements = document.querySelectorAll(".footer-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-black text-center text-lg-start shadow-sm footer-section">
      <div className="container p-4">
        <div className="row">
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 footer-section">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 footer-section">
            <h5 className="text-uppercase">Follow Me</h5>
            <div className="social-links">
              <a
                href="https://github.com/arslanneni"
                className="me-3 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arslan-ali-25a606226/"
                className="me-3 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://medium.com/@arslan.neni23"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-medium"></i> Medium
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 footer-section">
            <h5 className="text-uppercase">Contact</h5>
            <p>
              Email:{" "}
              <a href="mailto:arslanalidev23@gmail.com" className="text-white">
                arslanalidev23@gmail.com
              </a>
            </p>
            <p>Phone: +923030901255</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
