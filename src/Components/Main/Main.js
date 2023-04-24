import React from "react";
import Testimonial from "./subComponents/Testimonial";
import PremiumSection from "./subComponents/PremiumSection";
import Chakra from "./subComponents/Chakra";
import Reviews from "./subComponents/Reviews";
const Main = () => {
  return (
    <>
      <div className="bg-[#FFEFE3] flex flex-col w-4/5 h-auto m-auto">
        <Testimonial />
        <PremiumSection />
        
      </div>
      <img src={require("./Images/bottom.png")} alt="" className="w-[67.8rem] h-auto m-auto"/>
      <Chakra />
        <Reviews />
    </>
  );
};

export default Main;
