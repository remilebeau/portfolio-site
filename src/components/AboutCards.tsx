import Image from "next/image";
import lebanon from "../../public/images/lebanon.svg";
import usa from "../../public/images/usa.svg";
import france from "../../public/images/france.svg";
import osu from "../../public/images/osu.svg";

export default function AboutCards() {
  const cards = [
    {
      title: "Lebanon",
      src: lebanon,
      caption: "Lebanese ethnicity",
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
      caption: "BSBA, Finance Specialization, Summa Cum Laude",
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
