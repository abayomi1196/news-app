import Link from 'next/link';
import styles from 'styles/Toolbar.module.css';

const Toolbar = () => {
  return (
    <div className={styles.main}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/feed/1">
        <a>Feed</a>
      </Link>
      <Link href="/editor">
        <a>Editor</a>
      </Link>
      <a
        href="https://twitter.com/SirKamara"
        target="_blank"
        rel="noreferrer noopener"
      >
        Twitter
      </a>
    </div>
  );
};

export default Toolbar;
