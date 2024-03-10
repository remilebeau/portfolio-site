import Image from "next/image";

export default function TechnologyPage() {
  return (
    <main className="grid grid-cols-4 gap-4 m-4 p-4">
      <Image src="./images/html.svg" width={400} height={400} alt="HTML" />
      <Image src="./images/css.svg" width={400} height={400} alt="CSS" />
      <Image src="./images/js.svg" width={400} height={400} alt="JS" />
      <Image src="./images/python.svg" width={400} height={400} alt="Python" />
      <Image
        className="bg-white p-4"
        src="./images/mongodb.svg"
        width={400}
        height={400}
        alt="MongoDB"
      />
      <Image
        className="bg-white p-4"
        src="./images/express.svg"
        width={400}
        height={400}
        alt="Express"
      />
      <Image src="./images/react.svg" width={400} height={400} alt="React" />
      <Image
        className="bg-white p-4"
        src="./images/nodejs.svg"
        width={400}
        height={400}
        alt="NodeJS"
      />
      <Image
        className="bg-white p-4"
        src="./images/nextjs.svg"
        width={400}
        height={400}
        alt="NextJS"
      />
      <Image src="./images/redux.svg" width={400} height={400} alt="Redux" />
    </main>
  );
}
