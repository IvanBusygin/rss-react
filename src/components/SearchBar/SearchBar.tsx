import React, { Component } from 'react';
import styles from './searchBar.module.scss';

interface ISearchBarState {
  inputValue: string;
}

class SearchBar extends Component<object, ISearchBarState> {
  private storageKey = 'books-searchBarValue';

  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(): void {
    const savedValue = localStorage.getItem(this.storageKey);
    if (savedValue) {
      this.setState({ inputValue: savedValue });
    }
  }

  componentWillUnmount(): void {
    const { inputValue } = this.state;
    localStorage.setItem(this.storageKey, inputValue);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue } = this.state;
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
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default SearchBar;
