const CategoriesController = require('../controllers/categoriesController');
const categoryDB = require('../databaseConnectionSqlServer/categoryDB');

jest.mock('../databaseConnectionSqlServer/categoryDB');

describe('CategoriesController', () => {
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

  it('should return all categories', async () => {
    const mockCategories = [{ PKCategoryID: 1, Detail: 'Category 1' }];
    categoryDB.getAllCategories.mockResolvedValue(mockCategories);

    await CategoriesController.getAllCategories(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockCategories);
  });

  it('should handle the abscense of categories', async () => {
    categoryDB.getAllCategories.mockResolvedValue([]);

    await CategoriesController.getAllCategories(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith("No se encontraron categorías.");
  });

  it('should handle errors when getting all categories', async () => {
    categoryDB.getAllCategories.mockRejectedValue(new Error('Database error'));

    await CategoriesController.getAllCategories(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith("Error en el servidor");
  });

  it('should return a category by id', async () => {
    const mockCategory = { PKCategoryID: 1, Detail: 'Category 1' };
    mockRequest.params = { id: 1 };
    categoryDB.getCategory.mockResolvedValue(mockCategory);

    await CategoriesController.getCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockCategory);
  });

  it('should handle category abscense', async () => {
    mockRequest.params = { id: 1 };
    categoryDB.getCategory.mockResolvedValue(null);

    await CategoriesController.getCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith("Categoría no encontrada");
  });

  it('should handle errors when getting a category', async () => {
    mockRequest.params = { id: 1 };
    categoryDB.getCategory.mockRejectedValue(new Error('Database error'));

    await CategoriesController.getCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith("Error en el servidor");
  });

  it('should add a new category', async () => {
    const mockCategory = { PKCategoryID: 1, Detail: 'New Category' };
    mockRequest.body = { detail: 'New Category' };
    categoryDB.addCategory.mockResolvedValue(mockCategory);

    await CategoriesController.addCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(mockCategory);
  });

  it('should handle error when adding a new category', async () => {
    mockRequest.body = { detail: 'New Category' };
    categoryDB.addCategory.mockRejectedValue(new Error('Database error'));

    await CategoriesController.addCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith('Error en el servidor');
  });

  it('should update an existing category', async () => {
    mockRequest.params = { id: 1 };
    mockRequest.body = { detail: 'Updated Category' };
    categoryDB.editCategory.mockResolvedValue([1]);

    await CategoriesController.editCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith('Categoría actualizada con éxito');
  });

  it('should handle the editing of a non existing category', async () => {
    mockRequest.params = { id: 1 };
    mockRequest.body = { detail: 'Updated Category' };
    categoryDB.editCategory.mockResolvedValue([0]);

    await CategoriesController.editCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith('Categoría no encontrada');
  });

  it('should handle error when editing a category', async () => {
    mockRequest.params = { id: 1 };
    mockRequest.body = { detail: 'Updated Category' };
    categoryDB.editCategory.mockRejectedValue(new Error('Database error'));

    await CategoriesController.editCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith('Error en el servidor');
  });

  it('should delete an existing category', async () => {
    mockRequest.params = { id: 1 };
    categoryDB.deleteCategory.mockResolvedValue(1);

    await CategoriesController.deleteCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith('Categoría eliminada con éxito');
  });

  it('should handle deleting a non existing category', async () => {
    mockRequest.params = { id: 1 };
    categoryDB.deleteCategory.mockResolvedValue(0);

    await CategoriesController.deleteCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith('Categoría no encontrada');
  });

  it('should handle errors when deleting a category', async () => {
    mockRequest.params = { id: 1 };
    categoryDB.deleteCategory.mockRejectedValue(new Error('Database error'));

    await CategoriesController.deleteCategory(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith('Error en el servidor');
  });
});


