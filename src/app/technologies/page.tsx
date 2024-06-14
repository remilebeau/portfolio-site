import { Metadata } from "next";
import TechnologyCards from "@/components/TechnologyCards";

export const metadata: Metadata = {
  title: "Technologies | Wes S",
  description: "The technologies page of Wes S",
};

export default function TechnologyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-center text-5xl font-bold">Technologies</h2>
      <section className="mx-auto flex max-w-4xl flex-col gap-4 p-4 sm:grid sm:grid-cols-3">
        <TechnologyCards />
      </section>
    </main>
  );
}
