import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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
  observer(
    class Cart extends Component {
      /*----------------------------------
        EVENT HANDLING
      -----------------------------------*/
      onDetailClick = () => {
        this.props.store.uiStore.visitHomePage();
      };
      /*----------------------------------
        Func: displayItem
      -----------------------------------*/
      displayItem = (item) => {
        const { id, image_url, name, quantity, price } = item;
        return (
          <div>
            <div key={id} className="item-grid-container">
              <div className="select-img-card">
                <Link
                  onClick={this.onDetailClick}
                  to={{ pathname: `/products/${id}` }}
                >
                  <img src={image_url} alt="product" style={{ width: "72%" }} />
                </Link>
              </div>
              <div>
                <Link
                  className="product-link"
                  onClick={this.onDetailClick}
                  to={{ pathname: `/products/${id}` }}
                >
                  {name}
                </Link>
              </div>
              <div>
                Qty. <span className="emphasise-text">{quantity}</span>
              </div>
              <div>${price} ea</div>
              <div className="emphasise-text">${quantity * price}</div>
            </div>
            <Link className="cart-item-remove" to="">
              Remove
            </Link>
            <hr />
          </div>
        );
      };

      /*----------------------------------
        Func: displayCheckOut
      -----------------------------------*/
      displayCheckOut = ({ cart, totalItems }) => {
        const totalPrice = cart.calculateTotalPrice();
        const taxAndFee = (totalPrice * 7) / 100;
        const deliveryFee = 20;
        const payment = totalPrice + taxAndFee + deliveryFee;
        return (
          <div>
            <div key="totalPrice" className="checkout-grid-container">
              <div>Subtotal ({totalItems} items)</div>
              <div>${totalPrice}</div>
            </div>
            <div key="taxAndFee" className="checkout-grid-container">
              <div>Est. taxes & fees (7%)</div>
              <div>${taxAndFee}</div>
            </div>
            <div key="deliveryFee" className="checkout-grid-container">
              <div>Delivery fees</div>
              <div>${deliveryFee}</div>
            </div>
            <hr />
            <div key="payment" className="checkout-grid-container">
              <div>Est. total</div>
              <div>
                <span className="emphasise-text">${payment}</span>
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
      displayViewCart = () => {
        const { cart } = this.props.store;
        const { products } = cart;
        const totalItems = cart.countTotalItem();
        return (
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <h4 className="cart-item-text">Your cart: {totalItems} items</h4>
              {products.map((item) => {
                return this.displayItem(item);
              })}
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              {this.displayCheckOut({ cart, totalItems })}
            </Col>
          </Row>
        );
      };

      /*----------------------------------
        RENDERING
      -----------------------------------*/
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

export default withRouter(Cart);
