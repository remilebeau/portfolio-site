import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import html from "../../public/images/html.svg";
import css from "../../public/images/css.svg";
import js from "../../public/images/js.svg";
import ts from "../../public/images/ts.svg";
import python from "../../public/images/python.svg";
import mongodb from "../../public/images/mongodb.svg";
import ex from "../../public/images/ex.svg";
import react from "../../public/images/react.svg";
import nodejs from "../../public/images/nodejs.svg";
import nextjs from "../../public/images/nextjs.svg";
import tailwind from "../../public/images/tailwind.svg";
import sqlite from "../../public/images/sqlite.svg";
import postgresql from "../../public/images/postgresql.svg";
import drf from "../../public/images/drf.svg";
import django from "../../public/images/django.svg";
import ubuntu from "../../public/images/ubuntu.svg";
import docker from "../../public/images/docker.svg";
import git from "../../public/images/git.svg";
import flask from "../../public/images/flask.svg";
import nestjs from "../../public/images/nestjs.svg";

export default function TechnologyCards() {
  const cards = [
    {
      title: "HTML",
      src: html,
    },
    {
      title: "CSS",
      src: css,
    },
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
      title: "Tailwind",
      src: tailwind,
    },
    {
      title: "Node.js",
      src: nodejs,
    },
    {
      title: "Express",
      src: ex,
      styling: "dark:invert",
    },
    {
      title: "Flask",
      src: flask,
      styling: "dark:invert",
    },
    {
      title: "Django",
      src: django,
    },
    {
      title: "DRF",
      src: drf,
      styling: "dark:invert",
    },
    {
      title: "MongoDB",
      src: mongodb,
    },
    {
      title: "SQLite",
      src: sqlite,
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
      className="flex flex-col items-center justify-center border-4"
    >
      <CardContent className="p-6">
        <Image
          src={card.src}
          alt={card.title}
          className={card.styling}
          width={400}
          height={400}
        />
      </CardContent>
    </Card>
  ));

  return <>{renderedCards}</>;
}
