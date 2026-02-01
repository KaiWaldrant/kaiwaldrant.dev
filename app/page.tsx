import NavBar from "@/components/nav-bar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="content-grid">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
