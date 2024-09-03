import ButtonWithLink from "@/components/ButtonWithLink";
import ProjectCards from "@/components/ProjectCards";
import TechnologyCards from "@/components/TechnologyCards";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4">
      {/* Hero section */}
      <section id="hero" className="flex scroll-mt-32 flex-col gap-4">
        <h1 className="text-center text-5xl font-bold">
          Hello and welcome. I&apos;m Wes.
        </h1>
        <p className="text-3xl">
          A software engineer experienced in financial planning, healthcare, and
          business analytics.
        </p>
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* Projects section */}
      <section id="projects" className="flex scroll-mt-32 flex-col gap-4">
        <h1 className="text-center text-5xl font-bold">Projects</h1>
        <p className="text-3xl">
          The full-stack projects are hosted on the free tier of{" "}
          <a
            className="font-bold text-blue-500 hover:opacity-90"
            href="https://render.com"
            rel="noreferrer"
            target="_blank"
          >
            Render
          </a>
          . Please allow up to 60 seconds for the first server request.
        </p>
        <ProjectCards />
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* Technologies section */}
      <section id="technologies" className="flex scroll-mt-32 flex-col gap-4">
        <h1 className="text-center text-5xl font-bold">Technologies</h1>
        <TechnologyCards />
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* Contact section */}
      <section
        id="contact"
        className="flex min-h-screen scroll-mt-32 flex-col gap-4"
      >
        <h1 className="text-center text-5xl font-bold">Contact</h1>
        {/* flexbox for GitHub, Email, and Resume buttons */}
        <div className="flex flex-col justify-evenly gap-4 p-4 sm:flex-row">
          <ButtonWithLink href="https://github.com/remilebeau" text="GitHub" />
          <ButtonWithLink
            href="mailto:remilebeau90@gmail.com"
            text="remilebeau90@gmail.com"
          />
          <ButtonWithLink href="/wes_s_resume.pdf" text="Resume" />
        </div>
        {/* end flexbox */}

        <h2 className="text-center text-3xl font-bold">Want To...</h2>

        <h2 className="text-3xl font-bold">Connect?</h2>
        <p className="text-2xl">
          I am always interested in meeting new people and expanding my personal
          and professional circles.
        </p>

        <h2 className="text-3xl  font-bold">Collaborate?</h2>
        <p className="text-2xl">
          I am open to discussing job opportunities in New York, Ohio, or Texas.
        </p>
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
    </main>
  );
}
