import React from "react";
import "./loader.css";
import LodingSvg from "../../assets/loader.svg";
const Loader = () => {
  return (
    <div className="parent_div">
      <div>
        <img src={LodingSvg} className="image" alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
