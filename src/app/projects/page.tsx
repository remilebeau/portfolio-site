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
        <p>
          <a href="https://studybud-0egb.onrender.com">Live Demo</a>
        </p>
        <p>
          <Image src={studybudHomepage} alt="Studybud" />
        </p>
        {/* Next.js: WikiRocket */}
        <h2>Next.js: WikiRocket</h2>
        <p>
          <a href="https://nextjs-wikirocket-black.vercel.app/">Live Demo</a>
        </p>
        <p>
          <Image src={wikiRocket} alt="WikiRocket" />
        </p>
      </section>
    </main>
  );
}
