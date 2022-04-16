import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface PaymentState {
  id: number;
  image: string;
  name: string;
  piece: number;
  count: number;
}

const initialState: Array<PaymentState> = [
  {
    id: 1,
    name: 'long',
    piece: 10000,
    count: 1,
    image: 'https://vaithuhayho.com/wp-content/uploads/2021/03/anh-gai-dep-61.jpg'
  },
  {
    id: 2,
    name: 'long',
    piece: 10000,
    count: 2,
    image: 'https://vaithuhayho.com/wp-content/uploads/2021/03/anh-gai-dep-61.jpg'
  },
  {
    id: 3,
    name: 'long',
    piece: 10000,
    count: 1,
    image: 'https://vaithuhayho.com/wp-content/uploads/2021/03/anh-gai-dep-61.jpg'
  },
]

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPayment: (state, action) => {
      state.push(action.payload);
    },
    remotePayment: (state, action) => {
      const newItem =  state.findIndex((item) => item.id === action.payload);
      state.splice(newItem,1)
    },
    upNumberPayment: (state, action) => {
      return state.map(state => state.id === action.payload
        ? { ...state, number: state.count + 1}
        : state
      )
    },
    reduceNumberPayment: (state, action) => {
      return state.map(state => state.id === action.payload
        ? { ...state, number: state.count !== 1 ? state.count - 1 : 1}
        : state
      )
    },
    remoteAll: () => [],
  },
  // extraReducers:
});

export const { addPayment, remotePayment, upNumberPayment, reduceNumberPayment, remoteAll } = paymentSlice.actions;

export const selectPayment = (state: RootState) => state.payment;

export const getPaymentSelector = createSelector(
  selectPayment,
  (payment) => {
    return payment
  }
);


export default paymentSlice.reducer;
