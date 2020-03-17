import { observable, decorate } from "mobx";

class Product {
  id = "";
  title = "";
  description = "";
  quantity = 0;
  image_url = "";
  image_public_id = "";
  manufacture_detail = {};
  pricing = {};
  seo = {};

  constructor({
    id,
    title,
    description,
    quantity,
    image_url,
    image_public_id,
    manufacture_detail,
    pricing,
    seo
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.quantity = quantity;
    this.image_url = image_url;
    this.image_public_id = image_public_id;
    this.manufacture_detail = manufacture_detail;
    this.pricing = pricing;
    this.seo = seo;
  }
}

decorate(Product, {
  id: observable,
  title: observable,
  description: observable,
  quantity: observable,
  image_url: observable,
  image_public_id: observable,
  manufacture_detail: observable,
  pricing: observable,
  seo: observable
});

export default Product;
