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
  ) {
    addProduct(
      name: $name
      description: $description
      in_stock: $in_stock
      photo: $photo
      categoryId: $categoryId
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
    }
  }
`;

export {
  getProducts,
  getProductById,
  deleteProductById,
  addProduct,
  updateProductById
};
