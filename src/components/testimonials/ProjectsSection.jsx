import React from "react";
import "./ProjectsSection.css"; // Создай файл стилей для кастомизации

const projects = [
  {
    title: "Сайт для продажи онлайн-курсов",
    description: "Веб-приложение для продажи и управления онлайн-курсами. Включает подробности курсов, видео-превью и удобную навигацию. Здесь не работает backend часть, так как написан на localhost",
    technologies: "React, CSS, REST API",
    link: "https://front-proj-orcin.vercel.app/",
    designLink: "https://www.figma.com/design/6QCUMgfFuyhjhKcF0yagIW/MyCourses.io---Course-Website-%7C-Course-Online-%7C-Course-details-%7C-Course-landing-page-%7C-Untitled-UI-(Community)?node-id=518-2505&p=f&t=NHLHmMPKzjZizMey-0",
  },
  {
    title: "Skill-Intern",
    description: "Платформа для поиска стажировок и вакансий в сфере IT, аналогичная it-nomads.kz. Помогает соединять студентов и работодателей. Так же я добавил функции, которых нет в дизайне, такие как автоматическая отправка сообщений по электронной почте при отклике на вакансию. Здесь не работает backend часть, так как написан на localhost",
    technologies: "React, Tailwind, TypeScript",
    link: "https://skill-intern-front-i6n8.vercel.app/",
    designLink: "https://www.figma.com/design/QI8z9GyaaBpwUONPtD6Bqn/PM-Skill-Intern?node-id=0-1",
  },
  {
    title: "Лендинг капсульных домов",
    description: "Одностраничный сайт для продажи капсульных домов. Содержит информацию о продукции, преимуществах и контактную форму для обратной связи.",
    technologies: "React, SCSS, адаптивный дизайн",
    link: "https://salamat2201.github.io/capsule-house",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My projects</h2>
      <p className="subtitle">Here are my main projects</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Технологии:</strong> {project.technologies}
            </p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Посмотреть сайт
              </a>
              <a href={project.designLink} target="_blank" rel="noopener noreferrer">
                Макет на Figma
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;