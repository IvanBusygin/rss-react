/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import styles from './mainPage.module.scss';
import Card from '../../UI/Card/Card';

import SearchBar from '../../components/SearchBar/SearchBar';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchArticle, setSearchResults } from '../../redux/slices/searchSlice';

function MainPage() {
  const dispatch = useAppDispatch();
  const { searchValue, searchResults, searchLoading } = useAppSelector(
    (state) => state.searchState,
  );

  const handlerSendRequest = useCallback(() => {
    if (searchValue.trim().length !== 0) {
      dispatch(fetchArticle(searchValue));
    }
  }, [searchValue]);

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
      {searchLoading ? (
        <Card className={styles.loading}>Loading...</Card>
      ) : (
        items && <ArticlesList articles={items} />
      )}
      {items?.length === 0 && !searchLoading && <Card className={styles.loading}>No results</Card>}
    </>
  );
}

export default MainPage;
