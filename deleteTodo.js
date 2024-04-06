//import the model
const Todo = require("../models/Todo");
 
exports.deleteTodo = async(req, res) => {
    try {
        const id  = req.params.body;
        await Todo.findByIdAndDelete(id);
        
        res.josn({
            success:true,
            message:"todo deleted",
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
    };
}