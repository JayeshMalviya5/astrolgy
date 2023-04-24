import React from "react";
import Card from "../../../Utility/Card/Card";

const PremiumSection = () => {
  const arr = [1, 2, 3];
  return (
    <div className="flex flex-col gap-8 items-center mt-16">
      <img src={require("../Images/PremiumAstrologers.png")} alt="" />
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-16">
          {arr.map((item) => {
            return <Card />;
          })}
        </div>
        <div className="flex flex-col gap-16 mt-10">
        {arr.map((item) => {
            return <Card />;
          })}
        </div>
        <div className="flex flex-col gap-16">
        {arr.map((item) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PremiumSection;
