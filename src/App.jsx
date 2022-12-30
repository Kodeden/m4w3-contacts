import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Table from "./components/Table/Table";
import User from "./components/User";
import Root from "./routes/Root";
import apiService from "./api.service";
import Delete from "./routes/Delete";

const createEditUser = async ({ request }) => {
  const fd = await request.formData();
  const createdEditedUser = Object.fromEntries(fd.entries());

  try {
    const { id } =
      // 'id' may or may not be defined depending on whether we are creating or updating
      createdEditedUser.id
        ? await apiService.update(createdEditedUser.id, createdEditedUser)
        : await apiService.create(createdEditedUser);

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
    action: createEditUser,
    children: [
      {
        path: "",
        element: <Table />,
      },
      {
        path: ":id",
        element: <User />,
      },
      {
        path: "/delete/:id",
        element: <Delete />,
        action: async ({ params }) => {
          await apiService.delete(params.id);
          return redirect("/");
        },
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
