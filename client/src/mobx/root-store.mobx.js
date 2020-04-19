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

    // hydrate("catStore", this.catStore).then(() => {
    //   console.log("Persit catStore");
    // });
    hydrate("catStore", this.catStore);
    hydrate("cart", this.cart);
    hydrate("uiStore", this.uiStore);
    hydrate("prodStore", this.prodStore);
  }
}

export default RootStore;
