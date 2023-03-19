import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  test('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/Main']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Adapted books in English')).toBeInTheDocument();
  });

  test('renders about page', () => {
    render(
      <MemoryRouter initialEntries={['/About']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Ivan Busygin')).toBeInTheDocument();
  });

  test('renders not found page', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
