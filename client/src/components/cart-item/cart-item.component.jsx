import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Form } from "react-bootstrap";
import { Styled } from "./cart-item.styles";
/*--------------------------------------------------------
 COMPONENT: CartItem 
--------------------------------------------------------*/
const CartItem = inject("store")(
  observer((props) => {
    const [quantity, setQuantity] = useState(0);
    const { cart, uiStore } = props.store;
    const { id, image_url, name, price } = props.item;

    useEffect(() => {
      setQuantity(props.item.quantity);
    }, [props.item.quantity]);
    /*----------------------------------
        EVENT HANDLING
    -----------------------------------*/
    const onDetailClick = () => {
      uiStore.visitHomePage();
    };

    const onRemoveClick = (e) => {
      cart.removeProductById(e.currentTarget.id);
    };

    const onQuantityChange = (e) => {
      cart.updateQuantityById(e.target.name, parseInt(e.target.value));
      setQuantity(e.target.value);
    };

    /*----------------------------------
        RENDERING
    -----------------------------------*/
    return (
      <Styled>
        <div key={id}>
          <div className="item-grid-container">
            <div className="select-img-card">
              <Link
                onClick={onDetailClick}
                to={{ pathname: `/products/${id}` }}
              >
                <img src={image_url} alt="product" style={{ width: "72%" }} />
              </Link>
            </div>
            <div>
              <Link
                className="product-link"
                onClick={onDetailClick}
                to={{ pathname: `/products/${id}` }}
              >
                {name}
              </Link>
            </div>
            <div>
              <Form.Group controlId="quantity">
                <Form.Label>Qty:</Form.Label>
                <Form.Control
                  as="select"
                  size="sm"
                  name={id}
                  value={quantity}
                  onChange={onQuantityChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="right-align">${price} ea</div>
            <div className="emphasise-text right-align">
              ${quantity * price}
            </div>
          </div>
          <div className="cart-item-remove" onClick={onRemoveClick} id={id}>
            Remove
          </div>
          <hr />
        </div>
      </Styled>
    );
  })
);

export default CartItem;
