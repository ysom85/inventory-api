import {Taskm } from "../models/task.js"
export const newTask = async (req,res,next)=>{
    const {price, numberOfPeieces} = req.body
    await Taskm.create({
        price,
        numberOfPeieces
    })
    res.status(201).json({
        sucess: true,
        message: "Task added Sucessfully"
    })
}
export const getMyTask = async (req,res,next) =>{
    const userid = req.user._id
    const tasks = await Taskm.find({user: userid})
    res.status(200).json({
        sucess: true,
        tasks,
    })
}
export const updateMyTask = async (req,res,next) =>{
     
    const {price, numberOfPeieces} = req.body
    const task = await Taskm.findById(req.params.id)
     
    if(!task) return next(new Error("Invalid id"))
    else{
        const filter = {_id: req.params.id};
        const update = { $set: {price: price, numberOfPeieces: numberOfPeieces}}
        Taskm.updateOne(filter, update, function(err, result){
            if(err){
                console.error('Err updating document:',err);
            }else{
                console.log('document updated sucessfully')
            }
        })
        res.status(200).json({
            sucess: true,
            message: "Task updated!",
        })
    }  
    }
    
export const deleteMyTask = async (req,res,next) =>{
    const task = await Taskm.findById(req.params.id)
    if(!task) return next(new Error("Invalid id"))
    await Taskm.deleteOne()
    
    
    res.status(200).json({
        sucess: true,
        message: "Task deleted!"
    })
}
export default getMyTask