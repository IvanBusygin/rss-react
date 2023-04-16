import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDataArticle } from '../../types/INews';
import { IUser } from '../../types/ITypes';

interface ISearchState {
  searchValue: string;
  searchResults: IDataArticle | null;
  formResults: IUser[];
}
const initialState: ISearchState = {
  searchValue: '',
  searchResults: null,
  formResults: [],
};

const searchText = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSearchResults(state, action: PayloadAction<IDataArticle | null>) {
      state.searchResults = action.payload;
    },
    setFormResults(state, action: PayloadAction<IUser>) {
      const newCard = action.payload;
      state.formResults.push(newCard);
    },
  },
});

export const { setSearchValue, setSearchResults, setFormResults } = searchText.actions;

export default searchText.reducer;
