import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { getNavIds } from "../utils/pagination";

export default function User() {
  const { user, ids } = useUser();

  const { prevId, nextId } = getNavIds(ids, user.id);

  return (
    <figure className="container mx-auto flex flex-col gap-y-4 rounded-md border bg-zinc-900 px-8 py-8 text-zinc-50 shadow-xl">
      <div className="flex items-center gap-x-4">
        <img
          src={user.avatar}
          alt={user.fullName}
          className="h-32 w-32 rounded-full"
        />
        <figcaption>
          <h2 className="text-2xl font-bold text-indigo-700">
            {user.fullName}
          </h2>
          <small>{user.username}</small>
          <blockquote className="italic">&quot;{user.phrase}&quot;</blockquote>
        </figcaption>
      </div>

      <footer className="self-center text-xl">
        <Link to={"/" + prevId} className="mr-4 text-indigo-500">
          ⬅️ Prev
        </Link>
        <Link to={"/" + nextId} className="text-indigo-500">
          Next ➡️
        </Link>
      </footer>
    </figure>
  );
}
