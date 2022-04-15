import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBills, getProductService } from "../../services";
import { BillsResponse, ProductResponse } from "../../types";

export const getProducts = createAsyncThunk<ProductResponse[], boolean>('products/getProducts', async () => {
    const response = await getProductService();
    // console.log('response', response);
    return response.data;
});

export const getBillProduct = createAsyncThunk<BillsResponse[], BillsResponse>('products/addProductToBills', async (params) => {
    const response = await getBills(params);
    console.log('resp', response.data);
    return response.data;
});