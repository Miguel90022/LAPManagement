import React from 'react';
import { DropDownItem } from './DropDownItem';
import { useState } from 'react';
import DropDownArrow from './assets/DropDownArrow.png';

export function DropDown({
  text,
  handleSelectedDropDown,
  handleSelectedOption,
  handleTableClassName,
}) {
  const [itemsDeployed, setItemsDeployed] = useState(false);

  const dropDownItemsClassName = itemsDeployed
    ? 'dropDown-items deployed'
    : 'dropDown-items';

  const handleItemsDeployed = () => {
    setItemsDeployed(!itemsDeployed);
  };

  return (
    <section
      className="dropDown"
      onClick={() => {
        handleSelectedDropDown(text);
        if (!itemsDeployed) {
          handleSelectedOption('');
        }
      }}
    >
      <button className="dropDownTitle" onClick={handleItemsDeployed}>
        <span>{text}</span>
        <div>
          <img src={DropDownArrow} alt="DropDownArrow" />
        </div>
      </button>
      <DropDownItem
        text={'Agregar'}
        itemClass={dropDownItemsClassName}
        handleSelectedOption={handleSelectedOption}
      />
      <DropDownItem
        text={'Listar / Eliminar / Editar'}
        itemClass={dropDownItemsClassName}
        handleSelectedOption={handleSelectedOption}
        handleTableClassName={handleTableClassName}
      />
    </section>
  );
}
