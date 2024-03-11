import Image from "next/image";

export default function TechnologyPage() {
  return (
    <main className="grid grid-cols-5 place-items-center gap-4 m-4 p-4">
      {/* languages */}
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
        className=""
        src="./images/python.svg"
        width={400}
        height={400}
        alt="Python"
      />

      {/* mern apps individually */}
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
      <Image src="./images/nodejs.svg" width={400} height={400} alt="NodeJS" />

      {/* mern combined */}
      {/* <Image src="./images/mern.svg" width={400} height={400} alt="MERN" /> */}

      {/* frameworks */}
      <Image
        className="invert col-span-5 place-self-center"
        src="./images/nextjs.svg"
        width={400}
        height={400}
        alt="NextJS"
      />

      {/* addtional tools */}
      {/* <Image src="./images/redux.svg" width={400} height={400} alt="Redux" />
      <Image src="./images/sass.svg" width={400} height={400} alt="SASS" />
      <Image
        src="./images/tailwind.svg"
        width={400}
        height={400}
        alt="Tailwind"
      /> */}
    </main>
  );
}
