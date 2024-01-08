import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layouts/Main";
import { loader as productsLoader } from "./pages/Products";
import { loader as productDetailsLoader } from "./pages/ProductDetails";
import { loader as usersLoader } from "./pages/UserList";
import {
  Home,
  About,
  Products,
  ProductDetails,
  UserList,
  Error,
} from "./pages/index";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "/product/:postID",
          element: <ProductDetails />,
          loader: productDetailsLoader,
        },
        {
          path: "/users",
          element: <UserList />,
          loader: usersLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
