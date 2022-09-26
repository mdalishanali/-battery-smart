import { AUTH_USER, LOGOUT } from "./actionType";

const getItemFromLocalStorage = (name) => {
  const jsonData = localStorage.getItem(name);
  const data = jsonData !== null ? JSON.parse(jsonData) : null;
  return data;
};

const jwtToken = getItemFromLocalStorage("jwt");
const user = getItemFromLocalStorage("user");

const initState = {
  authUser: user,
  token: jwtToken,
  isLoggedIn: user && jwtToken ? true : false,
};

const logoutState = {
  authUser: null,
  token: "",
  isLoggedIn: false,
};

const setUser = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("jwt", JSON.stringify(token));
};

const unsetUser = () => {
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("jwt");
};

export const authReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      const { user, token } = payload;
      setUser(user, token);
      return {
        ...store,
        authUser: user,
        token: token,
        isLoggedIn: true,
      };
    case LOGOUT:
      unsetUser();
      return logoutState;
    default:
      return store;
  }
};
