import styles from './bookslist.module.scss';
import BookCard from '../BookCard/BookCard';
import IBook from '../../types/ITypes';

interface IBookList {
  books: IBook[];
}

function BooksList(props: IBookList) {
  const { books } = props;
  return (
    <div className={styles.booksList}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}

export default BooksList;
