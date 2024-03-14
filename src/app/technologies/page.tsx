import Image from "next/image";

export default function TechnologyPage() {
  return (
    <main>
      <h1>Technologies</h1>
      {/* || LANGUAGES: HTML, CSS, JS, TS, Python */}
      <article className="grid grid-cols-5 place-items-center gap-4 m-4 p-4">
        <Image src="./images/html.svg" width={400} height={400} alt="HTML" />
        <Image src="./images/css.svg" width={400} height={400} alt="CSS" />
        <Image
          className="rounded-xl"
          src="./images/js.svg"
          width={400}
          height={400}
          alt="JS"
        />
        <Image
          className="rounded-xl"
          src="./images/ts.svg"
          width={400}
          height={400}
          alt="TS"
        />
        <Image
          src="./images/python.svg"
          width={400}
          height={400}
          alt="Python"
        />

        {/* || TECH STACKS: MERN, Next.js */}
        <Image
          src="./images/mongodb.svg"
          width={400}
          height={400}
          alt="MongoDB"
        />
        <Image
          className="invert"
          src="./images/ex.svg"
          width={400}
          height={400}
          alt="Express"
        />
        <Image src="./images/react.svg" width={400} height={400} alt="React" />
        <Image
          src="./images/nodejs.svg"
          width={400}
          height={400}
          alt="NodeJS"
        />
        <Image
          className="invert"
          src="./images/nextjs-logo.svg"
          width={400}
          height={400}
          alt="NextJS"
        />

        {/* || ADDITIONAL TOOLS: Redux, Tailwind, SASS, Django, Flask */}
        <Image
          className="rounded-xl"
          src="./images/redux.svg"
          width={400}
          height={400}
          alt="Redux"
        />
        <Image
          className="rounded-xl"
          src="./images/tailwind.svg"
          width={400}
          height={400}
          alt="Tailwind"
        />
        <Image
          className="rounded-xl"
          src="./images/sass.svg"
          width={400}
          height={400}
          alt="SASS"
        />
        <Image
          className="rounded-xl"
          src="./images/django.svg"
          width={400}
          height={400}
          alt="Django"
        />
        <Image
          className="invert"
          src="./images/flask.svg"
          width={400}
          height={400}
          alt="Flask"
        />
      </article>
    </main>
  );
}
