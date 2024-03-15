import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <h2>About</h2>
      <section>
        <article id="countries">
          <Image
            src="/images/lebanon.svg"
            width={400}
            height={400}
            alt="Lebanon"
          />
          <Image
            src="/images/canada.svg"
            width={400}
            height={400}
            alt="Canada"
          />
          <Image src="/images/usa.svg" width={400} height={400} alt="USA" />
          <Image
            src="/images/france.svg"
            width={400}
            height={400}
            alt="France"
          />
          <p>Lebanese ethnicity</p>
          <p>Born in Canada</p>
          <p>Living in Columbus, OH</p>
          <p>Additional languages: French</p>
        </article>

        <hr />

        <article id="university">
          <Image
            src="/images/osu.svg"
            width={400}
            height={400}
            alt="Ohio State Buckeyes"
          />
          <p className="col-start-2">
            BSBA <br />
            Summa Cum Laude <br />
            2020
          </p>
        </article>

        <hr />

        <article id="games">
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
          <p className="col-span-2 ">
            Gaming for over 20 years <br />
            Favorite console: Nintendo 64 <br />
            Favorite game: <br />
            The Legend of Zelda: Ocarina of Time
          </p>
        </article>

        <hr />

        <article id="linux">
          <Image
            src="./images/debian.svg"
            width={400}
            height={400}
            alt="Debian"
          />
          <Image
            src="/images/ubuntu.svg"
            width={400}
            height={400}
            alt="Ubuntu"
          />
          <p className="col-span-2">
            Full-time Linux desktop user since 2021 <br />
            Advocate of Free and Open Source Software
          </p>
        </article>
      </section>
    </main>
  );
}
