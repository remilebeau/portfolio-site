import Image from "next/image";
import techNotes from "../../public/images/techNotes.png";
import simulation from "../../public/images/simulation.png";
import cityData from "../../public/images/cityData.png";
import ButtonWithLink from "./ButtonWithLink";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card key={project.title}>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image className="rounded-xl" src={project.image} alt={project.title} />
      </CardContent>
      <CardFooter className="flex flex-row justify-evenly gap-4">
        <ButtonWithLink href={project.live} text="Live Demo" />
        <ButtonWithLink href={project.sourceCode} text="Source Code" />
        <ButtonWithLink href={project.apiURL} text="API Docs" />
      </CardFooter>
    </Card>
  ));
  return renderedProjects;
}
