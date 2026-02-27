import mongoose from "mongoose";



const connectionRequest = new mongoose.Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId, 
        ref : "User",
        required : true
    },
    connectionId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "User",
    },
    status_accepted : {
        type : Boolean,
        default : false,
    },
    
}
)

const ConnctionRequest = mongoose.model("ConnecctionRequest", connectionRequest);
export default ConnctionRequest;