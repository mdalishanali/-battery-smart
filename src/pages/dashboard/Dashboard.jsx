import React, { useState } from "react";
// import GraphChart from "../../components/chart/Chart";
import CreateAlert from "../../components/create-alert-form/CreateAlert";
import Sidebar from "../../components/sidebar/Sidebar";
import AlertTable from "../../components/table/AlertTable";
import "./style.css";
import { UserData } from "../../Data";
import MultiLineGraph from "../../components/chart/Chart";

export const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Users Lossed",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [refreshTable, setRefreshTable] = useState(false);

  return (
    <div className="main-section">
      <div className="sidebar-section">
        {/* <p>Sidebar</p> */}
        <Sidebar />
      </div>

      <div className="data-section">
        <div className="tittle">
          <span>Peak shaving & Alert</span>
          <span>Peak shaving & Alert</span>
        </div>
        {/* here is  */}
        <div className="data-parent">
          <div className="graph-section">
            <div style={{ width: "50%", height: "100px" }}>
              <MultiLineGraph />
            </div>
          </div>
          <div className="create-and-view-section">
            <div className="create-alert">
              <CreateAlert reload={setRefreshTable} />
            </div>
            <div className="table-data" style={{ width: "100%" }}>
              <h1>Table Data</h1>
              <AlertTable reload={refreshTable} setReload={setRefreshTable} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
