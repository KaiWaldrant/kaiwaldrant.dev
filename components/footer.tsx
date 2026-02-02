import LogoBig from "@/public/logo_big.svg";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "./icons/icon-mail";
import GithubIcon from "./icons/icon-github";
import LinkedinIcon from "./icons/icon-linkedin";

export default function Footer() {
    return(
        <footer className="content-grid bg-surface-cards h-18">
            <div className="flex justify-between align-center">
                <Link key="Logo" href="#" className="flex items-center w-auto">
                    <Image className="h-6 w-auto" src={LogoBig} alt="Logo" />
                </Link>
                <p>© Kai Waldrant 2026. All rigths reserved.</p>
                <div className="flex gap-4">
                    <Link href="mailto:kai@kaiwaldrant.dev"><MailIcon /></Link>
                    <Link href="https://github.com/kaiwaldrant" target="_blank"><GithubIcon /></Link>
                    <Link href="https://linkedin.com/in/kai-waldrant" target="_blank"><LinkedinIcon /></Link>
                </div>
            </div>
        </footer>
    )
}