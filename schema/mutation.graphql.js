const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = graphql;
const { GraphQLUpload } = require("graphql-upload");
const { ProductType, CategoryType } = require("./object-types.graphql");
const Product = require("../models/product");
const Category = require("../models/category");
/*----------------------------
  Cloudinary
----------------------------*/
const {
  cloudinary,
  uploadStreamToCloudinary
} = require("../cloudinary/utils.cloudinary");
/*--------------------------------------------------------
    MUTATION
--------------------------------------------------------*/
const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCategory: {
      type: CategoryType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        hidden: { type: GraphQLBoolean },
        // GraphQLUpload is a type from middleware 'graphql-upload'
        photo: { type: GraphQLUpload }
      },
      async resolve(parent, args) {
        let imgUrl = "",
          imgPublicId = "";

        // If photo exists
        if (args.photo) {
          const { filename, mimetype, createReadStream } = await args.photo;
          const stream = createReadStream();

          try {
            const result = await uploadStreamToCloudinary(stream);
            imgUrl = result.url;
            imgPublicId = result.public_id;
          } catch (err) {
            throw new Error(err);
          }
        }

        const newCategory = new Category({
          name: args.name,
          description: args.description,
          image_url: imgUrl,
          image_public_id: imgPublicId,
          hidden: args.hidden
        });

        // await newCategory.save((err, category) => {
        //   if (err) {
        //     throw new Error(err);
        //   } else {
        //     return category;
        //   }
        // });
        return await newCategory.save();
      }
    },
    updateCategoryById: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        hidden: { type: GraphQLBoolean },
        image_url: { type: GraphQLString },
        image_public_id: { type: GraphQLString },
        photo: { type: GraphQLUpload }
      },
      async resolve(parent, args) {
        let imageUrl = args.image_url;
        let imagePublicId = args.image_public_id;

        // Proceed if uploading a new photo
        if (args.photo) {
          const { filename, mimetype, createReadStream } = await args.photo;
          const stream = createReadStream();

          try {
            // delete old image from cloudinary server
            if (imagePublicId !== "") {
              await cloudinary.uploader.destroy(
                imagePublicId,
                (err, result) => {
                  if (err) {
                    throw new Error(err);
                  } else {
                    console.log("Image was deleted: " + result);
                  }
                }
              );
            }
            // upload new stream to cloudinary server
            const result = await uploadStreamToCloudinary(stream);
            imageUrl = result.url;
            imagePublicId = result.public_id;
          } catch (err) {
            throw new Error(err);
          }
        }

        return await Category.findOneAndUpdate(
          { _id: args.id },
          {
            name: args.name,
            description: args.description,
            hidden: args.hidden,
            image_url: imageUrl,
            image_public_id: imagePublicId
          },
          // DeprecationWarning: Mongoose: `findOneAndUpdate()`
          // and `findOneAndDelete()` without the `useFindAndModify`
          // option set to false are deprecated
          { returnOriginal: false, useFindAndModify: false },
          (err, doc) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    },
    deleteCategoryById: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        imgPublicId: { type: GraphQLString }
      },
      async resolve(parent, args) {
        if (args.imgPublicId !== "") {
          await cloudinary.uploader.destroy(args.imgPublicId, (err, result) => {
            if (err) {
              throw new Error(err);
            } else {
              console.log("Image was deleted: " + result);
            }
          });
        }
        await Category.deleteOne({ _id: args.id })
          .then(data => ({
            message: "Category was deleted"
          }))
          .catch(error => ({
            message: error.message
          }));
      }
    },
    addProduct: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        in_stock: { type: new GraphQLNonNull(GraphQLInt) },
        // GraphQLUpload is a type from middleware 'graphql-upload'
        photo: { type: GraphQLUpload },
        categoryId: { type: new GraphQLNonNull(GraphQLString) }
        // manufacture_detail: { type: ManufactureInputType },
        // pricing: { type: PricingInputType },
        // seo: { type: new GraphQLList(GraphQLString) }
      },
      async resolve(parent, args) {
        let imgUrl = "",
          imgPublicId = "";

        // If photo exists
        if (args.photo) {
          const { filename, mimetype, createReadStream } = await args.photo;
          const stream = createReadStream();

          try {
            const result = await uploadStreamToCloudinary(stream);
            imgUrl = result.url;
            imgPublicId = result.public_id;
          } catch (err) {
            throw new Error(err);
          }
        }
        const newProduct = new Product({
          name: args.name,
          description: args.description,
          in_stock: args.in_stock,
          image_url: imgUrl,
          image_public_id: imgPublicId,
          categoryId: args.categoryId
        });
        return await newProduct.save();
      }
    },
    updateProductById: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        in_stock: { type: new GraphQLNonNull(GraphQLInt) },
        image_url: { type: GraphQLString },
        image_public_id: { type: GraphQLString },
        photo: { type: GraphQLUpload },
        categoryId: { type: new GraphQLNonNull(GraphQLString) }
        // manufacture_detail: { type: ManufactureInputType },
        // pricing: { type: PricingInputType },
        // seo: { type: new GraphQLList(GraphQLString) }
      },
      async resolve(parent, args) {
        let imageUrl = args.image_url;
        let imagePublicId = args.image_public_id;
        console.log(process.env.CLOUDINARY_NAME);
        // Proceed if uploading a new photo
        if (args.photo) {
          const { filename, mimetype, createReadStream } = await args.photo;
          const stream = createReadStream();

          try {
            // delete old image from cloudinary server
            if (imagePublicId !== "") {
              await cloudinary.uploader.destroy(
                imagePublicId,
                (err, result) => {
                  if (err) {
                    throw new Error(err);
                  } else {
                    console.log("Image was deleted: " + result);
                  }
                }
              );
            }
            // upload new stream to cloudinary server
            const result = await uploadStreamToCloudinary(stream);
            imageUrl = result.url;
            imagePublicId = result.public_id;
          } catch (err) {
            throw new Error(err);
          }
        }
        return await Product.findOneAndUpdate(
          { _id: args.id },
          {
            name: args.name,
            description: args.description,
            in_stock: args.in_stock,
            image_url: imageUrl,
            image_public_id: imagePublicId,
            categoryId: args.categoryId
            // manufacture_detail: args.manufacture_detail,
            // pricing: args.pricing,
            // seo: args.seo
          },
          // Fix for DeprecationWarning: Mongoose: `findOneAndUpdate()`
          // and `findOneAndDelete()` without the `useFindAndModify`
          // option set to false are deprecated
          { returnOriginal: false, useFindAndModify: false },
          (err, doc) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    },
    deleteProductById: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        imgPublicId: { type: GraphQLString }
      },
      async resolve(parent, args) {
        if (args.imgPublicId !== "") {
          await cloudinary.uploader.destroy(args.imgPublicId, (err, result) => {
            if (err) {
              throw new Error(err);
            } else {
              console.log("Image was deleted: " + result);
            }
          });
        }

        await Product.deleteOne({ _id: args.id })
          .then(data => ({
            message: "Product was deleted"
          }))
          .catch(error => ({
            message: error.message
          }));
      }
    }
  }
});

module.exports = MutationType;
