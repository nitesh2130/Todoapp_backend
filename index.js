const express = require('express');
const app = express();
/*
app.listen(3000,  () =>{
    console.log("your server is going live")
}); 

*/


// load config form env file

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse josn request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server started succesfully at ${PORT}`);
})

// CONNECT TO THE DB
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res) => {
    res.send(`<h1> this is HOMEPAGE baby </h1>`);
})
