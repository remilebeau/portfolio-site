import Image from "next/image";
import lebanon from "../../../public/images/lebanon.svg";
import canada from "../../../public/images/canada.svg";
import usa from "../../../public/images/usa.svg";
import france from "../../../public/images/france.svg";
import osu from "../../../public/images/osu.svg";
import nintendo from "../../../public/images/nintendo.svg";
import ubuntu from "../../../public/images/ubuntu.svg";

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <section id="countries">
        <ul>
          <li>
            <Image src={lebanon} alt="Lebanon" />
            <p>Lebanese ethnicity</p>
          </li>
          <li>
            <Image src={canada} alt="Canada" />
            <p>Born in Canada</p>
          </li>
          <li>
            <Image src={usa} alt="USA" />
            <p>Grew up and currently located in Columbus, OH</p>
          </li>
          <li>
            <Image src={france} alt="France" />
            <p>Additional languages: French</p>
          </li>
        </ul>
      </section>

      <hr />

      <section id="university">
        <ul>
          <li>
            <Image src={osu} alt="Ohio State Buckeyes" />
            <p>Bachelor of Science in Business Administration</p>
            <p className="italic">Summa Cum Laude</p>
          </li>
        </ul>
      </section>

      <hr />

      <section id="games">
        <ul>
          <li>
            <Image src={nintendo} alt="Nintendo" />

            <p className="nowrap">
              Favorite console: <i>Nintendo 64</i>
            </p>
            <p className="nowrap">
              Favorite game: <br />
              <i>The Legend of Zelda: Ocarina of Time</i>
            </p>
          </li>
        </ul>
      </section>

      <hr />

      <section id="linux">
        <ul>
          <li>
            <Image src={ubuntu} alt="Ubuntu" />
            <p className="nowrap">Linux desktop user since 2021</p>
            <p>Advocate of Free and Open Source Software</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
