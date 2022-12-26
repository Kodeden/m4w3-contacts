import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Users from "./routes/Users";
import apiService from "./services/api.service";

const loadUsers = async () => {
  const users = await apiService.index();
  return { users };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    loader: loadUsers,
  },
  {
    path: "*",
    element: redirect("/"),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
