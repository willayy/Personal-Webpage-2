import styles from './page.module.css';
import skillsDataRaw from '@/data/skills.json';

export default async function Home() {

  const topicStyle = 'topic'
  const secondaryTopicStyle = 'secondary-topic'
  const topicList = 'topicList'

  const introductionText: string = skillsDataRaw.introduction
  const skillSummaryText: string = skillsDataRaw.skillSummary
  const primarySkills: string[] = skillsDataRaw.primarySkills
  const secondarySkills: string[] = skillsDataRaw.secondarySkills

  return (

    <main>

      <div className={styles.aboutTextbox + " roboto-regular"}>

        <h1> William Norland </h1>

        <p> {introductionText} </p>

        <h2> Skills </h2>

        <p> {skillSummaryText} </p>
        
        <ul className={topicList}>
          {primarySkills?.map((skill) => (
            <li key={skill} className={topicStyle}>{skill}</li>
          ))}
        </ul>
        
        <h3> Secondary Skills </h3>

        <ul className={topicList}>
          {secondarySkills?.map((skill) => (
            <li key={skill} className={secondaryTopicStyle}>{skill}</li>
          ))}
        </ul>

      </div>

    </main>

  );
}
