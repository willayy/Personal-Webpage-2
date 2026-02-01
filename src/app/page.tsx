import { Skill } from '@/utils/types';
import styles from './page.module.css';
import skillsDataRaw from '@/data/skills.json';

export default async function Home() {

  const topicStyle = 'topic'

  const topicList = 'topicList'

  const skillsData = skillsDataRaw as Skill[];

  return (

    <main>

      <div className={styles.aboutTextbox + " roboto-regular"}>

        <h1> William Norland </h1>

        <p> Curious software engineering student at Chalmers institute of technology with a great interest in programming, computer science, data science and artificial intelligence. </p>

        <h2> Skills </h2>

        <ul className={topicList}>
          {skillsData?.map((skillPoint) => (
            <li key={skillPoint.skill} className={topicStyle}>{skillPoint.skill}</li>
          ))}
        </ul>

      </div>

    </main>

  );
}
