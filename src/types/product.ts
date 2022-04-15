import React from "react";

export interface ProductResponse {
    id: React.Key;
    product_name: string;
    date: number;
    piece:number;
    image: string;
    title: string;
}
export interface BillsResponse {
    id: React.Key;
    product_name: string;
    piece:number;
    number: number;
}
