import { Form, Link, Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { TextInput } from "../components/Form";

export default function Root() {
  // useLoaderData() is a hook that returns the data - be sure to DESTRUCTURE it!
  const { users } = useLoaderData();
  const submit = useSubmit();

  const tableData = users.map(({ id, fullName, username }) => ({
    id,
    fullName,
    username,
  }));

  return (
    <>
      <h1 className="mt-4 mb-8 text-center text-3xl font-bold underline">
        <Link to="/">Contacts</Link>
      </h1>
      <main className="mx-8 flex flex-col gap-y-4">
        <Form
          className="flex flex-col items-center border-y"
          onSubmit={(e) => {
            e.preventDefault();
            submit(e.target, { method: "post" });
            e.target.reset();
          }}
        >
          <fieldset>
            <legend className="my-4 w-full text-center font-semibold">
              Create a New Contact (all fields required)
            </legend>
            <div className="flex flex-col gap-4 md:flex-row">
              <TextInput
                id="fullName"
                pattern="\w(\s?\w)*"
                placeholder="Full Name (e.g. John Doe)"
              />
              <TextInput
                id="username"
                pattern="\w{3,16}"
                placeholder="Username (3-16 chars)"
              />
              <TextInput id="phrase" />
              <TextInput
                id="avatar"
                type="url"
                placeholder="Enter URL for Avatar"
              />
            </div>
          </fieldset>
          <button
            className="my-6 w-max rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
            type="submit"
          >
            Submit
          </button>
        </Form>

        <Outlet context={{ data: users, tableData }} />
      </main>
    </>
  );
}
