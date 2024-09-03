import Image from "next/image";
import js from "../../public/images/js.svg";
import ts from "../../public/images/ts.svg";
import python from "../../public/images/python.svg";
import nodejs from "../../public/images/nodejs.svg";
import nestjs from "../../public/images/nestjs.svg";
import mongodb from "../../public/images/mongodb.svg";
import react from "../../public/images/react.svg";
import nextjs from "../../public/images/nextjs.svg";
import tailwind from "../../public/images/tailwind.svg";
import django from "../../public/images/django.svg";
import ubuntu from "../../public/images/ubuntu.svg";
import docker from "../../public/images/docker.svg";
import git from "../../public/images/git.svg";
import fastapi from "../../public/images/fastapi.svg";
import numpy from "../../public/images/numpy.svg";
import pandas from "../../public/images/pandas.svg";
import plotnine from "../../public/images/plotnine.png";
import jupyter from "../../public/images/jupyter.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TechnologyCards() {
  const cards: TechnologyCard[] = [
    {
      title: "JavaScript",
      src: js,
      styling: "rounded-3xl",
    },
    {
      title: "TypeScript",
      src: ts,
      styling: "rounded-3xl",
    },
    {
      title: "Python",
      src: python,
    },
    {
      title: "React",
      src: react,
    },
    {
      title: "Next.js",
      src: nextjs,
      styling: "dark:invert",
    },
    {
      title: "Tailwind CSS",
      src: tailwind,
    },
    {
      title: "Node.js",
      src: nodejs,
    },
    {
      title: "NestJS",
      src: nestjs,
    },
    {
      title: "MongoDB",
      src: mongodb,
    },

    {
      title: "Django",
      src: django,
    },
    {
      title: "FastAPI",
      src: fastapi,
      styling: "dark:invert",
    },
    {
      title: "Jupyter",
      src: jupyter,
      styling: "dark:invert",
    },
    {
      title: "Pandas",
      src: pandas,
      styling: "dark:invert",
    },
    {
      title: "Numpy",
      src: numpy,
    },
    {
      title: "Plotnine",
      src: plotnine,
    },
    {
      title: "Ubuntu",
      src: ubuntu,
    },
    {
      title: "Docker",
      src: docker,
    },
    {
      title: "Git",
      src: git,
    },
  ];

  const renderedCards = cards.map((card) => (
    <Card
      key={card.title}
      className="flex flex-col items-center justify-evenly"
    >
      <CardHeader>
        <Image
          src={card.src}
          alt={card.title}
          width={400}
          height={400}
          className={card.styling}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{card.title}</CardTitle>
      </CardContent>
    </Card>
  ));

  return (
    <section className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
      {renderedCards}
    </section>
  );
}
