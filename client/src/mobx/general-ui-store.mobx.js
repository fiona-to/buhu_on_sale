import { decorate, observable, action } from "mobx";
import { persist } from "mobx-persist";
/*--------------------------------------------------------
 CLASS: GeneralUIStore 
--------------------------------------------------------*/
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

  /*----------------------------------
    Visit Home Page
  -----------------------------------*/
  visitHomePage = () => {
    this.setPages(true, false, false, false);
  };

  /*----------------------------------
    Visit View Cart Page
  -----------------------------------*/
  visitViewCart = () => {
    this.setPages(false, true, false, false);
  };

  /*----------------------------------
    Visit Admin Dashboard
  -----------------------------------*/
  visitAdmin = () => {
    this.setPages(false, false, true, false);
  };

  /*----------------------------------
    Visit About Page
  -----------------------------------*/
  visitAbout = () => {
    this.setPages(false, false, false, true);
  };
}

decorate(GeneralUIStore, {
  isHome: [persist, observable],
  isViewCart: [persist, observable],
  isAdmin: [persist, observable],
  isAbout: [persist, observable],
  visitHomePage: action,
  visitViewCart: action,
  visitAdmin: action,
  visitAbout: action,
});

export default GeneralUIStore;
