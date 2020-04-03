import { decorate, observable } from "mobx";

class GeneralUIStore {
  constructor() {
    this.isHome = true;
    this.isViewCart = false;
    this.isAdmin = false;
  }

  setPages = (isHome, isViewCart, isAdmin) => {
    this.isHome = isHome;
    this.isViewCart = isViewCart;
    this.isAdmin = isAdmin;
  };

  visitHomePage = () => {
    this.setPages(true, false, false);
  };

  visitViewCart = () => {
    this.setPages(false, true, false);
  };

  visitAdmin = () => {
    this.setPages(false, false, true);
  };
}

decorate(GeneralUIStore, {
  isHome: observable,
  isViewCart: observable,
  isAdmin: observable
});

export default GeneralUIStore;
