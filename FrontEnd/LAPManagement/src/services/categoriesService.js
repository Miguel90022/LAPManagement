import axios from 'axios';

const url = 'http://localhost:3000'

class CategoriesService {

  static getCategories() {
    return axios
    .get(`${url}/categories`)
    .catch((e) => {
      console.log(e);
    });
  }

  static addCategory(category) {
    return axios
      .post(`${url}/categories`, category)
      .catch((e) => {
        console.log(e);
      });
  }

  static deleteCategory(id) {
    return axios
    .delete(`${url}/categories/${id}`)
    .catch((e) => {
      console.log(e);
    });
  }

  static editCategory(id, category) {
    return axios
      .put(`${url}/categories/${id}`, category)
      .catch((e) => {
        console.log(e);
      });
  }
}

export default CategoriesService;
