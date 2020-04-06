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
import Cart from "../cart/cart.component";
/*----------------------------------
   GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./home-page.styles";

/*--------------------------------------------------------
 COMPONENT: HomePage 
--------------------------------------------------------*/
const HomePage = inject("store")(
  observer((props) => {
    const { isHome, isViewCart } = props.store.uiStore;

    /*----------------------------------
    RENDERING
  -----------------------------------*/
    return (
      <Styled>
        {isHome || isViewCart ? (
          <div className="sticky-header">
            <Header />
          </div>
        ) : null}
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
          <Route path="/cart" component={Cart} />
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
        {isHome || isViewCart ? <Footer /> : null}
      </Styled>
    );
  })
);

export default withRouter(HomePage);
