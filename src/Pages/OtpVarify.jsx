import logImg from "../assets/Images/forgot.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";
import OTPInput from "react-otp-input";
import { useState } from "react";
const OtpVarify = () => {
    const [OTP,setOtp]=useState("")
  return (
    <div className="w-full h-[100vh] flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-center">
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className=" rounded-md p-2 lg:p-16 lg:bg-[#e9edf4] flex flex-col lg:gap-4 items-center">
          <div className="hidden lg:flex flex-col items-center gap-">
            <img src={rubLogo} alt="" className="lg:w-36" />
            <img src={rubText} alt="" className="lg:w-44" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 items-center">
              <div className="font-bold text-3xl text-[#1e3167]">
                OTP verification
              </div>
              <div className="text-[#1e3167]">
              A 6 digit code has been sent to your Email...
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
             <form action="">
             <div className="w-[99%] lg:w-96 h-10 rounded-md bg-blue-700 text-white">
              <button className="w-full h-full text-lg">Submit</button>
            </div>
             </form>
           
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:h-full flex justify-center items-center">
        <img src={logImg} alt="" className="lg:w-[80%]" />
      </div>
    </div>
  );
};

export default OtpVarify;
