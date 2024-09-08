import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CategoriesService from '../services/categoriesService';

describe('CategoriesService', () => {
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

  test('should fetch categories successfully', async () => {
    const categoriesData = [{ id: 1, name: 'Electronics' }, { id: 2, name: 'Clothing' }];
    mock.onGet('http://localhost:3000/categories').reply(200, categoriesData);

    const result = await CategoriesService.getCategories();

    expect(result.data).toEqual(categoriesData);
  });

  test('should handle error when fetching categories', async () => {
    mock.onGet('http://localhost:3000/categories').reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    await CategoriesService.getCategories();

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  test('should add category successfully', async () => {
    const newCategory = { name: 'Books' };
    mock.onPost('http://localhost:3000/categories').reply(201, newCategory);

    const result = await CategoriesService.addCategory(newCategory);

    expect(result.status).toBe(201);
    expect(result.data).toEqual(newCategory);
  });

  test('should handle error when adding category', async () => {
    const newCategory = { name: 'Books' };
    mock.onPost('http://localhost:3000/categories').reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await CategoriesService.addCategory(newCategory);

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  test('should delete category successfully', async () => {
    const categoryId = 1;
    mock.onDelete(`http://localhost:3000/categories/${categoryId}`).reply(200);

    const result = await CategoriesService.deleteCategory(categoryId);

    expect(result.status).toBe(200);
  });

  test('should handle error when deleting category', async () => {
    const categoryId = 1;
    mock.onDelete(`http://localhost:3000/categories/${categoryId}`).reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await CategoriesService.deleteCategory(categoryId);

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  test('should edit category successfully', async () => {
    const categoryId = 1;
    const updatedCategory = { name: 'Home Appliances' };
    mock.onPut(`http://localhost:3000/categories/${categoryId}`).reply(200, updatedCategory);

    const result = await CategoriesService.editCategory(categoryId, updatedCategory);

    expect(result.status).toBe(200);
    expect(result.data).toEqual(updatedCategory);
  });

  test('should handle error when editing category', async () => {
    const categoryId = 1;
    const updatedCategory = { name: 'Home Appliances' };
    mock.onPut(`http://localhost:3000/categories/${categoryId}`).reply(500);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await CategoriesService.editCategory(categoryId, updatedCategory);

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });
});
