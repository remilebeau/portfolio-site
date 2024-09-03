import Image from "next/image";
import techNotes from "../../public/images/techNotes.png";
import simulation from "../../public/images/simulation.png";
import cityData from "../../public/images/cityData.png";
import ButtonWithLink from "./ButtonWithLink";

export default function ProjectCards() {
  const projects: ProjectCard[] = [
    {
      title: "Monte Carlo Simulation",
      description:
        "Monte Carlo simulations for production planning, marketing, and cash flow",
      image: simulation,
      live: "https://remilebeau-simulation.vercel.app/",
      sourceCode: "https://github.com/remilebeau/simulation",
      apiURL: "https://simulation-api-rsaw.onrender.com/docs",
    },
    {
      title: "CityData",
      description: "Aggregate common stats from City-Data for any U.S. city",
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
  ];
  const renderedProjects = projects.map((project) => (
    <section key={project.title}>
      <section
        key={project.title}
        className="flex flex-col gap-4 rounded-xl border-4 border-border bg-card p-4 font-bold"
      >
        <h2 className="rounded-xl bg-primary p-2 text-2xl text-secondary">
          {project.title}
        </h2>
        <p className="text-xl">{project.description}</p>
        {/* flex row for buttons */}
        <section className="flex flex-row justify-evenly gap-4">
          {/* live demo button */}
          <ButtonWithLink href={project.live} text="Live Demo" />
          {/* source code button */}
          <ButtonWithLink href={project.sourceCode} text="Source Code" />
          {/* apiURL button*/}
          <ButtonWithLink href={project.apiURL} text="API Docs" />
          {/* end flexbox */}
        </section>
        <Image className="rounded-xl" src={project.image} alt={project.title} />
      </section>
    </section>
  ));
  return <section className="flex flex-col gap-4">{renderedProjects}</section>;
}
