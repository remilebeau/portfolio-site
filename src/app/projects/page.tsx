import React from "react";
import RepoCard from "../components/RepoCard";
import getRepos from "../lib/getRepos";

export default async function ProjectPage() {
  const repos = await getRepos();
  return (
    <main className="main">
      <h1 className="main__h1">Projects</h1>
      {repos.map((repo: any) => (
        <RepoCard key={repo.name} repo={repo.name} />
      ))}
    </main>
  );
}
