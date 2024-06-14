import { Metadata } from "next";
import AboutCards from "@/components/AboutCards";
import FavoriteCards from "@/components/FavoriteCards";

export const metadata: Metadata = {
  title: "About | Wes S",
  description: "The about page of Wes S",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-4">
      <h1 className="text-center text-5xl font-bold">About</h1>
      <section className="gap-4 sm:grid sm:grid-cols-2">
        <AboutCards />
      </section>
      <h1 className="text-center text-5xl font-bold">Favorites</h1>
      <section className="gap-4 sm:grid sm:grid-cols-2">
        <FavoriteCards />
      </section>
    </main>
  );
}
