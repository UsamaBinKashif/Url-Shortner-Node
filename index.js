// Initializing express js
const express = require("express");
const app = express();
const PORT = 8001; //port number
//--------

//Mongo DB Connection
const { connectToMongoDB } = require("./connect");
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongodb connected")
);
//-------

//Routes
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRoute");
//----

//Models
const URL = require("./models/url");
const USERS = require("./models/user");
//----

//Node js path module
const path = require("path");
//----

//ejs configuration
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); //used path module here to render the views folder in ejs
//----

//express form data and json data if these middlewares are not added then the post request will not work properly
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//----

//all the routes
app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);
//----

//starting the app
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
