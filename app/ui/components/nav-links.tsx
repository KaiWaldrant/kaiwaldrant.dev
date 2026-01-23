import Link from "next/link";
import { cn } from "@/app/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

export default function NavLinks({ className, onClick }: NavLinksProps) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      {links.map((link) => (
        <Link key={link.name} href={link.href} onClick={onClick}>
          <p className="text-text-primary text-lg font-mono font-semibold">
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
