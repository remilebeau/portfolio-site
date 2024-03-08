import Link from "next/link";
import getRepoDescription from "../lib/getRepoDescription";
import getRepoHost from "../lib/getRepoHost";

export default async function RepoCard({ repo }: { repo: string }) {
  const repoDescription = await getRepoDescription(repo);
  const repoHost = getRepoHost(repo);

  return (
    <section>
      <Link href={`https://github.com/${repo}`}>
        <h2>{repo}</h2>
      </Link>
      <p>{repoDescription}</p>
      <p>
        <a href={repoHost}>{repoHost}</a>
      </p>
    </section>
  );
}
