import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./style.css";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="main-section">
      <div className="sidebar-section">
        <Sidebar />
      </div>

      <Outlet />
    </div>
  );
};
