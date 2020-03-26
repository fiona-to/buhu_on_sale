import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import AllProductsPage from "../product-all/product-all.component";
import ProductDetail from "../product-detail/product-detail.component";
/*--------------------------------------------------------
  CONFIGURATION: ALL PRODUCT ROUTES
--------------------------------------------------------*/
const AllProductRoutes = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/products" component={AllProductsPage} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
};

export default withRouter(AllProductRoutes);
