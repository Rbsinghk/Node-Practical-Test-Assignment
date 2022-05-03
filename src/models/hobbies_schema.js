const mongoose = require("mongoose");

const hobbiesSchema = new mongoose.Schema({

    hobbies:{
        type:String,
        unique:true,
        require:true,
    }
})
const hobbies = new mongoose.model("hobbies", hobbiesSchema);
module.exports=hobbies;