import { Link, useOutletContext, useParams, useSubmit } from "react-router-dom";
import Dialog from "../components/Dialog";

export default function Delete() {
  const { data } = useOutletContext();
  const { id } = useParams();
  const submit = useSubmit();

  const user2Delete = data.find((user) => user.id === id);

  return (
    <Dialog>
      <h2 className="text-2xl font-bold">Delete User</h2>
      <p>Are you sure you want to delete this user?</p>
      <p className="font-bold">{user2Delete.fullName}</p>
      <div className="flex justify-end">
        <button
          className="rounded-lg bg-red-500 px-4 py-2 text-white"
          type="button"
          onClick={() => {
            submit(null, { method: "POST" });
          }}
        >
          Delete
        </button>
        <Link
          to="/"
          className="ml-2 rounded-lg bg-gray-500 px-4 py-2 text-white"
          onClick={() => {}}
        >
          Cancel
        </Link>
      </div>
    </Dialog>
  );
}
