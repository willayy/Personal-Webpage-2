import styles from './ProjectList.module.css';

interface ProjectListProperties {

    children: React.ReactNode

}

export default function ProjectList({ children }: ProjectListProperties) {
    
    return (

        <ol className={ styles.projectsList }>

            {children}

        </ol>

    );
}
