import ProductsService from "./services/productsService";
export function Table({ tableInfo, deleteAction}) {
  if (tableInfo.length == 0) {
    return "";
  }




  const createTableData = () => {
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
  };

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
      <tbody>{createTableData()}</tbody>
    </table>
  );
}
