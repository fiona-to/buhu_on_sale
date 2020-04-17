import CatStore from "./cat-store.mobx";
import ProdStore from "./prod-store.mobx";
import Cart from "./cart.mobx";
import GeneralUIStore from "./general-ui-store.mobx";
import { create } from "mobx-persist";

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

class RootStore {
  constructor() {
    this.catStore = new CatStore();
    this.prodStore = new ProdStore();
    this.cart = new Cart();
    this.uiStore = new GeneralUIStore();

    hydrate("catStore", this.catStore).then(() => {
      console.log("Persit catStore");
    });
    hydrate("cart", this.cart).then(() => {
      console.log("Persit cart");
    });
    hydrate("uiStore", this.uiStore).then(() => {
      console.log("Persist uiStore");
    });
    hydrate("prodStore", this.prodStore).then(() => {
      console.log("Persist prodStore");
    });
  }
}

export default RootStore;
