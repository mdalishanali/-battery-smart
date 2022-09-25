import { Navigate } from "react-router-dom";

const getItemFromLocalStorage = (name) => {
  const jsonData = localStorage.getItem(name);
  const data = jsonData ? JSON.parse(jsonData) : null;
  return data;
};

export const AuthGuard = ({ children, redireactPath = "/login" }) => {
  const jwtToken = getItemFromLocalStorage("jwt");
  const user = getItemFromLocalStorage("user");
  const isLoggedIn = jwtToken && user;
  if (!isLoggedIn) {
    return <Navigate to={redireactPath} replace />;
  }
  return children;
};
