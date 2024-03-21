import Image from "next/image";
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

export default function TechnologyPage() {
  const images = [
    {
      name: "HTML",
      image: html,
      className: "",
    },
    {
      name: "CSS",
      image: css,
      className: "",
    },
    {
      name: "JavaScript",
      image: js,
      className: "rounded-3xl",
    },
    {
      name: "TypeScript",
      image: ts,
      className: "rounded-3xl",
    },
    {
      name: "Python",
      image: python,
      className: "",
    },
    {
      name: "MongoDB",
      image: mongodb,
      className: "",
    },
    {
      name: "Express",
      image: ex,
      className: "invert",
    },
    {
      name: "React",
      image: react,
      className: "",
    },
    {
      name: "Node.js",
      image: nodejs,
      className: "",
    },
    {
      name: "Next.js",
      image: nextjs,
      className: "invert",
    },
    {
      name: "Redux",
      image: redux,
      className: "",
    },
    {
      name: "Tailwind",
      image: tailwind,
      className: "",
    },
    {
      name: "Sass",
      image: sass,
      className: "",
    },
    {
      name: "Django",
      image: django,
      className: "",
    },
    {
      name: "Flask",
      image: flask,
      className: "invert",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto">
      <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white m-4">
        Technologies
      </h2>
      <section
        id="technologies"
        className="flex flex-col justify-center sm:flex-row p-6 items-center gap-8 mb-12 widescreen:section-min-height tallscreen:section-min-height"
      >
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8 sm:grid sm:grid-cols-3">
          {images.map((image) => (
            <li className="w-2/3 sm:w-5/6" key={image.name}>
              <Image
                src={image.image}
                alt={image.name}
                width={400}
                height={400}
                className={`${image.className}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
