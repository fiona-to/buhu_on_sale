import React from "react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Form } from "react-bootstrap";
import { Styled } from "./textarea-input-field.styles";

/*--------------------------------------------------------
 COMPONENT: TextareaInputField
--------------------------------------------------------*/
const TextareaInputField = props => {
  const { label, name, value } = props;
  const disabled = props.disabled ? true : false;
  const onChange = props.onChange ? props.onChange : null;
  const className = props.className ? props.className : "";
  return (
    <Styled>
      <Form.Label column="true" xs={12} sm={12} md={6}>
        {label} (*)
      </Form.Label>
      <Form.Control
        column="true"
        xm={12}
        sm={12}
        md={6}
        as="textarea"
        name={name}
        size="sm"
        rows="2"
        required
        disabled={disabled}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={className}
      />
    </Styled>
  );
};

export default TextareaInputField;
