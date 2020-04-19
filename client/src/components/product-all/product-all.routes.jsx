import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import AllProductsPage from "../product-all/product-all.component";
import ProductDetail from "../product-detail/product-detail.component";
import PageNotFound from "../page-not-found/page-not-found.component";
/*--------------------------------------------------------
  CONFIGURATION: ALL PRODUCT ROUTES
--------------------------------------------------------*/
const AllProductRoutes = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/products" component={AllProductsPage} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(AllProductRoutes);
