import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SkillBadge from "./skill-badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  skills?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link = "#",
  skills,
}: ProjectCardProps) {
  return (
    <Card className="bg-surface-cards border-border pt-0 ring-0 shadow-lg shadow-primary-hover/20">
      <CardHeader className="px-0 min-h-30">
        {image && (
          <Image
            className="overflow-clip"
            src={image}
            alt={title}
            width={1293}
            height={120}
          />
        )}
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-3">
          {skills &&
            skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} variant="blue" />
            ))}
        </div>
      </CardContent>
      <CardFooter className="border-none">
        <CardAction>
          <Button
            className="bg-transparent border-primary-accent hover:bg-primary-hover text-primary-accent hover:text-text-primary"
            variant="outline"
            asChild
          >
            <Link href={link}>
              View Details <ArrowRight />
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
