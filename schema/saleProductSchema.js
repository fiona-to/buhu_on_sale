const graphql = require("graphql");
/*----------------------------
  GraphQL Schema Type
----------------------------*/
const { GraphQLSchema } = graphql;
const QueryType = require("./query.graphql");
const MutationType = require("./mutation.graphql");

/*--------------------------------------------------------
    EXPORT GRAPHQL SCHEMA
--------------------------------------------------------*/
module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
