import {ObjectId} from "mongoose";
import { ProducCollection, ProductSize, ProductStatus } from "../enums/product.enum";

export interface Product{
    _id: ObjectId;
    productStatus: ProductStatus;
    productCollection: ProducCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}

export interface ProductInquiry{
    order: string;
    page: number;
    limit: number;
    productCollection?: ProducCollection;
    search?: string;
}

export interface ProductInput{
    productStatus?: ProductStatus;
    productCollection: ProducCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc: string;
    productImages?: string[];
    productViews?: number;
}

export interface ProductUpdateInput{
    _id: ObjectId;
    productStatus?: ProductStatus;
    productCollection?: ProducCollection;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}