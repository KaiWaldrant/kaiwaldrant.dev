import Image from "next/image";
import NavBar from "./ui/components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="content-grid min-h-screen"></main>
    </>
  );
}
