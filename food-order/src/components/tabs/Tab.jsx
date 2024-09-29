export function Tab({ name, isSelected, onClick }) {
  const className = isSelected ? "tab tab__selected" : "tab";
  return (
    <button disabled={isSelected} className={className} onClick={onClick}>
      {name}
    </button>
  );
}
