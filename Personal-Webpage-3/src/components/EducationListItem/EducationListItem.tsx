import styles from './EducationListItem.module.css';
import '@/app/globals.css'

// Define the props interface
interface EducationListItemProps {
    school: string;
    degree: string;
    graduation: string;
}

const listItem = 'listItem'

export default function ProjectListItem({school, degree, graduation}: Readonly<EducationListItemProps>, key: Readonly<number>) {

    return (

        <li key={key} className={listItem}>

            <h2>{school}</h2>

            <p className={styles.degree}> {degree} </p>

            <p><strong>Graduation:</strong> {graduation} </p>

        </li>

    );

}