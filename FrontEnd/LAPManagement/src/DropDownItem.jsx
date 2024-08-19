import './DropDownItem.css';

export function DropDownItem ({ text, itemClass , action}) {
  return (
    <article className={itemClass}>
      <button onClick={action}>{text}</button>
    </article>
  );
}