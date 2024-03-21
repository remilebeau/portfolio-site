import { FaGithub, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      id="footer"
      aria-label="footer"
      className="bg-teal-700 text-white text-xl"
    >
      <nav className="max-w-4xl mx-auto p-4 flex flex-row sm:flex-row justify-between gap-2">
        <a
          href="https://github.com/remilebeau"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-4xl hover:opacity-90" />
        </a>
        <a
          href="mailto:remilebeau90@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="text-4xl hover:opacity-90" />
        </a>
      </nav>
    </footer>
  );
}
