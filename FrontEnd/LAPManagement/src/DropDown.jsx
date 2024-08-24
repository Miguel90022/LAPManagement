import { DropDownItem } from "./DropDownItem";
import { useState } from "react";

export function DropDown ({ text, handleSelectedDropDown, handleSelectedOption }) {

  const [itemsDeployed, setItemsDeployed] = useState(false);

  const dropDownItemsClassName = itemsDeployed ? 'dropDown-items deployed' : 'dropDown-items';

  const handleItemsDeployed = () => {
    setItemsDeployed(!itemsDeployed);
  }

  return (
    <section className="dropDown" onClick={()=>{handleSelectedDropDown(text); if (!itemsDeployed) {
      handleSelectedOption("")
    } }}>
      <button onClick={handleItemsDeployed}>
        <span>{text}</span>
        <div>
          <img src="./assets/DropDownArrow.png" alt="DropDownArrow" />
        </div>
      </button>
      <DropDownItem text={'Agregar'} itemClass={dropDownItemsClassName}  handleSelectedOption = {handleSelectedOption}/>
      <DropDownItem /*action={crudActions[0]}*/ text={'Listar / Eliminar / Editar'} itemClass={dropDownItemsClassName}  handleSelectedOption = {handleSelectedOption}/>
    </section>
  );
}