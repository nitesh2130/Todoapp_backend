const { request, response } = require("express");
const Todo = require("../models/Todo");

// define routes handler

exports.getTodo = async(request, response) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        response.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        });
    }
    catch(err) {
        console.log(err);
        response.status(500)
        .json({
            success:false,
            error:err.massage,
            message:"server Error",
        });  
    };
}


exports.getTodoById = async(req, res) => {
    try {
        //extract todo items by id
         
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        //data forgiven id not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message: "no data found woth Given id"

            })
        } 
        // data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            messege: `todo ${id} data successfully fetched`,
        })
    }

    catch(err) {
        console.log(err);
        response.status(500)
        .json({
            success:false,
            error:err.massage,
            message:"server Error",
        });

    }
}