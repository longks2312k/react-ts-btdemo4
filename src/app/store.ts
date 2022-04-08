import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pictureReducer from '../components/container/Picture/pictureSlice';
import searchReducer from '../components/container/Picture/searchSlice';

export const store = configureStore({
  reducer: {
    picture: pictureReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
