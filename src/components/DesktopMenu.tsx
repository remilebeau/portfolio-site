import Link from "next/link";
import { ModeToggle } from "./ThemeSwitch";
import { FaGithub, FaEnvelope } from "react-icons/fa";

type Props = {
  onMobileMenuButtonClicked: () => void;
  links: {
    name: string;
    path: string;
  }[];
};

export default function DesktopMenu({
  onMobileMenuButtonClicked,
  links,
}: Props) {
  return (
    // keep navbar on top of page
    <header className="sticky top-0 z-10 bg-background font-bold text-primary">
      {/* container for navbar content */}
      <section className="mx-auto flex max-w-4xl items-center justify-evenly p-4 ">
        {/* mobile menu button */}
        <button
          onClick={onMobileMenuButtonClicked}
          id="mobile-open-button"
          className="text-3xl md:hidden"
        >
          &#9776;
        </button>
        {/* menu items */}
        <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
          {links.map((link) => (
            <Link key={link.path} href={link.path} className="hover:opacity-80">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* light/dark mode toggle */}
        <ModeToggle />
        {/* github and email icons */}
        <section className="flex gap-4">
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
        </section>
      </section>
    </header>
  );
}
