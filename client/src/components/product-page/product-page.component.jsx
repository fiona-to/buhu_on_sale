import React from "react";
import { AppSpinner } from "../spinner/spinner.component";
import ProductItem from "../product-item/product-item.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { graphql } from "react-apollo";
import { getProducts } from "../../graphql-queries/product.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col } from "react-bootstrap";
import { Styled } from "./product-page.styles";
/*--------------------------------------------------------
 COMPONENTS: ProductPage
--------------------------------------------------------*/
const ProductPage = props => {
  const displayProductItem = () => {
    if (props.Products.loading) {
      return <AppSpinner />;
    } else {
      const { products } = props.Products;

      if (products) {
        return products.map(item => {
          return (
            <Col xs={6} sm={6} md={3} key={item.id}>
              <ProductItem item={item} />
            </Col>
          );
        });
      }
    }
  };

  /*----------------------------------
    RENDERING
  -----------------------------------*/
  return (
    <Styled>
      <Container>
        {/* <Row>
          <h1>{props.Products.getTime}</h1>
        </Row> */}
        <Row>{displayProductItem()}</Row>
      </Container>
    </Styled>
  );
};

export default graphql(getProducts, { name: "Products" })(ProductPage);
