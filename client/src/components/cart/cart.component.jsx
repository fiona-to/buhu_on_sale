import React from "react";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col, Button } from "react-bootstrap";
import IosCard from "react-ionicons/lib/IosCard";
import { Styled } from "./cart.styles";
/*--------------------------------------------------------
 COMPONENT: Cart 
--------------------------------------------------------*/
const Cart = inject("store")(
  observer((props) => {
    /*----------------------------------
      Func: displayCheckOut
    -----------------------------------*/
    const displayCheckOut = ({ cart, totalItems }) => {
      const totalPrice = cart.calculateTotalPrice();
      const taxAndFee = (totalPrice * 7) / 100;
      const deliveryFee = 8;
      const payment = totalPrice + taxAndFee + deliveryFee;
      return (
        <div key="price-and-payment">
          <div className="checkout-grid-container">
            <div>Subtotal ({totalItems} items)</div>
            <div className="right-align">${totalPrice.toFixed(2)}</div>
          </div>
          <div className="checkout-grid-container">
            <div>Est. taxes & fees (7%)</div>
            <div className="right-align">${taxAndFee.toFixed(2)}</div>
          </div>
          <div className="checkout-grid-container">
            <div>Delivery fees</div>
            <div className="right-align">${deliveryFee}</div>
          </div>
          <hr />
          <div className="checkout-grid-container">
            <div>Est. total</div>
            <div className="emphasise-text right-align">
              ${payment.toFixed(2)}
            </div>
          </div>
          <Button size="lg" variant="primary">
            <IosCard fontSize="26px" color="#bbe1fa" />
            <span className="check-out">Payment</span>
          </Button>
        </div>
      );
    };

    /*----------------------------------
      Func: displayViewCart
    -----------------------------------*/
    const displayViewCart = () => {
      const { cart } = props.store;
      const { products } = cart;
      const totalItems = cart.countTotalItem();
      return (
        <Row>
          <Col xs={12} sm={12} md={8} lg={9}>
            <h4 className="cart-header-text">Your cart: {totalItems} items</h4>
            {products.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </Col>
          <Col xs={12} sm={12} md={4} lg={3}>
            {displayCheckOut({ cart, totalItems })}
          </Col>
        </Row>
      );
    };

    /*----------------------------------
      RENDERING
    -----------------------------------*/
    return (
      <Styled>
        <Container>
          {props.store.cart.products.length ? (
            displayViewCart()
          ) : (
            <div>Your cart is empty</div>
          )}
        </Container>
      </Styled>
    );
  })
);

export default withRouter(Cart);
