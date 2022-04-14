import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ProductResponse } from "../../types";
import { getProducts } from "./thunk";

interface InitProduct {
  product: Array<ProductResponse>;
  loading: boolean;
}

const initialState: InitProduct = {
  product: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Array<ProductResponse>>) => {
          return {
            ...state,
            product: action.payload,
            loading: false,
          };
        }
      )
      .addCase(getProducts.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })
      .addCase(getProducts.rejected, (state) => {
        return state
      })
  },
});

export const productSelector = (state: RootState) => state.product;

export const listProductsSelector = createSelector(
  productSelector,
  (product) => {
    return product;
  }
);

export default productSlice.reducer;
