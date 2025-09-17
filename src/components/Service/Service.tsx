import { Nave } from "../About/Nave";
import { Card } from "./Card";

export const Service = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-[var(--color-background)] py-20 px-5">
      <h3 className="text-[#2E3A59] font-['Roboto_Condensed'] text-[48px] font-extrabold">Service</h3>
      <div className="flex w-[80%] justify-center items-center gap-15">
        <Card
          title={"Software Development"}
          description={
            "Create custom web and mobile applications that perfectly adapt to your business needs"
          }
          checks={[
            "Responsive web applications",
            "REST API development",
            "System integrations",
            "Performance optimization",
          ]}
          icon={"./icons/code.svg"}
          color={"--color-primary"}
        />
        <div className="rotate-12"><Nave></Nave></div>
        
        <Card
          title={"UI/UX Design"}
          description={
            "Design intuitive and engaging digital experiences that users love and remember"
          }
          checks={[
            "User interface design",
            "User experience research",
            "Interactive prototypes",
            "Design systems & guides",
          ]}
          icon={"./icons/palette.svg"}
          color={"--color-secondary"}
        />
      </div>
    </div>
  );
};
