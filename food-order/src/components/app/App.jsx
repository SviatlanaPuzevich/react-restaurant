import { Layout } from "../layout/Layout";
import { ThemeContextProvider } from "../themeContex/ThemeContext";
import { AuthContextProvider } from "../authContext/AuthContext";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "../homePage/HomePage";
import { RestaurantPages } from "../restaurantPages/RestaurantPages";
import { RestaurantPage } from "../restaurantPage/RestaurantPage";
import { Menu } from "../menu/Menu";
import { ReviewPage } from "../reviewPage/ReviewPage";
import { DishPage } from "../dishPage/DishPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <HomePage /> },
      {
        path: "restaurants",
        element: <RestaurantPages />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              { path: "", element: <Navigate to="menu" /> },
              { path: "menu", element: <Menu /> },
              { path: "reviews", element: <ReviewPage /> },
            ],
          },
        ],
      },
      {
        path: "dish",
        children: [{ path: ":dishId", element: <DishPage /> }],
      },
    ],
  },
]);

export function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}
