"use client";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface MenuButtonProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpne: boolean) => void;
}

export default function MenuButton({
  className,
  isOpen,
  setIsOpen,
}: MenuButtonProps) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Button
      className={cn("bg-transparent border-border", className)}
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="relative flex flex-col justify-between w-2/5 h-2/5">
        <div
          className={`relative w-full h-[5%] transition-all duration-600 ${
            isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
          }`}
        >
          <span className="absolute left-0 bg-text-primary w-full h-full" />
        </div>

        <div
          className={`relative w-full h-[5%] transition-all duration-1000 ${
            isOpen ? "translate-x-1/2 opacity-0" : " "
          }`}
        >
          <span className="absolute left-0 bg-text-primary w-full h-full" />
        </div>

        <div
          className={`relative bg-white w-full h-[5%] transition-all duration-600 ${
            isOpen ? "-rotate-45 -top-1/2 translate-y-1/2 " : "bottom-0"
          }`}
        >
          <span className="absolute left-0 bg-text-primary w-full h-full" />
        </div>
      </div>
    </Button>
  );
}
