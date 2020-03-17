import React from "react";
import InputField from "../input-field/input-field.component";
import TextareaInputField from "../textarea-input-field/textarea-input-field.component";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Form, Col } from "react-bootstrap";
import { Styled } from "./category-input-view.styles";

/*--------------------------------------------------------
 COMPONENT: CategoryInputView
--------------------------------------------------------*/
const CategoryInputView = props => {
  const { id, name, description, hidden, image_url } = props.selectedCat;

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
                  name="hidden"
                  checked={hidden}
                  disabled
                />
              </Form.Label>
              <div className="select-img-card">
                <img src={image_url} alt="category" style={{ width: "100%" }} />
              </div>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </Styled>
  );
};

export default CategoryInputView;
