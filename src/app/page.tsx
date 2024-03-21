export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl">
      <section
        id="welcome"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold text-white sm:text-left sm:text-5xl">
            Hello and welcome. I&apos;m Remi.
          </h2>
        </article>
        <p className="mt-4 max-w-md text-center text-2xl sm:text-left">
          I&apos;m an aspiring software developer with a financial background
          seeking to change careers from finance into web development.
        </p>
      </section>
    </main>
  );
}
