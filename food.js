import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
    },
    item:{
        type:String
    },
    quantity:{
        type:Number
    }
}, {timestamps:true})

const Food = mongoose.model("Food", foodSchema);
export default Food