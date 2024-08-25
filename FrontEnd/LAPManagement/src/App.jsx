import './App.css';
import { DropDown } from './DropDown';
import { Table } from './Table';
import { useState } from 'react';
import { FormProduct } from './FormProduct';
import { FormCategory } from './FormCategory';
import { FormEditCategory } from './FormEditCategory';
import { FormEditProduct } from './FormEditProduct';

export function App() {
  const [SelectedDropDown, setSelectedDropDown] = useState('');
  const [SelectedOption, setSelectedOption] = useState('');
  const [TableClassName, setTableClassName] = useState('');
  const [Object, setObject] = useState([]);

  const handleSelectedDropDown = (value) => {
    setSelectedDropDown(value);
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  const handleTableClassName = (value) => {
    setTableClassName(value);
  };

  const handleObject = (value) => {
    setObject(value);
  };

  return (
    <>
      <div className="appContainer">
        <div className="header"></div>
        <div className="mainContainer">
          <aside className="dropDownContainer">
            <DropDown
              text={'Categorias'}
              handleSelectedDropDown={handleSelectedDropDown}
              handleSelectedOption={handleSelectedOption}
              handleTableClassName={handleTableClassName}
            />
            <DropDown
              text={'Productos'}
              handleSelectedDropDown={handleSelectedDropDown}
              handleSelectedOption={handleSelectedOption}
              handleTableClassName={handleTableClassName}
            />
          </aside>
          <div className="dataContainer">
            {SelectedOption == 'Agregar' && SelectedDropDown == 'Productos' && (
              <FormProduct />
            )}
            {SelectedOption == 'Agregar' &&
              SelectedDropDown == 'Categorias' && <FormCategory />}
            {SelectedOption == 'Listar / Eliminar / Editar' &&
              SelectedDropDown == 'Productos' && (
                <Table
                  SelectedDropDown={SelectedDropDown}
                  tableClassName={TableClassName}
                  handleTableClassName={handleTableClassName}
                  handleObject={handleObject}
                />
              )}
            {SelectedOption == 'Listar / Eliminar / Editar' &&
              SelectedDropDown == 'Productos' &&
              TableClassName == 'notVisible' && (
                <FormEditProduct product={Object} />
              )}
            {SelectedOption == 'Listar / Eliminar / Editar' &&
              SelectedDropDown == 'Categorias' && (
                <Table
                  SelectedDropDown={SelectedDropDown}
                  tableClassName={TableClassName}
                  handleTableClassName={handleTableClassName}
                  handleObject={handleObject}
                />
              )}
            {SelectedOption == 'Listar / Eliminar / Editar' &&
              SelectedDropDown == 'Categorias' &&
              TableClassName == 'notVisible' && (
                <FormEditCategory category={Object} />
              )}
          </div>
        </div>
        <div className="footerContainer"></div>
      </div>
    </>
  );
}
