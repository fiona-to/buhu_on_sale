import React from "react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./about.styles";
/*--------------------------------------------------------
 COMPONENT: About
--------------------------------------------------------*/
const About = (props) => {
  return (
    <Styled>
      <div className="container">
        <div className="features">
          <div className="features__1">
            <h2>Features</h2>
            <ul>
              <li>View products based on category</li>
              <li>View all products</li>
              <li>Add products to Cart</li>
              <li>Eidt / Remove items in Cart</li>
              <li>CRUD category or products</li>
              <li>Upload / Delete images</li>
              <li>View statistic / Sales charts</li>
            </ul>
          </div>
          <div className="features__2">
            <h2>To be developing</h2>
            <ul>
              <li>Login / Log out / Permission</li>
              <li>Blogs</li>
              <li>Search engine</li>
              <li>Rating / Comment products</li>
              <li>Payment</li>
            </ul>
          </div>
        </div>
        <div className="grid">
          <div className="intro_general">
            <h2 className="open__source">Open Source</h2>
            <h2 className="open__packages">& Packages included</h2>
          </div>
          <div className="intro__react">
            {/* <p>create-react-app</p>
            <p>react-bootstrap</p>
            <p>react-bootstrap-table</p>
            <p>react-router-dom</p>
            <p>recharts</p>
            <p>styled-components</p>
            <p>react-ionicons</p>
            <p>react-breadcrumbs</p> */}
            <img
              className="intro__react-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/React-vendors_fdpoln.png"
              alt="react-logo"
            />
          </div>
          <div className="intro__mobx">
            {/* <p>State Management - MobX</p> */}
            <img
              className="intro__mobx-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/mobx_v1i6mk.png"
              alt="mobx-logo"
            />
          </div>
          <div className="intro__apollo">
            <img
              className="intro__apollo-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/apollo_i6dgk3.png"
              alt="apollo-logo"
            />
          </div>
          <div className="intro__graph-ql">
            {/* <p>GraphQL</p> */}
            <img
              className="intro__graph-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/graphql_ikvpx5.png"
              alt="graph-logo"
            />
          </div>
          <div className="intro__node__express">
            {/* <p>Node & Express JS</p> */}
            <img
              className="intro__node__express-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/node-express-js_xdodui.png"
              alt="node-express-logo"
            />
          </div>
          <div className="intro__cloudinary">
            <img
              className="intro__cloudinary-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/cloudinary_x9kkka.png"
              alt="cloudinary-logo"
            />
          </div>
          <div className="intro__mongo-db">
            {/* <p>No SQL Database - MongoDB</p> */}
            <img
              className="intro__mongo-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/mongo-db_bx6ktw.png"
              alt="mongo-logo"
            />
          </div>

          <div className="intro__heroku">
            {/* <p>Heroku</p> */}
            <img
              className="intro__heroku-logo"
              src="https://res.cloudinary.com/giato/image/upload/v1578950719/heroku_jy5nw5.png"
              alt="heroku-logo"
            />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default About;
