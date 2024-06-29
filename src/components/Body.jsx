import React from "react";

const Body = ({ imgUrl, altTitle }) => {
  return (
    <div className="picContainer">
      <img src={imgUrl} alt={altTitle} className="mainImage" />
    </div>
  );
};

export default Body;
