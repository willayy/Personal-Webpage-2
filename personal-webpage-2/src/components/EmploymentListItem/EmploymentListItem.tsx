import styles from './EmploymentListItem.module.css';
import '@/app/globals.css'

// Define the props interface
interface EmploymentListItemProps {
    position: string;
    organization: string;
    startDate: string;
    endDate: string;
    description: string;
}

const listItem = 'listItem'

export default function ProjectListItem({position, organization, startDate, endDate, description }: EmploymentListItemProps, key: number) {

    return (

        <li key={key} className={listItem}>

            <h2>{position}</h2>

            <p className={styles.organization}> {organization} </p>

            <p>{description}</p>

            <p><strong>From-To:</strong> {startDate} - {endDate} </p>

        </li>

    );

}