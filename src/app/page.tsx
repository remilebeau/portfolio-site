import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4 font-bold">
      {/* hero section */}
      <h1 className="rounded-xl bg-primary p-2 text-center text-5xl font-bold text-secondary">
        Hello and welcome. I&apos;m Wes.
      </h1>
      <p className="text-3xl">
        A full-stack web developer with a background in finance and business
        analytics.
      </p>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* business background section */}
      <h2 className="rounded-xl bg-primary p-2 text-center text-4xl font-bold text-secondary">
        My Business Background
      </h2>
      {/* container for finance and business analytics lists */}
      <section className="flex flex-col justify-evenly gap-4 sm:flex-row">
        {/* finance list */}
        <section className="flex flex-col">
          <h3 className="text-center text-3xl font-bold text-primary sm:text-left">
            Finance
          </h3>
          <ul className="text-2xl">
            <li>Financial accounting</li>
            <li>Managerial accounting</li>
            <li>Risk management</li>
            <li>Personal finance</li>
            <li>Corporate finance</li>
          </ul>
        </section>
        {/* business analytics list */}
        <section className="flex flex-col">
          <h3 className="text-center text-3xl font-bold text-primary sm:text-left">
            Business Analytics
          </h3>
          <ul className="text-2xl">
            <li>Data visualization</li>
            <li>Predictive modeling</li>
            <li>Data mining</li>
            <li>Simulation</li>
            <li>Optimization</li>
          </ul>
        </section>
      </section>
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* about section */}
      <h2 className="rounded-xl bg-primary p-2 text-center text-4xl font-bold text-secondary">
        About
      </h2>
      <AboutCards />
      <hr className="mx-auto my-8 w-1/2 rounded-xl border-4 border-primary" />
      {/* favorites section */}
      <h2 className="rounded-xl bg-primary p-2 text-center text-4xl font-bold text-secondary">
        Favorites
      </h2>
      <FavoriteCards />
    </main>
  );
}
