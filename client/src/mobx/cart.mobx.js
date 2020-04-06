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
    this.products.forEach((item) => {
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
    this.products.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
        existed = true;
      }
    });

    if (!existed) {
      this.products.push(new Product({ ...product, quantity: 1 }));
    }
  }

  /*----------------------------------
    Count total items
  -----------------------------------*/
  countTotalItem() {
    let count = 0;
    this.products.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }

  /*----------------------------------
    Calculate total price for cart's items
  -----------------------------------*/
  calculateTotalPrice() {
    let total = 0.0;
    this.products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  /*----------------------------------
    Remove product out of cart by ID
  -----------------------------------*/
  removeProductById(id) {
    this.products = this.products.filter((item) => {
      return item.id !== id;
    });
  }

  /*----------------------------------
    Update product's quantity based on ID
  -----------------------------------*/
  updateQuantityById(id, quantity) {
    this.products.forEach((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
    });
  }
}

decorate(Cart, { products: observable });

export default Cart;
