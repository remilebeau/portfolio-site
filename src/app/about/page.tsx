import Image from "next/image";
import lebanon from "../../../public/images/lebanon.svg";
import canada from "../../../public/images/canada.svg";
import usa from "../../../public/images/usa.svg";
import france from "../../../public/images/france.svg";
import osu from "../../../public/images/osu.svg";
import nintendo from "../../../public/images/nintendo.svg";

export default function AboutPage() {
  const countries = [
    {
      name: "Lebanon",
      image: lebanon,
      caption: ["Lebanese nationality"],
      className: "",
    },
    {
      name: "Canada",
      image: canada,
      caption: ["Born in Canada"],
      className: "",
    },
    {
      name: "USA",
      image: usa,
      caption: ["Raised and located in Columbus, OH"],
      className: "",
    },
    {
      name: "France",
      image: france,
      caption: ["Additional languages: French, Arabic"],
      className: "",
    },
  ];
  const school = [
    {
      name: "OSU",
      image: osu,
      caption: ["BSBA, Summa Cum Laude, 2020"],
      className: "",
    },
  ];

  const hobbies = [
    {
      name: "Nintendo",
      image: nintendo,
      caption: ["Favorite consoles: N64, Switch"],
      className: "",
    },
  ];

  const images = [...countries, ...school, ...hobbies];
  return (
    <main className="mx-auto max-w-4xl">
      <section
        id="about"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6"
      >
        <h2 className="m-4 max-w-md text-center text-4xl font-bold text-white sm:text-left sm:text-5xl">
          About
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:flex-row">
          {images.map((image) => (
            <li
              key={image.name}
              className="w-2/3 flex-col items-center rounded-3xl px-2 py-6 shadow-xl marker:flex sm:w-5/6"
            >
              <Image
                src={image.image}
                alt={image.name}
                width={400}
                height={400}
                className={image.className}
              />

              {image.caption.map((line) => (
                <figcaption
                  className="w-full p-2 text-2xl font-bold"
                  key={line}
                >
                  {line}
                </figcaption>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
