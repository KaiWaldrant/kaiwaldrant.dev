import Section from "../Section";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <Section containerClassName="flex">
      <div className="flex">
        <h1>Kai Waldrant</h1>
        <p>Bridging Biology & Technology with Data-Driven Solutions</p>
        <div className="flex">
          <Button>View Projects</Button>
          <Button>Résumé</Button>
        </div>
      </div>
      <div>
        <Image
          src="/public/code_img.png"
          alt="Image with code"
          width={560}
          height={375}
        />
      </div>
    </Section>
  );
}
