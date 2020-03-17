import React, { Component } from "react";
import { withRouter } from "react-router-dom";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { graphql } from "react-apollo";
import { getProductById } from "../../graphql-queries/product.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import IosCart from "react-ionicons/lib/IosCart";
import { Styled } from "./product-detail.styles";
/*--------------------------------------------------------
 COMPONENT: ProductDetail 
--------------------------------------------------------*/
class ProductDetail extends Component {
  state = {
    quantiy: 0
  };

  handleValueChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddToCartClick = e => {};

  displayDetail = () => {
    if (this.props.GetProductById.productById) {
      const {
        name,
        description,
        image_url,
        // pricing: { sale_price },
        in_stock
        //manufacture_detail: { model_number }
      } = this.props.GetProductById.productById;
      return (
        <>
          <Row>
            <Col xs={5} sm={5} md={5} lg={5}>
              <Card>
                <Card.Img variant="top" src={image_url} />
              </Card>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7}>
              <h3 className="product-name">{name}</h3>
              <div className="product-summary">
                <div>
                  {/* Retail price: {sale_price ? `$ ${sale_price}` : "Please call"} */}
                  Retail price: $ 128.00
                </div>
                <div>Color: TBD</div>
                <div>Condition: TBD - Like new</div>
                <div>Shipping: TBD - USA, VN</div>
                {in_stock ? (
                  <div>
                    <span className="in-stock">In stock</span>
                    <span className="order-soon-label">
                      (Order soon, only {in_stock} left)
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="out-of-stock">Out of stock</span>
                  </div>
                )}

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Qty:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      className="quantity"
                      type="number"
                      name="quantiy"
                      size="sm"
                      required
                      value={this.state.quantiy}
                      onChange={this.handleValueChanged}
                    />
                  </Col>
                </Form.Group>
              </div>
              <div>
                <Button
                  size="lg"
                  variant="primary"
                  onClick={this.onAddToCartClick}
                  disabled={!in_stock}
                >
                  {/* backgroundColor: "red", */}
                  <IosCart fontSize="26px" color="#bbe1fa" />
                  Add to Cart
                </Button>
              </div>
            </Col>
          </Row>
          <hr />{" "}
          <Row className="product-detail">
            <Col>
              <div>
                <h4>Product details</h4>
              </div>
              {/* <div>Model:{model_number ? `${model_number}` : null}</div> */}
              <div>Model: EOX1290</div>
              <div>Material: TBD</div>
              <div>Note: {description}</div>
            </Col>
          </Row>
        </>
      );
    }
  };
  /*----------------------------------
    RENDERING
  -----------------------------------*/
  render() {
    return (
      <Styled>
        <Container>
          {this.props.GetProductById.loading ? (
            <Row>
              <div>Still loading...</div>
            </Row>
          ) : (
            this.displayDetail()
          )}
        </Container>
      </Styled>
    );
  }
}

export default withRouter(
  graphql(getProductById, {
    name: "GetProductById",
    options: props => ({ variables: { id: props.match.params.id } })
  })(ProductDetail)
);
