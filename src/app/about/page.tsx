import Image from "next/image";
import lebanon from "../../../public/images/lebanon.svg";
import canada from "../../../public/images/canada.svg";
import usa from "../../../public/images/usa.svg";
import france from "../../../public/images/france.svg";
import osu from "../../../public/images/osu.svg";
import nintendo from "../../../public/images/nintendo.svg";
import ubuntu from "../../../public/images/ubuntu.svg";

export default function AboutPage() {
  const countries = [
    {
      name: "Lebanon",
      image: lebanon,
      caption: ["Lebanese ethnicity"],
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
      caption: ["Grew up and located in Columbus, OH"],
      className: "",
    },
    {
      name: "France",
      image: france,
      caption: ["Additional languages: French"],
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
    {
      name: "Ubuntu",
      image: ubuntu,
      caption: ["Favorite operating system: Linux"],
      className: "",
    },
  ];

  const images = [...countries, ...school, ...hobbies];
  return (
    <main>
      <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white m-4">
        About
      </h2>
      <section
        id="about"
        className="flex flex-col justify-center sm:flex-row p-6 items-center gap-8 mb-12 widescreen:section-min-height tallscreen:section-min-height"
      >
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8 sm:grid sm:grid-cols-3">
          {images.map((image) => (
            <li
              key={image.name}
              className="w-2/3 sm:w-5/6 marker:flex flex-col items-center py-6 px-2 rounded-3xl shadow-xl"
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
                  className="p-2 w-full text-2xl font-bold"
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
