import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Feed.module.css';

const Feed = ({ articles, pageNumber }) => {
  return (
    <>
      <Head>
        <title>{`News App | Feed Page (${pageNumber})`}</title>
      </Head>

      <div className={styles.main}>
        {articles.map(
          (article, index) =>
            article.description && ( //check to make sure article has content
              <div key={index} className={styles.post}>
                <Link href={article.url}>
                  <a target="_blank" rel="noreferrer noopener">
                    {article.title}
                  </a>
                </Link>
                <p>{article.description}</p>
                {article.urlToImage && (
                  <img src={article.urlToImage} alt={article.title} />
                )}
              </div>
            )
        )}
      </div>
    </>
  );
};

// loading news feed dynamically from server
export const getServerSideProps = async (context) => {
  const pageNumber = context.query.slug;

  // if invalid slug....
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: { articles: [], pageNumber: 1 },
    };
  }

  // if valid slug...
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ng&pageSize=10&page=${pageNumber}&apiKey=${process.env.NEWS_KEY}`
  );

  const { articles } = await response.json();

  return {
    props: { articles, pageNumber: Number.parseInt(pageNumber) },
  };
};

export default Feed;
