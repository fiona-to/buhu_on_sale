import React from "react";
import { withRouter } from "react-router-dom";
/*----------------------------------
  Styles
-----------------------------------*/
import { Card } from "react-bootstrap";
import { Styled } from "../product-item/product-item.styles";

/*--------------------------------------------------------
 COMPONENT: ProductItem 
--------------------------------------------------------*/
const ProductItem = props => {
  const { id, image_url, name, pricing } = props.item;
  const handleDetailClick = () => {
    props.history.push({
      pathname: `${props.match.url}/product/${id}`,
      state: {
        isHome: true
      }
    });
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
            <div className="add-cart">Add to cart</div>
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
};

export default withRouter(ProductItem);
