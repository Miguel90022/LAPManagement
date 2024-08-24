import { useEffect, useState } from "react";
import CategoriesService from "./services/categoriesService";
import ProductsService from "./services/productsService";

export function Table({ SelectedDropDown }) {
  let data = [];
  const [tableInfo, setTableInfo] = useState([]);

  // [legumbres, []]
  const getAllCategories = () => {
    CategoriesService.getCategories().then((categories) => {
      data = [];
      categories.data.forEach((item, index) => {
        data.push([]);
        data[index].push(item.PKCategoryID);
        data[index].push(item.Detail);
      });
      //tableInfo = [Object.keys(categories.data[0]), data];
      setTableInfo([Object.keys(categories.data[0]), data]);
      //setCategories(categories.data);
    });
  };

  const getAllProducts = () => {
    ProductsService.getProducts().then((products) => {
      data = [];
      products.data.forEach((item, index) => {
        data.push([]);
        data[index].push(item.PKProductID);
        data[index].push(item.Barcode);
        data[index].push(item.FKCategoryID);
        data[index].push(item.Detail);
        data[index].push(item.Stock);
        data[index].push(item.Price);
      });
      //tableInfo = [Object.keys(products.data[0]), data];
      setTableInfo([Object.keys(products.data[0]), data]);
    });
  };

  const deleteCategory = (id) => {
    CategoriesService.deleteCategory(id).then(() => {
      getAllCategories();
    });
  };

  const deleteProduct = (id) => {
    ProductsService.deleteProduct(id).then(() => {
      getAllProducts();
    });
  };

  const getDeleteAction = (id) => {
    if (SelectedDropDown == "Categorias") {
       deleteCategory(id);
    }else{
     deleteProduct(id);}
  };

  const getTableInfo = () => {
    if (SelectedDropDown == "Categorias") {
      getAllCategories();
    } else {
      getAllProducts();
    }
  };

  useEffect(() => {
    getTableInfo();
  }, []);

  if (tableInfo.length == 0) {
    return "";
  }

  /* const createTableData = () => {
    return tableInfo[1].map((row) => (
      <tr>
        {row.map((column) => (
          <td>
            {column}
          </td>
        ))}
        <td><button>editar</button> <button onClick={()=>deleteAction(row[0])}>Eliminar</button></td>
      </tr>
    ));
  };*/

  return (
    <table>
      <thead>
        <tr>
          {tableInfo[0].map((header) => (
            <th>{header}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tableInfo[1].map((row) => (
          <tr>
            {row.map((column) => (
              <td>{column}</td>
            ))}
            <td>
              <button>editar</button>{" "}
              <button onClick={() => getDeleteAction(row[0])}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
