
import logImg from "../assets/Images/forgot.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";

import { FaEnvelope, FaUser } from "react-icons/fa";
import userIcon from "../assets/img/user.svg";
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
    <div className="fixed top-0 left-0 right-0 w-full h-[100vh] flex flex-col-reverse justify-center items-center lg:flex-row">
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className=" rounded-md p-2 lg:p-16 lg:bg-[#e9edf4] flex flex-col lg:gap-4">
          <div className="hidden lg:flex flex-col items-center gap-">
            <img src={rubLogo} alt="" className="lg:w-40"/>
            <img src={rubText} alt="" className="lg:w-52"/>
          </div>
          <form className="flex flex-col gap-6 items-center" onSubmit={submitHandler}>
            <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl text-[#1e3167]">Forgot password</div>
            <div className="text-[#1e3167]">to reset your password ,Enter your email id and varify</div>
            </div>
            <div className="px-5 mb-2 lg:mb-3 flex flex-row rounded-xl border-2 border-[#A3D4FF]  lg:w-96 h-12 items-center">
            <img src={userIcon} alt="" className="pr-3" />
              <input
                type="text"
                required
                className=" outline-none border-none bg-transparent w-60 lg:w-72 h-full placeholder:text-sm lg:placeholder:text-base"
                placeholder="Enter your Email or Mobile number"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              
            </div>
           
            <div className="w-[99%] lg:w-96 h-10 rounded-md bg-blue-700 text-white">
              <button className="w-full h-full text-lg" onClick={submitHandler} disabled={isLoading}>{isLoading?<ClipLoader size={20} color="white"/>:"Submit"}</button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-[50%] lg:h-full bg-[#407BFF] bg-opacity-0 lg:bg-opacity-20 flex justify-center items-center">
        <img src={logImg} alt="Icon" className="w-[130px]  lg:w-96" />
      </div>
    </div>
  );
};

export default ForgotPassword;
