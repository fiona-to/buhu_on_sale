import React from "react";
import { Switch, withRouter, Route, Link } from "react-router-dom";
import { Breadcrumbs } from "react-breadcrumbs";
import { Header } from "../navbar/header.component";
import { CarouselIntro } from "../carousel/carousel.component";
import { Footer } from "../footer/footer.component";
import { Routes as HomePageRouteConfig } from "./home-page.routes";
import CategoryPage from "../category-page/category-page.component";
import AppBreadCrumb from "../bread-crumb/bread-crumb.component";
import AllProductRoutes from "../product-all/product-all.routes";
//import ProductDetail from "../product-detail/product-detail.component";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./home-page.styles";

/*--------------------------------------------------------
 COMPONENT: HomePage 
--------------------------------------------------------*/
const HomePage = props => {
  let isHome =
    !props.location.state ||
    (props.location.state && props.location.state.isHome)
      ? true
      : false;

  /*----------------------------------
    RENDERING
  -----------------------------------*/
  return (
    <Styled>
      {isHome ? <Header /> : null}
      {isHome ? <CarouselIntro /> : null}
      {isHome ? (
        <>
          <Breadcrumbs />
          <hr />
        </>
      ) : null}
      {isHome ? (
        <Link className="view-all" to="/products">
          View All Products
        </Link>
      ) : null}
      <Switch>
        <Route exact key="categoryPage" path="/" component={CategoryPage} />
        <Route path="/products" component={AllProductRoutes} />
        {HomePageRouteConfig.map((route, index) => (
          <AppBreadCrumb
            key={index}
            exact={route.exact}
            title={route.title}
            path={route.path}
            component={route.childContent}
          />
        ))}
      </Switch>
      {isHome ? <Footer /> : null}
    </Styled>
  );
};

export default withRouter(HomePage);
