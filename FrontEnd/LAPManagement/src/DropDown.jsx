import { DropDownItem } from "./DropDownItem";
import { useState } from "react";

export function DropDown ({ text }) {

  const [itemsDeployed, setItemsDeployed] = useState(false);

  const dropDownItemsClassName = itemsDeployed ? 'dropDown-items deployed' : 'dropDown-items';

  const handleItemsDeployed = () => {
    setItemsDeployed(!itemsDeployed);
  }

  return (
    <section className="dropDown">
      <button onClick={handleItemsDeployed}>
        <span>{text}</span>
        <div>
          <img src="./assets/DropDownArrow.png" alt="DropDownArrow" />
        </div>
      </button>
      <DropDownItem text={'Listar'} itemClass={dropDownItemsClassName}/>
      <DropDownItem text={'Agregar'} itemClass={dropDownItemsClassName}/>
      <DropDownItem text={'Listar'} itemClass={dropDownItemsClassName}/>
      <DropDownItem text={'Eliminar'} itemClass={dropDownItemsClassName}/>
    </section>
  );
}