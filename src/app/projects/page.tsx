import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import mernLoginPage from "../../../public/images/mernLoginPage.png";
import studybudHomepage from "../../../public/images/studybudHomepage.png";
import wikiRocket from "../../../public/images/wikiRocket.png";
import djangoBlog from "../../../public/images/djangoBlog.png";
import flashCards from "../../../public/images/flashCards.png";

export const metadata: Metadata = {
  title: "Projects | Wes S",
  description: "The projects page of Wes S",
};

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
};

export default function ProjectPage() {
  const projects: Project[] = [
    {
      title: "TechNotes",
      description:
        "MERN SPA that replaces the notes system of a ficticious computer repair business",
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
      title: "Blog",
      description: "Django blog where users create and read posts",
      image: djangoBlog,
      link: "https://django-blogsite.onrender.com",
    },
    {
      title: "FlashCards",
      description: "React + Redux app for creating flashcards",
      image: flashCards,
      link: "https://flashcards-44tn.onrender.com",
    },
  ];

  const renderedProjects = projects.map((project) => (
    <li key={project.title} className="flex flex-col  sm:items-start">
      <h3 className="text-2xl font-bold">{project.title}</h3>
      <p className="text-xl">{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer" className="m-4">
        <Image
          src={project.image}
          alt={project.title}
          className="rounded-3xl p-4 shadow-2xl hover:opacity-90"
          width={400}
          height={400}
        />
      </a>
    </li>
  ));
  return (
    <main className="mx-auto max-w-4xl">
      <section
        id="projects"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6"
      >
        <h2 className="m-4 max-w-md text-center text-4xl font-bold text-white sm:text-left sm:text-5xl">
          Projects
        </h2>
        <h3 className="text-2xl font-bold">
          The MERN and Django projects are hosted on the free tier of the cloud
          platform Render. Please allow up to 60 seconds for the server to wake
          up while testing each app. The testing credentials for the MERN and
          Django projects are testuser and testpassword.
        </h3>
        <ul className="sm:grid sm:grid-cols-2 sm:gap-8">{renderedProjects}</ul>
      </section>
    </main>
  );
}
