import React from "react";
import MiniCard from "../../../Utility/Card/MiniCard";

const Chakra = () => {
  const cardleft = [
    "Love",
    "Marrige Problem",
    "Job issue",
    "Money problem",
    "Education problem",
  ];

  const cardRight = [
    "Grah Shanti",
    "Health Problems",
    "Child Birth Issue",
    "Marrige Issues",
    "Lucky No",
  ];
  return (
    <div className="flex flex-col items-center mt-7 w-4/5 m-auto gap-7">
      <img src={require("../Images/pro.png")} alt="" />
      <div className="flex flex-row justify-between w-4/5 ">
        <div className="flex flex-col justify-between">
          {cardleft.map((item) => {
            return <MiniCard title={item} position="left" />;
          })}
        </div>
        <div className="relative">
          <img
            src={require("../Images/Chakra.png")}
            alt=""
            className="animate-spin"
            style={{ animationDuration: "70s" }}
          />
          <img
            src={require("../Images/ChakraSun.png")}
            alt=""
            className="absolute top-36 left-[150px]"
          />
        </div>
        <div className="flex flex-col justify-between">
          {cardRight.map((item) => {
            return <MiniCard title={item} position="right" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Chakra;
