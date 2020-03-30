import { observable, decorate } from "mobx";

import Product from "./product.mobx";

class Cart {
  constructor() {
    this.products = [];
  }

  /*----------------------------------
    Add N products
  -----------------------------------*/
  addToCart(product) {
    let existed = false;
    this.products.forEach(item => {
      if (item.id === product.id) {
        item.quantity = product.quantity;
        existed = true;
      }
    });

    if (!existed) {
      this.products.push(new Product(product));
    }
  }

  /*----------------------------------
    Add 01 product
  -----------------------------------*/
  addOneToCart(product) {
    let existed = false;
    this.products.forEach(item => {
      if (item.id === product.id) {
        item.quantity += 1;
        existed = true;
      }
    });

    if (!existed) {
      this.products.push(new Product({ ...product, quantity: 1 }));
    }
  }
}

decorate(Cart, { products: observable });

export default Cart;
