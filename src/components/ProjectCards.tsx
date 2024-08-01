import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import mySite from "../../public/images/mySite.png";
import techNotes from "../../public/images/techNotes.png";
import dashboard from "../../public/images/dashboard.png";
import simulation from "../../public/images/simulation.png";
import { Button } from "@/components/ui/button";

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
    <Card key={project.title}>
      <CardHeader className="m-2 flex flex-col gap-4 p-2">
        <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-xl">
          {project.description}
        </CardDescription>
        {/* flexbox for buttons */}
        <section className="flex flex-row justify-evenly">
          {/* live button */}
          <Button>
            <a
              className="text-2xl font-bold text-secondary"
              href={project.live}
            >
              Live Demo
            </a>
          </Button>
          {/* source code button */}
          <Button>
            <a
              className="text-2xl font-bold text-secondary"
              href={project.sourceCode}
            >
              Source Code
            </a>
          </Button>
          {/* apiURL button, if it exists */}
          {project.apiURL && (
            <Button>
              <a
                className="text-2xl font-bold text-secondary"
                href={project.apiURL}
              >
                API Documentation
              </a>
            </Button>
          )}
        </section>
      </CardHeader>
      <CardContent>
        <Image className="rounded-xl" src={project.image} alt={project.title} />
      </CardContent>
    </Card>
  ));
  return <section className="flex flex-col gap-4">{renderedProjects}</section>;
}
