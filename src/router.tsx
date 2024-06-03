import { createBrowserRouter } from "react-router-dom";
import { Home, Items, ItemDetail } from "./pages";
import MainLayout from "./layout/MainLayout";
import ItemsResultLayout from "./layout/ItemResultLayout/ItemsResultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "items",
        element: <ItemsResultLayout />,
        children: [
          {
            path: "",
            element: <Items />,
          },
          {
            path: ":id",
            element: <ItemDetail />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <h1>Page not found</h1> },
]);
