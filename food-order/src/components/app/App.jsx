import { Layout } from "../layout/Layout";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../Tabs/Tabs";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";
import { ScrollProgress } from "../scrollProgress/ScrollProgress";
import { ThemeContextProvider } from "../themeContex/ThemeContext";

export function App() {
  const [activeId, setActiveId] = useState(restaurants[0].id);
  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeId
  );

  if (!restaurants.length) {
    return (
      <ThemeContextProvider>
        <Layout>
          <ScrollProgress />
          <p>No restaurants</p>
        </Layout>
      </ThemeContextProvider>
    );
  }

  return (
    <ThemeContextProvider>
      <Layout>
        <ScrollProgress />
        <Tabs
          activeId={activeRestaurant.id}
          items={restaurants}
          onChange={setActiveId}
        />
        <Restaurant
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      </Layout>
    </ThemeContextProvider>
  );
}
