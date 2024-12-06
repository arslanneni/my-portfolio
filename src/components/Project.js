import React from "react";
import "../../src/styles/Project.css";

function Projects() {
  const projectList = [
    {
      title: "Nayatel CRM",
      description: `NAYATELCRM is a robust and scalable customer relationship management system built with a microservices architecture to enhance customer interactions, manage service requests, and optimize support operations. Designed to improve efficiency across all customer touchpoints, the system manages the entire customer and billing journey seamlessly.

The CRM system is structured around multiple independent microservices, each responsible for specific tasks such as customer management, billing, and support. This architecture ensures high scalability, easy maintenance, and smooth deployment of new features. The customer journey, from onboarding to billing and support, is fully automated, offering a seamless experience for both customers and support agents.

To enhance the development and usage experience, we integrated Swagger for API documentation, allowing easy access and interaction with the system's API endpoints. This helps both internal developers and third-party services to integrate with the CRM system efficiently.`,
      techStack: ["NextJS", "NestJS", "JavaScript", "Bootstrap", "PostgreSQL"],
      link: "https://example.com",
      image: "/img/NCRM.png",
      view: "NO", // Add your image path here
    },
    {
      title: "Almari",
      description:
        "Almari is a modern and intelligent wardrobe application that curates clothing, shoes, and accessories from various brands by scraping data directly from their websites. This app allows users to browse a wide range of fashion items, create personalized outfits, and find perfect matches for their selections using an advanced machine learning (ML) model. Designed for fashion enthusiasts, Almari takes the hassle out of finding complementary clothing and footwear by providing a seamless, AI-powered experience.",
      techStack: [
        "NextJS",
        "NestJS",
        "JavaScript",
        "Bootstrap",
        "PostgreSQL",
        "Machine Learning",
      ],
      link: "https://almari.vercel.app/Login",
      image: "/img/Almari.png",
      view: "YES", // Add your image path here
    },
    {
      title: "User Authentication App",
      description:
        "A secure and scalable user authentication system built with NestJS. This application utilizes JSON Web Tokens (JWT) for authentication and authorization, ensuring that users' data and sessions are securely handled. The password hashing is done using Argon2, a state-of-the-art cryptographic hashing algorithm known for its resistance to brute-force attacks. Users can register, log in, and manage their sessions, all with top-tier security features. This app provides a robust foundation for building secure authentication for modern web applications.",
      techStack: ["NestJS", "JWT", "Argon2", "TypeScript", "PostgreSQL"],
      link: "https://github.com/arslanneni/user-authentication-nestjs",
      image: "/img/Authentication.jpg",
      view: "YES", // Add your image path here
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              {project.view === "YES" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;