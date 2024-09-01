import axios from 'axios';

const url = 'http://localhost:3000'

class ProductsService {
  static getProducts() {
    return axios
    .get(`${url}/products`)
    .catch((e) => {
      console.log(e);
    });
  }

  static addProduct(product) {
    return axios
    .post(`${url}/products`, product)
    .catch((e) => {
      console.log(e);
    });
  }

  static deleteProduct(id) {
    return axios
    .delete(`${url}/products/${id}`)
    .catch((e) => {
      console.log(e);
    });
  }

  static editProduct(id, product) {
    return axios
      .put(`${url}/products/${id}`, product)
      .catch((e) => {
        console.log(e);
      });
  }
}

export default ProductsService;
