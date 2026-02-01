import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import SkillBadge from "./skill-badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  skills?: string[];
}

export default function ProjectCard({ title, description, image, link="#", skills }: ProjectCardProps) {
  return (
    <Card className="bg-surface-cards border-border">
      <CardHeader>
        {image && <Image src={image} alt={title} width={100} height={100} />}
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-3">
          {skills && skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} variant="blue" />
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-none px-2">
        <CardAction>
            <Button variant="link" asChild><Link href={link}>View Details <ArrowRight /></Link></Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}