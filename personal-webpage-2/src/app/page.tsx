import styles from './page.module.css';

export default function Home() {
  return (

    <main>

      <div className={ styles.aboutTextbox + " roboto-regular"}>

        <h1> William Norland </h1>

        <p> Curious software engineering student at Chalmers institute of technology with a great interest for programming, computer science, data science and artificial intelligence. </p>

        <h2> Skills </h2>

        <p> Java, Python, JS/HTML/CSS, PostgreSQL, Swift/SwiftUI, Next.js, mathematical modelling, statistics, data science </p>

      </div>

    </main>

  );
}
