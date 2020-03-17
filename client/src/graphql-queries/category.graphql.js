import gql from "graphql-tag";

const getCategories = gql`
  query categories {
    getTime
    categories {
      id
      name
      description
      image_url
      image_public_id
      hidden
      products_stats {
        count
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
        }
      }
    }
  }
`;

const getCategoryById = gql`
  query categoryById($id: ID!) {
    categoryById(id: $id) {
      id
      name
      description
      image_url
      image_public_id
      hidden
    }
  }
`;

const addCategory = gql`
  mutation addCategory(
    $name: String!
    $description: String!
    $hidden: Boolean
    $photo: Upload
  ) {
    addCategory(
      name: $name
      description: $description
      hidden: $hidden
      photo: $photo
    ) {
      id
      name
      description
      hidden
      image_url
      image_public_id
    }
  }
`;

const updateCategoryById = gql`
  mutation updateCategoryById(
    $id: ID!
    $name: String!
    $description: String!
    $hidden: Boolean
    $image_url: String
    $image_public_id: String
    $photo: Upload
  ) {
    updateCategoryById(
      id: $id
      name: $name
      description: $description
      hidden: $hidden
      image_url: $image_url
      image_public_id: $image_public_id
      photo: $photo
    ) {
      id
      name
      description
      hidden
      image_url
      image_public_id
    }
  }
`;

const deleteCategoryById = gql`
  mutation deleteCategoryById($id: ID!, $imgPublicId: String) {
    deleteCategoryById(id: $id, imgPublicId: $imgPublicId) {
      message
    }
  }
`;

export {
  getCategories,
  getCategoryById,
  addCategory,
  deleteCategoryById,
  updateCategoryById
};
