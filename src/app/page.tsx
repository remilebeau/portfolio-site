export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto">
      <section
        id="welcome"
        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white">
            Hello and welcome. I&apos;m Remi.
          </h2>
        </article>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left">
          I&apos;m an aspiring software developer with a financial background
          seeking to change careers from finance into web development.
        </p>
      </section>
    </main>
  );
}
