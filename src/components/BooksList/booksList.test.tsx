import { render, screen } from '@testing-library/react';
import BooksList from './BooksList';
import books from '../../assets/mocks/books';

describe('BooksList component', () => {
  it('should render all the books in the list', () => {
    render(<BooksList books={books} />);
    const bookCards = screen.getAllByRole('article');
    expect(bookCards).toHaveLength(books.length);
  });
});
