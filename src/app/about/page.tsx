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
            <p>Raised and living in Columbus, OH</p>
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
            <p>Summa Cum Laude</p>
            <p>2020</p>
          </li>
        </ul>
      </section>

      <hr />

      <section id="games">
        <ul>
          <li>
            <Image src={nintendo} alt="Nintendo" />

            <p>
              Favorite console: <br />
              Nintendo 64
            </p>
            <p>
              Favorite game: <br />
              The Legend of Zelda: Ocarina of Time
            </p>
          </li>
        </ul>
      </section>

      <hr />

      <section id="linux">
        <ul>
          <li>
            <Image src={ubuntu} alt="Ubuntu" />
            <p>Linux desktop user since 2021</p>
            <p> Advocate of Free and Open Source Software</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
