import gql from "graphql-tag";

const getProducts = gql`
  query products {
    getTime
    products {
      id
      name
      description
      in_stock
      image_url
      image_public_id
      manufacture_detail {
        model_number
        release_date
      }
      pricing {
        unit_price
        sale_price
      }
      seo
      sold
      categoryId
      category {
        name
      }
      price
    }
  }
`;

const getProductById = gql`
  query productById($id: ID!) {
    getTime
    productById(id: $id) {
      id
      name
      description
      in_stock
      image_url
      image_public_id
      manufacture_detail {
        model_number
        release_date
      }
      pricing {
        unit_price
        sale_price
      }
      seo
      categoryId
      category {
        name
      }
      price
    }
  }
`;

const getProductByCategory = gql`
  query productByCategory($catId: ID!) {
    productByCategory(catId: $catId) {
      id
      name
      description
      in_stock
      image_url
      image_public_id
      manufacture_detail {
        model_number
        release_date
      }
      pricing {
        unit_price
        sale_price
      }
      seo
      sold
      categoryId
      category {
        name
        description
        image_url
        image_public_id
        hidden
      }
      price
    }
  }
`;

const deleteProductById = gql`
  mutation deleteProductById($id: ID!, $imgPublicId: String) {
    deleteProductById(id: $id, imgPublicId: $imgPublicId) {
      message
    }
  }
`;

const addProduct = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $in_stock: Int!
    $photo: Upload
    $categoryId: String!
    $price: Float!
  ) {
    addProduct(
      name: $name
      description: $description
      in_stock: $in_stock
      photo: $photo
      categoryId: $categoryId
      price: $price
    ) {
      id
      name
      description
      in_stock
      image_url
      image_public_id
      manufacture_detail {
        model_number
        release_date
      }
      pricing {
        unit_price
        sale_price
      }
      seo
      categoryId
      category {
        name
      }
      price
    }
  }
`;

const updateProductById = gql`
  mutation updateProductById(
    $id: ID!
    $name: String!
    $description: String!
    $in_stock: Int!
    $image_url: String
    $image_public_id: String
    $photo: Upload
    $categoryId: String!
    $price: Float!
  ) {
    updateProductById(
      id: $id
      name: $name
      description: $description
      in_stock: $in_stock
      image_url: $image_url
      image_public_id: $image_public_id
      photo: $photo
      categoryId: $categoryId
      price: $price
    ) {
      id
      name
      description
      in_stock
      image_url
      image_public_id
      manufacture_detail {
        model_number
        release_date
      }
      pricing {
        unit_price
        sale_price
      }
      seo
      categoryId
      category {
        name
      }
      price
    }
  }
`;

export {
  getProducts,
  getProductById,
  getProductByCategory,
  deleteProductById,
  addProduct,
  updateProductById,
};
