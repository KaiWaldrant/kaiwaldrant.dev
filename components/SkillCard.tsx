import Image from "next/image";
import SkillBadge from "@/components/skillBadge";

type SkillCardProps = {
  title: string;
  icon?: string;
  description?: string;
  skills: string[];
  color?: "blue" | "coral";
};

export default function SkillCard({
  title,
  icon,
  description,
  skills,
  color = "blue",
}: SkillCardProps) {
  return (
    <div className="grid gap-4">
      <div>
        {icon && <Image src={icon} alt={title} width={32} height={32} />}
        <h3 className="text-2xl text-bold">{title}</h3>
      </div>
      {description && (
        <p className="text-text-secondary text-md">{description}</p>
      )}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} variant={color} />
        ))}
      </div>
    </div>
  );
}
