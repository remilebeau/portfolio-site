import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import mySite from "../../public/images/mySite.png";
import techNotes from "../../public/images/techNotes.png";
import studyBud from "../../public/images/studyBud.png";
import wikiRocket from "../../public/images/wikiRocket.png";
import flashCards from "../../public/images/flashCards.png";
import wordle from "../../public/images/wordle.png";
import dashboard from "../../public/images/dashboard.png";
import simulation from "../../public/images/simulation.png";
import { FaExternalLinkSquareAlt, FaGithub, FaServer } from "react-icons/fa";

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
      title: "Demand/Cash Flow Forecasting",
      description:
        "Forecast annual demand or cash flow with Monte Carlo simulation",
      image: simulation,
      live: "https://remilebeau-simulation.vercel.app/",
      sourceCode: "https://github.com/remilebeau/simulation",
      apiURL: "https://simulation-api-t28w.onrender.com/docs",
    },
    {
      title: "Dashboard",
      description: "Next.js admin dashboard",
      image: dashboard,
      live: "https://remilebeau-dashboard.vercel.app/",
      sourceCode: "https://github.com/remilebeau/dashboard",
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
      title: "Studybud",
      description: "Django app where users create and join study rooms",
      image: studyBud,
      live: "https://studybud-0egb.onrender.com",
      sourceCode: "https://github.com/remilebeau/studybud",
    },
    {
      title: "WikiRocket",
      description:
        "Next.js app that searches Wikipedia with the provided query",
      image: wikiRocket,
      live: "https://remilebeau-wikirocket.vercel.app/",
      sourceCode: "https://github.com/remilebeau/wikiRocket",
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
  ];
  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.title}>
              <Card className="rounded-3xl border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-3xl">{project.title}</CardTitle>
                  <CardDescription className="flex justify-between gap-4">
                    {/* project description */}
                    <section className="flex items-center">
                      <p className="text-2xl">{project.description}</p>
                    </section>
                    {/* live and github links */}
                    <section className="mr-4 flex gap-8">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaExternalLinkSquareAlt className="text-2xl sm:text-5xl" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-bold">View Live</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <a
                              href={project.sourceCode}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaGithub className="text-2xl sm:text-5xl" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-bold">Source Code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      {project.apiURL && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <a
                                href={project.apiURL}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaServer className="text-2xl sm:text-5xl" />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-bold">View API</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </section>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    className="rounded-3xl"
                    src={project.image}
                    alt={project.title}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
