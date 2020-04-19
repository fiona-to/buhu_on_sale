require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const SaleProductSchema = require("./schema/saleProductSchema");

/*----------------------------
  Express:
----------------------------*/
const app = express();

/*----------------------------
  Middlewares:
----------------------------*/
app.use(cors());

/*----------------------------
  MongoDB:
----------------------------*/
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .on("error", () => {
    console.log("Dis-connected to MongoDB... Error occurred!");
  })
  .once("open", () => {
    console.log("Connected to MongoDB...");
  });

/*----------------------------
  GraphQL
----------------------------*/
app.use(
  "/graphql",
  graphqlUploadExpress({ maxFieldSize: 10000000, maxFiles: 1 }),
  graphqlHTTP({ schema: SaleProductSchema, graphiql: true })
);

/*----------------------------
  Server: listen to port 4000
----------------------------*/
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listenning to port ${PORT}...`);
});
