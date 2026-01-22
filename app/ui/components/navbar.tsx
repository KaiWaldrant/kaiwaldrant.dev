import NavLinks from "./nav-links";
import Logo from "@/public/logo.svg";
import LogoBig from "@/public/logo_big.svg";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function NavBar() {
  return (
    <header className="sticky top-0 bg-surface-cards content-grid w-full h-18">
      <nav className="flex items-center w-full  justify-between">
        <Image className="md:hidden" src={Logo} alt="Logo" />
        <Image className="hidden md:block h-8" src={LogoBig} alt="Logo" />
        <div className="flex gap-8">
          <NavLinks />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
