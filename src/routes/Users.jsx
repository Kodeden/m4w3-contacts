import { useLoaderData } from "react-router-dom";
import Table from "../components/Table/Table";

export default function Users() {
  // useLoaderData() is a hook that returns the data - be sure to DESTRUCTURE it!
  const { users } = useLoaderData();

  const usersData = users.map(({ fullName, username }) => ({
    fullName,
    username,
  }));

  return <Table headers={Object.keys(usersData[0])} data={usersData} />;
}
