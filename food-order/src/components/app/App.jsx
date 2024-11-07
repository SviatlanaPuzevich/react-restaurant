import { Layout } from "../layout/Layout";
import { ThemeContextProvider } from "../themeContex/ThemeContext";
import { AuthContextProvider } from "../authContext/AuthContext";
import { StoreProvider } from "../storeProvider/StoreProvider";

export function App({ children }) {
  return (
    <StoreProvider>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>{children}</Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </StoreProvider>
  );
}

export default App;
