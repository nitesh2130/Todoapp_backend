// import the model
const Todo = require("../models/Todo");

exports.updateTodo = async(req, res) =>{
    try {
        const id = req.params.id;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
        )
        res.status(200).josn({
            success:true,
            date:todo,
            message:`Updated Successfully`,
        })
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

    }
}
