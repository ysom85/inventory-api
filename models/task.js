import mongoose from "mongoose"
const schema =  new mongoose.Schema({
    price:{
        type: String,
        required: true,
    },
    numberOfPeieces:{
        type: String,
        required: true,
    }
})
export const Taskm = mongoose.model("task",schema)