import React from "react";
import CategoryItem from "../category-item/category-item.component";
import { AppSpinner } from "../spinner/spinner.component";
/*----------------------------------
GraphQL, MobX
-----------------------------------*/
import { graphql } from "react-apollo";
import { getCategories } from "../../graphql-queries/category.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col } from "react-bootstrap";
import { Styled } from "./category-page.styles.js";
/*--------------------------------------------------------
 COMPONENT: CategoryPage 
--------------------------------------------------------*/
const CategoryPage = props => {
  /*----------------------------
    renderCategoryList
  ----------------------------*/
  const renderCategoryList = () => {
    if (props.Categories.loading) {
      return <AppSpinner />;
    } else {
      const { categories } = props.Categories;

      if (categories) {
        return categories.map(category => {
          return (
            <Col xs={12} sm={12} md={4} key={category.id}>
              <CategoryItem
                category={category}
                linkTo={"/product"}
                {...props}
              />
            </Col>
          );
        });
      }
    }
  };
  /*----------------------------------
    RENDERING
  -----------------------------------*/
  return (
    <Styled>
      <Container>
        {/* <Row>
          <h1>{props.Categories.getTime}</h1>
        </Row> */}
        <Row>
          {renderCategoryList()}
          {/* </Row><div>Blogs...</div> */}
        </Row>
      </Container>
    </Styled>
  );
};

export default graphql(getCategories, { name: "Categories" })(CategoryPage);
