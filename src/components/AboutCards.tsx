import Image from "next/image";
import lebanon from "../../public/images/lebanon.svg";
import france from "../../public/images/france.svg";
import osu from "../../public/images/osu.svg";
import oh from "../../public/images/oh.svg";
import ny from "../../public/images/ny.svg";
import tx from "../../public/images/tx.svg";

export default function AboutCards() {
  const cards: AboutCard[] = [
    {
      title: "Lebanon",
      src: lebanon,
      caption: "Lebanese ethnicity",
    },
    {
      title: "OSU",
      src: osu,
      caption:
        "Bachelor of Science in Business Administration, Summa Cum Laude",
    },
    {
      title: "OH",
      src: oh,
      caption: "Hometown: Columbus, OH",
    },
    {
      title: "NY",
      src: ny,
      caption: "Available relocations: New York",
    },
    {
      title: "TX",
      src: tx,
      caption: "Available relocations: Texas",
    },
    {
      title: "France",
      src: france,
      caption: "Additional languages: French",
    },
  ];

  const renderedCards = cards.map((card) => (
    <section
      key={card.title}
      className="flex flex-col items-center justify-center rounded-xl border-4 border-border bg-card p-4"
    >
      <Image src={card.src} alt={card.title} className="rounded-lg" />
      <p className="p-4 text-center text-2xl font-bold">{card.caption}</p>
    </section>
  ));

  return (
    <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
      {renderedCards}
    </section>
  );
}
