import { AxiosPromise, AxiosRequestConfig } from "axios";
import { instance } from "../utils";
import {env} from '../config';
import {ProductResponse} from '../types';

export const getProductService = (): AxiosPromise<ProductResponse[]> => {
    const request: AxiosRequestConfig = {
        method: 'GET',
        url: `${env.path_product}/products`,
    };
    return instance(request);
};

export const postProductService = (): AxiosPromise<ProductResponse> => {
    const request: AxiosRequestConfig = {
        method: 'POST',
        url: `${env.path_product}/products`,
    };
    return instance(request);
};

export const putProductService = (id=1): AxiosPromise<ProductResponse> => {
    const request: AxiosRequestConfig = {
        method: 'PUT',
        url: `${env.path_product}/products/${id}`,
    };
    return instance(request);
};

export const deleteProductService = (id=1): AxiosPromise<ProductResponse> => {
    const request: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${env.path_product}/products/${id}`,
    };
    return instance(request);
};
