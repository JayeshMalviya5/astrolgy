import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#BD5300] flex flex-row justify-around w-full px-3 py-5 mt-10">
      <div className="w-4/5 flex gap-28 m-auto">
      <div className="flex flex-col gap-3 text-[white] w-1/4 px-2">
        <div>
          <img
            src={require("../../Components/Header/Images/Logo.png")}
            alt=""
            width={"160px"}
          />
        </div>
        <div>
          About Guruji s2 to 3 lines what guruji do and how it works About
          Guruji s2 to 3 lines what guruji do and how it works
        </div>
        <div className="flex flex-row gap-10 w-full">
          <img src={require("./Images/facebook.png")} alt="" />
          <img src={require("./Images/Instagram.png")} alt="" />
          <img src={require("./Images/Twitter.png")} alt="" />
          <img src={require("./Images/youtube.png")} alt="" />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <div
            className="font-semibold text-[1.2rem
          ]"
          >
            Trusted & Seals
          </div>
          <div className="flex gap-6">
            <img src={require("./Images/razorpay.png")} alt="" />
            <img src={require("./Images/Paytm.png")} alt="" />
          </div>
          <div className="">
            <img src={require("./Images/stripe.png")} alt="" width={"100px"} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-[400px] gap-16 text-white justify-start list-none ">
        <div >
          <div className="text-xl font-semibold flex ">Company</div>
          <li>Home</li>
          <li>Privacy policy</li>
          <li>T & C</li>
          <li>Varied Payment</li>
        </div>
        <div>
        <div  className="text-xl font-semibold">Support</div>
          <li>Home</li>
          <li>Privacy policy</li>
          <li>T & C</li>
          <li>Varied Payment</li>
        </div>
        <div>
          <div  className="text-xl font-semibold">Collaborate</div>
          <li>Cleaver tap</li>
          <li>Exotel</li>
          <li>Facebook</li>
          <li>Quora</li>
          <li>Google</li>
          <li>Youtube</li>
        </div>
        <div>
          <div  className="text-xl font-semibold">Important links</div>
          <li>Torat gap</li>
          <li>Vedic astrolgy</li>
          <li>Plamist</li>
          <li>Vastu</li>
          <li>Google</li>
          <li>Numerology</li>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-80">

        <input type="text" placeholder="Your name" className="rounded w-full h-10 px-5"/>
        <input type="text" placeholder="Mail ID" className="rounded w-full h-10 px-5"/>
        <input type="text" placeholder="Query" className="rounded w-full h-20 px-5"/>
        <button className="border bg-[#4B9C0C] border-[#4B9C0C] text-white font-semibold h-12 rounded">Submit</button>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
