import "./App.css";
import { DropDown } from "./DropDown";
import { Table } from "./Table";
import categoriesService from "./services/categoriesService";
//const categoriesService = require('./services/categoriesService')
import { useState } from "react";
import ProductsService from "./services/productsService";
import CategoriesService from "./services/categoriesService";
import { FormProduct } from "./FormProduct";
import { FormCategory } from "./FormCategory";

export function App() {

  const [SelectedDropDown, setSelectedDropDown] = useState('');
  const [SelectedOption, setSelectedOption] = useState('');


  const handleSelectedDropDown = (value) => {
    setSelectedDropDown(value);
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option); 
  };



 
  return (
    <>
      <div className="appContainer">
        <div className="header"></div>
        <div className="mainContainer">
          <aside className="dropDownContainer">
            {/*crudActions={[getAllCategories]}*/}
            <DropDown
              text={"Categorias"}
              handleSelectedDropDown={handleSelectedDropDown}
              handleSelectedOption = {handleSelectedOption}

            />
                {/*crudActions={[getAllProducts]}*/}
            <DropDown
              text={"Productos"}
              handleSelectedDropDown={handleSelectedDropDown}
              handleSelectedOption = {handleSelectedOption}
            />
          </aside>
          <div className="dataContainer">
            {SelectedOption == "Agregar" && SelectedDropDown == "Productos" && <FormProduct/>}
            {SelectedOption == "Agregar" && SelectedDropDown == "Categorias" && <FormCategory/>}
            {SelectedOption == "Listar / Eliminar / Editar" && SelectedDropDown == "Productos" && <Table SelectedDropDown={SelectedDropDown} />}
            {SelectedOption == "Listar / Eliminar / Editar" && SelectedDropDown == "Categorias" && <Table SelectedDropDown={SelectedDropDown} />}

          </div>
        </div>
        <div className="footerContainer"></div>
      </div>

      

     
    </>
  );
}
