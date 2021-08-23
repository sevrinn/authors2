//require mongoose
const mongoose = require("mongoose");

//create Schema. Remember timestamps!
const AuthorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name of author must be at least 3 characters"],
    },
  },
  { timestamps: true }
);

//export model
module.exports = mongoose.model("Author", AuthorSchema);
