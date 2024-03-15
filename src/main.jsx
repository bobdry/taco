import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Taco, {
  loader as tacoLoader,
  action as tacoAction,
} from "./routes/taco";
import EditTaco, {
  action as editAction,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index, {
  loader as rootLoader,
  action as rootAction,
}  from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true, 
            element: <Index />, 
            loader: rootLoader,
            action: rootAction,
          },
          {
            path: "tacos/:tacoId",
            element: <Taco />,
            loader: tacoLoader,
            action: tacoAction,
          },
          {
            path: "tacos/:tacoId/edit",
            element: <EditTaco />,
            loader: tacoLoader,
            action: editAction,
          },
          {
            path: "tacos/:tacoId/destroy",
            action: destroyAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);