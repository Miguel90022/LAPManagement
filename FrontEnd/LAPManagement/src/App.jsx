import './App.css';
import { DropDown } from './DropDown';
import { Table } from './Table';

export function App() {
  const headers = ['Columna1', 'Columna2', 'Columna3']
  const data = [['1', '2', '3'], ['4', '5', '6']]
  return (
    <div className='appContainer'>
      <div className="header"></div>
      <div className="mainContainer">
        <aside className="dropDownContainer">
          <DropDown text={'Categorias'} />
          <DropDown text={'Productos'} />
        </aside>
        <div className="tableContainer">
          <Table headers={headers} data={data}/>
          {/*<table>
            <thead>
              <th>Columna 1</th>
              <th>Columna 2</th>
              <th>Columna 3</th>
            </thead>
            <tbody>
              <td>Hola</td>
              <td>Hola</td>
              <td>Hola</td>
            </tbody>
          </table>*/}
        </div>
      </div>
      <div className='footerContainer'></div>
    </div>
  );
}
