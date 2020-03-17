import React from "react";

import { Styled } from "./admin-header.styles";

const AdminHeader = props => {
  const { headerText } = props;
  return (
    <Styled>
      <div className="header">> {headerText}</div>
    </Styled>
  );
};

export default AdminHeader;
