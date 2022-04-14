import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pictureReducer from '../components/container/Picture/pictureSlice';
import searchReducer from '../components/container/Picture/searchSlice';
import productReducer from '../components/PaymentTable/slice'

export const store = configureStore({
  reducer: {
    picture: pictureReducer,
    search: searchReducer,
    product: productReducer,
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
