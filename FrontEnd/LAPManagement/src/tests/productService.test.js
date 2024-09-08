import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProductsService from '../services/productsService';

describe('ProductsService', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  test('should fetch products successfully', async () => {
    const productsData = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }];
    mock.onGet('http://localhost:3000/products').reply(200, productsData);

    const result = await ProductsService.getProducts();

    expect(result.data).toEqual(productsData);
  });

  test('should handle error when fetching products', async () => {
    mock.onGet('http://localhost:3000/products').reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await ProductsService.getProducts();

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  test('should add product successfully', async () => {
    const newProduct = { name: 'Tablet' };
    mock.onPost('http://localhost:3000/products').reply(201, newProduct);

    const result = await ProductsService.addProduct(newProduct);

    expect(result.status).toBe(201);
    expect(result.data).toEqual(newProduct);
  });

  test('should handle error when adding product', async () => {
    const newProduct = { name: 'Tablet' };
    mock.onPost('http://localhost:3000/products').reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await ProductsService.addProduct(newProduct);

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  test('should delete product successfully', async () => {
    const productId = 1;
    mock.onDelete(`http://localhost:3000/products/${productId}`).reply(200);

    const result = await ProductsService.deleteProduct(productId);

    expect(result.status).toBe(200);
  });

  test('should handle error when deleting product', async () => {
    const productId = 1;
    mock.onDelete(`http://localhost:3000/products/${productId}`).reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await ProductsService.deleteProduct(productId);

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  test('should edit product successfully', async () => {
    const productId = 1;
    const updatedProduct = { name: 'Smartwatch' };
    mock.onPut(`http://localhost:3000/products/${productId}`).reply(200, updatedProduct);

    const result = await ProductsService.editProduct(productId, updatedProduct);

    expect(result.status).toBe(200);
    expect(result.data).toEqual(updatedProduct);
  });

  test('should handle error when editing product', async () => {
    const productId = 1;
    const updatedProduct = { name: 'Smartwatch' };
    mock.onPut(`http://localhost:3000/products/${productId}`).reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await ProductsService.editProduct(productId, updatedProduct);

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });
});
