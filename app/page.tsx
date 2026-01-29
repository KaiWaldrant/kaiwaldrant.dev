import NavBar from "@/components/navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="content-grid">
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
