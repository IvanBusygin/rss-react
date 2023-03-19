import { Component } from 'react';
import styles from './main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import MainContent from '../../UI/MainContent/MainContent';
import Card from '../../UI/Card/Card';
import BooksList from '../../components/BooksList/BooksList';

import books from '../../assets/mocks/books';

export default class Main extends Component {
  render() {
    return (
      <MainContent>
        <div className={styles.title}>Adapted books in English</div>
        <Card className={styles.searchBar}>
          <SearchBar />
        </Card>
        <BooksList books={books} />
      </MainContent>
    );
  }
}
