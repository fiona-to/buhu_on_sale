import { observable, decorate, action } from "mobx";
import { persist } from "mobx-persist";
/*--------------------------------------------------------
 CLASS: CatStore 
--------------------------------------------------------*/
class CatStore {
  constructor() {
    this.isAddNewCat = false;
    this.isDeleteCat = false;
    this.isEditCat = false;
  }

  /*----------------------------------
    Mark to delete a category item
  -----------------------------------*/
  deleteCategory = () => {
    this.isDeleteCat = true;
  };

  /*----------------------------------
    Mark to cancel deleting a category item
  -----------------------------------*/
  cancelDeleteCategory = () => {
    this.isDeleteCat = false;
  };

  /*----------------------------------
    Mark to add a new category item
  -----------------------------------*/
  addNewCategory = () => {
    this.isAddNewCat = true;
  };

  /*----------------------------------
    Mark to cancel adding a new category item
  -----------------------------------*/
  cancelAddCategory = () => {
    this.isAddNewCat = false;
  };

  /*----------------------------------
    Mark to edit a category item
  -----------------------------------*/
  editCategory = () => {
    this.isEditCat = true;
  };

  /*----------------------------------
    Mark to cancel editing a category item
  -----------------------------------*/
  cancelEditCategory = () => {
    this.isEditCat = false;
  };
}

decorate(CatStore, {
  isAddNewCat: [persist, observable],
  isDeleteCat: [persist, observable],
  isEditCat: [persist, observable],
  deleteCategory: action,
  cancelDeleteCategory: action,
  addNewCategory: action,
  cancelAddCategory: action,
  editCategory: action,
  cancelEditCategory: action,
});

export default CatStore;
