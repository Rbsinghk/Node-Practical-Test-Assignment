const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/employee_data",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Mongoose Connected")
})
.catch((e)=>{
    console.log("Mongoose Not Connected")
});