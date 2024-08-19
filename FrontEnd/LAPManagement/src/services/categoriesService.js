import axios from "axios";

class CategoriesService {
url = 'http://localhost:3000/'

 static getCategories() {
   return axios
      .get(`http://localhost:3000/categories`)
      .catch((e) => {
        console.log(e);
      });
  }

  static addCategory(category) {
    return axios
       .post(`http://localhost:3000/categories`, category)
       .catch((e) => {
         console.log(e);
       });
   }

   static deleteCategory(id) {
     return axios
       .delete(`http://localhost:3000/categories/${id}`)
       .catch((e) => {
         console.log(e);
       });
   }

}

export default  CategoriesService;