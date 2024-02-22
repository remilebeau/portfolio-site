import Link from "next/link";
import getRepoDescription from "../lib/getRepoDescription";

export default async function RepoCard({ repo }: { repo: string }) {
  const repoDescription = await getRepoDescription(repo);

  return (
    <section className="repo-card">
      <Link href={`https://github.com/${repo}`}>
        <h2 className="repo-card__h2">{repo}</h2>
      </Link>
      <p className="repo-card__p">{repoDescription}</p>
    </section>
  );
}
