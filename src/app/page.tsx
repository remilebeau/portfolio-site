export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl">
      <section
        id="welcome"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex flex-col items-center justify-center gap-8 p-6"
      >
        <h2 className="max-w-md  text-4xl font-bold text-white sm:w-1/2 sm:text-left sm:text-5xl">
          Hello and welcome. I&apos;m Wes.
        </h2>

        <p className="mt-4 max-w-md  text-2xl sm:text-left">
          My background is in finance, and I am changing careers to software
          engineering.
        </p>

        <p className="mt-4 max-w-md  text-2xl sm:text-left">
          Thus far, my SE experience is in web development. I&apos;ve built
          applications with MERN, Next.js, and Django.
        </p>

        <p className="mt-4 max-w-md  text-2xl sm:text-left">
          I am also open to other technologies and specializations of software
          engineering.
        </p>

        <p className="mt-4 max-w-md  text-2xl sm:text-left">
          Please use this site to view my projects, visit my GitHub, or send me
          an email.
        </p>
      </section>
    </main>
  );
}
