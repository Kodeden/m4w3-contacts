import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Root from "./routes/Root";
import apiService from "./services/api.service";
import Table from "./components/Table/Table";

const createUser = async ({ request }) => {
  const fd = await request.formData();
  const newUser = Object.fromEntries(fd.entries());
  await apiService.create(newUser);
};

const loadUsers = async () => {
  const users = await apiService.index();
  return { users };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loadUsers,
    action: createUser,
    children: [
      {
        path: "",
        element: <Table />,
      },
    ],
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
