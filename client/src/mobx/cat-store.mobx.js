import { observable, decorate } from "mobx";

class CatStore {
  constructor() {
    this.isAddNewCat = false;
    this.isDeleteCat = false;
    this.isEditCat = false;
  }

  deleteCategory = () => {
    this.isDeleteCat = true;
  };

  cancelDeleteCategory = () => {
    this.isDeleteCat = false;
  };

  addNewCategory = () => {
    this.isAddNewCat = true;
  };

  cancelAddCategory = () => {
    this.isAddNewCat = false;
  };

  editCategory = () => {
    this.isEditCat = true;
  };

  cancelEditCategory = () => {
    this.isEditCat = false;
  };
}

decorate(CatStore, {
  isAddNewCat: observable,
  isDeleteCat: observable,
  isEditCat: observable
});

export default CatStore;
