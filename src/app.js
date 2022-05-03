const express = require("express");
const app = express();
require("./db/conn");
const register = require("./models/register");
const country = require("./models/country_schema")
const state = require(".//models/state_schema");
const hobbies = require("./models/hobbies_schema")
const router = require("./routers/CRUD API");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`The port is running at ${port}`)
})