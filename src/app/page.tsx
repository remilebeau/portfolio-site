export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl">
      {/* container for page content */}
      <section className="flex max-w-4xl flex-col gap-16 p-12 text-center sm:text-left">
        <h2 className="text-4xl font-bold">Hello and welcome. I&apos;m Wes.</h2>

        <p className="text-3xl">
          A finance and operations manager changing careers to software
          engineering.
        </p>

        <p className="text-3xl">
          Currently focusing on full-stack web development.
        </p>

        <p className="text-3xl">
          Please use this site to view and test some of my projects, visit my
          GitHub, or send me an email.
        </p>
      </section>
    </main>
  );
}
