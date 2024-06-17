import { FaGithub, FaEnvelope } from "react-icons/fa";
import { ModeToggle } from "./ThemeSwitch";
export default function Footer() {
  return (
    <footer className="bg-primary">
      <section className="mx-auto flex max-w-4xl flex-row justify-evenly p-4 text-3xl font-bold">
        {/* github and email icons */}
        <a href="https://github.com/remilebeau">
          <FaGithub className="text-5xl" />
        </a>
        <a href="mailto:remilebeau90@gmail.com">
          <FaEnvelope className="text-5xl" />
        </a>
        <ModeToggle />
      </section>
    </footer>
  );
}
