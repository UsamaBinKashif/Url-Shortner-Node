const mongoose = require("mongoose"); //intializing moongoose

//creating users schema
const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true, // this will force user to use a different email if already exist
    },
    password:{
        type: String,
        required: true,
    },
  },
  // add time as an entry so we can track user logs
  { timestamps: true }
);

const USERS = mongoose.model("users", usersSchema);

module.exports = USERS;
