import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders the input element', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    const inputValue = 'test input value';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement).toHaveValue(inputValue);
  });

  it('saves input value to localStorage on unmount', () => {
    const spyLocalStorage = vi.spyOn(Storage.prototype, 'setItem');
    const { unmount } = render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    const inputValue = 'test input value';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement).toHaveValue(inputValue);
    unmount();
    expect(spyLocalStorage).toHaveBeenCalledWith('busygin-searchBarValue', inputValue);
    spyLocalStorage.mockRestore();
  });

  it('loads saved input value from localStorage on mount', () => {
    const savedValue = 'test saved value';
    const spyLocalStorage = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(savedValue);
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(savedValue);
    spyLocalStorage.mockRestore();
  });
});
