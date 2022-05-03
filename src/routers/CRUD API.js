const express = require("express");
const country = require("../models/country_schema");
const hobbies = require("../models/hobbies_schema");
const register = require("../models/register");
const state = require("../models/state_schema");
const router = new express.Router();


//             1) Countrys
router.post("/country",async(req,res)=>{
    try {
        const new_country = new country(req.body);
        const regCountry = await new_country.save();
        res.status(201).send(regCountry);
    } catch (error) {
        res.status(400).send(error)
    }
})
router.get("/getCountry", async (req,res)=>{
    try {
        const getCountry = await country.find({});
        res.status(201).send(getCountry)
    } catch (error) {
        res.status(400).send(error)
    }
})



//         2) States
router.post("/state",async(req,res)=>{
try {
        const new_state = new state(req.body);
        const regState = await new_state.save();
        res.status(201).send(regState);
    } catch (error) {
        res.status(400).send(error)
    }
})
router.get("/getState", async (req,res)=>{
    try {
        const getState = await state.find({});
        res.status(201).send(getState)
    } catch (error) {
        res.status(400).send(error)
    }
})



//            3) Hobbies
router.post("/hobbies",async(req,res)=>{
    try {
            const new_hobbies = new hobbies(req.body);
            const regHobbies = await new_hobbies.save();
            res.status(201).send(regHobbies);
        } catch (error) {
            res.status(400).send(error)
        }
    })
    router.get("/getHobbies", async (req,res)=>{
        try {
            const getHobbies = await state.find({});
            res.status(201).send(getHobbies)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    

//              4)CRUD    
router.post("/register",async(req,res)=>{
    try {
        const new_register = new register(req.body);
        const reg = await new_register.save();
        res.status(201).send(reg);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/get", async (req,res)=>{
    try {
        const get = await register.find({});
        res.status(201).send(get)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/get/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
        const get1 = await register.findById({_id});
        res.send(get1)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch("/patch/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
        const update = await register.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(update)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/register/:id", async (req,res)=>{
    try {
        const del = await register.findByIdAndDelete(req.params.id)
        res.send(del)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;