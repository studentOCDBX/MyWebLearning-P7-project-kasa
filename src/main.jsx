import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./utils/style/GlobalStyle.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
