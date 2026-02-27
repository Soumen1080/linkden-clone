import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        default : null
    },
    degree: {
        type: String,
        default : null
    },
    fieldOfStudy: {
        type: String,
        default : null
    },
    fieldOfStudy: {
        type: String,
        default : null
    },
});

const workSchema = new mongoose.Schema({
    company: {
        type: String,
        default : null
    },
    position: {
        type: String,
        default : null
    },
    years: {
        type: String,
        default : null
    },
});

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bio: {  
        type: String,
        default : null
    },
    currentPost:{
        type: String,
        default : null  
    },
    postwork:{
        type: [workSchema],
        default : []
    },
    education:{ 
        type: [educationSchema],
        default : []
    },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;