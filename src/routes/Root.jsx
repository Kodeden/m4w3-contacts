import { useLoaderData } from "react-router-dom";
import Table from "../components/Table/Table";

export default function Root() {
  // useLoaderData() is a hook that returns the data - be sure to DESTRUCTURE it!
  const { users } = useLoaderData();

  const usersData = users.map(({ id, fullName, username }) => ({
    id,
    fullName,
    username,
  }));

  return (
    <>
      <h1 className="mt-4 mb-12 text-center text-3xl font-bold underline">
        Contacts
      </h1>
      <Table headers={Object.keys(usersData[0])} data={usersData} />
    </>
  );
}
