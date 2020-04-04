import React, { Component } from "react";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col, Button } from "react-bootstrap";
import MdCheckmark from "react-ionicons/lib/MdCheckmark";
import { Styled } from "./cart.styles";

/*--------------------------------------------------------
 COMPONENT: Cart 
--------------------------------------------------------*/
const Cart = inject("store")(
  observer(
    class Cart extends Component {
      displayItem = item => {
        const { id, image_url, name, quantity, price } = item;
        return (
          <div key={id} className="grid-container">
            <div className="select-img-card">
              <img src={image_url} alt="product" style={{ width: "72%" }} />
            </div>
            <div>{name}</div>
            <div>
              Qty. <span className="emphasise-text">{quantity}</span>
            </div>
            <div>${price} ea</div>
            <div className="emphasise-text">${quantity * price}</div>
          </div>
        );
      };

      displayViewCart = () => {
        const { cart } = this.props.store;
        const { products } = cart;
        const totalItems = cart.countTotalItem();
        return (
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <h4 className="cart-item-text">Your cart: {totalItems} items</h4>
              {products.map(item => {
                return this.displayItem(item);
              })}
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="check-out-total">
                <div>
                  <span>Subtotal ({totalItems} items): </span>
                  <span>$ {cart.calculateTotalPrice()}</span>
                </div>
                <div>
                  <span>Est. taxes & fees: </span>
                  <span>$ 0.68</span>
                </div>
                <div>
                  <span>Delivery fees: </span>
                  <span>$ 4.68</span>
                </div>
                <hr />
                <div>
                  <span>Est. total: </span>
                  <span>$ 10.68</span>
                </div>
              </div>
              <Button size="lg" variant="primary">
                <MdCheckmark fontSize="26px" color="#bbe1fa" />
                <span className="check-out">Check Out</span>
              </Button>
            </Col>
          </Row>
        );
      };

      render() {
        return (
          <Styled>
            <Container>
              {this.props.store.cart.products.length ? (
                this.displayViewCart()
              ) : (
                <div>Your cart is empty</div>
              )}
            </Container>
          </Styled>
        );
      }
    }
  )
);

export default Cart;
