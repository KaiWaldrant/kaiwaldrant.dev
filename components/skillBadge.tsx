import { Badge } from "@/components/ui/badge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
}

const skillBadgeVariants = cva("", {
  variants: {
    variant: {
      blue: "bg-primary-accent [a&]:hover:bg-primary-hover border-primary-hover",
      coral:
        "bg-secondary-accent [a&]:hover:bg-secondary-hover border-secondary-hover",
    },
  },
  defaultVariants: {
    variant: "blue",
  },
});

export default function SkillBadge({
  variant = "blue",
  skill,
  ...props
}: SkillBadgeProps & VariantProps<typeof skillBadgeVariants>) {
  return (
    <Badge
      key={skill}
      className={cn("text-sm", skillBadgeVariants({ variant }))}
      {...props}
    >
      {skill}
    </Badge>
  );
}
