import { ModeToggle } from "./ThemeSwitch";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rounded-t-xl bg-primary">
      <section className="mx-auto flex max-w-4xl flex-row items-center justify-evenly p-4 font-bold">
        {/* Contact button */}
        <button className="rounded-xl bg-orange-500 p-2 text-center text-4xl font-bold text-secondary hover:opacity-90">
          <Link href="/contact">Contact</Link>
        </button>

        {/* Dark Mode Toggle */}
        <ModeToggle />
      </section>
    </footer>
  );
}
