import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">About</h1>
      <article
        id="countries"
        className="grid grid-cols-2 mt-auto place-items-center gap-8 m-8 p-8"
      >
        <Image src="/images/canada.svg" width={400} height={400} alt="Canada" />
        <Image
          src="/images/lebanon.svg"
          width={400}
          height={400}
          alt="Lebanon"
        />
        <Image src="/images/usa.svg" width={400} height={400} alt="USA" />

        <Image src="/images/france.svg" width={400} height={400} alt="France" />
        <p className="font-3xl col-span-2 m-8">
          Born in Canada to Lebanese parents. Grew up and currently living in
          Columbus, Ohio. Natively fluent in English. Professional working
          proficiency in French.
        </p>
      </article>

      <hr className="border-2 border-white m-8" />

      <article
        id="university"
        className="grid grid-cols-2 mt-auto place-items-center gap-8 m-8 p-8"
      >
        <Image
          src="/images/osu.svg"
          width={400}
          height={400}
          alt="Ohio State Buckeyes"
        />
        <p className="col-span-2">
          Bachelor of Science in Business Administration, Finance; Summa Cum
          Laude; 2020
        </p>
      </article>

      <hr className="border-2 border-white m-8" />

      <article
        id="games"
        className="grid grid-cols-2 mt-auto place-items-center gap-8 m-8 p-8"
      >
        <Image
          src="/images/nintendo.svg"
          width={400}
          height={400}
          alt="Nintendo"
        />
        <Image
          src="/images/playstation.svg"
          width={400}
          height={400}
          alt="PlayStation"
        />
        <p className="col-span-2">
          Avid gamer for over 20 years. Favorite console: Nintendo 64. Favorite
          game: The Legend of Zelda: Ocarina of Time.
        </p>
      </article>

      <hr className="border-2 border-white m-8" />

      <article
        id="linux"
        className="grid grid-cols-2 mt-auto place-items-center gap-8 m-8 p-8"
      >
        <Image src="/images/ubuntu.svg" width={400} height={400} alt="Ubuntu" />
        <p className="col-span-4">
          Full-time Linux desktop user since 2021. Advocate of Free and Open
          Source Software.
        </p>
      </article>
    </main>
  );
}
