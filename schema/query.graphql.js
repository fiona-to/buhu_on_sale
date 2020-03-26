const graphql = require("graphql");
const { ProductType, CategoryType } = require("./object-types.graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;
const Product = require("../models/product");
const Category = require("../models/category");

/*--------------------------------------------------------
    QUERY
--------------------------------------------------------*/
/**
 * This is the type that will be the root of our query, and the
 * entry point into our schema. It gives us the ability to fetch
 * objects by their IDs, as well as to fetch the undisputed hero
 * of the Star Wars trilogy, R2-D2, directly.
 *
 * Eg: This implements the following type system shorthand:
 *   type Query {
 *     product(id: ID!): Product
 *   }
 *
 */
const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    products: {
      type: new GraphQLList(ProductType),
      async resolve(parent, args) {
        return await Product.find({});
      }
    },
    productById: {
      type: ProductType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parent, args) {
        return await Product.findById(args.id);
      }
    },
    productByCategory: {
      type: new GraphQLList(ProductType),
      args: { catId: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parent, args) {
        return await Product.find({ categoryId: args.catId });
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      async resolve(parent, args) {
        return await Category.find({});
      }
    },
    categoryById: {
      type: CategoryType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parent, args) {
        return await Category.findById(args.id);
      }
    },
    getTime: {
      type: GraphQLString,
      resolve(parent, args) {
        const today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return `${h}:${m}:${s}`;
      }
    }
  })
});

module.exports = QueryType;
