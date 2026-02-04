import Section from "../section";
import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <Section id="projects" containerClassName="grid gap-12">
      <h2 className="font-mono text-4xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard
          title="OpenProblems"
          description="Benchmarking website for SC RNA-seq methods"
          image="/openproblems-thumb.jpg"
          link="https://openproblems.bio/"
          skills={["SolidJS", "Quarto", "TypeScript"]}
        />
        <ProjectCard
          title="Quiz app"
          description="Frontend Mentor project. Interactive Quiz app."
          image="/fem-quiz-thumb.jpg"
          link="#"
          skills={[
            "React",
            "Vite",
            "TypeScript",
            "TailwindCSS",
            "Frontend Mentor",
            "Netlify",
          ]}
        />
        <ProjectCard
          title="Password Generator"
          description="Frontend Mentor project. A simple password generator"
          image="/fem-pswgen-thumb.jpg"
          link="#"
          skills={["HTML", "CSS", "JavaScript", "Netlify"]}
        />
      </div>
    </Section>
  );
}
