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
          I&apos;m an aspiring web developer with a financial background seeking
          to change careers from finance into web development.
        </p>
        <p className="mt-4 max-w-md text-center text-2xl sm:text-left">
          My web development experience is focused on JavaScript and Python. I
          have built projects using the MERN Stack (MongoDB, Express, React,
          Node), Next.js, and Django.
        </p>
        <p className="mt-4 max-w-md text-center text-2xl sm:text-left">
          However, I am open to learning other web development technologies such
          as Ruby/Rails, Elixir/Phoenix, Go, or anything else required to
          complete the task.
        </p>
      </section>
    </main>
  );
}
