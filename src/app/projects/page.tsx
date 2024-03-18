import Image from "next/image";
import mernCreateNote from "../../../public/images/mernCreateNote.png";
import mernLoginPage from "../../../public/images/mernLoginPage.png";
import studybudHomepage from "../../../public/images/studybudHomepage.png";
import wikiRocket from "../../../public/images/wikiRocket.png";

export default function ProjectPage() {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        {/* MERN: techNotes */}
        <h2>MERN: techNotes</h2>
        <p>
          A MERN SPA that replaces the notes system of a ficticious computer
          repair business
        </p>
        <p>
          <a
            href="https://technotes-op6s.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </p>
        <p>
          <Image src={mernCreateNote} alt="MERN: techNotes" />
        </p>
        <p>
          <Image src={mernLoginPage} alt="MERN: techNotes" />
        </p>
        {/* Studybud */}
        <h2>Django: Studybud</h2>
        <p>A CRUD app where users create and join study rooms</p>
        <p>
          <a href="https://studybud-0egb.onrender.com">Live Demo</a>
        </p>
        <p>
          <Image src={studybudHomepage} alt="Studybud" />
        </p>
        {/* Next.js: WikiRocket */}
        <h2>Next.js: WikiRocket</h2>
        <p>A Next.js app that searches Wikipedia for the given search query</p>
        <p>
          <a href="https://nextjs-wikirocket-black.vercel.app/">Live Demo</a>
        </p>
        <p>
          <Image src={wikiRocket} alt="WikiRocket" />
        </p>
        <p>
          More projects available on my
          <a href="https://github.com/remilebeau">GitHub</a>
        </p>
      </section>
    </main>
  );
}
