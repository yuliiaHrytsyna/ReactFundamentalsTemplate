import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../../store/slices/userSlice.js";
import coursesSlice from "../../../store/slices/coursesSlice.js";
import authorsSlice from "../../../store/slices/authorsSlice.js";
import { Courses } from "../Courses.jsx";
import App from "../../../App.jsx";

jest.mock("../../../services.js", () => ({
  login: () => ({
    result: { name: "test user", role: "admin", token: "123456" },
  }),
  getCurrentUser: () => ({
    result: { name: "test user", role: "admin", token: "123456" },
  }),
  getCourses: () => ({
    result: [
      {
        title: "title",
        description: "description",
        duration: 120,
        creationDate: "1/1/2020",
        id: "1",
        authors: [],
      },
    ],
  }),
  getAuthors: () => ({
    result: [],
  }),
  logout: () => ({ result: null }),
}));

const store1 = configureStore({
  reducer: {
    user: userSlice,
    courses: coursesSlice,
    authors: authorsSlice,
  },
  preloadedState: {
    user: { name: "test user", role: "admin", token: "123456" },
    courses: [
      {
        title: "title",
        description: "description",
        duration: 120,
        creationDate: "1/1/2020",
        id: "1",
        authors: [],
      },
    ],
    authors: [],
  },
});

const Wrapper = (children) => <Provider store={store1}>{children}</Provider>;

describe("Courses", () => {
  test("renders Courses component", () => {
    render(
      Wrapper(
        <MemoryRouter>
          <Courses />
        </MemoryRouter>
      )
    );

    expect(screen.getAllByTestId("courseCard")).toHaveLength(1);
  });
  test("renders CoursesForm on button click", () => {
    localStorage.setItem("token", "123456");
    render(
      Wrapper(
        <MemoryRouter
          initialEntries={["/courses", "/courses/add"]}
          initialIndex={0}
        >
          <App />
        </MemoryRouter>
      )
    );

    act(() => {
      const button = screen.getByText("ADD NEW COURSE");
      fireEvent.click(button);
    });

    expect(screen.getByText("Course Create")).toBeInTheDocument();
  });
});
