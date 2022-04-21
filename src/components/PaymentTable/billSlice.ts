import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { BillsResponse } from "../../types";
import { postBillProduct } from "./thunk";


interface InitBills {
    bills: BillsResponse;
  }
  
  const initialState: InitBills = {
    bills: {
      customerName: '',
      address: '',
      totalPiece: 0,
      bill: [],
    },
  };

  export const billsSlice = createSlice({
    name: "bills",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(
            postBillProduct.fulfilled,
          (state, action: any) => {
            return {
              ...state,
              bills: action.payload,
            };
          }
        )
    },
  });
  
  export default billsSlice.reducer;
  