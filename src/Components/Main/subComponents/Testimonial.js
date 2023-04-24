import React from "react";
import UsersCard from "../../../Utility/Card/UsersCard";

const Testimonial = () => {
  const userArr = ["u2.png", "u3.png", "u1.jpg", "u2.png", "u3.png"];
  return (
    <div className="mt-9 flex flex-col items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-7">
        <img src={require("../Images/sun.png")} alt="" />
        <img src={require("../Images/Testimonial.png")} alt="" />
      </div>
      <div className="flex justify-center m -auto">
        {userArr.map((item) => {
          return <UsersCard image={item} />;
        })}
      </div>
      <div className="flex flex-row gap-10 justify-center mt-6 hover: cursor-pointer">
        <img src={require("../Images/left.png")} alt="" />
        <img src={require("../Images/right.png")} alt="" />
      </div>
      <div className="w-full mt-16">
        <img
          src={require("../Images/banner.png")}
          alt=""
          className="w-full h-2/3"
        />
      </div>
      <div className="flex w-20 gap-4 m-auto mb-1 justify-around">
        <img src={require("../Images/dotFilled.png")} alt="" />
        <img src={require("../Images/dotHollow.png")} alt="" />
        <img src={require("../Images/dotHollow.png")} alt="" />
        <img src={require("../Images/dotHollow.png")} alt="" />
        <img src={require("../Images/dotHollow.png")} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
