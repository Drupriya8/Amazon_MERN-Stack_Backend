const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.set('strictQuery', true);

mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=> console.log("error" + error.message))