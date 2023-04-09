import { useState } from 'react';
import styles from './mainPage.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../UI/Card/Card';

import useFetch from '../../hooks/useFetch';
import { IDataArticle } from '../../types/INews';

import ArticlesList from '../../components/ArticlesList/ArticlesList';
import { Endpoint } from '../../utils/constants';

function MainPage() {
  const [searchValue, setSearchValue] = useState('');

  const { HTTPRequest, isLoading } = useFetch();

  const [articles, setArticles] = useState<IDataArticle>();

  const handlerSendRequest = () => {
    if (searchValue.trim().length !== 0) {
      HTTPRequest(
        {
          endpoint: Endpoint.EVERYTHING,
          method: 'GET',
          query: searchValue,
        },
        (data: IDataArticle) => {
          setArticles(data);
        },
      );
    }
  };

  const items = articles?.articles.slice(0, 30);

  return (
    <>
      <div className={styles.title}>Search news articles</div>
      <Card className={styles.searchBar}>
        <SearchBar
          onSearch={handlerSendRequest}
          setSearchValue={setSearchValue}
        />
      </Card>
      {isLoading ? (
        <Card className={styles.loading}>Loading...</Card>
      ) : (
        items && <ArticlesList articles={items} />
      )}
    </>
  );
}

export default MainPage;
