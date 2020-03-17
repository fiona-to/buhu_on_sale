const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaCategory = new Schema({
  name: String,
  description: String,
  image_url: String,
  image_public_id: String,
  hidden: Boolean
});

module.exports = mongoose.model("category", schemaCategory);
