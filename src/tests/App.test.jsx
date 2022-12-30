import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter, redirect } from "react-router-dom";
import Table from "../components/Table/Table";
import User from "../components/User";
import Root from "../routes/Root";

// 20 users (counted by id)
import FAKE_USERS from "./fixtures/users.json";

const firstUser = FAKE_USERS[0];
const firstUserPage2 = FAKE_USERS[10];

const routes = [
  {
    path: "/",
    element: <Root />,
    loader: () => Promise.resolve({ users: FAKE_USERS }),
    children: [
      {
        path: "",
        element: <Table />,
      },
      {
        path: ":id",
        element: <User />,
      },
    ],
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

describe("User navigation", () => {
  // We navigate to the first user, so next is the second user and previous is the last user
  const nextUser = FAKE_USERS[1];
  const prevUser = FAKE_USERS[FAKE_USERS.length - 1];

  it("redirects to clicked user", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    // We click on the first user's id 'td' element
    const firstUserId = await screen.findByRole("link", {
      name: firstUser.id,
    });

    await user.click(firstUserId);

    // wait for appearance inside an assertion
    await waitFor(() => {
      // It should show their username (isn't in the initial table)
      expect(screen.getByText(firstUser.username)).toBeInTheDocument();
    });
  });

  describe("navigation between users", () => {
    beforeEach(() => {
      router.navigate("/" + firstUser.id);
    });

    it("navigates to next user", async () => {
      const user = userEvent.setup();
      render(<RouterProvider router={router} />);

      // We click 'next' link
      const nextLink = await screen.findByRole("link", {
        name: /next/i,
      });

      await user.click(nextLink);

      // wait for appearance inside an assertion
      await waitFor(() => {
        expect(screen.getByText(nextUser.username)).toBeInTheDocument();
      });
    });

    it("renders the form with the current user's data", async () => {
      render(<RouterProvider router={router} />);

      const fullNameInput = await screen.findByLabelText(/full name/i);
      const usernameInput = screen.getByLabelText(/username/i);
      const phraseInput = screen.getByLabelText(/phrase/i);
      const urlInput = screen.getByLabelText(/avatar/i);

      expect(fullNameInput).toHaveValue(firstUser.fullName);
      expect(usernameInput).toHaveValue(firstUser.username);
      expect(phraseInput).toHaveValue(firstUser.phrase);
      expect(urlInput).toHaveValue(firstUser.avatarUrl);
    });

    it("navigates to previous user", async () => {
      const user = userEvent.setup();
      render(<RouterProvider router={router} />);

      // We click 'previous' link
      const prevLink = await screen.findByRole("link", {
        name: /prev/i,
      });

      await user.click(prevLink);

      // wait for appearance inside an assertion
      await waitFor(() => {
        expect(screen.getByText(prevUser.username)).toBeInTheDocument();
      });
    });
  });
});
