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
import PageNotFound from "../page-not-found/page-not-found.component";
import About from "../about/about.component";
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
        <div id="page-container">
          <div id="content-wrapper">
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
              <Route
                exact
                key="categoryPage"
                path="/"
                component={CategoryPage}
              />
              <Route path="/products" component={AllProductRoutes} />
              <Route path="/cart" component={Cart} />
              <Route path="/about" component={About} />
              {HomePageRouteConfig.map((route, index) => (
                <AppBreadCrumb
                  key={index}
                  exact={route.exact}
                  title={route.title}
                  path={route.path}
                  component={route.childContent}
                />
              ))}
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <div id="footer">
            <Footer />
          </div>
          {/* <div id="footer">{isHome || isViewCart ? <Footer /> : null}</div> */}
        </div>
      </Styled>
    );
  })
);

export default withRouter(HomePage);
