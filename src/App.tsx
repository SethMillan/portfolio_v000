import "./App.css";
import About from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ProjectsSection } from "./components/Projects/ProjectSection";
import { Service } from "./components/Service/Service";

function App() {
  return (
    <>
      <div className="bg-[--background]">
        <Header />
        <Hero />
        <About />
        <Service />
        <ProjectsSection />
      </div>
    </>
  );
}

export default App;
