import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Root from "../routes/Root";
import FAKE_USERS from "./fixtures/users.json";
import { userEvent } from "@testing-library/user-event";

const firstUser = FAKE_USERS[0];
const firstUserPage2 = FAKE_USERS[10];

const routes = [
  {
    path: "/",
    element: <Root />,
    loader: () => Promise.resolve({ users: FAKE_USERS }),
  },
];

const router = createMemoryRouter(routes, { initialEntries: ["/"] });

describe("Using default of 10 per page", () => {
  it("renders the first 10 users", async () => {
    render(<RouterProvider router={router} />);

    const users = await screen.findAllByRole("row");

    // 10 users + 1 header row + 1 pagination row
    expect(users).toHaveLength(12);

    expect(screen.getByText(firstUser.fullName)).toBeInTheDocument();
    expect(screen.getByText(firstUser.username)).toBeInTheDocument();
  });

  it("renders the next 10 users on page 2", async () => {
    render(<RouterProvider router={router} />);
  });
});
