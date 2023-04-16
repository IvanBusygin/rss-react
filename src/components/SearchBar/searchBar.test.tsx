import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import store from '../../redux/store';

describe('SearchBar', () => {
  const onSearchMock = vi.fn();

  it('renders the input element', () => {
    render(
      <Provider store={store}>
        <SearchBar onSearch={onSearchMock} />
      </Provider>,
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(
      <Provider store={store}>
        <SearchBar onSearch={onSearchMock} />
      </Provider>,
    );
    const inputElement = screen.getByRole('textbox');
    const inputValue = 'test input value';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement).toHaveValue(inputValue);
  });
});
