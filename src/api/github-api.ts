import { Octokit } from "octokit"

// Fetches github repos using access token from .env.local, this is only for a single user and not for a general search
export async function fetchMyRepos(): Promise<Repo[]> {
  try {
    const octokit = new Octokit({
      auth: process.env.ACCESS_TOKEN_GH
    })

    const endpoint: string = 'GET /users/{username}/repos'

    const response = await octokit.request(endpoint, {
      username: 'willayy',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    return structuredClone(response.data)
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    // Return empty array on error to allow static export to complete
    return [];
  }
}

export type Repo = {
  id : number,
  name: string
  description: string,
  topics: string[],
  created_at: string,
  updated_at: string,
}