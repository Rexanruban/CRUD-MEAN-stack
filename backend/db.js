const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/CrudDB',(err)=>{

    if(!err){
        console.log("MongoDB connection succeded..");
    }
    else{
        console.log("Error in Db connection:"+ JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;