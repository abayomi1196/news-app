import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Editor.module.css';

const Editor = ({ editor }) => {
  return (
    <>
      <Head>
        <title>News App | Editor</title>
      </Head>
      <div className="page-container">
        <div className={styles.main}>
          <h2>Editor</h2>

          <div className={styles.editor}>
            <h1>{`${editor.name.first} ${editor.name.last}`}</h1>
            <h3>{`${editor.location.city}, ${editor.location.country}`}</h3>
            <Image
              src={editor.picture.large}
              alt="news editor"
              width={200}
              height={200}
            />
            <p>{editor.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const response = await fetch('https://randomuser.me/api/');

  const data = await response.json();
  const editor = data.results[0];

  return {
    props: { editor },
  };
};

export default Editor;
