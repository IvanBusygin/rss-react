import styles from './mainPage.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../UI/Card/Card';
import BooksList from '../../components/BooksList/BooksList';

import books from '../../assets/mocks/books';

function MainPage() {
  return (
    <>
      <div className={styles.title}>Adapted books in English</div>
      <Card className={styles.searchBar}>
        <SearchBar />
      </Card>
      <BooksList books={books} />
    </>
  );
}

export default MainPage;
