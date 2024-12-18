import styles from './ProjectListItem.module.css';
import { formatDate } from '@/utils/dates';

// Define the props interface
interface ProjectListItemProps {
    title: string;
    description: string;
    link: string;
    topics: string[];
    created: string;
    lastUpdated: string;
}

export default function ProjectListItem({title, description, link, topics, created, lastUpdated }: ProjectListItemProps,key: number) {

    return (

        <li key={key} className={styles.listItem}>

            <h2>{title}</h2>

            <a href={link} target="_blank" rel="noopener noreferrer">Link to project</a>

            <p>{description}</p>

            <p><strong>Created:</strong> {formatDate(created)}</p>

            <p><strong>Last updated:</strong> {formatDate(lastUpdated)}</p>

            <p><strong>Topics:</strong></p>

            <ul className={styles.topicList}>
                {topics.map((topic) => (
                    <li key={topic} className={styles.topic}>{topic}</li>
                ))}
            </ul>
        
        </li>

    );

}