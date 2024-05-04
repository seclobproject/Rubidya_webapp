
import logImg from "../assets/Images/forgot.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";

import { FaEnvelope, FaUser } from "react-icons/fa";

import { useState } from "react";
import toast from "react-hot-toast";
import { ApiCall } from "../Services/Api";
import { sendforgototpUrl } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import {ClipLoader} from "react-spinners"
const ForgotPassword = () => {
    const [email,setEmail]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    
    const navigate=useNavigate()


    const submitHandler=async(e)=>{
      e.preventDefault();
      
      if (!email) {
        toast("Please fill the mail correctly")
      }
      // console.log(email);
      try {
        setIsLoading(true)
        const response =await ApiCall("post",sendforgototpUrl,{
          email:email
        })
        if (response?.response?.data?.sts==="00") {
          toast.error(response?.response?.data?.msg)
          return
        }
        if (response?.data?.status==="PENDING") {
          sessionStorage.setItem("userEmail",email)
          navigate("/verify")
        }
        setIsLoading(false)
        console.log(response);
      } catch (error) {
        toast.error("Failed")
        console.log(error);
        setIsLoading(false)
      }
    }

  return (
    <div className="w-full h-[100vh] flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-center">
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className=" rounded-md p-2 lg:p-16 lg:bg-[#e9edf4] flex flex-col lg:gap-4">
          <div className="hidden lg:flex flex-col items-center gap-">
            <img src={rubLogo} alt="" className="lg:w-40"/>
            <img src={rubText} alt="" className="lg:w-52"/>
          </div>
          <form className="flex flex-col gap-6" onSubmit={submitHandler}>
            <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl text-[#1e3167]">Forgot password</div>
            <div className="text-[#1e3167]">to reset your password ,Enter your email id and varify</div>
            </div>
            <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-12 items-center">
              <input
                type="email"
                className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
                placeholder=" Email or Phone number"
                value={email}
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
              <FaUser
                style={{
                  position: "absolute",
                  right: "30px",
                  color: "#427BBD",
                }}
              />
            </div>
           
            <div className="w-[99%] lg:w-96 h-10 rounded-md bg-blue-700 text-white">
              <button className="w-full h-full text-lg" onClick={submitHandler} disabled={isLoading}>{isLoading?<ClipLoader size={20} color="white"/>:"Submit"}</button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-[50%] lg:h-full flex justify-center items-center">
        <img src={logImg} alt="" className="lg:w-[80%]" />
      </div>
    </div>
  );
};

export default ForgotPassword;
