import Image from "next/image";
import mernCreateNote from "../../../public/images/mernCreateNote.png";
import mernLoginPage from "../../../public/images/mernLoginPage.png";
import studybudHomepage from "../../../public/images/studybudHomepage.png";
import wikiRocket from "../../../public/images/wikiRocket.png";

export default function ProjectPage() {
  const projects = [
    {
      title: "MERN: techNotes",
      description:
        "A MERN SPA that replaces the notes system of a ficticious computer repair business",
      image: mernLoginPage,
      link: "https://technotes-op6s.onrender.com",
    },
    {
      title: "Django: Studybud",
      description: "A CRUD app where users create and join study rooms",
      image: studybudHomepage,
      link: "https://studybud-0egb.onrender.com",
    },
    {
      title: "Next.js: WikiRocket",
      description:
        "A Next.js app that searches Wikipedia for the given search query",
      image: wikiRocket,
      link: "https://nextjs-wikirocket-black.vercel.app/",
    },
  ];
  return (
    <main className="mx-auto max-w-4xl">
      <h2 className="m-4 max-w-md text-center text-4xl font-bold text-white ">
        Projects
      </h2>
      <section
        id="projects"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <ul>
          {projects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col items-center justify-center sm:items-start"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-xl">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="m-4"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-3xl p-4 shadow-2xl hover:opacity-90 "
                  width={600}
                  height={600}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
