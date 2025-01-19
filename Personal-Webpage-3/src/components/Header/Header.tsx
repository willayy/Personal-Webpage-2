import styles from './Header.module.css';

export default function Header() {

    const homePage = process.env.HOME_PAGE

    return (

        <header className={styles.header}>

            <nav className={styles.nav}>

                <ul className={styles.headerUl + " roboto-bold"}>

                    <li className={styles.listItem}>

                        <a href={homePage} className={styles.link}>About</a>

                    </li>

                    <li className={styles.listItem}>

                        <a href="projects" className={styles.link}>Projects</a>

                    </li>

                    <li className={styles.listItem}>

                        <a href="mycareer" className={styles.link}>My career</a>

                    </li>

                    <li className={styles.listItem}>

                        <a href="contact" className={styles.link}>Contact</a>

                    </li>

                </ul>

            </nav>

        </header>

    );

}