import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Registration, Login, Courses, CourseInfo } from "./components";
import { CourseForm } from "./components/CourseForm/CourseForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />}>
          <Route path=":courseId" element={<CourseInfo />} />
          <Route path="add" element={<CourseForm />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
