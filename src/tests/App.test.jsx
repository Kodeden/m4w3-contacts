import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Root from "../routes/Root";
import FAKE_USERS from "./fixtures/users.json";

// "fullName": "Lana Boyle V",
const firstUser = FAKE_USERS[0];

// "fullName": "Mrs. Ricardo McCullough",
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
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const pageInput = await screen.findByLabelText(/page/i);

    await user.type(pageInput, "2");

    // wait for appearance inside an assertion
    await waitFor(() => {
      expect(screen.getByText(firstUserPage2.fullName)).toBeInTheDocument();
      expect(screen.getByText(firstUserPage2.username)).toBeInTheDocument();

      // ⚠️ Use 'queryBy' to assert that an element is not present
      expect(screen.queryByText(firstUser.fullName)).toBeNull();
      expect(screen.queryByText(firstUser.username)).toBeNull();
    });
  });
});
