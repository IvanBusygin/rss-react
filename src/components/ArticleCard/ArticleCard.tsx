import { useState } from 'react';
import styles from './ArticleCard.module.scss';
import { IArticle } from '../../types/INews';
import Button from '../../UI/Button/Button';
import ArticlesModal from '../ArticleModal/ArticlesModal';
import ArticleCardDetails from './ArticleCardDetails';

interface Props {
  article: IArticle;
}

function ArticleCard({ article }: Props) {
  const { author, title, urlToImage, url } = article;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className={styles.card}>
        <img
          className={styles.cardCover}
          src={urlToImage}
          alt={title}
        />
        <div className={styles.cardInfo}>
          <h2>{title}</h2>
          <p>{author}</p>
          <div className={styles.btns}>
            <Button onClick={() => setShowModal(true)}>Details</Button>
            <Button onClick={() => window.open(url, '_blank')}>Go to</Button>
          </div>
        </div>
      </article>
      <ArticlesModal
        isOpen={showModal}
        onClose={setShowModal}
      >
        <ArticleCardDetails article={article} />
      </ArticlesModal>
    </>
  );
}

export default ArticleCard;
