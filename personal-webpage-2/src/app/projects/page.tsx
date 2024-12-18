import styles from './page.module.css';
import ProjectListItem from '@/components/ProjectListItem/ProjectListItem';
import ProjectList from '@/components/ProjectList/ProjectList';
import { fetchMyRepos } from '@/api/github-api'



export default async function Projects() {

  const repos = await fetchMyRepos()

  return (

    <main>

      <div className={ styles.projectsBox + " roboto-regular"}>

        <h1> Projects </h1>

        <p> Here is a list of projects i have been working on, for a full view of my GitHub please visit </p>

        <a href={process.env.GITHUB_USER_LINK} target="_blank" rel="noopener noreferrer">My GitHub</a>

        <ProjectList>

          {

            repos.map((repo) => (

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

        </ProjectList>

      </div>

    </main>

  );

}