import React, { useState } from "react";
import CreateAlert from "../../components/create-alert-form/CreateAlert";
import AlertTable from "../../components/table/AlertTable";
import { UserData } from "../../Data";
import LineGraph from "../../components/chart/LineGraph";
const AllComp = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Dk-1",
        data: UserData.map((data) => data.inc),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        fill: true,
        backgroundColor: "#e6a02933",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Dk-2",
        data: UserData.map((data) => data.dec),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        fill: true,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "pink",
      },
    ],
  });
  const [refreshTable, setRefreshTable] = useState(false);
  return (
    <>
      <div className="data-section">
        <div className="tittle">
          <span>Peak shaving & Alert</span>
          <span>Peak shaving & Alert</span>
        </div>
        {/* here is  */}
        <div className="data-parent">
          <div className="graph-section">
            <div style={{ width: "50%", height: "1vh" }}>
              <LineGraph chartData={userData} />
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
    </>
  );
};
export default AllComp;
