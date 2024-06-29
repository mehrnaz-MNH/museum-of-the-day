import React from "react";

const SideBar = ({ onClickHandle, title, desc }) => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sbContent">
        <h2>{title}</h2>
        <div>
          <h3>Description</h3>
          <p>{desc}</p>
        </div>
        <button onClick={onClickHandle}>
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
