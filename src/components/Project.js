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
      view: "NO",
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
      view: "YES",
    },
    {
      title: "Exitlag",
      description:
        "A comprehensive reporting and automation system developed for ExitLag to enhance operational efficiency and data transparency. The project includes the creation of two key reports: the ExitLag Audit Report, which provides detailed analysis of customer data and trends, and the ExitLag MRC Report, focused on accurate calculation and consolidation of subscription charges. Additionally, a monthly cron job was implemented to automate the extraction of active customer data, ensuring up-to-date and consistent records. This development leverages scalable and robust technology to streamline processes and deliver valuable insights for ExitLag's operations.",
      techStack: ["PHP", "Oracle"],
      link: "https://providers.exitlag.com/login",
      image: "/img/Exitlag.png",
      view: "YES",
    },
  ];

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in">
          Projects
        </h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
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
