const mongoose = require("mongoose");

const contrySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  code: {
    type: String,
  },
});
const country = new mongoose.model("country", contrySchema);

// const addCountry = new country({
//             country:"India",
//         })
//        await addCountry.save();

module.exports = country;
