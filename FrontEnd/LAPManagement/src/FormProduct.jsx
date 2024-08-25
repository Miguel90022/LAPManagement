import ProductsService from './services/productsService';

export function FormProduct() {
  const newProduct = {
    barcode: '',
    fkCategoryID: '',
    detail: '',
    stock: '',
    price: '',
  };

  const addProduct = () => {
    ProductsService.addProduct(newProduct).then(() => {});
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="formContainer">
      <input
        type="text"
        placeholder="Codigo de barras"
        onChange={(e) => (newProduct.barcode = e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre producto"
        onChange={(e) => (newProduct.detail = e.target.value)}
      />
      <input
        type="text"
        placeholder="Codigo categoria"
        onChange={(e) => (newProduct.fkCategoryID = e.target.value)}
      />
      <input
        type="text"
        placeholder="Precio"
        onChange={(e) => (newProduct.price = e.target.value)}
      />
      <input
        type="text"
        placeholder="Cantidad disponible"
        onChange={(e) => (newProduct.stock = e.target.value)}
      />
      <button type="submit" onClick={addProduct}>
        Agregar
      </button>
    </form>
  );
}
