import React from "react";

export interface ProductResponse {
    id: React.Key;
    product_name: string;
    date: DateConstructor;
    image: string;
    title: string;
}
