import logImg from "../assets/Images/loginImage.svg";
import img1 from "../assets/Images/splash.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {toast} from "react-hot-toast"

import { ApiCall } from "../Services/Api";
import { userloginUrl } from "../Utils/Constants";
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const togglePasswordVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  
  const loginHandler=async(e)=>{
    e.preventDefault();
    if ([email,password].some((field)=>field.trim()==="")) {
      toast("Please fill in both email and password fields");
      return;
    }
     try {
      const response=await ApiCall("post",userloginUrl,{email,password})
     } catch (error) {
      toast.error("Login Failed")
      console.log("error occured at login handler",error)
     }
     setEmail("")
     setPassword("")
  }

  return (
    <div className="w-full h-[100vh] flex flex-col-reverse lg:flex-row justify-center lg:items-center">
      <div className="lg:w-[50%] h-full flex justify-center items-center ">
        <div className=" rounded-md p-2 lg:p-8 lg:bg-[#e9edf4] flex flex-col lg:gap-4">
          <div className="hidden lg:flex flex-col items-center -space-y-2.5">
            <img src={rubLogo} alt="" className="lg:w-36"/>
            <img src={rubText} alt="" className="lg:w-52"/>
          </div>
          <form onSubmit={loginHandler} className="flex flex-col gap-6">
            <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] lg:w-96 h-12 items-center">
              <input
                type="text"
                required
                className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
                placeholder="Enter your email.."
                value={email}
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
            <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] lg:w-96 h-12 items-center">
              <input
              required
                type={isVisible ? "text" : "password"}
                className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
                placeholder="Enter your password.."
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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
              <button className="w-full h-full" onClick={loginHandler}>Login</button>
            </div>
            <div className="w-full lg:w-96 h-8">
              <button className="w-full h-full text-blue-400" onClick={()=>navigate("/forgotpassword")}>
                Forgot Your Password
              </button>
            </div>
            <div className="text-center my-1 lg:my-2">
              <div className="flex items-center justify-center">
                <hr className="flex-grow border-solid border border-slate-500" />
                <div className="px-2">OR</div>
                <hr className="flex-grow border-solid border border-slate-500" />
              </div>
            </div>
            <div className=" w-[99%] lg:w-96 h-8 rounded-md bg-blue-700 text-white">
              <button className="w-full h-full text-white rounded-md" style={{background:"rgb(59,89,152)"}} onClick={()=>navigate("/signup")}>CREATE AN ACCOUNT</button>
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

export default Login;
