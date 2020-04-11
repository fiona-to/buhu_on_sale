import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  React ionicons
-----------------------------------*/
import MdStats from "react-ionicons/lib/MdStats";
import IosConstructOutline from "react-ionicons/lib/IosConstructOutline";
import IosLogOut from "react-ionicons/lib/IosLogOut";
import IosMusicalNotesOutline from "react-ionicons/lib/IosMusicalNotesOutline";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./sidebar.styles";
/*--------------------------------------------------------
 COMPONENT: Sidebar 
--------------------------------------------------------*/
const Sidebar = inject("store")(
  observer((props) => {
    const dynamicClass = (value) => {
      const { pathname } = props.location;
      let selectedStyle = "nav-link";
      if (pathname.includes(value)) {
        selectedStyle = "nav-link nav-link__selected";
      }

      return selectedStyle;
    };

    const onLogOutClick = (e) => {
      props.store.uiStore.visitHomePage();
    };

    /*----------------------------------
    RENDERING
  -----------------------------------*/
    return (
      <Styled>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/admin" className="flex-column">
              <Navbar.Brand>
                <IosMusicalNotesOutline fontSize="26px" color="#bbe1fa" />
                <span className="navbar-brand__text">BuHu</span>
              </Navbar.Brand>
              <Link
                className={dynamicClass("dashboard")}
                to={{
                  pathname: "/admin/dashboard",
                }}
              >
                <MdStats fontSize="26px" color="#bbe1fa" />
                <span className="side-bar__text">Dashboard</span>
              </Link>
              <Link
                className={dynamicClass("category")}
                to={{
                  pathname: "/admin/category",
                }}
              >
                <IosConstructOutline fontSize="26px" color="#bbe1fa" />
                <span className="side-bar__text">Categories</span>
              </Link>
              <Link
                className={dynamicClass("product")}
                to={{
                  pathname: "/admin/product",
                }}
              >
                <IosConstructOutline fontSize="26px" color="#bbe1fa" />
                <span className="side-bar__text">Products</span>
              </Link>

              <Link
                className={dynamicClass("logout")}
                onClick={onLogOutClick}
                to={{
                  pathname: "/",
                }}
              >
                <IosLogOut fontSize="26px" color="#bbe1fa" />
                <span className="side-bar__text">Log out</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styled>
    );
  })
);

export default withRouter(Sidebar);
