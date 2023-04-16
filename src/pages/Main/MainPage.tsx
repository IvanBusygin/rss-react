/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import styles from './mainPage.module.scss';
import Card from '../../UI/Card/Card';

import useFetch from '../../hooks/useFetch';
import SearchBar from '../../components/SearchBar/SearchBar';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

import { IDataArticle } from '../../types/INews';
import { Endpoint } from '../../utils/constants';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setSearchResults } from '../../redux/slices/searchSlice';

function MainPage() {
  const dispatch = useAppDispatch();
  const { searchValue, searchResults } = useAppSelector((state) => state.searchState);

  const { HTTPRequest, isLoading } = useFetch();

  const handlerSendRequest = useCallback(() => {
    if (searchValue.trim().length !== 0) {
      HTTPRequest(
        { endpoint: Endpoint.EVERYTHING, method: 'GET', query: searchValue },
        (data: IDataArticle) => {
          dispatch(setSearchResults(data));
        },
      );
    }
  }, [HTTPRequest, searchValue]);

  useEffect(() => {
    if (searchValue.trim().length === 0) dispatch(setSearchResults(null));
    if (searchResults?.articles.length === 0) {
      handlerSendRequest();
    }
  }, []);

  const items = searchResults?.articles.slice(0, 30);

  return (
    <>
      <div className={styles.title}>Search news articles</div>
      <Card className={styles.searchBar}>
        <SearchBar onSearch={handlerSendRequest} />
      </Card>
      {isLoading ? (
        <Card className={styles.loading}>Loading...</Card>
      ) : (
        items && <ArticlesList articles={items} />
      )}
      {items?.length === 0 && !isLoading && <Card className={styles.loading}>No results</Card>}
    </>
  );
}

export default MainPage;
