import { AxiosPromise, AxiosRequestConfig } from "axios";
import { instance } from "../utils";
import {env} from '../config';
import {BillsResponse, ProductResponse} from '../types';

export const getProductService = (): AxiosPromise<ProductResponse[]> => {
    const request: AxiosRequestConfig = {
        method: 'GET',
        url: `${env.path_product}/products`,
    };
    return instance(request);
};


export const postBills = (data: BillsResponse): AxiosPromise<BillsResponse[]> => {
    const request: AxiosRequestConfig = {
        method: 'POST',
        url: `${env.path_product}/bills`,
        data,
    };
    return instance(request);
};
