import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import html from "../../../public/images/html.svg";
import css from "../../../public/images/css.svg";
import js from "../../../public/images/js.svg";
import ts from "../../../public/images/ts.svg";
import python from "../../../public/images/python.svg";
import mongodb from "../../../public/images/mongodb.svg";
import ex from "../../../public/images/ex.svg";
import react from "../../../public/images/react.svg";
import nodejs from "../../../public/images/nodejs.svg";
import nextjs from "../../../public/images/nextjs.svg";
import redux from "../../../public/images/redux.svg";
import tailwind from "../../../public/images/tailwind.svg";
import sass from "../../../public/images/sass.svg";
import django from "../../../public/images/django.svg";
import flask from "../../../public/images/flask.svg";
import ubuntu from "../../../public/images/ubuntu.svg";
import docker from "../../../public/images/docker.svg";

export const metadata: Metadata = {
  title: "Technologies | Wes S",
  description: "The technologies page of Wes S",
};

type TechnologyImage = {
  title: string;
  src: StaticImageData;
  styling?: string;
};

export default function TechnologyPage() {
  const images: TechnologyImage[] = [
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
      title: "MongoDB",
      src: mongodb,
    },
    {
      title: "Express",
      src: ex,
      styling: "invert",
    },
    {
      title: "React",
      src: react,
    },
    {
      title: "Node.js",
      src: nodejs,
    },
    {
      title: "Next.js",
      src: nextjs,
      styling: "invert",
    },
    {
      title: "Redux",
      src: redux,
    },
    {
      title: "Tailwind",
      src: tailwind,
    },
    {
      title: "Sass",
      src: sass,
    },
    {
      title: "Django",
      src: django,
    },
    {
      title: "Flask",
      src: flask,
      styling: "invert",
    },
    {
      title: "Ubuntu",
      src: ubuntu,
    },
    {
      title: "Docker",
      src: docker,
    },
  ];

  return (
    <main className="mx-auto max-w-4xl">
      <section
        id="technologies"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6"
      >
        <h2 className="m-4 max-w-md text-center text-4xl font-bold text-white sm:text-left sm:text-5xl">
          Technologies
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:flex-row">
          {images.map((image) => (
            <li className="w-2/3 sm:w-5/6" key={image.title}>
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={400}
                className={image.styling}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
