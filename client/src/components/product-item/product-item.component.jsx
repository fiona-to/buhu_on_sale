import React from "react";
import { withRouter } from "react-router-dom";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Card } from "react-bootstrap";
import { Styled } from "../product-item/product-item.styles";

/*--------------------------------------------------------
 COMPONENT: ProductItem 
--------------------------------------------------------*/
const ProductItem = inject("store")(
  observer((props) => {
    const { id, image_url, name, pricing, in_stock } = props.item;

    const isAllProductPage = props.isAllProductPage ? true : false;
    /*----------------------------------
      EVENT HANDLING
    -----------------------------------*/
    const handleDetailClick = () => {
      props.history.push({
        pathname: isAllProductPage
          ? `/products/${id}`
          : `${props.match.url}/product/${id}`,
        state: {
          isHome: true,
        },
      });
    };

    const handleAddToCart = () => {
      props.store.cart.addOneToCart({ id, name, image_url });
    };

    /*----------------------------------
      RENDERING
    -----------------------------------*/
    return (
      <Styled>
        <Card>
          <div className="img-container">
            <Card.Img variant="top" src={image_url} />
            <div className="btn-container">
              <div className="detail" onClick={handleDetailClick}>
                Details
              </div>
              <div
                className={in_stock > 0 ? "add-cart" : "disabled-add-cart"}
                onClick={handleAddToCart}
              >
                Add to cart
              </div>
            </div>
          </div>
          <div className="txt-container">
            <div className="title">{name}</div>
            <div className="price">
              {pricing ? `$ ${pricing.sale_price}` : "Call us"}
            </div>
          </div>
        </Card>
      </Styled>
    );
  })
);

export default withRouter(ProductItem);
