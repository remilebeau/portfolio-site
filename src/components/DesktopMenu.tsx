import Link from "next/link";
import { ModeToggle } from "./ThemeSwitch";

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
    <header className="sticky top-0 z-10 bg-slate-800 text-white dark:bg-teal-700">
      <section className="mx-auto flex max-w-4xl items-center justify-evenly p-4">
        <button
          onClick={onMobileMenuButtonClicked}
          id="mobile-open-button"
          className="text-3xl md:hidden"
        >
          &#9776;
        </button>
        <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
          {links.map((link) => (
            <Link key={link.path} href={link.path} className="hover:opacity-90">
              {link.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </section>
    </header>
  );
}
