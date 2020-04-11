import React from "react";
import MainButton from "../main-button/main-button.component";
import SecondaryButton from "../secondary-button/secondary-button.component";
import InputField from "../input-field/input-field.component";
import TextareaInputField from "../textarea-input-field/textarea-input-field.component";
import UploadImage from "../upload-image/upload-image.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { observer, inject } from "mobx-react";
import { graphql } from "react-apollo";
import compose from "lodash.flowright";
import {
  addProduct,
  getProducts,
  updateProductById,
} from "../../graphql-queries/product.graphql";
import { getCategories } from "../../graphql-queries/category.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Form, Row, Col } from "react-bootstrap";
import { Styled } from "./product-input-form.styles";
/*----------------------------------
  Antd for uploading image
-----------------------------------*/
import { message as AntMessage } from "antd";
import { getBase64 } from "../upload-image/utils.antd";

/*--------------------------------------------------------
 COMPONENT: ProductInputForm
--------------------------------------------------------*/
const ProductInputForm = inject("store")(
  observer(
    class ProductInputForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          id: null,
          name: "",
          description: "",
          in_stock: 0,
          image_url: "",
          image_public_id: "",
          categoryId: "",
          isLoading: false,
          photo: null,
          displayedImageOnUi: "",
          existedProd: false,
          price: 0,
          color: "",
          hex_color: "",
          condition: "",
        };
      }

      componentDidMount() {
        if (this.props.selectedProd) {
          this.setState({
            ...this.props.selectedProd,
            displayedImageOnUi: this.props.selectedProd.image_url,
            existedProd: true,
          });
        }
      }

      /*----------------------------------
      Ant Design
      -----------------------------------*/
      handleUploadImage = (info) => {
        if (info.file.status === "uploading") {
          this.setState({ isLoading: true });
          return;
        }
        if (info.file.status === "done") {
          AntMessage.success(`${info.file.name} file uploaded successfully`);
          // Save uploaded photo to component's state
          this.setState({
            photo: info.file.originFileObj,
          });

          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (imageUrl) =>
            this.setState({
              displayedImageOnUi: imageUrl,
              isLoading: false,
            })
          );
        } else if (info.file.status === "error") {
          AntMessage.error(`${info.file.name} file upload failed.`);
        }
      };

      /*----------------------------------
        EVENT HANDLING
      -----------------------------------*/
      resetLocalState = () => {
        this.setState({
          id: null,
          name: "",
          description: "",
          in_stock: 0,
          image_url: "",
          image_public_id: "",
          categoryId: "",
          isLoading: false,
          photo: null,
          displayedImageOnUi: "",
          existedProd: false,
          price: 0,
          color: "",
          hex_color: "",
          condition: "",
        });
      };

      loadCategoryOptions = (data) => {
        return data.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        });
      };

      handleValueChanged = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

      // handleColorValueChanged = (e) => {
      //   this.setState({
      //     color: {
      //       ...this.state.color,
      //       [e.target.name]: e.target.value,
      //     },
      //   });
      // };

      saveProduct = async () => {
        await this.props
          .AddProduct({
            variables: {
              name: this.state.name,
              description: this.state.description,
              photo: this.state.photo,
              in_stock: parseInt(this.state.in_stock),
              categoryId: this.state.categoryId,
              price: parseFloat(this.state.price),
              color: this.state.color,
              hex_color: this.state.hex_color,
              condition: this.state.condition,
            },
            refetchQueries: [
              {
                query: getProducts,
              },
            ],
          })
          .then((data) => {
            this.resetLocalState();
            this.props.store.prodStore.cancelAddNewProduct();
          })
          .catch((e) => {
            console.log(e);
            return;
          });
      };

      updateProduct = async () => {
        await this.props
          .UpdateProductById({
            variables: {
              id: this.state.id,
              name: this.state.name,
              description: this.state.description,
              in_stock: parseInt(this.state.in_stock),
              image_url: this.state.image_url,
              image_public_id: this.state.image_public_id,
              photo: this.state.photo,
              categoryId: this.state.categoryId,
              price: parseFloat(this.state.price),
              color: this.state.color,
              hex_color: this.state.hex_color,
              condition: this.state.condition,
            },
            refetchQueries: [{ query: getProducts }],
          })
          .then((data) => {
            this.resetLocalState();
            this.props.store.prodStore.cancelEditProduct();
          })
          .catch((e) => {
            console.log(e);
            return;
          });
      };

      handleCancelProduct = (e) => {
        if (this.state.existedProd) {
          this.props.store.prodStore.cancelEditProduct();
        } else this.props.store.prodStore.cancelAddNewProduct();
      };

      handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.existedProd) {
          this.updateProduct();
        } else {
          this.saveProduct();
        }

        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //   e.stopPropagation();
        // }
        // this.setState({ validated: true });
        // this.saveCategory();
      };

      /*----------------------------------
        RENDERING
      -----------------------------------*/
      render() {
        const { displayedImageOnUi, isLoading, existedProd } = this.state;
        return (
          <Styled>
            <Container>
              <Form
                //noValidate
                //validated={this.state.validated}
                onSubmit={this.handleFormSubmit}
              >
                <Form.Row>
                  <Form.Group as={Col} xs={12} sm={12} md={6} id="group1">
                    <InputField
                      label="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleValueChanged}
                    />
                    <InputField
                      label="In Stock"
                      name="in_stock"
                      type="number"
                      value={this.state.in_stock}
                      onChange={this.handleValueChanged}
                    />
                    <InputField
                      label="Retail Price In $"
                      name="price"
                      type="number"
                      value={this.state.price}
                      onChange={this.handleValueChanged}
                    />
                    <InputField
                      label="Condition"
                      name="condition"
                      value={this.state.condition}
                      onChange={this.handleValueChanged}
                    />
                    <TextareaInputField
                      label="Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleValueChanged}
                    />
                  </Form.Group>

                  <Form.Group as={Col} xs={12} sm={12} md={6} id="group2">
                    <Form.Label column="true" xs={12} sm={12} md={6}>
                      Category type (*)
                    </Form.Label>
                    <Form.Control
                      as="select"
                      size="sm"
                      column="true"
                      xs={12}
                      sm={12}
                      md={6}
                      required
                      name="categoryId"
                      value={this.state.categoryId}
                      onChange={this.handleValueChanged}
                    >
                      <option key={123456} value="">
                        Select an option...
                      </option>
                      {this.props.GetCategories.loading ? (
                        <option>Loading...</option>
                      ) : (
                        this.loadCategoryOptions(
                          this.props.GetCategories.categories
                        )
                      )}
                    </Form.Control>
                    <InputField
                      label="Color (text)"
                      name="color"
                      value={this.state.color}
                      onChange={this.handleValueChanged}
                    />
                    <InputField
                      label="Color (hex)"
                      name="hex_color"
                      value={this.state.hex_color}
                      onChange={this.handleValueChanged}
                    />
                    <hr />
                    <UploadImage
                      displayedImageOnUi={displayedImageOnUi}
                      isLoading={isLoading}
                      onChange={this.handleUploadImage}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Row} id="formButtons">
                    <MainButton className="action-btn" type="submit">
                      {existedProd ? "Update" : "Save"}
                    </MainButton>
                    <SecondaryButton
                      className="action-btn"
                      onClick={this.handleCancelProduct}
                    >
                      Cancel
                    </SecondaryButton>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Container>
          </Styled>
        );
      }
    }
  )
);

export default compose(
  graphql(addProduct, { name: "AddProduct" }),
  graphql(updateProductById, { name: "UpdateProductById" }),
  graphql(getCategories, { name: "GetCategories" })
)(ProductInputForm);
