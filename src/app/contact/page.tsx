import ButtonWithLink from "@/components/ButtonWithLink";

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-4 p-4 font-bold">
      <h1 className="rounded-xl bg-primary p-2 text-center text-5xl  text-secondary">
        Contact
      </h1>
      {/* flexbox for GitHub, Email, and Resume buttons */}
      <section className="flex flex-col justify-evenly gap-4 p-4 sm:flex-row">
        <ButtonWithLink href="https://github.com/remilebeau" text="GitHub" />
        <ButtonWithLink
          href="mailto:remilebeau90@gmail.com"
          text="remilebeau90@gmail.com"
        />
        <ButtonWithLink href="/wes_s_resume.pdf" text="Resume" />
      </section>

      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />

      <h2 className="text-center text-4xl  text-primary">Want To...</h2>

      <h2 className="text-3xl  text-primary">Connect?</h2>
      <p className="text-2xl">
        I am always interested in meeting new people and expanding my personal
        and professional circles.
      </p>

      <h2 className="text-3xl  text-primary">Collaborate?</h2>
      <p className="text-2xl">
        I am open to discussing job opportunities in finance, business
        analytics, or software development &mdash; in-person or remote &mdash;
        that are located in New York, Ohio, or Texas.
      </p>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
    </main>
  );
}
