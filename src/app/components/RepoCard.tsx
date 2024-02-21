import Link from "next/link";
import getReadme from "../lib/getReadme";

export default async function RepoCard({ repo }: { repo: string }) {
  const readme = await getReadme(repo);

  return (
    <section className="repo-card">
      <Link href={`https://github.com/${repo}`}>
        <h2 className="repo-card__h2">{repo}</h2>
      </Link>
      <p className="repo-card__p">{readme}</p>
    </section>
  );
}
