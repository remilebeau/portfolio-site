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
      caption: "Lebanese nationality",
    },
    {
      title: "Canada",
      src: canada,
      caption: "Born in Canada",
    },
    {
      title: "USA",
      src: usa,
      caption: "Raised and located in Columbus, OH",
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
        "Bachelor of Science in Business Administration, Summa Cum Laude, 2020",
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
      className="flex w-1/2 flex-col items-center border-4"
    >
      <CardContent className="p-6">
        <Image
          src={card.src}
          alt={card.title}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </CardContent>
      <CardFooter className="justify-center text-center">
        <p className="text-2xl font-bold">{card.caption}</p>
      </CardFooter>
    </Card>
  ));

  return (
    <main className="mx-auto mb-12 flex max-w-4xl flex-col items-center justify-center gap-8 p-12">
      <h2 className="text-5xl font-bold">About</h2>
      {renderedCards}
    </main>
  );
}
