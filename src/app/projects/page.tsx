import ProjectsClient from './ProjectsClient';
import { fetchMyRepos, Repo } from '@/api/github-api';

export default async function Projects() {
  const data: Repo[] = await fetchMyRepos();
  const githubUserLink = process.env.GITHUB_USER_LINK || '';

  return <ProjectsClient data={data} githubUserLink={githubUserLink} />;
}