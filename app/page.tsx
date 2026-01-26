import NavBar from "@/components/navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="content-grid min-h-screen">
        <Hero />
      </main>
    </>
  );
}
