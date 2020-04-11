const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
/*-------------------------------
CUSTOM SCALAR TYPE HAVEN'T BEEN
SUPPORT BY APOLLO-CLIENT
--> ON HOLD
-------------------------------*/
const schemaManufactureDetail = new Scheme({
  model_number: String,
  release_date: Date,
});

/*-------------------------------
CUSTOM SCALAR TYPE HAVEN'T BEEN
SUPPORT BY APOLLO-CLIENT
--> ON HOLD
-------------------------------*/
const schemaPricing = new Scheme({
  unit_price: Number,
  sale_price: Number,
});

/*-------------------------------
CUSTOM SCALAR TYPE HAVEN'T BEEN
SUPPORT BY APOLLO-CLIENT
--> ON HOLD
-------------------------------*/
const schemeColor = new Scheme({
  textColor: String,
  hexColor: String,
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
  categoryId: String,
  price: Number,
  color: String,
  hex_color: String,
  condition: String,
});

module.exports = mongoose.model("product", schemaProduct);
