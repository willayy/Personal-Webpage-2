import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {

    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL ?? "N/A"

    const linkedinUrl = process.env.NEXT_PUBLIC_LINEKDIN_IMAGE_URL ?? "N/A"

    return (

        <div className={styles.footerContainer}>

        <footer className={styles.footer}>

            <div className={styles.copyrightBox}>

                <p className={"roboto-regular"}> 2024 William Norland </p>
                
            </div>

            <div className={styles.socialsBox}>

                <a href="https://www.linkedin.com/in/william-norland-69475b263/" target="_blank" rel="noreferrer">

                    <Image className={styles.img} src={linkedinUrl} alt="LinkedIn" width={112} height={28}/>

                </a>

                <a href="https://github.com/willayy" target="_blank" rel="noreferrer">

                    <Image className={styles.img} src={githubUrl} alt="Github" width={50} height={50}/>

                </a>

            </div>
            
        </footer>

        </div>

    );

}