import './DropDownItem.css';

export function DropDownItem ({ text, itemClass,  handleSelectedOption}) {
  return (
    <article className={itemClass}>
      <button onClick={()=>{handleSelectedOption(text)}}>{text}</button>
    </article>
  );
}