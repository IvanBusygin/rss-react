import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import MainPage from './MainPage';

describe('Fetch Articles', () => {
  it('should render main page', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );
    expect(screen.getByText(/Search news articles/i)).toBeInTheDocument();
  });

  it('should fetch main page', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );

    const inputValue = 'apple';
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    const searchButton = screen.getByTestId('search-btn') as HTMLButtonElement;

    fireEvent.change(searchInput, { target: { value: inputValue } });
    fireEvent.click(searchButton);

    await waitFor(() => screen.getByText('Jeff Dunn'));
  });
});
