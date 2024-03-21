import { FaGithub, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer id="footer" className="bg-teal-700 text-white p-6">
      <section className="max-w-4xl mx-auto">
        <nav
          className="flex flex-col gap-2 items-center sm:flex-row"
          aria-label="footer"
        >
          <a
            href="https://github.com/remilebeau"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="mailto:remilebeau90@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className="text-4xl" />
          </a>
        </nav>
      </section>
    </footer>
  );
}
