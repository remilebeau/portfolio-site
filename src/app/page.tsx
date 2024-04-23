export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl">
      <section
        id="welcome"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6"
      >
        <h2 className="max-w-md text-4xl font-bold sm:w-1/2 sm:text-left sm:text-5xl">
          Hello and welcome. I&apos;m Wes.
        </h2>

        <p className="mt-4 max-w-md  text-2xl sm:text-left">
          A software engineer with a financial background specializing in
          creating business solutions.
        </p>

        <p className="mt-4 max-w-md  text-2xl sm:text-left">
          Most experienced in full-stack web development.
        </p>

        <p className="mt-4 max-w-md  text-2xl sm:text-left">
          Please use this site to view my projects, visit my GitHub, or send me
          an email.
        </p>
      </section>
    </main>
  );
}
