export default function HomePage() {
  return (
    <main className="mx-auto">
      {/* container for page content */}
      <section className=" flex max-w-4xl flex-col gap-8 p-12">
        <h2 className="text-4xl font-bold">Hello and welcome. I&apos;m Wes.</h2>

        <p className="text-3xl">
          A software engineer with a financial background specializing in
          creating business solutions.
        </p>

        <p className="text-3xl">
          Most experienced in full-stack web development.
        </p>

        <p className="text-3xl">
          Please use this site to view my projects, visit my GitHub, or send me
          an email.
        </p>
      </section>
    </main>
  );
}
