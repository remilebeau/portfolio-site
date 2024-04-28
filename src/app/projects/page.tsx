import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import mySite from "../../../public/images/mySite.png";
import mernLoginPage from "../../../public/images/mernLoginPage.png";
import studybudHomepage from "../../../public/images/studybudHomepage.png";
import wikiRocket from "../../../public/images/wikiRocket.png";
import djangoBlog from "../../../public/images/djangoBlog.png";
import flashCards from "../../../public/images/flashCards.png";

export const metadata: Metadata = {
  title: "Projects | Wes S",
  description: "The projects page of Wes S",
};

type ProjectCard = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
};

export default function ProjectPage() {
  const projects: ProjectCard[] = [
    {
      title: "My Site",
      description: "Created with Next.js",
      image: mySite,
      link: "https://remilebeau.vercel.app",
    },
    {
      title: "TechNotes",
      description:
        "MERN SPA to improve the note protocols of a ficticious business",
      image: mernLoginPage,
      link: "https://technotes-op6s.onrender.com",
    },
    {
      title: "WikiRocket",
      description:
        "Next.js app that searches Wikipedia for the given search query",
      image: wikiRocket,
      link: "https://remilebeau-wikirocket.vercel.app/",
    },
    {
      title: "Studybud",
      description: "Django app where users create and join study rooms",
      image: studybudHomepage,
      link: "https://studybud-0egb.onrender.com",
    },
    {
      title: "FlashCards",
      description: "React + Redux app for creating and using flashcards",
      image: flashCards,
      link: "https://flashcards-44tn.onrender.com",
    },
  ];

  const renderedProjects = projects.map((project) => (
    <Card
      key={project.title}
      className="flex flex-col items-center border-4 p-4"
    >
      <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
      <CardDescription className="text-xl">
        {project.description}
      </CardDescription>
      <CardContent className="p-6">
        <a href={project.link} target="_blank" rel="noreferrer">
          <Image
            src={project.image}
            alt={project.title}
            className="hover:opacity-90"
            width={400}
            height={400}
          />
        </a>
      </CardContent>
    </Card>
  ));
  return (
    <main className="mx-auto mb-12 flex max-w-4xl flex-col items-center justify-center gap-8 p-12">
      <h2 className="text-center text-5xl font-bold">Projects</h2>
      <h3 className="text-2xl font-bold">
        Each app&apos;s server may take up to 60 seconds to wake. Credentials
        are testuser and testpassword.
      </h3>
      <article className="m-4 flex flex-col gap-8 sm:grid sm:grid-cols-2">
        {renderedProjects}
      </article>
    </main>
  );
}
