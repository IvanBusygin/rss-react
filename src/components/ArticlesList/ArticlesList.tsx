/* eslint-disable react/no-array-index-key */
import styles from './articlesList.module.scss';
import { IArticle } from '../../types/INews';
import ArticleCard from '../ArticleCard/ArticleCard';

interface IProps {
  articles: IArticle[];
}

function ArticlesList(props: IProps) {
  const { articles } = props;
  return (
    <div className={styles.booksList}>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
        />
      ))}
    </div>
  );
}

export default ArticlesList;
