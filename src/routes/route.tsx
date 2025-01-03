import App from "@/App";
import Tasks from "@/pages/Tasks";
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
    ],
  },
]);
export default routes;
