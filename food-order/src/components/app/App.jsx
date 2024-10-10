import { Layout } from "../layout/Layout";
import { ScrollProgress } from "../scrollProgress/ScrollProgress";
import { ThemeContextProvider } from "../themeContex/ThemeContext";
import { AuthContextProvider } from "../authContext/AuthContext";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { RestaurantView } from "../restaurantView/RestaurantView";

export function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <ScrollProgress />
            <RestaurantView />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}
