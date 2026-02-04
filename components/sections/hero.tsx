import Section from "../section";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Section
      id=""
      containerClassName="max-md:grid md:flex gap-8 items-center h-fit justify-between"
    >
      <div className="flex flex-col gap-4 max-w-125">
        <h1 className="font-mono font-bold text-6xl text-text-primary max-w-74">
          Kai Waldrant
        </h1>
        <p className="text-text-secondary">
          Bridging Biology & Technology with Data-Driven Solutions
        </p>
        <div className="flex gap-4">
          <Button
            asChild
            className="bg-transparent border-primary-accent hover:bg-primary-hover text-primary-accent hover:text-text-primary"
            variant="outline"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            asChild
            className="bg-transparent border-primary-accent hover:bg-primary-hover text-primary-accent hover:text-text-primary"
            variant="outline"
          >
            <Link href="/CV_Kai_Waldrant.pdf">Résumé</Link>
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          className="rounded-sm"
          src="/code_img.png"
          alt="Image with code"
          width={560}
          height={375}
        />
      </div>
    </Section>
  );
}
