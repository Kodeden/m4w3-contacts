import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Table from "./components/Table/Table";
import User from "./components/User";
import Root from "./routes/Root";
import apiService from "./services/api.service";

const createUser = async ({ request }) => {
  const fd = await request.formData();
  const newUser = Object.fromEntries(fd.entries());

  try {
    const { id } = await apiService.create(newUser);

    // Must return a redirect action
    return redirect(`/${id}`);
  } catch (error) {
    // TODO: redirect to error page
    console.error(error);
  }
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
      {
        path: ":id",
        element: <User />,
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
