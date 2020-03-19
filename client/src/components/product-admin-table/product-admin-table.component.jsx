import React, { useState } from "react";
import DeleteIcon from "../delete-icon/delete-icon.component";
import EditIcon from "../edit-icon/edit-icon.component";
import DeleteAlert from "../delete-alert/delete-alert.component";
import ProductInputView from "../product-input-view/product-input-view.component";
import ProductInputForm from "../product-input-form/product-input-form.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { observer, inject } from "mobx-react";
import { graphql } from "react-apollo";
import {
  getProducts,
  deleteProductById
} from "../../graphql-queries/product.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import BootstrapTable from "react-bootstrap-table-next";
import { Styled } from "./product-admin-table.styles";
/*--------------------------------------------------------
 COMPONENT: ProductTable
--------------------------------------------------------*/
const ProductTable = inject("store")(
  observer(props => {
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [imgPublicId, setImgPublicId] = useState("");
    const [rowStyles, setRowStyles] = useState("tbl-row");
    const data = props.data ? props.data : [];
    const { isDeleteProd, isEditProd } = props.store.prodStore;
    const setLocalState = (id, name, imgPublicId, rowStyles) => {
      setId(id);
      setName(name);
      setImgPublicId(imgPublicId);
      setRowStyles(rowStyles);
    };

    /*----------------------------------
      EVENT HANDLING
    -----------------------------------*/
    const confirmedDeleteProduct = async () => {
      await props
        .DeleteProductById({
          variables: {
            id: id,
            imgPublicId: imgPublicId
          },
          refetchQueries: [{ query: getProducts }]
        })
        .then(data => {
          setLocalState(null, "", "", null);
          props.store.prodStore.cancelDeleteProduct();
          return;
        })
        .catch(err => {
          console.log(err);
          return;
        });
    };

    const handleDeleteProduct = row => {
      setLocalState(row.id, row.name, row.image_public_id, "warning-row");
      props.store.prodStore.deleteProduct();
    };

    const handleEditProduct = row => {
      setId(row.id);
      props.store.prodStore.editProduct();
    };

    /*----------------------------------
      CONFIG: TABLES, ROW, COLUMN
    -----------------------------------*/
    const listColumns = [
      { dataField: "name", text: "Name" },
      {
        dataField: "description",
        text: "Description",
        formatter: (cell, row) => cell.substring(0, 30) + "..."
      },
      { dataField: "in_stock", text: "In stock" },
      {
        dataField: "actions",
        text: "Actions",
        formatter: (cellContent, row) => {
          return (
            <div className="action-icons">
              <EditIcon onClick={e => handleEditProduct(row)} />
              <DeleteIcon onClick={e => handleDeleteProduct(row)} />
            </div>
          );
        }
      }
    ];

    const expandedForm = {
      renderer: row => {
        const product = data.filter(item => item.id === row.id);
        const compToBeRender =
          isEditProd === true && product[0].id === id ? (
            <ProductInputForm selectedProd={product[0]} />
          ) : (
            <ProductInputView selectedProd={product[0]} />
          );
        return <div>{compToBeRender}</div>;
      },
      showExpandColumn: true,
      expandByColumnOnly: false
      //onlyOneExpanding: isEditProd // ONLY ALLOW TO EXPAND ONE ROW IN EDIT MODE
    };

    // High light selected row
    const rowClasses = (row, rowIndex) => {
      let classes = "tbl-row";

      if (row.id === id && isDeleteProd) {
        classes = rowStyles;
      }
      return classes;
    };
    /*----------------------------------
        RENDERING
    -----------------------------------*/
    return (
      <Styled>
        {isDeleteProd ? (
          <DeleteAlert
            name={name.toUpperCase()}
            cancel={props.store.prodStore.cancelDeleteProduct}
            confirm={confirmedDeleteProduct}
          />
        ) : null}
        <BootstrapTable
          keyField="id"
          data={data}
          columns={listColumns}
          expandRow={expandedForm}
          rowClasses={rowClasses}
          headerClasses="tbl-header"
        />
      </Styled>
    );
  })
);

export default graphql(deleteProductById, { name: "DeleteProductById" })(
  ProductTable
);
