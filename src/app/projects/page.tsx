import { Metadata } from "next";
import ProjectCards from "@/components/ProjectCards";

export const metadata: Metadata = {
  title: "Projects | Wes S",
  description: "The projects page of Wes S",
};

export default function ProjectPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-4">
      <h2 className="rounded-xl bg-primary p-2 text-center text-5xl font-bold text-secondary">
        Projects
      </h2>
      <p className="text-3xl">
        The full-stack projects are hosted on the free tier of{" "}
        <a
          className="font-bold text-primary hover:underline"
          href="https://render.com"
        >
          Render
        </a>
        . Please allow up to 60 seconds for the first server request.
      </p>
      <ProjectCards />
    </main>
  );
}
