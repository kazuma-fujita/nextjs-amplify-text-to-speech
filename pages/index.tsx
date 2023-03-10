import Head from "next/head";
import { TextToSpeechForm } from "../src/components/text-to-speech-form";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speech It!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Speech it!</h1>
        <TextToSpeechForm />
      </main>

      <footer className={styles.footer}>Powered by ZUMA</footer>
    </div>
  );
}
