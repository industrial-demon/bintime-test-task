import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ArticlesPage } from "../pages/articles.page";
import { ArticleDitailsPage } from "../pages/article-details.page";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <ArticlesPage />,
  },
  {
    path: "/:id",
    element: <ArticleDitailsPage />,
  },
]);

export const Routing = () => {
  return <RouterProvider router={routing} />;
};
