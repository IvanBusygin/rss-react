import React, { KeyboardEvent } from 'react';
import styles from './searchBar.module.scss';
import Button from '../../UI/Button/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setSearchValue } from '../../redux/slices/searchSlice';

interface ISearchBar {
  onSearch: () => void;
}

function SearchBar({ onSearch }: ISearchBar) {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.searchState);

  const handlerSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handlerButton = () => {
    onSearch();
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
          value={searchValue}
          onChange={handlerSearchValue}
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
