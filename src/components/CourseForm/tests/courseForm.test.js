import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../../store/slices/userSlice.js";
import coursesSlice from "../../../store/slices/coursesSlice.js";
import authorsSlice from "../../../store/slices/authorsSlice.js";
import { CourseForm } from "../CourseForm.jsx";

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
        authors: [{ id: "1", name: "Author1" }],
      },
    ],
  }),
  getAuthors: () => ({
    result: [
      { id: "1", name: "Author1" },
      { id: "2", name: "Author2" },
      { id: "3", name: "Author3" },
    ],
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
        authors: [{ id: "1", name: "Author1" }],
      },
    ],
    authors: [
      { id: "1", name: "Author1" },
      { id: "2", name: "Author2" },
      { id: "3", name: "Author3" },
    ],
  },
});

const Wrapper = (children) => <Provider store={store1}>{children}</Provider>;

describe("CourseForm", () => {
  test("CourseForm should show authors lists", () => {
    render(
      Wrapper(
        <MemoryRouter>
          <CourseForm />
        </MemoryRouter>
      )
    );

    const authorsAllContainer = document.querySelector(".authorsContainer");
    const authorsContainer = document.querySelector(".courseAuthorsContainer");

    expect(
      authorsAllContainer.querySelectorAll("[data-testid='authorItem']")
    ).toHaveLength(3);
    expect(
      authorsContainer.querySelectorAll("[data-testid='authorItem']")
    ).toHaveLength(0);
  });
});
