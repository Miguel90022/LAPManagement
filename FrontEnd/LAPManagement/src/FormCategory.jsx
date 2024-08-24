import CategoriesService from "./services/categoriesService";

export function FormCategory(){

    const newCategory = {
        detail: "",
      };

    const addCategory = () => {
        CategoriesService.addCategory(newCategory).then(() => {          
        });
      };

    return(
    <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          placeholder="nombre catgoria"
          onChange={(e) => (newCategory.detail = e.target.value)}
        />
        <button type="submit" onClick={addCategory}>Agregar</button>  
      </form>
    )
}