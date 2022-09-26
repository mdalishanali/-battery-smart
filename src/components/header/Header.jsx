import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authLogoutAction } from "../../redux/auth/action";

const Header = () => {
  const menu = [
    {
      name: "Home",
      to: "/",
    },
  ];
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userState);
  const { isLoggedIn } = userState;
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/login");
  };
  const logOut = () => {
    navigate("/");
    dispatch(authLogoutAction());
  };
  return (
    <>
      <span>Header</span>
      {menu.map((item, key) => {
        return (
          <button key={key}>
            <Link to={item.to}>{item.name}</Link>
          </button>
        );
      })}

      {isLoggedIn ? (
        <>
          <button onClick={logOut}>Logout</button>
          <button>
            <Link to="/dashboard">Dashboard</Link>
          </button>
        </>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
    </>
  );
};

export default Header;
