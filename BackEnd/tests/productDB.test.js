const productDB = require('../databaseConnectionSqlServer/productDB');
const Product = require('../models/product');

jest.mock('../models/product');

describe('productDB', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return all products', async () => {
    const mockProducts = [{ PKProductID: 1, Barcode: '12345', Detail: 'Product 1' }];
    Product.findAll.mockResolvedValue(mockProducts);

    const result = await productDB.getAllProducts();
    expect(result).toEqual(mockProducts);
    expect(Product.findAll).toHaveBeenCalledTimes(1);
  });

  it('should return a product by id', async () => {
    const mockProduct = { PKProductID: 1, Barcode: '12345', Detail: 'Product 1' };
    Product.findByPk.mockResolvedValue(mockProduct);

    const result = await productDB.getProduct(1);
    expect(result).toEqual(mockProduct);
    expect(Product.findByPk).toHaveBeenCalledWith(1);
  });

  it('should add a new product', async () => {
    const mockProduct = { PKProductID: 1, Barcode: '12345', Detail: 'Product 1' };
    Product.create.mockResolvedValue(mockProduct);

    const result = await productDB.addProduct('12345', 1, 'Product 1', 10, 100.0);
    expect(result).toEqual(mockProduct);
    expect(Product.create).toHaveBeenCalledWith({
      Barcode: '12345',
      FKCategoryID: 1,
      Detail: 'Product 1',
      Stock: 10,
      Price: 100.0
    });
  });

  it('should edit an existing product', async () => {
    Product.update.mockResolvedValue([1]);

    const result = await productDB.editProduct(1, '54321', 1, 'Updated Product', 5, 200.0);
    expect(result).toEqual([1]);
    expect(Product.update).toHaveBeenCalledWith(
      { Barcode: '54321', FKCategoryID: 1, Detail: 'Updated Product', Stock: 5, Price: 200.0 },
      { where: { PKProductID: 1 } }
    );
  });

  it('should delete an existing product', async () => {
    Product.destroy.mockResolvedValue(1);

    const result = await productDB.deleteProduct(1);
    expect(result).toBe(1);
    expect(Product.destroy).toHaveBeenCalledWith({ where: { PKProductID: 1 } });
  });
});

