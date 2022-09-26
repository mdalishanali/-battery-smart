import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { authLogoutAction } from "../../redux/auth/action";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const SidebarNav = styled.nav`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(true);
  const userState = useSelector((state) => state.userState);
  const { authUser } = userState;
  const { name } = authUser;
  const { first, last } = name;
  console.log(first, last);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    dispatch(authLogoutAction());
    navigate("/");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <h1>Grid Manager 2.0</h1>
            <NavIcon to="#">
              <br />
              <h2>
                {first}
                {last}
              </h2>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            <button onClick={handleLogout}>
              <h1>Logout</h1>
            </button>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
