import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainPage from './MainPage';

describe('Fetch Articles', () => {
  it('should render main page', () => {
    render(<MainPage />);
    expect(screen.getByText(/Search news articles/i)).toBeInTheDocument();
  });

  it('should fetch main page', async () => {
    render(<MainPage />);

    const inputValue = 'apple';
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    const searchButton = screen.getByTestId('search-btn') as HTMLButtonElement;

    fireEvent.change(searchInput, { target: { value: inputValue } });
    fireEvent.click(searchButton);

    await waitFor(() => screen.getByText('Jeff Dunn'));
  });
});
