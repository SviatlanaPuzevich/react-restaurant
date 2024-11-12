import styles from "./dishPage.module.css";

export function DishPage({ dish }) {
  return (
    <div className={styles.card}>
      <h3>{dish.name}</h3>
      <ul>
        {dish.ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}
