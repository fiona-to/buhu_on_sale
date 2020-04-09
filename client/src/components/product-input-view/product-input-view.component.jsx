import React from "react";
import InputField from "../input-field/input-field.component";
import TextareaInputField from "../textarea-input-field/textarea-input-field.component";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Form, Col } from "react-bootstrap";
import { Styled } from "./product-input-view.styles";

/*--------------------------------------------------------
 COMPONENT: ProductInputView
--------------------------------------------------------*/
const ProductInputView = (props) => {
  const {
    id,
    name,
    description,
    in_stock,
    image_url,
    category,
    price,
  } = props.selectedProd;

  return (
    <Styled>
      <Container>
        <Form key={id}>
          <Form.Row>
            <Form.Group as={Col} xs={12} sm={12} md={6} id="group1">
              <InputField
                label="Name"
                name="name"
                value={name}
                disabled={true}
                className="disable-control"
              />
              <TextareaInputField
                label="Description"
                name="description"
                value={description}
                disabled={true}
                className="disable-control"
              />
              <InputField
                label="In Stock"
                name="in_stock"
                value={in_stock}
                disabled={true}
                className="disable-control"
              />
              <InputField
                label="Retail Price In $ "
                name="price"
                value={price}
                disabled={true}
                className="disable-control"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={6} id="group2">
              <InputField
                label="Category"
                name="categoryId"
                value={category.name}
                disabled={true}
                className="disable-control"
              />
              <hr />
              <div className="select-img-card">
                <img src={image_url} alt="product" style={{ width: "100%" }} />
              </div>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </Styled>
  );
};

export default ProductInputView;
