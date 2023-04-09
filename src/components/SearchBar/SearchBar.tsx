import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styles from './searchBar.module.scss';
import Button from '../../UI/Button/Button';

interface ISearchBar {
  onSearch: () => void;
  setSearchValue: (value: string) => void;
}

function SearchBar({ onSearch, setSearchValue }: ISearchBar) {
  const storageKey = 'books-searchBarValue';
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem(storageKey) || '');
  const searchInput = useRef('');

  useEffect(() => {
    searchInput.current = inputValue;
    setSearchValue(inputValue);
  }, [inputValue]);

  const saveToLocalStorage = () => {
    localStorage.setItem(storageKey, searchInput.current);
  };

  useEffect(() => {
    return () => {
      saveToLocalStorage();
    };
  }, []);

  const handlerButton = () => {
    onSearch();
    saveToLocalStorage();
  };

  const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveToLocalStorage();
      onSearch();
    }
  };

  return (
    <div className={styles.block}>
      <label
        className={styles.label}
        htmlFor="input-field"
      >
        Enter a world:
        <input
          className={styles.input}
          type="text"
          id="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleInputKeyPress}
          data-testid="search-input"
        />
      </label>
      <Button
        className={styles.btn}
        onClick={handlerButton}
        dataTestId="search-btn"
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
