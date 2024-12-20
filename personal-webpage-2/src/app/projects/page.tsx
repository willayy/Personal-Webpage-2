import ProjectListItem from '@/components/ProjectListItem/ProjectListItem';
import List from '@/components/List/List';
import { fetchMyRepos, Repo } from '@/api/github-api'

const listBox = 'listBox'

export default async function Projects() {

  const data: [Repo] = await fetchMyRepos()

  return (

    <main>

      <div className={ listBox + " roboto-regular"}>

        <h1> Projects </h1>

        <p> Here is a list of projects i have been working on, for a full view of my GitHub please visit </p>

        <a href={process.env.GITHUB_USER_LINK} target="_blank" rel="noopener noreferrer">My GitHub</a>

        <List>

          {

            data.map((repo) => (

                <ProjectListItem
                  title={repo.name}
                  description={repo.description}
                  link={process.env.GITHUB_USER_LINK + repo.name}
                  topics={repo.topics}
                  created={repo.created_at}
                  lastUpdated={repo.updated_at}
                  key={repo.id}
                />

              )

            )

          }

        </List>

      </div>

    </main>

  );

}