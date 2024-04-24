import { FaGithub, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      {/* parent container for footer content */}
      <section className="flex justify-evenly gap-8 p-4 text-5xl">
        {/* github and email icons */}
        <a href="https://github.com/remilebeau">
          <FaGithub />
        </a>
        <a href="remilebeau90@gmail.com">
          <FaEnvelope />
        </a>
        <section className="flex flex-row"></section>
        {/* light/dark mode toggle */}
      </section>
    </footer>
  );
}
