const todolist = require('../models/todoModel')
const bycrpt = require('bcrypt')

exports.getTodo = async(req,res)=>{
    const todoData = await todolist.find();
    res.status(201).json({data:todoData})
}

exports.getTodoById = async(req,res)=>{
    const todoData = await todolist.findById(req.params.id);
    res.status(201).json({todoData})
}

exports.postTodo = async(req,res)=>{
    const {task,status} = req.body;
    const exist = await todolist.findOne({task});
    if(exist)
        return res.status(401).json({message:"task already exist"})
    else{
        const newTodo = new todolist({task,status});
        await newTodo.save();
        res.status(201).json({todo:newTodo})
    }

}

exports.putTodo = async(req,res)=>{
    const update = await todolist.findByIdAndUpdate(req.params.id, req.body); 
    if(!update) return res.status(401).json({message:"task not exist"});
    res.status(201).json({update});
}

exports.deleteTodo = async(req,res)=>{
    const deleteTodo = await todolist.findByIdAndDelete(req.params.id); 
    if(!deleteTodo) return res.status(401).json({message:"task not exist"});
    res.status(201).json({message:"task deleted"});
}


    