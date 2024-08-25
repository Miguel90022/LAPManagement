import axios from 'axios';

class ProductsService {
  static getProducts() {
    return axios
    .get(`http://localhost:3000/products`)
    .catch((e) => {
      console.log(e);
    });
  }

  static addProduct(product) {
    return axios
    .post(`http://localhost:3000/products`, product)
    .catch((e) => {
      console.log(e);
    });
  }

  static deleteProduct(id) {
    return axios
    .delete(`http://localhost:3000/products/${id}`)
    .catch((e) => {
      console.log(e);
    });
  }

  static editProduct(id, product) {
    return axios
      .put(`http://localhost:3000/products/${id}`, product)
      .catch((e) => {
        console.log(e);
      });
  }
}

export default ProductsService;
