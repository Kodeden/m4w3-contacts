import { useLoaderData } from "react-router-dom";
import Table from "../components/Table/Table";
import { TextInput } from "../components/Form";

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
      <h1 className="mt-4 mb-8 text-center text-3xl font-bold underline">
        Contacts
      </h1>
      <main className="flex flex-col gap-y-4">
        <form className="flex flex-col items-center gap-y-4 border-y py-4">
          <div className="flex gap-x-4">
            <TextInput id="fullName" pattern={/^[a-zA-Z]+$]/} />
            <TextInput id="username" />
            <TextInput id="phrase" />
            <TextInput
              id="avatar"
              type="url"
              placeholder="Enter URL for Avatar"
            />
          </div>
          <button
            className="w-max rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
            type="submit"
          >
            Submit
          </button>
        </form>

        <Table headers={Object.keys(usersData[0])} data={usersData} />
      </main>
    </>
  );
}
