import { createAsyncThunk } from "@reduxjs/toolkit";
import { postBills, getProductService, getBills } from "../../services";
import { BillsResponse, ProductResponse } from "../../types";

export const getProducts = createAsyncThunk<ProductResponse[], boolean>('products/getProducts', async () => {
    const response = await getProductService();
    // console.log('response', response);
    return response.data;
});

export const postBillProduct = createAsyncThunk<BillsResponse[], BillsResponse>('products/addProductToBills', async (params) => {
    const response = await postBills(params);
    return response.data;
});

export const getBillProduct = createAsyncThunk<BillsResponse[], boolean>('products/getBills', async () => {
    const response = await getBills();
    // console.log('response', response);
    return response.data;
});