import mongoose, {Schema} from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
// schema based and code based
const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },

    memberNick: {
        type: String,
        index: { unique:true, sparse: true},
        required:true,
    },

    memberPhone: {
        type: String,
        index: {unique:true, sparse:true},
        required:true,
    },

    memberPassword: {
        type: String,
        select: false,
        required:true,
    },

    memberAddress: {
        type: String,
    },

    memberDesc: {
        type: String,
    },

    memberImage: {
        type: String,
    },

    memberPoints: {
        type: Number,
        default:0,
    },

},
 {timestamps:true, collection: "members"}  // CreatedAt UpdatedAT
); 


export default mongoose.model("Member", memberSchema);