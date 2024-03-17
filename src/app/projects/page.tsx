import Image from "next/image";
import mernCreateNote from "../../../public/images/mernCreateNote.png";
import mernLoginPage from "../../../public/images/mernLoginPage.png";
import mernViewTechNotes from "../../../public/images/mernViewTechNotes.png";

export default function ProjectPage() {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        {/* MERN: techNotes */}
        <h2>MERN: techNotes</h2>
        <p>
          <a
            href="https://github.com/remilebeau/techNotes-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Source Code
          </a>
        </p>
        <p>
          <a
            href="https://github.com/remilebeau/techNotes-backend"
            target="_blank"
            rel="noreferrer"
          >
            Backend Source Code
          </a>
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
        <ul>
          <li>
            <Image src={mernCreateNote} alt="MERN: techNotes" />
          </li>
          <li>
            <Image src={mernLoginPage} alt="MERN: techNotes" />
          </li>
          <li>
            <Image src={mernViewTechNotes} alt="MERN: techNotes" width={400} />
          </li>
        </ul>
      </section>
    </main>
  );
}
