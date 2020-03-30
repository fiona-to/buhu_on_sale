import React from "react";
import { Link } from "react-router-dom";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Navbar, Nav, Form, FormControl, Button, Badge } from "react-bootstrap";
import IosCart from "react-ionicons/lib/IosCart";
import { Styled } from "./header.styles.js";
/*--------------------------------------------------------
 COMPONENT: Header 
--------------------------------------------------------*/
export const Header = inject("store")(
  observer(props => {
    const productItemCount = () => {
      const { products } = props.store.cart;
      let count = 0;
      products.forEach(item => {
        count += item.quantity;
      });
      return count;
    };
    /*----------------------------------
      RENDERING
    -----------------------------------*/
    return (
      <Styled>
        <Navbar expand="lg">
          <Navbar.Brand>BuHu</Navbar.Brand>
          <Navbar.Toggle size="sm" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                className="nav-link"
                to={{
                  pathname: "/",
                  state: {
                    isHome: true
                  }
                }}
              >
                Home
              </Link>
              <Link
                className="nav-link"
                to={{
                  pathname: "/admin",
                  state: {
                    isHome: false
                  }
                }}
              >
                Admin
              </Link>
              {/* <Link className="nav-link" to="/" disabled>
              Login
            </Link>
             */}
              <Link className="nav-link" to="/">
                <IosCart fontSize="26px" color="#bbe1fa" />

                <Badge pill>{productItemCount()}</Badge>
                {/* <span className="cart-text">Cart</span> */}
              </Link>
               
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                size="sm"
                placeholder="My favorite"
                className="mr-sm-2"
              />
              <Button size="sm" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Styled>
    );
  })
);
