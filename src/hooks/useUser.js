import { useOutletContext, useParams } from "react-router-dom";

export default function useUser() {
  const { data } = useOutletContext();
  const { id } = useParams();

  const user = data.find((user) => user.id === id);
  const ids = data.map((user) => user.id);

  return { user, ids };
}
