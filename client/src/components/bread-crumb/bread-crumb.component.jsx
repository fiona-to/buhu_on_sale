import React from "react";
import { Route } from "react-router-dom";
import { Breadcrumb } from "react-breadcrumbs";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./bread-crumb.styles";

/*--------------------------------------------------------
 COMPONENT: AppBreadCrumb 
--------------------------------------------------------*/
const AppBreadCrumb = ({
  component: Component,
  includeSearch = false,
  render,
  ...props
}) => {
  /*----------------------------------
    RENDERING
  -----------------------------------*/
  return (
    <Styled>
      <Route
        {...props}
        render={routeProps => (
          <Breadcrumb
            data={{
              title: props.title,
              pathname: routeProps.match.url,
              search: includeSearch ? routeProps.location.search : null
            }}
          >
            {/* {Component ? <Component {...routeProps} /> : render(routeProps)} */}
            {Component ? <Component {...routeProps} /> : null}
          </Breadcrumb>
        )}
      />
    </Styled>
  );
};

export default AppBreadCrumb;
