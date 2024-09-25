import { Layout } from "../layout/Layout";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../Tabs/Tabs";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";

export function App() {
  const tabItems = restaurants;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRestaurant = restaurants[activeIndex];
  const handleTabChange = (activeId) => {
    const index = restaurants.findIndex((r) => r.id === activeId);
    setActiveIndex(index);
  };

  if (!restaurants.length) {
    return <p>No restaurants</p>;
  }

  return (
    <Layout>
      <Tabs
        activeId={tabItems[activeIndex].id}
        items={tabItems}
        onChange={handleTabChange}
      />
      <Restaurant
        key={activeRestaurant.id}
        name={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </Layout>
  );
}
