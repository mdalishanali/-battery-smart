import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children, redireactPath = "/login" }) => {
  const userState = useSelector((state) => state.userState);
  const { isLoggedIn } = userState;
  if (!isLoggedIn) {
    return <Navigate to={redireactPath} replace />;
  }
  return children;
};
