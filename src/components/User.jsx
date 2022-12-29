import { useOutletContext, useParams } from "react-router-dom";

export default function User() {
  const { data } = useOutletContext();
  const { id } = useParams();

  const user = data.find((user) => user.id === id);

  return (
    <figure>
      <img src={user.avatar} alt={user.fullName} />
      <figcaption>
        <h2>{user.fullName}</h2>
        <p>{user.username}</p>
        <p>{user.phrase}</p>
      </figcaption>
    </figure>
  );
}
