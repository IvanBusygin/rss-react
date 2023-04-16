import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDataArticle } from '../../types/INews';

interface ISearchState {
  searchValue: string;
  searchResults: IDataArticle | null;
}
const initialState: ISearchState = {
  searchValue: '',
  searchResults: null,
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
  },
});

export const { setSearchValue, setSearchResults } = searchText.actions;

export default searchText.reducer;
