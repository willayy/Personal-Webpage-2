import styles from './page.module.css';
import ProjectListItem from '@/components/ProjectListItem/ProjectListItem';
import ProjectList from '@/components/ProjectList/ProjectList';

export default function Projects() {

    return (
  
      <main>

        <div className={ styles.projectsBox + " roboto-regular"}>

          <h1> Projects </h1>
  
          <p> Here is a list of projects i have been working on </p>

          <ProjectList>
          
            <ProjectListItem 
              title="Project 1"
              about="This is a project" 
              link="https://github.com"
            />

            <ProjectListItem 
              title="Project 2"
              about="This is a project" 
              link="https://github.com"
            />

            <ProjectListItem 
              title="Project 3"
              about="This is a project" 
              link="https://github.com"
            />

            <ProjectListItem
              title="Project 4"
              about="This is a project" 
              link="https://github.com"
            />

          </ProjectList>

        </div>
  
      </main>
  
    );
  
  }