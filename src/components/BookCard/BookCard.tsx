import { Component } from 'react';
import styles from './bookCard.module.scss';
import IBook from '../../types/IBooks';

interface IBookCard {
  book: IBook;
}

// eslint-disable-next-line react/prefer-stateless-function
class BookCard extends Component<IBookCard> {
  render() {
    const { book } = this.props;

    const imgLang = book.language === 'USA' ? 'us' : 'gb';

    return (
      <div className={styles.card}>
        <img
          src={`images-books/${book.cover}.jpg`}
          alt={book.title}
        />
        <div className={styles.cardInfo}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <div className={styles.cardLang}>
            <p>{book.level}</p>
          </div>
          <p className={styles.cardDescription}>{book.description}</p>
          <div className={styles.cardMeta}>
            <p>{book.likes} Likes</p>
            <p>{book.downloads} Downloads</p>
            <p>{book.views} Views</p>
          </div>
          <div className={styles.cardTags}>
            {book.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.cardLevel}>
            <img
              src={`images-books/${imgLang}.png`}
              alt="language"
            />
          </div>
          <div className={styles.cardUnique}>
            <p>Unique words: {book.unique}</p>
            <p>Total words: {book.total}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
