import ButtonWithLink from "@/components/ButtonWithLink";
import ProjectCards from "@/components/ProjectCards";
import TechnologyCards from "@/components/TechnologyCards";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4">
      {/* HERO SECTION */}
      <section id="hero" className="flex scroll-mt-32 flex-col gap-4">
        <h1 className="text-center text-5xl font-bold">
          Hello and welcome. I&apos;m Wes.
        </h1>
        <p className="text-3xl">
          A full-stack web developer with experience in finance, business
          analytics, and healthcare.
        </p>
        <p className="text-3xl">Located in Columbus, Ohio.</p>
        <section className="flex flex-col">
          <p className="text-3xl">
            Bachelor of Science in Business Administration
          </p>
          <p className="text-lg italic">The Ohio State University</p>
          <p className="text-lg italic">
            Finance Specialization, Summa Cum Laude, 2020
          </p>
        </section>
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* PROJECTS SECTION */}
      <section id="projects" className="flex scroll-mt-32 flex-col gap-4">
        <h1 className="text-center text-5xl font-bold">Projects</h1>
        <p className="text-3xl">
          The APIs for these projects are hosted on the free tier of{" "}
          <a
            className="font-bold text-blue-500 hover:opacity-90"
            href="https://render.com"
            rel="noreferrer"
            target="_blank"
          >
            Render
          </a>
          . Therefore, please allow up to 60 seconds for the first server
          request.
        </p>
        <ProjectCards />
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* TECHNOLOGIES SECTION */}
      <section id="technologies" className="flex scroll-mt-32 flex-col gap-4">
        <h1 className="text-center text-5xl font-bold">Technologies</h1>
        <TechnologyCards />
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* CONTACT SECTION */}
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
          I am open to discussing job opportunities in web development, finance,
          or business analytics located in New York, Ohio, or Texas.
        </p>
      </section>
    </main>
  );
}
