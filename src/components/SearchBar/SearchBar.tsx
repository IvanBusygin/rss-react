import React, { useState, useEffect } from 'react';
import styles from './searchBar.module.scss';

function SearchBar() {
  const storageKey = 'books-searchBarValue';
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const savedValue = localStorage.getItem(storageKey);
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, inputValue);
  }, [inputValue]);

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
