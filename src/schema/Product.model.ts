import mongoose, {Schema} from "mongoose";
import { 
    ProducCollection, 
    ProductSize,
    ProductStatus, 
    ProductVolume 
} from "../libs/enums/product.enum";

const productSchema = new Schema(
{
    productStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
    },

    productCollection: {
        type: String,
        enum: ProducCollection,
        required: true,
    },

    productName: {
        type: String,
        required: true,
    },

    productPrice: {
        type:Number,
        required: true,
    },

    productLeftCount: {
        type: Number,
        required: true,
    },

    productSize: {
        type: String,
        enum: ProductSize,
        required: true,
    },

    productVolume: {
        type: Number,
        enum: ProductVolume,
        default:ProductVolume.ONE,
    },

    productDesc: {
        type: String,
    },

    productImage: {
        type: [String],
        default: [],
    },

    productViews: {
        type:Number,
        default:0,
    }

},
{ timestamps: true}  // updateAt, createAt
);


productSchema.index({productNane: 1, ProductSize:1, ProductVolume:1},
    {unique:true}
    );
export default mongoose.model("Product", productSchema)