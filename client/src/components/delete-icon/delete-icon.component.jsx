import React from "react";

import MdTrash from "react-ionicons/lib/MdTrash";
import { Styled } from "./delete-icon.styles";

export default class DeleteIcon extends React.Component {
  render() {
    return (
      <Styled>
        <MdTrash
          fontSize="28px"
          className="trash-icon"
          color="#ef9a9a"
          {...this.props}
        />
      </Styled>
    );
  }
}
