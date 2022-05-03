const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({

    state:{
        type:String,
        unique:true,
        require:true,
    }
})
const state = new mongoose.model("state", stateSchema);
module.exports=state;