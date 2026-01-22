import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export default function NavLinks() {
  return (
    <div className="flex items-center gap-8">
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <p>{link.name}</p>
        </Link>
      ))}
    </div>
  );
}
