import Image from "next/image";

export default function AboutPage() {
  const imageClasses = "mb-6";
  return (
    <main>
      <h2>About</h2>
      <section>
        <article id="countries">
          <ul>
            <li>
              <Image
                src="/images/lebanon.svg"
                width={400}
                height={400}
                alt="Lebanon"
                className={imageClasses}
              />
              <p>Lebanese ethnicity</p>
            </li>
            <li>
              <Image
                src="/images/canada.svg"
                width={400}
                height={400}
                alt="Canada"
                className={imageClasses}
              />
              <p>Born in Canada</p>
            </li>
            <li>
              <Image
                src="/images/usa.svg"
                width={400}
                height={400}
                alt="USA"
                className={imageClasses}
              />
              <p>Raised and living in Columbus, OH</p>
            </li>
            <li>
              <Image
                src="/images/france.svg"
                width={400}
                height={400}
                alt="France"
                className={imageClasses}
              />
              <p>Additional languages: French</p>
            </li>
          </ul>
        </article>

        <hr />

        <article id="university">
          <ul>
            <li>
              <Image
                src="/images/osu.svg"
                width={400}
                height={400}
                alt="Ohio State Buckeyes"
                className={imageClasses}
              />
              <p>
                BSBA <br />
                Summa Cum Laude <br />
                2020
              </p>
            </li>
          </ul>
        </article>

        <hr />

        <article id="games">
          <ul>
            <li>
              <Image
                src="/images/nintendo.svg"
                width={400}
                height={400}
                alt="Nintendo"
                className={imageClasses}
              />
              <p>
                Favorite hobby: Gaming <br />
                Favorite console: Nintendo 64 <br />
                Favorite game: <br />
                The Legend of Zelda: Ocarina of Time
              </p>
            </li>
          </ul>
        </article>

        <hr />

        <article id="linux">
          <ul>
            <li>
              <Image
                src="/images/ubuntu.svg"
                width={400}
                height={400}
                alt="Ubuntu"
                className={imageClasses}
              />
              <p>
                Using Linux desktop since 2021 <br />
                Advocate of Free and Open Source Software
              </p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
