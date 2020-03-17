const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const schemaManufactureDetail = new Scheme({
  model_number: String,
  release_date: Date
});

const schemaPricing = new Scheme({
  unit_price: Number,
  sale_price: Number
});

const schemaProduct = new Scheme({
  name: String,
  description: String,
  in_stock: Number,
  image_url: String,
  image_public_id: String,
  manufacture_detail: schemaManufactureDetail,
  pricing: schemaPricing,
  seo: [],
  sold: Number,
  categoryId: String
});

module.exports = mongoose.model("product", schemaProduct);
