import { render, screen } from '@testing-library/react';
import BookCard from './BookCard';

import books from '../../assets/mocks/books';

const book1 = books[0];

describe('BookCard component', () => {
  it('renders book information', () => {
    render(<BookCard book={book1} />);

    expect(screen.getByAltText(book1.title)).toBeInTheDocument();
    expect(screen.getByText(book1.title)).toBeInTheDocument();
    expect(screen.getByText(book1.author)).toBeInTheDocument();
    expect(screen.getByText(book1.level)).toBeInTheDocument();
    expect(screen.getByText(book1.description)).toBeInTheDocument();
    expect(screen.getByText(`${book1.likes} Likes`)).toBeInTheDocument();
    expect(screen.getByText(`${book1.downloads} Downloads`)).toBeInTheDocument();
    expect(screen.getByText(`${book1.views} Views`)).toBeInTheDocument();
    book1.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
    expect(screen.getByAltText('language')).toBeInTheDocument();
    expect(screen.getByText(`Unique words: ${book1.unique}`)).toBeInTheDocument();
    expect(screen.getByText(`Total words: ${book1.total}`)).toBeInTheDocument();
  });
});
