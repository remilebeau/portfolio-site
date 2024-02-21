export default async function getRepos() {
  const res = await fetch("https://api.github.com/users/remilebeau/repos");
  const repos = await res.json();
  return repos;
}
