const categoryDB = require('../databaseConnectionSqlServer/categoryDB');
const Category = require('../models/category');

jest.mock('../models/category');

describe('categoryDB', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return all categories', async () => {
    const mockCategories = [{ PKCategoryID: 1, Detail: 'Category 1' }];
    Category.findAll.mockResolvedValue(mockCategories);

    const result = await categoryDB.getAllCategories();
    expect(result).toEqual(mockCategories);
    expect(Category.findAll).toHaveBeenCalledTimes(1);
  });

  it('should return a category by id', async () => {
    const mockCategory = { PKCategoryID: 1, Detail: 'Category 1' };
    Category.findByPk.mockResolvedValue(mockCategory);

    const result = await categoryDB.getCategory(1);
    expect(result).toEqual(mockCategory);
    expect(Category.findByPk).toHaveBeenCalledWith(1);
  });

  it('should add a new category', async () => {
    const mockCategory = { PKCategoryID: 1, Detail: 'Category 1' };
    Category.create.mockResolvedValue(mockCategory);

    const result = await categoryDB.addCategory('Category 1');
    expect(result).toEqual(mockCategory);
    expect(Category.create).toHaveBeenCalledWith({ Detail: 'Category 1' });
  });

  it('should update an existing category', async () => {
    Category.update.mockResolvedValue([1]);

    const result = await categoryDB.editCategory(1, 'Updated Category');
    expect(result).toEqual([1]);
    expect(Category.update).toHaveBeenCalledWith({ Detail: 'Updated Category' }, { where: { PKCategoryID: 1 } });
  });

  it('should delete an existig category', async () => {
    Category.destroy.mockResolvedValue(1); 

    const result = await categoryDB.deleteCategory(1);
    expect(result).toBe(1);
    expect(Category.destroy).toHaveBeenCalledWith({ where: { PKCategoryID: 1 } });
  });
});

