// export const createAuthorThunk = () => {};

import { getAuthors } from "../../services";

export const getAuthorsThunk = () => {
  return async (dispatch) => {
    const authors = await getAuthors();

    dispatch({
      type: "authors/setAuthors",
      payload: authors.result,
    });
  };
};
