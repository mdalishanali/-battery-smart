import React from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { authLogoutAction } from "../../redux/auth/actions";
// import { useAppDispatch } from "../../hooks/reduxHooks";

const Header = () => {
  const menu = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Dashboard",
      to: "/dashboard",
    },
  ];
  //   const dispatch = useAppDispatch();
  //   const userState = useSelector((state) => state.userState);
  //   const { isLoggedIn } = userState;
  const isLoggedIn = true;
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/login");
  };
  const logOut = () => {
    navigate("/");
//     dispatch(authLogoutAction());
//     handleLogoutFirebase();
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
          {/* <button>
            <Link to="/profile">Profile</Link>
          </button> */}
        </>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
    </>
  );
};

export default Header;
