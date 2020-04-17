import { observable, decorate } from "mobx";
import { persist } from "mobx-persist";
/*--------------------------------------------------------
 CLASS: Product 
--------------------------------------------------------*/
class Product {
  constructor({ id, name, quantity, image_url, price }) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.image_url = image_url;
    this.price = price;
  }
}

decorate(Product, {
  id: [persist, observable],
  name: [persist, observable],
  quantity: [persist, observable],
  image_url: [persist, observable],
  price: [persist, observable],
});

export default Product;
