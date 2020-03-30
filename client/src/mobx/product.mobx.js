import { observable, decorate } from "mobx";

class Product {
  constructor({ id, name, quantity, image_url }) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.image_url = image_url;
    this.price = 100;
  }
}

decorate(Product, {
  id: observable,
  name: observable,
  quantity: observable,
  image_url: observable,
  price: observable
});

export default Product;
