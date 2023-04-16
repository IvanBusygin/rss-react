import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IDataArticle } from '../../types/INews';
import { IUser } from '../../types/ITypes';
import { makeUrl } from '../../utils/utils';
import { Endpoint } from '../../utils/constants';

interface ISearchState {
  searchValue: string;
  searchResults: IDataArticle | null;
  searchLoading: boolean;
  searchError: string;
  formResults: IUser[];
}
const initialState: ISearchState = {
  searchValue: '',
  searchResults: null,
  searchLoading: false,
  searchError: '',
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.searchLoading = false;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.searchError = action.payload || '';
        state.searchLoading = false;
      });
  },
});

export const fetchArticle = createAsyncThunk<IDataArticle, string, { rejectValue: string }>(
  'searchState/article',
  async (query, { rejectWithValue }) => {
    const response = await fetch(makeUrl(Endpoint.EVERYTHING, query), { method: 'GET' });
    if (response.ok) {
      return response.json();
    }
    const res = await response.json();
    return rejectWithValue(res.message);
  },
);

export const { setSearchValue, setSearchResults, setFormResults } = searchText.actions;

export default searchText.reducer;
