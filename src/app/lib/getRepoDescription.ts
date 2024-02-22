const githubAPIKey = process.env.GITHUB_API_KEY;

export default async function getRepoDescription(repo: string) {
  const res = await fetch(`https://api.github.com/repos/remilebeau/${repo}`, {
    headers: {
      Authorization: `Bearer ${githubAPIKey}`,
    },
    next: { revalidate: 10 },
  });
  const { description } = await res.json();
  return description;
}
