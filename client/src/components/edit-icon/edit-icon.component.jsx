import React from "react";

import MdCreate from "react-ionicons/lib/MdCreate";
import { Styled } from "./edit-icon.styles";

export default class EditIcon extends React.Component {
  render() {
    return (
      <Styled>
        <MdCreate
          fontSize="28px"
          className="edit-icon"
          color="#3282b8"
          {...this.props}
        />
      </Styled>
    );
  }
}
