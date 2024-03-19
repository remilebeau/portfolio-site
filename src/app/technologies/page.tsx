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
  return (
    <main>
      <h1>Technologies</h1>
      <section id="languages">
        <h2>Languages</h2>
        <ul>
          {/* || LANGUAGES: HTML, CSS, JS, TS, Python */}
          <li>
            <Image src={html} alt="HTML" />
          </li>
          <li>
            <Image src={css} alt="CSS" />
          </li>
          <li>
            <Image className="rounded-xl" src={js} alt="JS" />
          </li>
          <li>
            <Image className="rounded-xl" src={ts} alt="TS" />
          </li>
          <li>
            <Image src={python} alt="Python" />
          </li>
        </ul>
      </section>

      <hr />

      <section id="libraries-and-frameworks">
        <h2>Libraries and Frameworks</h2>
        <ul>
          {/* || LIBRARIES AND FRAMEWORKS: MERN, Next.js, Django, Flask */}
          <li>
            <Image src={mongodb} alt="MongoDB" />
          </li>
          <li>
            <Image src={ex} alt="Express" className="invert" />
          </li>
          <li>
            <Image src={react} alt="React" width={400} />
          </li>
          <li>
            <Image src={nodejs} alt="Node.js" />
          </li>
          <li>
            <Image src={nextjs} alt="Next.js" className="invert" />
          </li>
          <li>
            <Image src={django} alt="Django" />
          </li>
          <li>
            <Image src={flask} alt="Flask" className="invert" />
          </li>
        </ul>
      </section>

      <hr />

      <section id="additional-tools">
        <h2>Additional Tools</h2>
        <ul>
          {/* || ADDITIONAL TOOLS: Redux, Tailwind, Sass */}
          <li>
            <Image src={redux} alt="Redux" />
          </li>
          <li>
            <Image src={tailwind} alt="Tailwind" width={400} />
          </li>
          <li>
            <Image src={sass} alt="Sass" />
          </li>
        </ul>
      </section>
    </main>
  );
}
