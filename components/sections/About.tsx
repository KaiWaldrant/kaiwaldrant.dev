import Section from "../Section";

export default function About() {
  return (
    <Section
      id="about"
      className="text-center"
      containerClassName="grid gap-12"
    >
      <h2 className="font-mono text-4xl">About me</h2>
      <div>
        <p className="md:text-lg">
          As a passionate Bioinformatician and Web Developer, I thrive at the
          intersection of complex biological data and intuitive digital
          interfaces. With a strong foundation in computational biology and a
          keen eye for user experience, I craft robust tools and compelling
          visualizations that transform raw data into actionable insights. My
          journey began with a fascination for genomic puzzles, leading me to
          develop full-stack applications that make scientific research more
          accessible and impactful.
        </p>
      </div>
    </Section>
  );
}
