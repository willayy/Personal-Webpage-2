import styles from './Footer.module.css'
import '../../app/globals.css'

export function Footer() {

    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL

    const linkedinUrl = process.env.NEXT_PUBLIC_LINEKDIN_IMAGE_URL

    return (

        <footer>

            <div className={styles.footerHstack}>

                <p className="roboto-regular copyright"> © 2024 William Norland </p>

                <a href="https://www.linkedin.com/in/william-norland-69475b263/" target="_blank" rel="noreferrer">
                    <img src={linkedinUrl} alt="LinkedIn" />
                </a>

                <a href="https://github.com/willayy" target="_blank" rel="noreferrer">
                    <img src={githubUrl} alt="Github" />
                </a>

            </div>

        </footer>

    );

}