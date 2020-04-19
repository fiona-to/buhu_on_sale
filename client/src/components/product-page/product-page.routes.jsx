import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import AppBreadCrumb from "../bread-crumb/bread-crumb.component";
import ProductPage from "./product-page.component";
import ProductDetail from "../product-detail/product-detail.component";
import PageNotFound from "../page-not-found/page-not-found.component";
/*--------------------------------------------------------
  CONFIGURATION: PRODUCT ROUTES
--------------------------------------------------------*/
const ProductRoutes = (props) => {
  return (
    <div>
      <Switch>
        <Route
          exact
          key="productPage"
          path="/category/:id"
          component={ProductPage}
        />
        <AppBreadCrumb
          key="detailPage"
          path={`${props.match.path}/product/:id`}
          title="Detail"
          component={ProductDetail}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(ProductRoutes);
