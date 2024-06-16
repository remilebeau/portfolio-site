import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import mySite from "../../public/images/mySite.png";
import mernLoginPage from "../../public/images/mernLoginPage.png";
import studybudHomepage from "../../public/images/studybudHomepage.png";
import wikiRocket from "../../public/images/wikiRocket.png";
import djangoBlog from "../../public/images/djangoBlog.png";
import flashCards from "../../public/images/flashCards.png";
import wordle from "../../public/images/wordle.png";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

export default function ProjectsCarousel() {
  const projects = [
    {
      title: "My Site",
      description: "Created with Next.js",
      image: mySite,
      live: "https://remilebeau.vercel.app",
      sourceCode: "https://github.com/remilebeau/portfolio-site",
    },
    {
      title: "TechNotes",
      description:
        "MERN SPA to improve the note protocols of a ficticious business",
      image: mernLoginPage,
      live: "https://technotes-op6s.onrender.com",
      sourceCode: "https://github.com/remilebeau/techNotes",
    },
    {
      title: "FlashCards",
      description: "React + Redux app for creating and using flashcards",
      image: flashCards,
      live: "https://flashcards-44tn.onrender.com",
      sourceCode: "https://github.com/remilebeau/flashcards",
    },
    {
      title: "Wordle",
      description: "Wordle clone with React",
      image: wordle,
      live: "https://wordle-866i.onrender.com/",
      sourceCode: "https://github.com/remilebeau/wordle",
    },
    {
      title: "WikiRocket",
      description:
        "Next.js app that searches Wikipedia for the given search query",
      image: wikiRocket,
      live: "https://remilebeau-wikirocket.vercel.app/",
      sourceCode: "https://github.com/remilebeau/wikiRocket",
    },
    {
      title: "Studybud",
      description: "Django app where users create and join study rooms",
      image: studybudHomepage,
      live: "https://studybud-0egb.onrender.com",
      sourceCode: "https://github.com/remilebeau/studybud",
    },
  ];
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.title}>
              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkSquareAlt className="text-3xl" />
              </a>
              <a href={project.sourceCode} target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl" />
              </a>
              <Image
                className="row-start-2"
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
