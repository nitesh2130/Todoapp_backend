const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL )
    .then(() => console.log("Db is connected sucessfuly"))
    .catch( (error) => {
        console.log("Issue in connection of DB");
        console.error(error.message);
        // eska matlab kya ha 
        process.exit(1);

    });
}

module.exports = dbConnect;