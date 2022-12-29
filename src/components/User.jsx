import { useOutletContext, useParams } from "react-router-dom";

export default function User() {
  const { data } = useOutletContext();
  const { id } = useParams();

  const user = data.find((user) => user.id === id);

  return (
    <figure className="container mx-auto flex items-center gap-x-2 rounded-md border bg-zinc-900 px-4 py-16 text-zinc-50 shadow-xl">
      <img src={user.avatar} alt={user.fullName} className="rounded-full" />
      <figcaption>
        <h2 className="text-2xl font-bold text-indigo-700">{user.fullName}</h2>
        <small>{user.username}</small>
        <blockquote className="italic">&quot;{user.phrase}&quot;</blockquote>
      </figcaption>
    </figure>
  );
}
