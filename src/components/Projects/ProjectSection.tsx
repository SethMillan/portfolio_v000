import { ProjectCard } from "./ProjectCard";

// Ejemplo de cómo usar la ProjectCard
export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Cafeteria E-commerce",
      description:
        "Full-featured admin panel for an online store with product management, order tracking, and real-time analytics.",
      technologies: ["./icons/html.png", "./icons/css.png", "./icons/js.png"],
      liveUrl: "https://kopi-pearl.vercel.app/",
      codeUrl: "https://github.com/SethMillan/Kopi",
    },
    {
      id: 2,
      title: "Pokemon API",
      description:"RESTful API that provides detailed Pokémon data including stats, abilities, and evolutions for developers and fans.",
      technologies: [
        "./icons/html.png",
        "./icons/css.png",
        "./icons/js.png",
        "./icons/astro.webp",
      ],
      liveUrl: "noay",
      codeUrl: "https://github.com/SethMillan/astro-5-pokemon",
    },
    {
      id: 3,
      title: "Mezcales Website",
        description:"Personal portfolio website showcasing projects, skills, and contact information with a modern design.",
      technologies: ["./icons/html.png", "./icons/css.png", "./icons/js.png","./icons/astro.webp"],
      liveUrl: "https://mezcal-elaferrado.vercel.app/",
      codeUrl: "https://github.com/SethMillan/mezcal-web",
    },
  ];

  return (
    <section className="py-16 px-8 pt-60 h-[120vh]">
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
