import React from "react";
import { Link } from "react-router-dom";
/*----------------------------------
  Styles
-----------------------------------*/
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Styled } from "./header.styles.js";

/*--------------------------------------------------------
 COMPONENT: Header 
--------------------------------------------------------*/
export const Header = () => {
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
             
            <Link className="nav-link" to="/">
              Cart
            </Link> */}
             
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
};
