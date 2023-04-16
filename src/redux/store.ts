import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    searchState: searchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
