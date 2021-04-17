import Head from 'next/head';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>News App | Home</title>
      </Head>
      <div className="page-container">
        <div className={styles.main}>
          <h1>News App</h1>
          <h3>Poorly curated news site</h3>
          <h6>why does this page exists tho</h6>
        </div>
      </div>
    </>
  );
}
