import { useEffect, useState } from 'react';
import CategoriesService from './services/categoriesService';
import ProductsService from './services/productsService';

export function Table({
  SelectedDropDown,
  tableClassName,
  handleTableClassName,
  handleObject,
}) {
  let data = [];
  const [tableInfo, setTableInfo] = useState([]);

  const getAllCategories = () => {
    CategoriesService.getCategories().then((categories) => {
      data = [];
      categories.data.forEach((item, index) => {
        data.push([]);
        data[index].push(item.PKCategoryID);
        data[index].push(item.Detail);
      });
      setTableInfo([Object.keys(categories.data[0]), data]);
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
    if (SelectedDropDown == 'Categorias') {
      deleteCategory(id);
    } else {
      deleteProduct(id);
    }
  };

  const getTableInfo = () => {
    if (SelectedDropDown == 'Categorias') {
      getAllCategories();
    } else {
      getAllProducts();
    }
  };

  useEffect(() => {
    getTableInfo();
  }, []);

  if (tableInfo.length == 0) {
    return '';
  }

  if (tableClassName == '') getTableInfo();

  return (
    <table className={tableClassName}>
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
              <button
                onClick={() => {
                  handleTableClassName('notVisible');
                  handleObject(row);
                }}
              >
                editar
              </button>
              <button onClick={() => getDeleteAction(row[0])}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
