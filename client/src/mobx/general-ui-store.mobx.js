import { decorate, observable } from "mobx";

class GeneralUIStore {
  constructor() {
    this.isHome = true;
    this.isViewCart = false;
    this.isAdmin = false;
    this.isAbout = false;
  }

  setPages = (isHome, isViewCart, isAdmin, isAbout) => {
    this.isHome = isHome;
    this.isViewCart = isViewCart;
    this.isAdmin = isAdmin;
    this.isAbout = isAbout;
  };

  visitHomePage = () => {
    this.setPages(true, false, false, false);
  };

  visitViewCart = () => {
    this.setPages(false, true, false, false);
  };

  visitAdmin = () => {
    this.setPages(false, false, true, false);
  };

  visitAbout = () => {
    this.setPages(false, false, false, true);
  };
}

decorate(GeneralUIStore, {
  isHome: observable,
  isViewCart: observable,
  isAdmin: observable,
  isAbout: observable,
});

export default GeneralUIStore;
