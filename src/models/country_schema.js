const mongoose = require("mongoose");

const contrySchema = new mongoose.Schema({

    country:{
        type:String,
        unique:true,
        require:true,
    }
})
const country = new mongoose.model("country", contrySchema);
module.exports=country;