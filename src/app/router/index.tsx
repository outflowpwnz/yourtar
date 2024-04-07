import { MainLayout } from "app/layouts";
import { Index } from "pages";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
    children: [
      {
        element: <Index />,
        path: "/",
      }
    ]
  }
]);
