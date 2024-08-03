import Image from "next/image";
import mySite from "../../public/images/mySite.png";
import techNotes from "../../public/images/techNotes.png";
import dashboard from "../../public/images/dashboard.png";
import simulation from "../../public/images/simulation.png";
import ButtonWithLink from "./ButtonWithLink";

export default function ProjectCards() {
  const projects = [
    {
      title: "Simulation",
      description:
        "Monte Carlo Simulations for cash flows, production, and finance",
      image: simulation,
      live: "https://remilebeau-simulation.vercel.app/",
      sourceCode: "https://github.com/remilebeau/simulation",
      apiURL: "https://simulation-api-rsaw.onrender.com/docs",
    },
    {
      title: "TechNotes",
      description: "MERN CRUD app with auth for customer tickets",
      image: techNotes,
      live: "https://technotes-op6s.onrender.com",
      sourceCode: "https://github.com/remilebeau/techNotes",
      apiURL: "https://github.com/remilebeau/techNotes-api",
    },
    {
      title: "My Site",
      description: "Created with Next.js",
      image: mySite,
      live: "https://remilebeau.vercel.app",
      sourceCode: "https://github.com/remilebeau/portfolio-site",
    },
    {
      title: "Dashboard",
      description: "Next.js admin dashboard",
      image: dashboard,
      live: "https://remilebeau-dashboard.vercel.app/",
      sourceCode: "https://github.com/remilebeau/dashboard",
    },
  ];
  const renderedProjects = projects.map((project) => (
    <section
      key={project.title}
      className="flex flex-col gap-4 rounded-xl border-4 border-border bg-card p-4 font-bold"
    >
      <h2 className="text-3xl">{project.title}</h2>
      <p className="text-xl">{project.description}</p>
      {/* flexbox for buttons */}
      <section className="flex flex-row justify-evenly gap-8">
        {/* live button */}
        <ButtonWithLink href={project.live} text="Live Demo" />
        {/* source code button */}
        <ButtonWithLink href={project.sourceCode} text="Source Code" />
        {/* apiURL button, if it exists */}
        {project.apiURL && (
          <ButtonWithLink href={project.apiURL} text="API Docs" />
        )}
      </section>
      <Image className="rounded-xl" src={project.image} alt={project.title} />
    </section>
  ));
  return <section className="flex flex-col gap-4">{renderedProjects}</section>;
}
