import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Header } from "../Header.jsx";
import userSlice from "../../../store/slices/userSlice.js";

const store1 = configureStore({
  reducer: {
    user: userSlice,
  },
  preloadedState: { user: { name: "test user" } },
});

const Wrapper = (children) => <Provider store={store1}>{children}</Provider>;

describe("Header", () => {
  test("renders Header component", () => {
    localStorage.setItem("token", "12345");
    render(
      Wrapper(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("test user")).toBeInTheDocument();
  });
});
