import styles from './ProjectListItem.module.css';

// Define the props interface
interface ProjectListItemProps {
    title: string;
    about: string;
    link: string;
}

export default function ProjectListItem({ title, about, link }: ProjectListItemProps) {

    return (

        <li className={styles.listItem}>

            <h2>{title}</h2>

            <a href={link}>Link to project</a>

            <p>{about}</p>

        </li>

    );

}