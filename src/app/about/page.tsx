import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import lebanon from "../../../public/images/lebanon.svg";
import canada from "../../../public/images/canada.svg";
import usa from "../../../public/images/usa.svg";
import france from "../../../public/images/france.svg";
import osu from "../../../public/images/osu.svg";
import nintendo from "../../../public/images/nintendo.svg";

export const metadata: Metadata = {
  title: "About | Wes S",
  description: "The about page of Wes S",
};

type AboutCard = {
  title: string;
  src: StaticImageData;
  caption: string;
};

export default function AboutPage() {
  const cards: AboutCard[] = [
    {
      title: "Lebanon",
      src: lebanon,
      caption: "Lebanese ethnicity",
    },
    {
      title: "Canada",
      src: canada,
      caption: "Born in Canada",
    },
    {
      title: "USA",
      src: usa,
      caption: "Hometown: Columbus, OH",
    },
    {
      title: "France",
      src: france,
      caption: "Additional languages: French",
    },
    {
      title: "OSU",
      src: osu,
      caption:
        "Bachelor of Science in Business Administration, Summa Cum Laude",
    },
    {
      title: "Nintendo",
      src: nintendo,
      caption: "Favorite consoles: Nintendo 64, Nintendo Switch",
    },
  ];

  const renderedCards = cards.map((card) => (
    <Card
      key={card.title}
      className="flex flex-col items-center justify-center border-4"
    >
      <CardContent className="relative p-6">
        <Image
          src={card.src}
          alt={card.title}
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardContent>
      <CardFooter>
        <p className="text-center text-2xl font-bold">{card.caption}</p>
      </CardFooter>
    </Card>
  ));

  return (
    <>
      <h2 className="text-5xl font-bold">About</h2>
      <article className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
        {renderedCards}
      </article>
      <h2 className="text-center text-5xl font-bold">A Brief History</h2>
      <article className="flex flex-col gap-8">
        <p className="text-2xl">
          With a long history of gaming and computing as hobbies, and unsure
          what career path to take, I enrolled in a Java class my junior year of
          high school. While often frustrating, I was drawn to the idea of
          solving problems using software. After high school, I enrolled at the
          Ohio State University, majoring in Computer Science.
        </p>
        <p className="text-2xl">
          I walked into my first computer science class, and saw no computers in
          the room. Instead, the professor grabbed a dry-erase marker and wrote
          mathematical proofs on the whiteboard for the entire session. The next
          day, I switched to the Fisher College of Business.
        </p>
        <p className="text-2xl">
          I received my BSBA from OSU in 2020, and began working in financial
          and operations management for small businesses here in Columbus.
        </p>
        <p className="text-2xl">
          In 2021, my brother introduced me to Linux desktop as a hobby. In my
          tinkering with Linux, I learned about the GNU Project, the Free
          Software Movement, and Linux's overwhelming popularity on servers. I
          also discovered that much of my frustration in programming were
          because of the quirks of programming on Windows, not necessarily
          programming in general. It wasn't long before I switched to Linux
          full-time for my personal computing, but when I learned about its
          professional applications, I thought back to my original career path.
        </p>
        <p className="text-2xl">
          Thus, in 2023, I began changing careers to full-stack web development.
        </p>
      </article>
    </>
  );
}
