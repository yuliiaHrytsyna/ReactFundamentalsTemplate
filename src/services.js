export const createUser = async (data) => {
  const newUser = {
    name: data.name,
    password: data.password,
    email: data.email,
  };
  const url = "http://localhost:4000/register";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const users = await response.json();
  return users;
};

export const login = async (data) => {
  const url = "http://localhost:4000/login";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const getCourses = async () => {
  const url = "http://localhost:4000/courses/all";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const getAuthors = async () => {
  const url = "http://localhost:4000/authors/all";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const getCurrentUser = async (token) => {
  const url = "http://localhost:4000/users/me";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const result = await response.json();
  return result;
};

export const updateCourseService = async (request, id) => {
  const url = `http://localhost:4000/courses/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(request),
  });
  const result = await response.json();
  return result.result;
};

export const logout = async () => {
  const url = `http://localhost:4000/logout`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  const result = await response.json();
  return result;
};

export const deleteCourseService = async (id) => {
  const url = `http://localhost:4000/courses/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  const result = await response.json();
  return result;
};

export const createCourse = async (course) => {
  const url = `http://localhost:4000/courses/add`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(course),
  });
  const result = await response.json();
  return result.result;
};

export const createAuthor = async () => {
  // write your code here
};
