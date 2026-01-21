import NavLinks from "./nav-links";
import Logo from "@/public/logo.svg";
import LogoBig from "@/public/logo_big.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky content-grid ">
      <nav className="flex items-center w-full">
        <div className="flex justify-between w-296">
          <Image className="md:hidden" src={Logo} alt="Logo" />
          <Image className="hidden md:block h-8" src={LogoBig} alt="Logo" />
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}
