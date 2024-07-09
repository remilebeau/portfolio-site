import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4">
      <h1 className="text-center text-5xl font-bold text-primary">
        Hello and welcome. I&apos;m Wes.
      </h1>
      <p className="text-3xl">
        A full-stack web developer with a background in finance and business
        analytics.
      </p>

      <h2 className="text-center text-4xl font-bold text-primary">
        My Business Background
      </h2>
      <h3 className="text-center text-3xl font-bold text-primary sm:text-left">
        Finance
      </h3>
      <ul className="list-inside list-disc gap-4 text-2xl sm:columns-2">
        <li>Wealth management</li>
        <li>Financial planning</li>
        <li>Risk management</li>
        <li>Financial statement analysis</li>
        <li>Budget analysis</li>
      </ul>
      <h3 className="text-center text-3xl font-bold text-primary sm:text-left">
        Business Analytics
      </h3>
      <ul className="list-inside list-disc text-2xl sm:columns-2">
        <li>Demand forecasting</li>
        <li>KPI analysis</li>
        <li>Resource optimization</li>
        <li>Pareto analysis</li>
        <li>Exploratory data analysis</li>
        <li>Data-driven decision-making</li>
      </ul>

      <h2 className="text-center text-4xl font-bold text-primary">About</h2>
      <AboutCards />

      <h2 className="text-center text-4xl font-bold text-primary">Favorites</h2>
      <FavoriteCards />
    </main>
  );
}
