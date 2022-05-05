const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    // unique: true,
  },
  key:{
    type: String
  }
});
const state = new mongoose.model("state", stateSchema);

// const addStates = new state({
//   state: "Gujarat",
// });
// await addStates.save();

module.exports = state;
