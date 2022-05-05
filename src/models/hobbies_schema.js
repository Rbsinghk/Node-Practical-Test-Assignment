const mongoose = require("mongoose");

const hobbiesSchema = new mongoose.Schema({

    hobby:{
        type:String,
        require:true,
        // unique:true
    }
})
const hobbie = new mongoose.model("hobbie", hobbiesSchema);

    
// const addHobbies = new hobbies({
//     hobbies:"Dance",
// })
// await addHobbies.save();

module.exports=hobbie;