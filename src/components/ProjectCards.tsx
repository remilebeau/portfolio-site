import Image from "next/image";
import mySite from "../../public/images/mySite.png";
import techNotes from "../../public/images/techNotes.png";
import dashboard from "../../public/images/dashboard.png";
import simulation from "../../public/images/simulation.png";
import cityData from "../../public/images/cityData.png";
import ButtonWithLink from "./ButtonWithLink";

export default function ProjectCards() {
  const projects: ProjectCard[] = [
    {
      title: "Simulation",
      description:
        "Monte Carlo simulations for production, finance, and cash flow",
      image: simulation,
      live: "https://remilebeau-simulation.vercel.app/",
      sourceCode: "https://github.com/remilebeau/simulation",
      apiURL: "https://simulation-api-rsaw.onrender.com/docs",
    },
    {
      title: "CityData",
      description: "Fetch common stats for any U.S. city",
      image: cityData,
      live: "https://remilebeau-citydata.vercel.app/",
      sourceCode: "https://github.com/remilebeau/citydata",
      apiURL: "https://citydata-api.onrender.com/docs",
    },
    {
      title: "TechNotes",
      description:
        "Ticket management system with auth. username: testuser password: testpassword",
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
      description: "Mock admin dashboard",
      image: dashboard,
      live: "https://remilebeau-dashboard.vercel.app/",
      sourceCode: "https://github.com/remilebeau/dashboard",
    },
  ];
  const renderedProjects = projects.map((project) => (
    <section key={project.title}>
      <section
        key={project.title}
        className="flex flex-col gap-4 rounded-xl border-4 border-border bg-card p-4 font-bold"
      >
        <h2 className="rounded-xl bg-primary p-2 text-3xl text-secondary">
          {project.title}
        </h2>
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
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
    </section>
  ));
  return (
    <>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      <section className="flex flex-col gap-4">{renderedProjects}</section>
    </>
  );
}
