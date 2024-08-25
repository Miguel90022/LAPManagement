import ProductsService from './services/productsService';

export function FormEditProduct({ product }) {
  const newProduct = {
    barcode: product[1],
    fkCategoryID: product[2],
    detail: product[3],
    stock: product[4],
    price: product[5],
  };

  const editProduct = () => {
    if (newProduct.barcode == '') newProduct.barcode = product[1];
    if (newProduct.fkCategoryID == '') newProduct.fkCategoryID = product[2];
    if (newProduct.detail == '') newProduct.detail = product[3];
    if (newProduct.stock == '') newProduct.stock = product[4];
    if (newProduct.price == '') newProduct.price = product[5];
    ProductsService.editProduct(product[0], newProduct).then(() => {});
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="formContainer">
      <label>Barcode</label>
      <input
        type="text"
        placeholder={product[1]}
        onChange={(e) => (newProduct.barcode = e.target.value)}
      />
      <label>FK Category ID</label>
      <input
        type="text"
        placeholder={product[2]}
        onChange={(e) => (newProduct.fkCategoryID = e.target.value)}
      />
      <label>Detail</label>
      <input
        type="text"
        placeholder={product[3]}
        onChange={(e) => (newProduct.detail = e.target.value)}
      />
      <label>Stock</label>
      <input
        type="text"
        placeholder={product[4]}
        onChange={(e) => (newProduct.stock = e.target.value)}
      />
      <label>Price</label>
      <input
        type="text"
        placeholder={product[5]}
        onChange={(e) => (newProduct.price = e.target.value)}
      />
      <button type="submit" onClick={editProduct}>
        Editar
      </button>
    </form>
  );
}
