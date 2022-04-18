import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { BillsResponse } from "../../types";
import { postBillProduct } from "./thunk";


interface InitBills {
    bills: Array<BillsResponse>;
    loading: boolean;
  }
  
  const initialState: InitBills = {
    bills: [],
    loading: false,
  };

  export const billsSlice = createSlice({
    name: "bills",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(
            postBillProduct.fulfilled,
          (state, action: PayloadAction<Array<BillsResponse>>) => {
            return {
              ...state,
              bills: action.payload,
              loading: false,
            };
          }
        )
        .addCase(postBillProduct.pending, (state) => {
          return {
            ...state,
            loading: true,
          }
        })
        .addCase(postBillProduct.rejected, (state) => {
          return state
        })
        .addCase
    },
  });
  
  export const billsSelector = (state: RootState) => state.bills;
  
  export const listBillsSelector = createSelector(
    billsSelector,
    (bills) => {
      return bills;
    }
  );
  
  export default billsSlice.reducer;
  