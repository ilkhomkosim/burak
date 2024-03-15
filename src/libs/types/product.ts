import {ObjectId} from "mongoose"
import { ProducCollection, ProductSize, ProductStatus } from "../enums/product.enum";

export interface Product{
    _id: ObjectId;
    productStatus: ProductStatus;
    productCollection: ProducCollection;
    productName: string;
    productPrice: number;
    productCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}

export interface ProductInput{
    productStatus?: ProductStatus;
    productCollection: ProducCollection;
    productName: string;
    productPrice: number;
    productCount: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}