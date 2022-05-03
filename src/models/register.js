const mongoose = require("mongoose");
// const Country = require("country-state-city").Country
// console.log(Country.getAllCountries())

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        enum:['male', 'female'],
        required:true
    },
    marital_status:{
        type:String,
        enum:['married', 'unmarried'],
        required:true
    } ,
    salary:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        required:true

    }

})
const register = new mongoose.model("register", userSchema);
module.exports=register;