import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import AppBreadCrumb from "../bread-crumb/bread-crumb.component";
import ProductPage from "./product-page.component";
import ProductDetail from "../product-detail/product-detail.component";
/*--------------------------------------------------------
  CONFIGURATION: PRODUCT ROUTES
--------------------------------------------------------*/
const ProductRoutes = props => {
  return (
    <div>
      <Switch>
        <Route
          exact
          key="productPage"
          path="/product"
          component={ProductPage}
        />
        <AppBreadCrumb
          key="detailPage"
          path={`${props.match.path}/detail/:id`}
          title="Detail"
          component={ProductDetail}
        />
      </Switch>
    </div>
  );
};

export default withRouter(ProductRoutes);
