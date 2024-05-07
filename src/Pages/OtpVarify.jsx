import logImg from "../assets/Images/forgot.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";
import OTPInput from "react-otp-input";
import { useState } from "react";
import toast from "react-hot-toast";
import { ApiCall } from "../Services/Api";
import { forgotPasswordOtpUrl, verifyOtpUrl } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import {ClipLoader} from "react-spinners"
const OtpVarify = () => {
    const [OTP,setOtp]=useState("")
    const navigate=useNavigate()
    const [isLoading,setIsLoading]=useState(false)
    let userEmail=sessionStorage.getItem("userEmail")
    console.log(userEmail);

    const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log("clicked");
      if (OTP.length<4) {
        toast("Fill the OTP")
        return;
      }
     if (userEmail) {
      try {
        setIsLoading(true)
        const respose=await ApiCall("post",forgotPasswordOtpUrl,{
          email:userEmail,
          OTP:OTP
        })

        if (respose?.response?.data?.message==="Invalid OTP code passed!") {
          toast.error("Invalid OTP")
          return;
        }
        if (respose?.data?.sts==="01") {
          sessionStorage.setItem("userEmail",userEmail)
          toast.success("Reset your password")
          navigate("/resetpassword")
        }
        setIsLoading(false)
        console.log(respose)
      } catch (error) {
        setIsLoading(false)
        toast.error("failed")
        console.log(error);
      }finally{
        setIsLoading(false)
      }
     } else {
      try {
        setIsLoading(true)
        let id=sessionStorage.getItem("userId");
        const response=await ApiCall("post",verifyOtpUrl,{
          userId:id,
          OTP:OTP,
        })
        if (response?.data?.sts==="01") {
          toast.success("OTP verified")
          // sessionStorage.setItem("User",response?.data)
          navigate("/login")
        }
        setIsLoading(false)
        console.log(response);
      } catch (error) { 
        setIsLoading(false)
        console.log(error);
        toast.error("Failed")
      }
     }
    }
  return (
    <div className="fixed top-0 left-0 right-0  w-full h-[100vh] flex flex-col-reverse lg:flex-row justify-start lg:items-center font-poppins">
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className=" rounded-md p-2 lg:p-16 lg:bg-[#e9edf4] flex flex-col lg:gap-4 items-center">
          <div className="hidden lg:flex flex-col items-center gap-">
            <img src={rubLogo} alt="" className="lg:w-36" />
            <img src={rubText} alt="" className="lg:w-44" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
              <div className="font-bold text-3xl text-[#1e3167]">
                OTP verification
              </div>
              <div className="text-[#1e3167]">
              A 6 digit code has been sent to your Email or Phone number
              </div>
            </div>
            
              <div className="flex justify-center items-center border">
              <OTPInput
                value={OTP}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span className="px-5">-</span>}
                renderInput={(props) => (
                  <input style={{ width: "50%" }} {...props} />
                )}
                inputStyle={{
                    width: '2rem',
                    height: '2.5rem', 
                    fontSize: '1.2rem',
                    padding: '0.5rem', 
                    margin: '0.2rem',
                    borderRadius:'.4rem',
                    borderColor:"blue",
                    borderWidth:"3px"
                  }}
                
                containerStyle={{alignItems:"center",colorRendering:"auto"}}
              />
            
              </div>
             <form action="" onSubmit={handleSubmit} >
             <div className="w-[99%] lg:w-96 h-10 rounded-md bg-blue-700 text-white">
              <button className="w-full h-full text-lg" onClick={handleSubmit} disabled={isLoading}>{isLoading?<ClipLoader color="white" size={20}/>:"Submit"}</button>
            </div>
             </form>
           
          </div>
        </div>
      </div>
      <div className="h-[33%] lg:h-[100vh] lg:w-[50%]  bg-[#407BFF] bg-opacity-0 lg:bg-opacity-20 flex justify-center items-center">
        <img src={logImg} alt="" className=" w-[230px]  lg:w-96" />
      </div>
    </div>
  );
};

export default OtpVarify;
