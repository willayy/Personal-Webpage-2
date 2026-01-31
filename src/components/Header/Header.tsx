import styles from './Header.module.css';
import { FaUser, FaProjectDiagram, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Header() {

    const homePage = process.env.HOME_PAGE

    return (

        <header className={styles.header}>

            <nav className={styles.nav}>

                <ul className={styles.headerUl + " roboto-bold"}>

                    <li className={styles.listItem}>

                        <a href={homePage} className={styles.link}>
                            <FaUser className={styles.icon} />
                            <span>About</span>
                        </a>

                    </li>

                    <li className={styles.listItem}>

                        <a href="projects" className={styles.link}>
                            <FaProjectDiagram className={styles.icon} />
                            <span>Projects</span>
                        </a>

                    </li>

                    <li className={styles.listItem}>

                        <a href="education" className={styles.link}>
                            <FaGraduationCap className={styles.icon} />
                            <span>Education</span>
                        </a>

                    </li>

                    <li className={styles.listItem}>

                        <a href="mycareer" className={styles.link}>
                            <FaBriefcase className={styles.icon} />
                            <span>Career</span>
                        </a>

                    </li>

                    <li className={styles.listItem}>

                        <a href="contact" className={styles.link}>
                            <FaEnvelope className={styles.icon} />
                            <span>Contact</span>
                        </a>

                    </li>

                </ul>

            </nav>

        </header>

    );

}