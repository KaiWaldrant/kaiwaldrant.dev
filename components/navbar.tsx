"use client";
import NavLinks from "./nav-links";
import Logo from "@/public/logo.svg";
import LogoBig from "@/public/logo_big.svg";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import MenuButton from "./menu-button";
import { useState } from "react";
import Link from "next/link";

function NavLogo() {
  return (
    <>
      <Image className="lg:hidden h-10 w-auto" src={Logo} alt="Logo" />
      <Image className="lg:block hidden h-8 w-auto" src={LogoBig} alt="Logo" />
    </>
  );
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-surface-cards content-grid w-full h-18">
      <nav className="md:items-center flex">
        {/*Desktop*/}
        <div className=" hidden md:flex w-full h-8 justify-between">
          <Link key="Logo" href="/" className="flex items-center w-100">
            <NavLogo />
          </Link>
          <div className="flex gap-8">
            <NavLinks />
            <ThemeToggle />
          </div>
        </div>
        {/*Mobile*/}
        <div className="flex flex-col w-full md:hidden my-4">
          <div className="flex justify-between w-full h-10">
            <NavLogo />
            <div className="flex gap-4">
              <ThemeToggle className="size-10" />
              <MenuButton
                className="size-10"
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
              />
            </div>
          </div>

          {/* Mobile menu (slides down when open) */}
          <div
            className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
          >
            <div className="content-grid full bg-surface-cards py-6">
              <NavLinks
                className="flex-col gap-6"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
