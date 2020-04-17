import { observable, decorate, action } from "mobx";
import { persist } from "mobx-persist";
/*--------------------------------------------------------
 CLASS: ProdStore 
--------------------------------------------------------*/
class ProdStore {
  constructor() {
    this.isAddNewProd = false;
    this.isDeleteProd = false;
    this.isEditProd = false;
  }

  /*----------------------------------
    Mark to add a new product
  -----------------------------------*/
  addNewProduct = () => {
    this.isAddNewProd = true;
  };

  /*----------------------------------
    Mark to cancel adding a new product
  -----------------------------------*/
  cancelAddNewProduct = () => {
    this.isAddNewProd = false;
  };

  /*----------------------------------
    Mark to delete a product
  -----------------------------------*/
  deleteProduct = () => {
    this.isDeleteProd = true;
  };

  /*----------------------------------
    Mark to cancel deleting a product
  -----------------------------------*/
  cancelDeleteProduct = () => {
    this.isDeleteProd = false;
  };

  /*----------------------------------
    Mark to edit a product
  -----------------------------------*/
  editProduct = () => {
    this.isEditProd = true;
  };

  /*----------------------------------
    Mark to cancel editing a product
  -----------------------------------*/
  cancelEditProduct = () => {
    this.isEditProd = false;
  };
}

decorate(ProdStore, {
  isAddNewProd: [persist, observable],
  isDeleteProd: [persist, observable],
  isEditProd: [persist, observable],
  addNewProduct: action,
  cancelAddNewProduct: action,
  deleteProduct: action,
  cancelDeleteProduct: action,
  editProduct: action,
  cancelEditProduct: action,
});

export default ProdStore;
