import CategoriesService from './services/categoriesService';

export function FormCategory() {
  const newCategory = {
    detail: '',
  };

  const addCategory = () => {
    CategoriesService.addCategory(newCategory).then(() => {});
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="formContainer">
      <input
        type="text"
        placeholder="Nombre categoria"
        onChange={(e) => (newCategory.detail = e.target.value)}
      />
      <button type="submit" onClick={addCategory}>
        Agregar
      </button>
    </form>
  );
}
