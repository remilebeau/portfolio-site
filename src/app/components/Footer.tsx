import { FaGithub, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      id="footer"
      aria-label="footer"
      className="bg-teal-700 text-xl text-white"
    >
      <nav className="mx-auto flex max-w-4xl flex-row justify-between gap-2 p-4 sm:flex-row">
        <a
          href="https://github.com/remilebeau"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-4xl hover:opacity-90" />
        </a>
        <p>Website by Wes S</p>
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
