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
        <div className="grid">
          <div className="intro_general">
            <p>Open Source & Packages included</p>
          </div>
          <div className="intro__react">
            <p>create-react-app</p>
            <p>react-bootstrap</p>
            <p>react-bootstrap-table</p>
            <p>react-router-dom</p>
            <p>recharts</p>
            <p>styled-components</p>
            <p>react-ionicons</p>
            <p>react-breadcrumbs</p>
          </div>
          <div className="intro__apollo">
            <p>apollo-client</p>
          </div>
          <div className="intro__cloudinary">
            <p>Cloudinary Image Management</p>
          </div>
          <div className="intro__node__express">
            <p>Node & Express JS</p>
          </div>
          <div className="intro__mobx">
            <p>State Management - MobX</p>
          </div>
          <div className="intro__mongo-db">
            <p>No SQL Database - MongoDB</p>
          </div>
          <div className="intro__graph-ql">
            <p>GraphQL</p>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default About;
