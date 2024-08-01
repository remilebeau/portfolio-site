import { Metadata } from "next";
import ProjectCards from "@/components/ProjectCards";

export const metadata: Metadata = {
  title: "Projects | Wes S",
  description: "The projects page of Wes S",
};

export default function ProjectPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h2 className="text-center text-5xl font-bold text-primary">Projects</h2>
      <p className="text-3xl">Drag or swipe to spin the carousel.</p>
      <p className="text-3xl">
        Because the APIs of the full-stack projects are hosted on the free tier
        of{" "}
        <a
          className="font-bold text-primary hover:underline"
          href="https://render.com"
        >
          Render
        </a>
        , please allow up to 60 seconds for the first server request.
      </p>
      <ProjectCards />
    </main>
  );
}
