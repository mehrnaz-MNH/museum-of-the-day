import React from "react";

const Footer = ({ onInfoClickHandle, title }) => {
  return (
    <footer>
      <div className="bgGradient"></div>

      <div>
        <h2>{title}</h2>
        <h1>Museum Of The Day</h1>
      </div>

      <button onClick={onInfoClickHandle}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
