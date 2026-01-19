import NavLinks from "./nav-links";
import Logo from "@/public/logo.svg";
import LogoBig from "@/public/logo_big.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex justify-between">
      <Image src={LogoBig} alt="Logo" width={100} height={100} />
      <NavLinks />
    </nav>
  );
}
