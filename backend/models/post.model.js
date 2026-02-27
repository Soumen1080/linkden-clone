import mongoose, { Types } from "mongoose";
import { act } from "react";

const postSchema = new mongoose.Schema({
    userId : {
        type : Types.ObjectId,
        ref : "User",
        required : true
    },
    body : {
        type : String,
        required : true
    },
    create : {
        type : Date,
        default : Date.now
    } ,
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    },
    media : {
        type : String,
        default : null
    },
    active : {
        type : Boolean,
        default : true
    }, 
    fileType : {
        type : String,
        default : null
    }
});

const Post = mongoose.model("Post", postSchema);
export default Post;