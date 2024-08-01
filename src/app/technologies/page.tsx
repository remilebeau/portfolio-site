import { Metadata } from "next";
import TechnologyCards from "@/components/TechnologyCards";

export const metadata: Metadata = {
  title: "Technologies | Wes S",
  description: "The technologies page of Wes S",
};

export default function TechnologyPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4">
      <h2 className="rounded-xl bg-primary p-2 text-center text-5xl font-bold text-secondary">
        Technologies
      </h2>

      <TechnologyCards />
    </main>
  );
}
