import React from "react";
import AdminHeader from "../admin-header/admin-header.component";
import CategoryInputForm from "../category-input-form/category-input-form.component";
import CategoryTable from "../category-admin-table/category-admin-table.component";
import MainButton from "../main-button/main-button.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
import { graphql } from "react-apollo";
import { getCategories } from "../../graphql-queries/category.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./category-admin.styles";
/*--------------------------------------------------------
 COMPONENT: CategoryAdmin
--------------------------------------------------------*/
const CategoryAdmin = inject("store")(
  observer(props => {
    const { isAddNewCat } = props.store.catStore;

    /*----------------------------------
      EVENT HANDLING
    -----------------------------------*/
    const displayCategories = categories => {
      return <CategoryTable data={categories} />;
    };
    /*----------------------------------
      RENDERING
    -----------------------------------*/
    return (
      <Styled>
        <AdminHeader headerText="Categories management" />
        <MainButton
          onClick={e => props.store.catStore.addNewCategory()}
          size="sm"
          disabled={isAddNewCat}
        >
          Add New
        </MainButton>
        {isAddNewCat ? (
          <div>
            <CategoryInputForm />
          </div>
        ) : null}
        {props.CategoryList.loading ? (
          // TODO: ADD SPINNER
          <div>Loading...</div>
        ) : (
          displayCategories(props.CategoryList.categories)
        )}
      </Styled>
    );
  })
);

export default graphql(getCategories, { name: "CategoryList" })(CategoryAdmin);
