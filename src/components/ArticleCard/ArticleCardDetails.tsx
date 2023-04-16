import styles from './ArticleCard.module.scss';
import { IArticle } from '../../types/INews';
import Button from '../../UI/Button/Button';

interface Props {
  article: IArticle;
}

function ArticleCardDetails({ article }: Props) {
  const { author, title, description, urlToImage, url, publishedAt, source } = article;

  return (
    <article className={styles.cardModal}>
      <img
        className={styles.cardCoverModal}
        src={urlToImage}
        alt={title}
      />
      <div className={styles.cardInfo}>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className={styles.cardLevel}>
          <p>{description}</p>
        </div>
        <Button
          className={styles.btn}
          onClick={() => window.open(url, '_blank')}
        >
          Go to source
        </Button>
        <div className={styles.cardDetails}>
          <p>Source: {source.name}</p>
          <p>Published at: {publishedAt.slice(0, -10)}</p>
        </div>
      </div>
    </article>
  );
}

export default ArticleCardDetails;
