import { Layout } from "../layout/Layout";
import { ScrollProgress } from "../scrollProgress/ScrollProgress";
import { ThemeContextProvider } from "../themeContex/ThemeContext";
import { AuthContextProvider } from "../authContext/AuthContext";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { RestaurantView } from "../restaurantView/RestaurantView";
import { Cart } from "../cart/Cart";

export function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <ScrollProgress />
            <RestaurantView />
            <Cart />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}
