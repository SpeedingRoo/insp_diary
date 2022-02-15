import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inspection Diary</title>
        <meta
          name="inspection diary"
          content="help logging and sorting you inspection plans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Inspection Diary</h1>
        </header>
        <main className={styles.main}>
          <div className={styles.grid}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>

        <footer className={styles.footer}>
          work of &nbsp;<span> Robert Wang</span>&nbsp; -{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
