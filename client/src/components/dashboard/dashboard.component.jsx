import React, { Component } from "react";
import AdminHeader from "../admin-header/admin-header.component";
import ProductSaleStats from "../product-sale-stats/product-sale-stats.component";
import CategoryStats from "../category-stats/category-stats.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
import { graphql } from "react-apollo";
import compose from "lodash.flowright";
import { getCategories } from "../../graphql-queries/category.graphql";
import {
  convertCategoryToPieChartData,
  convertCategoryToProductBarChartData
} from "../../utils/rechart-utils";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col } from "react-bootstrap";
import { Styled } from "./dashboard.styles";
/*--------------------------------------------------------
 COMPONENT: Dashboard 
--------------------------------------------------------*/
const Dashboard = inject("store")(
  observer(
    class Dashboard extends Component {
      /*----------------------------------
      RENDERING
      -----------------------------------*/
      render() {
        return (
          <Styled>
            <AdminHeader headerText="Dashboard" />
            <Container fluid>
              <Row>
                <Col xs={12} sm={12} md={8} lg={8}>
                  {this.props.GetCategories.loading ? (
                    <div>Still loading...</div>
                  ) : (
                    <ProductSaleStats
                      data={convertCategoryToProductBarChartData(
                        this.props.GetCategories.categories
                      )}
                    />
                  )}
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  {this.props.GetCategories.loading ? (
                    <div>Still loading...</div>
                  ) : (
                    <CategoryStats
                      data={convertCategoryToPieChartData(
                        this.props.GetCategories.categories
                      )}
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </Styled>
        );
      }
    }
  )
);

export default compose(graphql(getCategories, { name: "GetCategories" }))(
  Dashboard
);
