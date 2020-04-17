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
  observer((props) => {
    const { uiStore, cart } = props.store;

    /*----------------------------------
      EVENT HANDLING
    -----------------------------------*/
    const onHomeClick = () => {
      uiStore.visitHomePage();
    };

    const onAdminClick = () => {
      uiStore.visitAdmin();
    };

    const onViewCartClick = () => {
      uiStore.visitViewCart();
    };

    const onAboutClick = () => {
      uiStore.visitAbout();
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
                onClick={onHomeClick}
                to={{
                  pathname: "/",
                }}
              >
                Home
              </Link>
              <Link
                className="nav-link"
                onClick={onAdminClick}
                to={{
                  pathname: "/admin",
                }}
              >
                Admin
              </Link>
              <Link
                className="nav-link"
                onClick={onAboutClick}
                to={{
                  pathname: "/about",
                }}
              >
                About
              </Link>
              {/* <Link className="nav-link" to="/" disabled>
              Login
            </Link>
             */}
              <Link className="nav-link" onClick={onViewCartClick} to="/cart">
                <IosCart fontSize="26px" color="#bbe1fa" />
                <Badge pill>{cart.countTotalItem}</Badge>
              </Link>
               
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                size="sm"
                placeholder="My favorite"
                className="mr-sm-2"
              />
              <Button size="sm" variant="outline-success" disabled>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Styled>
    );
  })
);
