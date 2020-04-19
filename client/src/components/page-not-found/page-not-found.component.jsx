import React from "react";
import { Link } from "react-router-dom";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row } from "react-bootstrap";
import { Styled } from "./page-not-found.styles";
/*--------------------------------------------------------
 COMPONENT: PageNotFound 
--------------------------------------------------------*/
const PageNotFound = inject("store")(
  observer((props) => {
    const { uiStore } = props.store;
    const vistNotFoundPage = () => {
      uiStore.visitNotFound();
    };

    const onHomeclick = (e) => {
      uiStore.visitHomePage();
    };

    return (
      <Styled>
        <Container>
          <Row>
            <div className="content">
              {vistNotFoundPage()}
              <div className="text__404">
                <div className="text__digits">
                  <span>4</span>
                </div>
                <div className="text__digits">
                  <span>0</span>
                </div>
                <div className="text__digits">
                  <span>4</span>
                </div>
              </div>
              <hr />
              <div className="text__description">Oops! A cat ate my page</div>
              <div>
                <Link to="/" onClick={onHomeclick} className="text__go-home">
                  Go back home
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </Styled>
    );
  })
);

export default PageNotFound;
