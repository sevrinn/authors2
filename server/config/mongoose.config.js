//require mongoose
const mongoose = require("mongoose");

//create dvName var
const dbName = "userDB";

//connect to mongoDB server
mongoose
  .connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to " + dbName + " database!");
  })
  .catch((err) => {
    console.log("There was an error connecting to the " + dbName + " database");
  });
