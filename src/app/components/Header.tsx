import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/technologies" },
    { name: "Projects", path: "/projects" },
  ];
  return (
    <header>
      <section className="header__container">
        <h1>Remi Lebeau</h1>
        
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="hover:opacity-90 text-3xl mr-4"
          href="https://github.com/remilebeau"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="hover:opacity-90 text-3xl ml-4"
          href="mailto:remilebeau90@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </section>
    </header>
  );
}
