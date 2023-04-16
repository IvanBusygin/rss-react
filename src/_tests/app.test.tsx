import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

describe('App', () => {
  test('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/Main']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText('Search news articles')).toBeInTheDocument();
  });

  test('renders about page', () => {
    render(
      <MemoryRouter initialEntries={['/About']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText('Ivan Busygin')).toBeInTheDocument();
  });

  test('renders not found page', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
