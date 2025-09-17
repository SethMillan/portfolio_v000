import { ProjectCard } from "./ProjectCard";

// Ejemplo de cómo usar la ProjectCard
export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Cafeteria E-commerce",
      description:
        "Full-featured admin panel for an online store with product management, order tracking, and real-time analytics.",
      category: "Web App",
      technologies: ["./icons/html.png", "./icons/css.png", "./icons/js.png"],
      liveUrl: "https://example.com/demo1",
      codeUrl: "https://github.com/user/project1",
    },
    {
      id: 2,
      title: "C# Tetris Game",
      description:"Classic Tetris game built with C#, featuring smooth controls, scoring system, and increasing difficulty levels.",
      category: "Game",
      technologies: ["./icons/c_sharp.png"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.example.taskapp",
      codeUrl: "https://github.com/user/project2",
    },
    {
      id: 3,
      title: "Pokemon API",
      description:"RESTful API that provides detailed Pokémon data including stats, abilities, and evolutions for developers and fans.",
      category: "API",
      technologies: [
        "./icons/html.png",
        "./icons/css.png",
        "./icons/js.png",
        "./icons/astro.webp",
      ],
      liveUrl: "https://example.com/chatbot",
      codeUrl: "https://github.com/user/chatbot",
    },
  ];

  return (
    <section className="py-16 px-8 pt-60">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text)] font-[Roboto_Condensed] select-none">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
