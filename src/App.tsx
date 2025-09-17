import "./App.css";
import About from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ProjectsSection } from "./components/Projects/ProjectSection";
import { Service } from "./components/Service/Service";

function App() {
  return (
    <>
      <div className="bg-[var(--background)]">
        <Header />
        <Hero />
        <About />
        <Service />
        <ProjectsSection />
        <Contact />
      </div>
    </>
  );
}

export default App;
