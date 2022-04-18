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
    customerName: string;
    totalPiece:number;
    bill: Array<BillsArray>;
}

export interface BillsArray {
    id: number;
    name: string;
    piece: number
    image: string;
    count: number;
}