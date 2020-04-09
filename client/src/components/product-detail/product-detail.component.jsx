import React, { Component } from "react";
import { withRouter } from "react-router-dom";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { graphql } from "react-apollo";
import { getProductById } from "../../graphql-queries/product.graphql";
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import IosCart from "react-ionicons/lib/IosCart";
import MdCheckmark from "react-ionicons/lib/MdCheckmark";
import { Styled } from "./product-detail.styles";
/*--------------------------------------------------------
 COMPONENT: ProductDetail 
--------------------------------------------------------*/
const ProductDetail = inject("store")(
  observer(
    class ProductDetail extends Component {
      constructor(props) {
        super(props);
        this.state = {
          quantity: 0,
        };
      }

      componentDidMount() {
        this.setState({ quantity: this.mapStoreToState() });
      }

      mapStoreToState = () => {
        const { cart } = this.props.store;
        let quantity = 0;
        cart.products.forEach((item) => {
          if (item.id === this.props.match.params.id) {
            quantity = item.quantity;
          }
        });
        return quantity;
      };
      // At the time componentDidMount is called
      // may or maynot apollo fetching has NOT completed
      // so below does not work:
      //
      // componentDidMount() {
      //   if (!this.props.GetProductById.loading) {
      //     this.mapStoreToState();
      //   }
      // }

      // DO NOT CALL this.setState IN FOREACH LOOP
      // mapStoreToState = () => {
      //   const { cart } = this.props.store;
      //   cart.products.forEach(item => {
      //     if (item.id === this.props.GetProductById.productById.id) {
      //       this.setState({ quantity: item.quantity });
      //     }
      //   });
      // };

      /*----------------------------------
        EVENT HANDLING
      -----------------------------------*/
      handleValueChanged = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

      onAddToCartClick = (e) => {
        const quantity = parseInt(this.state.quantity);
        if (quantity > 0) {
          const {
            id,
            name,
            image_url,
            price,
          } = this.props.GetProductById.productById;
          this.props.store.cart.addToCart({
            id,
            name,
            image_url,
            price,
            quantity,
          });
        }
      };

      onCheckOutClick = (e) => {
        const { uiStore } = this.props.store;
        uiStore.visitViewCart();
        this.props.history.push("/cart");
      };

      displayDetail = () => {
        if (this.props.GetProductById.productById) {
          const {
            name,
            description,
            image_url,
            in_stock,
            price,
            //manufacture_detail: { model_number }
          } = this.props.GetProductById.productById;

          const { cart } = this.props.store;

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
                      Price: <span className="retail-price">{`$${price}`}</span>
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

                    <Form.Group as={Row} controlId="quantity">
                      <Form.Label column sm="2">
                        Qty:
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          className="quantity"
                          as="select"
                          size="sm"
                          name="quantity"
                          disabled={!in_stock}
                          value={this.state.quantity}
                          onChange={this.handleValueChanged}
                        >
                          <option defaultValue>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Col>
                    </Form.Group>
                  </div>
                  <div>
                    <span className="btn-add-to-cart">
                      <Button
                        size="lg"
                        variant="primary"
                        onClick={this.onAddToCartClick}
                        disabled={!in_stock}
                      >
                        <IosCart fontSize="26px" color="#bbe1fa" />
                        <span className="add-to-cart-text">Add to Cart</span>
                      </Button>
                    </span>
                    <Button
                      size="lg"
                      variant="primary"
                      disabled={!cart.countTotalItem()}
                      onClick={this.onCheckOutClick}
                    >
                      <MdCheckmark fontSize="26px" color="#bbe1fa" />
                      <span className="check-out">Check Out</span>
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
  )
);

export default withRouter(
  graphql(getProductById, {
    name: "GetProductById",
    options: (props) => ({ variables: { id: props.match.params.id } }),
  })(ProductDetail)
);
