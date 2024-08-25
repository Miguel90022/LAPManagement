import CategoriesService from './services/categoriesService';

export function FormEditCategory({ category }) {
  console.log(category);

  const newCategory = {
    detail: category[1],
  };

  const editCategory = () => {
    if (newCategory.detail == '') newCategory.detail = category[1];
    CategoriesService.editCategory(category[0], newCategory).then(() => {});
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="formContainer">
      <label>Detail</label>
      <input
        type="text"
        placeholder={category[1]}
        onChange={(e) => (newCategory.detail = e.target.value)}
      />
      <button type="submit" onClick={editCategory}>
        Editar
      </button>
    </form>
  );
}
