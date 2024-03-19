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
      <section id="countries" className="p-6 my-12">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">
          About
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
            <Image src={lebanon} alt="Lebanon" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-white">
              Lebanese ethnicity
            </h3>
          </li>
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
            <Image src={canada} alt="Canada" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-white">Born in Canada</h3>
          </li>
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
            <Image src={usa} alt="USA" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-white">
              Grew up and located in Columbus, OH
            </h3>
          </li>
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
            <Image src={france} alt="France" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-white">
              Additional languages: French
            </h3>
          </li>
        </ul>
      </section>

      <hr className="mx-auto bg-white w-1/2" />

      <section id="university" className="p-6 my-12">
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
            <Image src={osu} alt="Ohio State Buckeyes" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-white">
              Bachelor of Science in Business Administration
            </h3>
            <p className="italic text-3xl text-center text-white">
              Summa Cum Laude
            </p>
            <p className="italic text-3xl text-center text-white">2020</p>
          </li>
        </ul>
      </section>

      <hr className="mx-auto bg-white w-1/2" />

      <section id="games" className="p-6 my-12">
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
            <Image src={nintendo} alt="Nintendo" className="w-1/2 mb-6" />
            <p className="text-3xl text-center text-white">
              Favorite console: <i>Nintendo 64</i>
            </p>
            <p className="text-3xl text-center text-white">
              Favorite game: <br />
              <i>The Legend of Zelda: Ocarina of Time</i>
            </p>
          </li>
        </ul>
      </section>

      <hr className="mx-auto bg-white w-1/2" />

      <section id="linux" className="p-6 my-12">
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
            <Image src={ubuntu} alt="Ubuntu" className="w-1/2 mb-6" />
            <p className="text-3xl text-center text-white">
              Linux desktop user since 2021
            </p>
            <p className="text-3xl text-center text-white">
              Advocate of Free and Open Source Software
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
