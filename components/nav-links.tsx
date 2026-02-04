import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#top" },
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
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0.1,
      },
    );

    links.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });
    // Handle last section separately with scroll listener
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      // If scrolled to bottom, activate last section
      if (scrollHeight - scrollTop - clientHeight < 10) {
        // 10px threshold
        setActiveSection("contact"); // Your last section ID
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      onClick?.(); // Close mobile menu
    }
    setActiveSection(href.slice(1));
  };
  return (
    <div className={cn("flex items-center gap-8", className)}>
      {links.map(({ href, name }) => (
        <Link key={href} href={href} onClick={(e) => handleClick(e, href)}>
          <p
            className={`text-lg font-mono font-semibold hover:text-primary-hover ${activeSection === href.slice(1) ? "text-primary-accent font-bold" : "text-text-primary"}`}
          >
            {name}
          </p>
        </Link>
      ))}
    </div>
  );
}
