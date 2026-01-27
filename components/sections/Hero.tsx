import Section from "../Section";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <Section containerClassName="max-md:grid md:flex items-center h-fit">
      <div className="flex flex-col gap-4">
        <h1 className="font-mono font-bold text-6xl text-text-primary">
          Kai Waldrant
        </h1>
        <p className="text-text-secondary">
          Bridging Biology & Technology with Data-Driven Solutions
        </p>
        <div className="flex">
          <Button>View Projects</Button>
          <Button>Résumé</Button>
        </div>
      </div>
      <div className="rounded-sm">
        <Image
          src="/code_img.png"
          alt="Image with code"
          width={560}
          height={375}
        />
      </div>
    </Section>
  );
}
