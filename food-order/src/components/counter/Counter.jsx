export function Counter({count, decrease, increase}) {
  return (
    <div>
      <button type="button" onClick={decrease}>-</button> {count}
      <button type="button" onClick={increase}>+</button>
    </div>
  );
}
