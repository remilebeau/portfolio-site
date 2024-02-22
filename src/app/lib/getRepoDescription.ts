export default async function getRepoDescription(repo: string) {
  const res = await fetch(`https://api.github.com/repos/remilebeau/${repo}`, {
    next: { revalidate: 10 },
  });
  const { description } = await res.json();
  return description;
}
