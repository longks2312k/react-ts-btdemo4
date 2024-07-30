import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { BillsResponse } from "../../types";
import { getBillProduct, postBillProduct } from "./thunk";


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
    extraReducers: (builder: { addCase: (arg0: any, arg1: (state: any, action: any) => any) => { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => any): void; new(): any; }; }; }) => {
      builder
        .addCase(
            postBillProduct.fulfilled,
          (state: any, action: any) => {
            return {
              ...state,
              bills: action.payload,
            };
          }
        )
        .addCase(
          getBillProduct.fulfilled,
          (state: any, action: any) => {
            return {
              ...state,
              bills: action.payload,
            };
          }
        )
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
  