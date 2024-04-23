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

type AboutImage = {
  title: string;
  src: StaticImageData;
  caption: string;
};

export default function AboutPage() {
  const images: AboutImage[] = [
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
      caption: "Additional languages: French, Arabic",
    },
    {
      title: "OSU",
      src: osu,
      caption: "BSBA, Summa Cum Laude, 2020",
    },
    {
      title: "Nintendo",
      src: nintendo,
      caption: "Favorite consoles: N64, Switch",
    },
  ];

  const renderedImages = images.map((image) => (
    <Card key={image.title}>
      <CardContent>
        <Image src={image.src} alt={image.title} width={400} height={400} />
      </CardContent>
      <CardFooter>
        <p>{image.caption}</p>
      </CardFooter>
    </Card>
  ));

  return (
    <main className="mx-auto max-w-4xl">
      <h2 className="m-4 max-w-md text-center text-4xl font-bold text-primary sm:text-left sm:text-5xl">
        About
      </h2>
      <section
        id="about"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6"
      >
        {renderedImages}
      </section>
    </main>
  );
}
