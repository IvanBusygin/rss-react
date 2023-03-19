import { Component } from 'react';
import styles from './bookCard.module.scss';
import IBook from '../../types/IBooks';

interface IBookCard {
  book: IBook;
}

class BookCard extends Component<IBookCard> {
  render() {
    const { book } = this.props;

    const imgLang = book.language === 'USA' ? 'us' : 'gb';

    return (
      <article className={styles.card}>
        <img
          className={styles.cardCover}
          src={`images-books/${book.cover}.jpg`}
          alt={book.title}
        />
        <div className={styles.cardInfo}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <div className={styles.cardLevel}>
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
          <div className={styles.cardDetails}>
            <p>Unique words: {book.unique}</p>
            <img
              src={`images-books/${imgLang}.png`}
              alt="language"
            />
            <p>Total words: {book.total}</p>
          </div>
        </div>
      </article>
    );
  }
}

export default BookCard;
