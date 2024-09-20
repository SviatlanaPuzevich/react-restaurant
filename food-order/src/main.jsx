import { createRoot } from "react-dom/client";

import { restaurants } from "../materials/mock";
import { createElement } from "react";

createRoot(document.getElementById("root")).render(
  <>
    <article>
      <h2>{restaurants[0].name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurants[0].menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurants[0].reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </article>
    <article>
      <h2>{restaurants[1].name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurants[1].menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurants[1].reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </article>
    <article>
      <h2>{restaurants[2].name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurants[2].menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurants[2].reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </article>
    <article>
      <h2>{restaurants[3].name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurants[3].menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurants[3].reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </article>
  </>
);
