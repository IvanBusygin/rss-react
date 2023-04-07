import React, { useState, useEffect, useRef } from 'react';
import styles from './searchBar.module.scss';

function SearchBar() {
  const storageKey = 'books-searchBarValue';
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem(storageKey) || '');
  const searchInput = useRef('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    searchInput.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem(storageKey, searchInput.current);
    };
  }, []);

  return (
    <label
      className={styles.label}
      htmlFor="input-field"
    >
      Enter a value:
      <input
        className={styles.input}
        type="text"
        id="input-field"
        value={inputValue}
        onChange={handleChange}
      />
    </label>
  );
}

export default SearchBar;
