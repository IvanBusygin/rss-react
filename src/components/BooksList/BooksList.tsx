import { Component } from 'react';

import styles from './bookslist.module.scss';
import BookCard from '../BookCard/BookCard';
import IBook from '../../types/IBooks';

interface IBookList {
  books: IBook[];
}

// eslint-disable-next-line react/prefer-stateless-function
class BooksList extends Component<IBookList> {
  render() {
    const { books } = this.props;
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
}

export default BooksList;
