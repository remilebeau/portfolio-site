import { FaGithub, FaEnvelope } from "react-icons/fa";
import { ModeToggle } from "./ThemeSwitch";
export default function Footer() {
  return (
    <footer className="flex justify-evenly text-5xl">
      {/* github and email icons */}
      <a href="https://github.com/remilebeau">
        <FaGithub />
      </a>
      <a href="remilebeau90@gmail.com">
        <FaEnvelope />
      </a>
      <ModeToggle />
    </footer>
  );
}
