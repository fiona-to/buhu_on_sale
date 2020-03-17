import React from "react";
import { withRouter } from "react-router-dom";
/*----------------------------------
  Styles
-----------------------------------*/
import { Card, Button, CardDeck } from "react-bootstrap";
import { Styled } from "./category-item.styles.js";
/*--------------------------------------------------------
 COMPONENT: CategoryItem 
--------------------------------------------------------*/
const CategoryItem = props => {
  const handleShopNowClicked = e => {
    props.history.push({
      pathname: props.linkTo,
      state: {
        isHome: true
      }
    });
  };

  const { name, description, image_url } = props.category;
  /*----------------------------------
    RENDERING
  -----------------------------------*/
  return (
    <Styled>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{name.toUpperCase()}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button size="sm" variant="primary" onClick={handleShopNowClicked}>
              SHOP NOW >>
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Styled>
  );
};

export default withRouter(CategoryItem);
