import Image from "next/image";
import NavBar from "./ui/components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"></main>
    </>
  );
}
