import './DropDownItem.css';

export function DropDownItem ({ text, itemClass }) {
  return (
    <article className={itemClass}>
      <span>{text}</span>
    </article>
  );
}