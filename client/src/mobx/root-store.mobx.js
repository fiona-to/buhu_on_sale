import { observable, decorate } from "mobx";
import CatStore from "./cat-store.mobx";
import ProdStore from "./prod-store.mobx";
import Cart from "./cart.mobx";

class RootStore {
  constructor() {
    this.catStore = new CatStore();
    this.prodStore = new ProdStore();
    this.cart = new Cart();
  }
}

decorate(RootStore, {
  catStore: observable,
  prodStore: observable,
  cart: observable
});

export default RootStore;

// import { observable, decorate } from "mobx";

// import Product from "./product.mobx";

// class RootStore {
//   constructor() {}
//   products = [];
//   isAddNewCategory = false;

//   addProduct(product) {
//     this.products.push(
//       new Product(
//         product.id,
//         product.title,
//         product.description,
//         product.quantity,
//         product.image_url,
//         product.image_public_id,
//         product.manufacture_detail,
//         product.pricing,
//         product.seo
//       )
//     );
//   }

//   addProductList(listProduct) {
//     this.products = [];
//     this.products = listProduct.map(product => Object.assign({}, product));
//   }
// }

// decorate(RootStore, {
//   products: observable,
//   isAddNewCategory: observable
// });

// export default RootStore;

// Object.assign(
//   {},
//   new Product(
//     item.id,
//     item.title,
//     item.description,
//     item.quantity,
//     item.image_url,
//     item.image_public_id,
//     item.manufacture_detail,
//     item.pricing,
//     item.seo
//   )
// )
// );
