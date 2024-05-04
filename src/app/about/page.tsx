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
          Growing up in the 2000s, two of my hobbies were video games and
          tinkering on my PC. Video games are still my favorite. Mostly
          Nintendo, with a period of PC gaming.
        </p>
        <p className="text-2xl">
          Fast forward to 2016, where I entered university with the intention of
          becoming a software engineer. The second semester, I walked into my
          first computer science class that morning, and saw there were no
          computers in the room. Then the professor took a dry-erase marker and
          wrote mathematical proofs on the whiteboard. The next day, I switched
          to the business school.
        </p>
        <p className="text-2xl">
          I received my BSBA from The Ohio State University in 2020, and
          continued working in financial and operations management for small
          businesses here in Columbus.
        </p>
        <p className="text-2xl">
          In 2021, my brother introduced me to Linux desktop. After using it
          alongside Windows 10 for over a year, I switched full-time to Linux in
          2022.
        </p>
        <p className="text-2xl">
          Among other things, Linux desktop gave me a lot of practice with using
          a terminal and getting unstuck - two skills I later learned are very
          useful for software engineers. It also reignited my interest in
          software engineering. Thus, in 2023, I began changing careers back
          toward software engineering. But this time with computers - Linux ones
          preferably.
        </p>
      </article>
    </>
  );
}
