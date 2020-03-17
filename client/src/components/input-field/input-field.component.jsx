import React from "react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Form } from "react-bootstrap";
import { Styled } from "./input-field.styles";

/*--------------------------------------------------------
 COMPONENT: InputField
--------------------------------------------------------*/
const InputField = props => {
  const { label, name, value } = props;
  const disabled = props.disabled ? true : false;
  const type = props.type ? props.type : "text";
  const className = props.className ? props.className : "";
  const onChange = props.onChange ? props.onChange : null;
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
        type={type}
        name={name}
        size="sm"
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

export default InputField;
