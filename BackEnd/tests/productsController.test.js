const ProductsController = require('../controllers/productsController');
const productDB = require('../databaseConnectionSqlServer/productDB');

jest.mock('../databaseConnectionSqlServer/productDB');

describe('ProductsController', () => {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
    jest.clearAllMocks();
  });

  it('should return all products', async () => {
    const mockProducts = [{ PKProductID: 1, Barcode: '12345', Detail: 'Product 1' }];
    productDB.getAllProducts.mockResolvedValue(mockProducts);

    await ProductsController.getAllProducts(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockProducts);
  });

  it('should handle products abscense', async () => {
    productDB.getAllProducts.mockResolvedValue([]);

    await ProductsController.getAllProducts(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith("No se encontraron productos.");
  });

  it('should handle errors when getting all products', async () => {
    productDB.getAllProducts.mockRejectedValue(new Error('Database error'));

    await ProductsController.getAllProducts(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith("Error en el servidor");
  });

  it('should return a product by id', async () => {
    const mockProduct = { PKProductID: 1, Barcode: '12345', Detail: 'Product 1' };
    mockRequest.params = { id: 1 };
    productDB.getProduct.mockResolvedValue(mockProduct);

    await ProductsController.getProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockProduct);
  });

  it('should handle the abscense of a product', async () => {
    mockRequest.params = { id: 1 };
    productDB.getProduct.mockResolvedValue(null);

    await ProductsController.getProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith("Producto no encontrado");
  });

  it('should handle errors when getting a product', async () => {
    mockRequest.params = { id: 1 };
    productDB.getProduct.mockRejectedValue(new Error('Database error'));

    await ProductsController.getProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith("Error en el servidor");
  });

  it('shouls add a new product', async () => {
    const mockProduct = { PKProductID: 1, Barcode: '12345', Detail: 'New Product' };
    mockRequest.body = { barcode: '12345', fkCategoryID: 1, detail: 'New Product', stock: 10, price: 100.0 };
    productDB.addProduct.mockResolvedValue(mockProduct);

    await ProductsController.addProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(mockProduct);
  });

  it('should handle errors when adding a new product', async () => {
    mockRequest.body = { barcode: '12345', fkCategoryID: 1, detail: 'New Product', stock: 10, price: 100.0 };
    productDB.addProduct.mockRejectedValue(new Error('Database error'));

    await ProductsController.addProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith('Error en el servidor');
  });

  it('should update an existing product', async () => {
    mockRequest.params = { id: 1 };
    mockRequest.body = { barcode: '54321', fkCategoryID: 1, detail: 'Updated Product', stock: 5, price: 200.0 };
    productDB.editProduct.mockResolvedValue([1]);

    await ProductsController.editProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith('Producto actualizado con éxito');
  });

  it('should handle editing a non existing product', async () => {
    mockRequest.params = { id: 1 };
    mockRequest.body = { barcode: '54321', fkCategoryID: 1, detail: 'Updated Product', stock: 5, price: 200.0 };
    productDB.editProduct.mockResolvedValue([0]);

    await ProductsController.editProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith('Producto no encontrado');
  });

  it('should handle errors when editing a product', async () => {
    mockRequest.params = { id: 1 };
    mockRequest.body = { barcode: '54321', fkCategoryID: 1, detail: 'Updated Product', stock: 5, price: 200.0 };
    productDB.editProduct.mockRejectedValue(new Error('Database error'));

    await ProductsController.editProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith('Error en el servidor');
  });

  it('should delete an existing product', async () => {
    mockRequest.params = { id: 1 };
    productDB.deleteProduct.mockResolvedValue(1);

    await ProductsController.deleteProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith('Producto eliminado con éxito');
  });

  it('should handle the removal of a non existing product', async () => {
    mockRequest.params = { id: 1 };
    productDB.deleteProduct.mockResolvedValue(0);

    await ProductsController.deleteProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith('Producto no encontrado');
  });

  it('should handle errors when deleting a product', async () => {
    mockRequest.params = { id: 1 };
    productDB.deleteProduct.mockRejectedValue(new Error('Database error'));

    await ProductsController.deleteProduct(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith('Error en el servidor');
  });
});
