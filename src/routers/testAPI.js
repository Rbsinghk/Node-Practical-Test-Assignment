const express = require("express");
const countrySchema = require("../models/country_schema");
const hobbiesSchema = require("../models/hobbies_schema");
const register = require("../models/register");
const state = require("../models/state_schema");
let countries = require("../countries.json");
let States = require("../state.json");
let hobbies = require("../hobbies.json")
const country = require("../models/country_schema");
const stateSchema = require("../models/state_schema");
const router = new express.Router();


//             1) Countrys

router.get("getCountries", async (req, res) => {
  try {
    // console.log(countries);
    let countryList = await countrySchema.insertMany(countries);
    res.status(200).send({ countryList });
  } catch (error) {
    console.log(error);
  }
});

//         2) States

router.get("/getState", async (req, res) => {
  try {
    let stateList = await stateSchema.insertMany(States);
    res.status(200).send({ stateList });
  } catch (error) {
    res.status(400).send(error);
  }
});

//            3) Hobbies

router.get("/getHobbies", async (req, res) => {
  try {
    let hobbiesList = await hobbiesSchema.insertMany(hobbies);
    res.status(201).send({ hobbiesList });
  } catch (error) {
    res.status(400).send(error);
  }
});

//              4)CRUD

router.post("/register", async (req, res) => {
  try {
    const new_register = new register(req.body);
    const reg = await new_register.save();
    res.status(201).send(reg);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/get", async (req, res) => {
  try {
    const get = await register.find({});
    res.status(201).send(get);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const get1 = await register.findById({ _id });
    res.send(get1);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/patch/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const update = await register.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(update);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const del = await register.findByIdAndDelete(req.params.id);
    res.send(del);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
