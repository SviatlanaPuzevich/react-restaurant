import App from "../components/app/App";
import "../../src/components/app/index.css";

export const metadata = {
  title: "Food order",
  description: "React application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <App>{children}</App>
        </div>
      </body>
    </html>
  );
}
