import { ModeToggle } from "./ThemeSwitch";

export default function Footer() {
  return (
    <footer className="rounded-t-xl bg-primary">
      <section className="mx-auto flex max-w-4xl flex-row items-center justify-evenly p-4 font-bold">
        {/* Dark Mode Toggle */}
        <ModeToggle />
      </section>
    </footer>
  );
}
