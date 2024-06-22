import { Metadata } from "next";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export const metadata: Metadata = {
  title: "Projects | Wes S",
  description: "The projects page of Wes S",
};

export default function ProjectPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h2 className="text-center text-5xl font-bold text-primary">Projects</h2>
      <p className="text-3xl">Drag or swipe to spin the carousel</p>
      <ProjectsCarousel />
    </main>
  );
}
