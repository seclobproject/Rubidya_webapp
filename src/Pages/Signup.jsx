import logImg from "../assets/Images/register.svg";
import img1 from "../assets/Images/splash.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Signup = () => {
    const [isVisible, setIsVisible] = useState(false);
  const navigate=useNavigate()

  const togglePasswordVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="w-full h-[100vh] flex flex-col-reverse lg:flex-row justify-center">
    <div className="lg:w-[50%] flex justify-center items-center">

      <div className=" rounded-md p-2 lg:p-10 lg:bg-[#e9edf4] flex flex-row lg:gap-4">
        <div className="flex flex-row items-center gap-5">
        <div className="hidden lg:flex flex-col items-center ">
          <img src={rubLogo} alt="" className="lg:w-44"/>
          <img src={rubText} alt="" className="lg:w-52"/>
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
            <div className="text-blue-700 font-bold text-3xl">
                Sign Up
            </div>
          <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-10 items-center">
            <input
              type="text"
              className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
              placeholder="First Name"
            />
            <FaUser
              style={{
                position: "absolute",
                right: "30px",
                color: "#427BBD",
              }}
            />
          </div>
          <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-10 items-center">
            <input
              type="text"
              className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
              placeholder="Last Name"
            />
            <FaUser
              style={{
                position: "absolute",
                right: "30px",
                color: "#427BBD",
              }}
            />
          </div>
          <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-10 items-center">
            <PhoneInput 
            
            inputStyle={{background:"transparent",border:"none",width:"90%"}}  />
            <FaPhone

              style={{
                position: "absolute",
                right: "30px",
                color: "#427BBD",
              }}
            />
          </div>
          <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-10 items-center">
            <input
              type="email"
              className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
              placeholder="E-mail"
            />
            <FaEnvelope
              style={{
                position: "absolute",
                right: "30px",
                color: "#427BBD",
              }}
            />
          </div>
          <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] lg:w-96 h-10 items-center">
            <input
              type={isVisible ? "text" : "password"}
              className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
              placeholder="Password"
            />
            {isVisible ? (
              <FaEyeSlash
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "30px",
                  color: "#427BBD",
                }}
              />
            ) : (
              <FaEye
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "30px",
                  color: "#427BBD",
                }}
              />
            )}
          </div>
          <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] lg:w-96 h-10 items-center">
            <input
              type={isVisible ? "text" : "password"}
              className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
              placeholder="Confirm password"
            />
            {isVisible ? (
              <FaEyeSlash
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "30px",
                  color: "#427BBD",
                }}
              />
            ) : (
              <FaEye
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "30px",
                  color: "#427BBD",
                }}
              />
            )}
          </div>
          <div className="w-[99%] lg:w-96 h-8 rounded-md bg-blue-700 text-white">
            <button className="w-full h-full">Signup</button>
          </div>
          <div className="w-full lg:w-96 h-8">
            <button className="w-full h-full text-blue-400" onClick={()=>navigate("/login")}>
              Allready have an account
            </button>
          </div>
          
         
        </div>
        </div>
       
      </div>
    </div>
    <div className="hidden lg:flex lg:w-[50%] lg:h-full  justify-center items-center">
      <img src={logImg} alt="" className="lg:w-[99%]" />
    </div>
  </div>
  )
}

export default Signup
