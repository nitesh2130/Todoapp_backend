// import the model
const { response } = require('express');
const Todo = require("../models/Todo");


//make route handller

exports.createTodo = async(request,response) => {
    try {
        //extract title and description from request body
        const {title, description} = req.body;

        //cerate a new Todo obj and insert in DB
        const response = await Todo.create({title, description});

        //send a josn response with a success flag
        response.status(200).josn(
            {
                success: true,
                data: response,
                message: "Entry Created succesfully"
            }
        );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        response.status(500)
        .josn({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    };
}