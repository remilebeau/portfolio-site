const githubAPIKey = process.env.GITHUB_API_KEY;

export default async function getRepos() {
  const res = await fetch("https://api.github.com/users/remilebeau/repos", {
    headers: {
      Authorization: `Bearer ${githubAPIKey}`,
    },
    next: { revalidate: 10 },
  });
  const repos = await res.json();
  return repos;
}
