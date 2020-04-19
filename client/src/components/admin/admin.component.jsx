import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../sidebar/sidebar.component";
import PageNotFound from "../page-not-found/page-not-found.component";
import { Routes as SideBarRouteConfig } from "../sidebar/sidebar.routes";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col } from "react-bootstrap";
import { Styled } from "./admin.styles";
/*--------------------------------------------------------
 COMPONENT: Admin 
--------------------------------------------------------*/
const Admin = (props) => {
  return (
    <Styled>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={3} lg={2}>
            <div className="sticky-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xs={12} sm={12} md={9} lg={10}>
            <Switch>
              {SideBarRouteConfig.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.childContent />}
                />
              ))}
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Styled>
  );
};

export default Admin;
