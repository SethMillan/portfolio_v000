export const ProjectCard = ({
  title,
  description,
  technologies,
  liveUrl,
  codeUrl,
  category,
}: {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  category: string;
}) => {
  return (
    <div className="w-[400px] bg-[var(--background-card)] h-auto rounded-2xl p-6 shadow-xl  flex flex-col align-start  hover:scale-101 hover:shadow-xl transition-shadow transition-transform duration-300 ">
      <h3 className="font-[Roboto_Condensed] text-[32px] text-[var(--color-text)] bold font-bold pt-4 select-none">
        {title}
      </h3>
      <p className="font-[Open_Sans] text-[20px] text-[var(--color-text)] pt-2 font-light not-italic w-[85%] select-none">
        {description}
      </p>
      {/* Tecnologias */}
      <div className="mt-4">
        <ul className="flex flex-row gap-4  mt-2 text-[var(--color-text)] font-[Open_Sans] text-[18px] font-light not-italic">
          {technologies.map((tech, index) => (
            <li key={index}>
              <img
                src={tech}
                alt="tech icon"
                className="inline-block mr-2 w-8 h-auto cursor-pointer hover:scale-110 transition-transform duration-200 select-none"
              />
            </li>
          ))}
        </ul>
      </div>
      {/* Separador estetico */}
      <div className="w-[96%] h-1 bg-[var(--color-text)] opacity-80 rounded-2xl mt-4"></div>
      {/* Links */}
      <div className="flex flex-row justify-between w-[95%] pt-4">
        <p className="flex items-center gap-2 text-[var(--color-primary)] text-[18px] cursor-pointer hover:scale-105 font-bold duration-100 ease-in-out">
          View Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </p>
        <div className="flex flex-row gap-6  rounded-4xl p-1 px-4 cursor-pointer hover:scale-105 font-bold duration-100 ease-in-out bg-[var(--color-primary)]">
          <p className="flex flex-row items-center gap-2 text-[var(--color-card)] text-[18px] ">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            GitHub
          </p>
        </div>
      </div>
    </div>
  );
};
