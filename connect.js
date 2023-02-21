const mongoose = require("mongoose"); //require mongoose
mongoose.set("strictQuery", true); 
//function which takes url as a parameter
async function connectToMongoDB(url) {
  return mongoose.connect(url);
}

//export
module.exports = {
  connectToMongoDB,
};
