import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";

import { createBrowserRouter } from "react-router";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "users",
        element: <User />,
      },
    ],
  },
]);
export default routes;
