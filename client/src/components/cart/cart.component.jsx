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
/*----------------------------------
  Data
-----------------------------------*/
const data = {
  id: "dddadafd",
  image_url:
    "http://res.cloudinary.com/giato/image/upload/v1583163043/plx5koy1axyjvpr6jgax.png",
  name:
    "Thermoflask Insulated 40 oz. Stainless Steel Water Bottle with Spout Lid, 2-pack 18/8 Food",
  quantity: 3,
  price: 100
};

/*--------------------------------------------------------
 COMPONENT: Cart 
--------------------------------------------------------*/
const Cart = inject("store")(
  observer(
    class Cart extends Component {
      render() {
        const { image_url, name, quantity, price } = data;
        return (
          <Styled>
            <Container>
              <Row>
                <Col xs={12} sm={12} md={8} lg={9}>
                  <h4 className="cart-item-text">Your cart: 3 items</h4>
                  <div className="grid-container">
                    <div className="select-img-card">
                      <img
                        src={image_url}
                        alt="product"
                        style={{ width: "72%" }}
                      />
                    </div>
                    <div>{name}</div>
                    <div>Qty. {quantity}</div>
                    <div>${price} ea</div>
                    <div>${quantity * price}</div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3}>
                  <div className="check-out-total">
                    <div>
                      <span>Subtotal (3 items): </span>
                      <span>$ 10</span>
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
            </Container>
          </Styled>
        );
      }
    }
  )
);

export default Cart;
