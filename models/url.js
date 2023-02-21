const mongoose = require("mongoose"); //intializing moongoose

//creating url schema
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true, //force shortid package to create a new id
    },
    //the url we want to short
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  // add time as an entry so we can track url logs
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
