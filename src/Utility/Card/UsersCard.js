import React from "react";

const UsersCard = ({ image }) => {
  return (
    <div className="relative h-auto inline">
      <img
        src={require(`../../Logo & Images/${image}`)}
        alt=""
        width={"200px"}
      />
      <div className="absolute top-32 left-20">
        <img src={require("../../Logo & Images/Play.png")} alt="" />
      </div>
      
    </div>
  );
};

export default UsersCard;
