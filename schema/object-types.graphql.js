const graphql = require("graphql");
const { GraphQLUpload } = require("graphql-upload");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLBoolean,
} = graphql;
const Category = require("../models/category");
const Product = require("../models/product");
/*----------------------------
  MANUFACTURE_TYPE
----------------------------*/
const ManufactureType = new GraphQLObjectType({
  name: "ManufactureType",
  fields: () => ({
    model_number: { type: GraphQLString },
    release_date: { type: GraphQLString },
  }),
});

/*----------------------------
    MANUFACTURE_INPUT_TYPE
----------------------------*/
const ManufactureInputType = new GraphQLInputObjectType({
  name: "ManufactureInputType",
  fields: () => ({
    model_number: { type: GraphQLString },
    release_date: { type: GraphQLString },
  }),
});

/*----------------------------
    PRICING_TYPE
----------------------------*/
const PricingType = new GraphQLObjectType({
  name: "PricingType",
  fields: () => ({
    unit_price: { type: GraphQLFloat },
    sale_price: { type: GraphQLFloat },
  }),
});

/*----------------------------
    PRICING_INPUT_TYPE
----------------------------*/
const PricingInputType = new GraphQLInputObjectType({
  name: "PricingInputType",
  fields: () => ({
    unit_price: { type: GraphQLFloat },
    sale_price: { type: GraphQLFloat },
  }),
});

/*----------------------------
    CATEGORY_PRODUCT_STATS_TYPE
----------------------------*/
const CategoryProductStatsType = new GraphQLObjectType({
  name: "CategoryProductStatsType",
  fields: () => ({
    count: { type: GraphQLInt },
    products: { type: new GraphQLList(ProductType) },
  }),
});

/*----------------------------
    PRODUCT_TYPE
----------------------------*/
const ProductType = new GraphQLObjectType({
  name: "ProductType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    in_stock: { type: GraphQLInt },
    image_url: { type: GraphQLString },
    image_public_id: { type: GraphQLString },
    manufacture_detail: { type: ManufactureType },
    pricing: { type: PricingType },
    seo: { type: new GraphQLList(GraphQLString) },
    sold: { type: GraphQLInt },
    message: { type: GraphQLString },
    categoryId: { type: new GraphQLNonNull(GraphQLString) },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return Category.findById(parent.categoryId);
      },
    },
    price: { type: GraphQLFloat },
  }),
});

/*----------------------------
    CATEGORY_TYPE
----------------------------*/
const CategoryType = new GraphQLObjectType({
  name: "CategoryType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    image_url: { type: GraphQLString },
    image_public_id: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
    photo: { type: GraphQLUpload },
    message: { type: GraphQLString },
    products_stats: {
      type: CategoryProductStatsType,
      async resolve(parent, args) {
        results = await Product.find({ categoryId: parent.id });
        return {
          count: results.length,
          products: results,
        };
      },
    },
  }),
});

module.exports = {
  ManufactureType,
  ManufactureInputType,
  PricingType,
  PricingInputType,
  ProductType,
  CategoryType,
};
