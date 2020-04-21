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
  addCategory,
  getCategories,
  updateCategoryById,
} from "../../graphql-queries/category.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Form, Row, Col } from "react-bootstrap";
import { Styled } from "./category-input-form.styles";
/*----------------------------------
  Antd for uploading image
-----------------------------------*/
import { message as AntMessage } from "antd";
import { getBase64 } from "../upload-image/utils.antd";

/*--------------------------------------------------------
 COMPONENT: CategoryInputForm
--------------------------------------------------------*/
const CategoryInputForm = inject("store")(
  observer(
    class CategoryInputForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          id: null,
          name: "",
          description: "",
          image_url: "",
          image_public_id: "",
          hidden: false,
          isLoading: false,
          photo: null,
          displayedImageOnUi: "",
          existedCat: false,
        };
      }

      componentDidMount() {
        if (this.props.selectedCat) {
          this.setState({
            ...this.props.selectedCat,
            displayedImageOnUi: this.props.selectedCat.image_url,
            existedCat: true,
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
      handleValueChanged = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

      handleHiddenChange = (e) => {
        this.setState({ hidden: e.target.checked });
      };

      saveCategory = async () => {
        await this.props
          .AddCategory({
            variables: {
              name: this.state.name,
              description: this.state.description,
              photo: this.state.photo,
              hidden: this.state.hidden,
            },
            refetchQueries: [
              {
                query: getCategories,
              },
            ],
          })
          .then((data) => {
            this.props.store.catStore.cancelAddCategory();
          })
          .catch((e) => {
            console.log(e);
            return;
          });
      };

      updateCategory = async () => {
        await this.props
          .UpdateCategoryById({
            variables: {
              id: this.state.id,
              name: this.state.name,
              description: this.state.description,
              hidden: this.state.hidden,
              image_url: this.state.image_url,
              image_public_id: this.state.image_public_id,
              photo: this.state.photo,
            },
            refetchQueries: [{ query: getCategories }],
          })
          .then((data) => {
            this.props.store.catStore.cancelEditCategory();
          })
          .catch((e) => {
            console.log(e);
            return;
          });
      };

      handleCancelCategory = (e) => {
        if (this.state.existedCat) {
          this.props.store.catStore.cancelEditCategory();
        } else this.props.store.catStore.cancelAddCategory();
      };

      handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.existedCat) {
          this.updateCategory();
        } else {
          this.saveCategory();
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
        const { displayedImageOnUi, isLoading, existedCat } = this.state;
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
                    <TextareaInputField
                      label="Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleValueChanged}
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs={12} sm={12} md={6} id="group2">
                    <Form.Label
                      className="hidden-text"
                      column="true"
                      xs={3}
                      sm={3}
                      md={3}
                    >
                      Hidden
                    </Form.Label>
                    <Form.Label column="true" xs={9} sm={9} md={6}>
                      <Form.Check
                        type="checkbox"
                        id="hidden"
                        name="hidden"
                        checked={this.state.hidden}
                        onChange={this.handleHiddenChange}
                      />
                    </Form.Label>
                    <UploadImage
                      displayedImageOnUi={displayedImageOnUi}
                      isLoading={isLoading}
                      onChange={this.handleUploadImage}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Row} id="formButtons">
                    <MainButton
                      className="action-btn"
                      type="submit"
                      disabled={true}
                    >
                      {existedCat ? "Update" : "Save"}
                    </MainButton>
                    <SecondaryButton
                      className="action-btn"
                      onClick={this.handleCancelCategory}
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
  graphql(addCategory, { name: "AddCategory" }),
  graphql(updateCategoryById, { name: "UpdateCategoryById" })
)(CategoryInputForm);
