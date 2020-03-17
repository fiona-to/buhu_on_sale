import React from "react";
import AdminHeader from "../admin-header/admin-header.component";
import MainButton from "../main-button/main-button.component";
import ProductTable from "../product-admin-table/product-admin-table.component";
import ProductInputForm from "../product-input-form/product-input-form.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
import { graphql } from "react-apollo";
import { getProducts } from "../../graphql-queries/product.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./product-admin.styles";
/*--------------------------------------------------------
 COMPONENT: ProductAdmin
--------------------------------------------------------*/
const ProductAdmin = inject("store")(
  observer(props => {
    const { isAddNewProd } = props.store.prodStore;
    /*----------------------------------
      EVENT HANDLING
    -----------------------------------*/
    const displayProducts = products => {
      return <ProductTable data={products} />;
    };
    /*----------------------------------
      RENDERING
  -----------------------------------*/
    return (
      <Styled>
        <AdminHeader headerText="Products management" />
        <MainButton
          size="sm"
          onClick={e => props.store.prodStore.addNewProduct()}
          disabled={isAddNewProd}
        >
          Add New
        </MainButton>
        {isAddNewProd ? (
          <div>
            <ProductInputForm />
          </div>
        ) : null}
        {props.ProductList.loading ? (
          // TODO: ADD SPINNER
          <div>Loading...</div>
        ) : (
          displayProducts(props.ProductList.products)
        )}
      </Styled>
    );
  })
);

export default graphql(getProducts, { name: "ProductList" })(ProductAdmin);
