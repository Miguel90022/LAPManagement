
export function Table({ headers, data }) {

  const createTableData = () => {
    return (data.map(row => (
      <tr>
        {row.map(column => (
          <td>{column}</td>
        ))}
      </tr>
    )));
  }
  return (
    <table>
      <thead>
        {headers.map((header) => (<th>{header}</th>))}
      </thead>
      <tbody>
        {createTableData()}
      </tbody>
    </table>
  );
}
