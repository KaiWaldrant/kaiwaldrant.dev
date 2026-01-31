import Section from "../Section";
import SkillCard from "../SkillCard";

const devStack = [
  "TypeScript",
  "JavaScript",
  "React",
  "SolidJs",
  "vite",
  "NextJS",
  "HTML",
  "CSS",
  "SQL",
  "Flask",
  "PHP",
  "Docker",
  "CI/CD",
  "AWS",
  "GCP",
  "Git",
];
const domains = [
  "Genomics",
  "Single-cell RNA-seq workflows",
  "Nextflow",
  "Viash",
  "Quarto",
  "workflow automation",
  "Data engineering",
  "Data analysis piplines",
];

export default function Skills() {
  return (
    <Section containerClassName="grid gap-12">
      <div className="text-center">
        <h2 className="font-mono text-4xl mb-4 text-center">Skills</h2>
        <p className="text-text-secondary text-md">
          I bring a unique combination: modern web development skills backed by
          years of data analysis and scientific computing experience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <SkillCard title="Development Stack" skills={devStack} color="blue" />
        <SkillCard title="Domain Expertise" skills={domains} color="coral" />
      </div>
    </Section>
  );
}
