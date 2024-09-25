import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";

export function Restaurant({ name, menu, reviews }) {
  return (
    <article>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </article>
  );
}
