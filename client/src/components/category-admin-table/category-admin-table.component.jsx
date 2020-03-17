import React, { useState } from "react";
import DeleteIcon from "../delete-icon/delete-icon.component";
import EditIcon from "../edit-icon/edit-icon.component";
import DeleteAlert from "../delete-alert/delete-alert.component";
import CategoryInputView from "../category-input-view/category-input-view.component";
import CategoryInputForm from "../category-input-form/category-input-form.component";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { observer, inject } from "mobx-react";
import { graphql } from "react-apollo";
import {
  deleteCategoryById,
  getCategories
} from "../../graphql-queries/category.graphql";
/*----------------------------------
  Styles
-----------------------------------*/
import BootstrapTable from "react-bootstrap-table-next";
import { Styled } from "./category-admin-table.styles";
/*--------------------------------------------------------
 COMPONENT: CategoryTable
--------------------------------------------------------*/
const CategoryTable = inject("store")(
  observer(props => {
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [imgPublicId, setImgPublicId] = useState("");
    const [rowStyles, setRowStyles] = useState("tbl-row");
    const data = props.data ? props.data : [];
    const { isDeleteCat, isEditCat } = props.store.catStore;

    const setLocalState = (id, name, imgPublicId, rowStyles) => {
      setId(id);
      setName(name);
      setImgPublicId(imgPublicId);
      setRowStyles(rowStyles);
    };

    /*----------------------------------
      EVENT HANDLING
    -----------------------------------*/
    const confirmedDeleteCategory = async () => {
      await props
        .DeleteCategoryById({
          variables: {
            id: id,
            imgPublicId: imgPublicId
          },
          refetchQueries: [{ query: getCategories }]
        })
        .then(data => {
          setLocalState(null, "", "", null);
          props.store.catStore.cancelDeleteCategory();
          return;
        })
        .catch(err => {
          console.log(err);
          return;
        });
    };

    const handleDeleteCategory = row => {
      setLocalState(row.id, row.name, row.image_public_id, "warning-row");
      props.store.catStore.deleteCategory();
    };

    const handleEditCategory = row => {
      setId(row.id);
      props.store.catStore.editCategory();
    };

    /*----------------------------------
      CONFIG: TABLES, ROW, COLUMN
    -----------------------------------*/
    const listColumns = [
      { dataField: "name", text: "Name" },
      { dataField: "description", text: "Description" },
      {
        dataField: "actions",
        text: "Actions",
        formatter: (cellContent, row) => {
          return (
            <div className="action-icons">
              <EditIcon onClick={e => handleEditCategory(row)} />
              <DeleteIcon onClick={e => handleDeleteCategory(row)} />
            </div>
          );
        }
      }
    ];

    const expandedForm = {
      renderer: row => {
        const category = data.filter(item => item.id === row.id);
        const compToBeRender =
          isEditCat === true && category[0].id === id ? (
            <CategoryInputForm selectedCat={category[0]} />
          ) : (
            <CategoryInputView selectedCat={category[0]} />
          );
        return <div>{compToBeRender}</div>;
      },
      showExpandColumn: true,
      expandByColumnOnly: false
      //onlyOneExpanding: isEditCat // ONLY ALLOW TO EXPAND ONE ROW IN EDIT MODE
    };

    // High light selected row
    const rowClasses = (row, rowIndex) => {
      let classes = "tbl-row";

      if (row.id === id && isDeleteCat) {
        classes = rowStyles;
      }
      return classes;
    };
    /*----------------------------------
      RENDERING
    -----------------------------------*/
    return (
      <Styled>
        {isDeleteCat ? (
          <DeleteAlert
            name={name.toUpperCase()}
            cancel={props.store.catStore.cancelDeleteCategory}
            confirm={confirmedDeleteCategory}
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

export default graphql(deleteCategoryById, { name: "DeleteCategoryById" })(
  CategoryTable
);
