import React from 'react';
import './DropDownItem.css';

export function DropDownItem({
  text,
  itemClass,
  handleSelectedOption,
  handleTableClassName,
}) {
  return (
    <article className={itemClass}>
      <button
        onClick={() => {
          handleSelectedOption(text);
          if (handleTableClassName != undefined) handleTableClassName('');
        }}
      >
        {text}
      </button>
    </article>
  );
}
