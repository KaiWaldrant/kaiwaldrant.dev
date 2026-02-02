import Section from "../section";
import MailIcon from "../icons/icon-mail";
import GithubIcon from "../icons/icon-github";
import LinkedinIcon from "../icons/icon-linkedin";
import Link from "next/link";


export default function Contact() {
  return (
    <Section id="contact" containerClassName="grid gap-12">
      <div className="text-secondary text-center grid gap-4">
        <h2 className="font-mono text-4xl font-bold text-center">Get in Touch</h2>
        <p className="text-text-secondary text-lg">Lets connect and collaborate</p>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="grid gap-6">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="text-text-secondary">Feel free to reach out via email or connect with me on social media. I'm always open to discussing new projects, job opportunities, or interesting ideas.</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 bg-background-secondary p-2">
              <MailIcon />
              <Link href="mailto:kai@kaiwaldrant.dev">
                kai@kaiwaldrant.dev
              </Link>
            </div>
            <div className="flex gap-2 bg-background-secondary p-2">
              <GithubIcon  />
              <Link href="https://github.com/kaiwaldrant">
                kaiwaldrant
              </Link>
            </div>
            <div className="flex gap-2 bg-background-secondary p-2">
        
            <LinkedinIcon />
              <Link href="https://linkedin.com/in/kaiwaldrant">
                kaiwaldrant
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <h3 className="text-2xl font-bold">Send a Message</h3>
          <div>

          </div>

        </div>
      </div>
    </Section>
  );
}