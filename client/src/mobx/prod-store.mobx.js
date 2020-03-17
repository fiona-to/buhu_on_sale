import { observable, decorate } from "mobx";

class ProdStore {
  constructor() {
    this.isAddNewProd = false;
    this.isDeleteProd = false;
    this.isEditProd = false;
  }

  addNewProduct = () => {
    this.isAddNewProd = true;
  };

  cancelAddNewProduct = () => {
    this.isAddNewProd = false;
  };

  deleteProduct = () => {
    this.isDeleteProd = true;
  };

  cancelDeleteProduct = () => {
    this.isDeleteProd = false;
  };

  editProduct = () => {
    this.isEditProd = true;
  };

  cancelEditProduct = () => {
    this.isEditProd = false;
  };
}

decorate(ProdStore, {
  isAddNewProd: observable,
  isDeleteProd: observable,
  isEditProd: observable
});

export default ProdStore;
