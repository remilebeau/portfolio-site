import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { ModeToggle } from "./ThemeSwitch";
export default function Footer() {
  return (
    <footer className="bg-primary">
      <section className="mx-auto flex max-w-4xl flex-row items-center justify-evenly p-4 font-bold">
        <a
          href="https://github.com/remilebeau"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-5xl" />
        </a>
        <a
          href="mailto:remilebeau90@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="text-5xl" />
        </a>
        <a href="/wes-s-resume.pdf" download>
          <FiFileText className="text-5xl" />
        </a>
        <ModeToggle />
      </section>
    </footer>
  );
}
