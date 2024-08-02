import ButtonWithLink from "@/components/ButtonWithLink";

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4 font-bold">
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

      <hr className="mx-auto my-8 w-1/2 border-4 border-primary" />

      <h2 className="text-center text-4xl  text-primary">Want To...</h2>

      <h2 className="text-3xl  text-primary">Collaborate?</h2>
      <p className="text-2xl">
        I am open to discussing potential job opportunities or collaborations.
      </p>

      <h2 className="text-3xl  text-primary">Connect?</h2>
      <p className="text-2xl">
        I&apos;m always looking to meet new people and expand my professional
        circle. Whatever your industry &mdash; web development, web design,
        finance, or business analytics &mdash; I&apos;d love to chat and learn
        more about your work.
      </p>
    </main>
  );
}
