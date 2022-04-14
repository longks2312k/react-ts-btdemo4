import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductService } from "../../services";
import { ProductResponse } from "../../types";

export const getProducts = createAsyncThunk<ProductResponse[], boolean>('products/getProducts', async () => {
    const response = await getProductService();
    // console.log('response', response);
    return response.data;
});
