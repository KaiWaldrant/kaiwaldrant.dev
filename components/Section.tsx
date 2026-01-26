import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  container?: boolean;
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  container = true,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn("content-grid full", className)} {...props}>
      {container ? (
        <div className={cn("", containerClassName)}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
