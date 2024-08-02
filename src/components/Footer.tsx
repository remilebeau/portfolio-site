import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { ModeToggle } from "./ThemeSwitch";

export default function Footer() {
  return (
    <footer className="rounded-t-xl bg-primary">
      <section className="mx-auto flex max-w-4xl flex-row items-center justify-evenly p-4 font-bold">
        {/* GitHub */}
        <a
          className="text-secondary"
          href="https://github.com/remilebeau"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-5xl hover:opacity-80" />
        </a>
        {/* Email */}
        <a
          className="text-secondary"
          href="mailto:remilebeau90@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="text-5xl hover:opacity-80" />
        </a>
        {/* Resume */}
        <a className="text-secondary" href="/wes_s_resume.pdf" download>
          <FiFileText className="text-5xl hover:opacity-80" />
        </a>
        {/* Dark Mode Toggle */}
        <ModeToggle />
      </section>
    </footer>
  );
}
