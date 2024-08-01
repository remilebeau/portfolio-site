import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4">
      <h1 className="bg-primary text-center text-5xl font-bold text-secondary">
        Hello and welcome. I&apos;m Wes.
      </h1>
      <p className="text-3xl">
        A full-stack web developer with a background in finance and business
        analytics.
      </p>
      <hr className="mx-auto my-8 w-1/2 border-4 border-primary" />
      <h2 className="bg-primary text-center text-4xl font-bold text-secondary">
        My Business Background
      </h2>
      <h3 className="text-center text-3xl font-bold text-primary sm:text-left">
        Finance
      </h3>
      <ul className="list-inside list-disc gap-4 text-2xl ">
        <li>Wealth management</li>
        <li>Financial planning</li>
        <li>Risk management</li>
      </ul>
      <h3 className="text-center text-3xl font-bold text-primary sm:text-left">
        Business Analytics
      </h3>
      <ul className="list-inside list-disc text-2xl sm:columns-2">
        <li>Data visualization</li>
        <li>Predictive modeling</li>
        <li>Data mining</li>
        <li>Simulation</li>
        <li>Optimization</li>
      </ul>
      <hr className="mx-auto my-8 w-1/2 border-4 border-primary" />
      <h2 className="bg-primary text-center text-4xl font-bold text-secondary">
        About
      </h2>
      <AboutCards />
      <hr className="mx-auto my-8 w-1/2 border-4 border-primary" />
      <h2 className="bg-primary text-center text-4xl font-bold text-secondary">
        Favorites
      </h2>
      <FavoriteCards />
    </main>
  );
}
