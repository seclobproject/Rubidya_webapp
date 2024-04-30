
import logImg from "../assets/Images/forgot.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";

import { FaEnvelope, FaUser } from "react-icons/fa";

import { useState } from "react";
const ForgotPassword = () => {


  return (
    <div className="w-full h-[100vh] flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-center">
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className=" rounded-md p-2 lg:p-16 lg:bg-[#e9edf4] flex flex-col lg:gap-4">
          <div className="hidden lg:flex flex-col items-center gap-">
            <img src={rubLogo} alt="" className="lg:w-40"/>
            <img src={rubText} alt="" className="lg:w-52"/>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl text-[#1e3167]">Forgot password</div>
            <div className="text-[#1e3167]">to rest your password ,Enter your email id and varify</div>
            </div>
            <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-12 items-center">
              <input
                type="text"
                className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
                placeholder="Enter your email.."
              />
              <FaEnvelope
                style={{
                  position: "absolute",
                  right: "30px",
                  color: "#427BBD",
                }}
              />
            </div>
           
            <div className="w-[99%] lg:w-96 h-10 rounded-md bg-blue-700 text-white">
              <button className="w-full h-full text-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:h-full flex justify-center items-center">
        <img src={logImg} alt="" className="lg:w-[80%]" />
      </div>
    </div>
  );
};

export default ForgotPassword;
