import Section from "../section";
import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <Section id="projects" containerClassName="grid gap-12">
      <h2 className="font-mono text-4xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard title="DNAnexus Platform" description="Description 1" image="/images/dna.png" link="#" />
        <ProjectCard title="Genomics Workflows" description="Description 2" image="/images/genomics.png" link="#" />
        <ProjectCard title="Data Engineering" description="Description 3" image="/images/data.png" link="#" />
      </div>
    </Section>
  );
}