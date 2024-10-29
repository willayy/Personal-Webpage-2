import styles from './Footer.module.css'

export default function Footer() {

    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL

    const linkedinUrl = process.env.NEXT_PUBLIC_LINEKDIN_IMAGE_URL

    return (

        <footer className={styles.footer}>

            <div className={styles.copyrightBox}>

                <p className={"roboto-regular"}> 2024 William Norland </p>
                
            </div>

            <div className={styles.socialsBox}>

                <a href="https://www.linkedin.com/in/william-norland-69475b263/" target="_blank" rel="noreferrer">

                    <img className={styles.img} src={linkedinUrl} alt="LinkedIn" />

                </a>

                <a href="https://github.com/willayy" target="_blank" rel="noreferrer">

                    <img className={styles.img} src={githubUrl} alt="Github" />

                </a>

            </div>
            
        </footer>

    );

}