import "./App.css";
import { DropDown } from "./DropDown";
import { Table } from "./Table";
import categoriesService from "./services/categoriesService";
//const categoriesService = require('./services/categoriesService')
import { useState } from "react";
import ProductsService from "./services/productsService";
import CategoriesService from "./services/categoriesService";

export function App() {
  const data = [];
  const [tableInfo, setTableInfo] = useState([]);
  const [dropDownSelected, setdropDownSelected] = useState("Categorias");

  const newProduct = {
    barcode:"",
    fkCategoryID:"",
    detail:"",
    stock:"",
    price:""
  }

  const newCategory = {
   detail: ""
  }

  const handleDropDownSelected =(value)=>{
    setdropDownSelected(value)
  
  }

  const getAllCategories = () => {
    categoriesService.getCategories().then((categories) => {
      categories.data.forEach((item, index) => {
        data.push([]);
        data[index].push(item.PKCategoryID);
        data[index].push(item.Detail);
      });
      setTableInfo([Object.keys(categories.data[0]), data]);
      //setCategories(categories.data);
    });
  };

  const getAllProducts = () => {
    ProductsService.getProducts().then((products) => {
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

  const addCategory = () =>{
     CategoriesService.addCategory(newCategory).then(()=>{
      getAllCategories();
     });
  };

  const addProduct = () =>{
     ProductsService.addProduct(newProduct).then(()=>{
      getAllProducts();
     });
  };

  const deleteCategory = (id) =>{
    CategoriesService.deleteCategory(id).then(()=>{
      getAllCategories();
    });
  };

  const deleteProduct = (id) =>{

    ProductsService.deleteProduct(id).then(()=>{
      getAllProducts();
    });
  };

  const getDeleteAction = () =>{
    if(dropDownSelected == "Categorias"){
      return deleteCategory;
    }
    return deleteProduct;
  };



  return (
    <>
      <div className="appContainer">
        <div className="header"></div>
        <div className="mainContainer">
          <aside className="dropDownContainer">
            <DropDown crudActions={[getAllCategories]} text={"Categorias"} setdropDownSelected={handleDropDownSelected}/>
            <DropDown crudActions={[getAllProducts]} text={"Productos"} setdropDownSelected={handleDropDownSelected}/>
          </aside>
          <div className="tableContainer">
            <Table tableInfo={tableInfo} deleteAction={getDeleteAction()}/>
          </div>
        </div>
        <div className="footerContainer"></div>
      </div>

   
   <div>
       <input type="text"  placeholder="nombre catgoria"  onChange={(e)=> newCategory.detail = e.target.value}/>
       <button onClick={addCategory}>Agregar</button>
   
       </div>
      <div>
       <input type="text"  placeholder="Codigo de barras"  onChange={(e)=> newProduct.barcode = e.target.value }/>
       <input type="text"  placeholder="Nombre producto"  onChange={(e)=> newProduct.detail = e.target.value }/>
       <input type="text"  placeholder="Codigo categoria"  onChange={(e)=> newProduct.fkCategoryID = e.target.value}/>
       <input type="text"  placeholder="Precio"  onChange={(e)=> newProduct.price = e.target.value}/>
       <input type="text"  placeholder="Cantidad disponible"  onChange={(e)=> newProduct.stock = e.target.value}/>
       <button  onClick={addProduct}>Agregar</button>
       </div>
    </>
  );
}
