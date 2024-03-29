import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../../../../store/slices/userSlice.js";
import coursesSlice from "../../../../../store/slices/coursesSlice.js";
import authorsSlice from "../../../../../store/slices/authorsSlice.js";
import { CourseCard } from "../../index.js";

const course = {
  title: "title",
  description: "description",
  duration: 120,
  creationDate: "1/1/2020",
  id: "1",
  authors: ["1", "3"],
};
const authorsList = [
  { id: "1", name: "Author1" },
  { id: "2", name: "Author2" },
  { id: "3", name: "Author3" },
];

jest.mock("../../../../../services.js", () => ({
  login: () => ({
    result: { name: "test user", role: "admin", token: "123456" },
  }),
  getCurrentUser: () => ({
    result: { name: "test user", role: "admin", token: "123456" },
  }),
  getCourses: () => ({
    result: [course],
  }),
  getAuthors: () => ({
    result: authorsList,
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
    user: { name: "test user", role: "admin" },
    courses: [course],
    authors: authorsList,
  },
});

const Wrapper = (children) => <Provider store={store1}>{children}</Provider>;

describe("CourseCard", () => {
  test("renders course title", () => {
    render(
      Wrapper(
        <MemoryRouter>
          <CourseCard course={course} authorsList={authorsList} />
        </MemoryRouter>
      )
    );

    expect(screen.getByText(course.title)).toBeInTheDocument();
  });
  test("renders course description", () => {
    render(
      Wrapper(
        <MemoryRouter>
          <CourseCard course={course} authorsList={authorsList} />
        </MemoryRouter>
      )
    );

    expect(screen.getByText(course.description)).toBeInTheDocument();
  });
  test("renders course duration in the correct format", () => {
    render(
      Wrapper(
        <MemoryRouter>
          <CourseCard course={course} authorsList={authorsList} />
        </MemoryRouter>
      )
    );

    const mappedDuration = "02:00 hours";

    expect(screen.getByText(mappedDuration)).toBeInTheDocument();
  });
  test("renders course authors list", () => {
    render(
      Wrapper(
        <MemoryRouter>
          <CourseCard course={course} authorsList={authorsList} />
        </MemoryRouter>
      )
    );

    const courseAuthors = "Author1, Author3";

    expect(screen.getByText(courseAuthors)).toBeInTheDocument();
  });
  test("renders course created date in the correct format", () => {
    render(
      Wrapper(
        <MemoryRouter>
          <CourseCard course={course} authorsList={authorsList} />
        </MemoryRouter>
      )
    );

    const formattedDate = "1.1.2020";

    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
  // test("renders CoursesForm on button click", () => {
  //   localStorage.setItem("token", "123456");
  //   render(
  //     Wrapper(
  //       <MemoryRouter
  //         initialEntries={["/courses", "/courses/1"]}
  //         initialIndex={0}
  //       >
  //         <App />
  //       </MemoryRouter>
  //     )
  //   );

  //   act(() => {
  //     const button = screen.getByText("SHOW COURSE");
  //     fireEvent.click(button);
  //   });

  //   expect(screen.getByText(`${course.title}`)).toBeInTheDocument();
  //   expect(screen.getByText(`${course.description}`)).toBeInTheDocument();
  //   expect(screen.getByText("Back")).toBeInTheDocument();
  // });
});
