import logImg from "../assets/Images/loginImage.svg";
import img1 from "../assets/Images/splash.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

import userIcon from "../assets/img/user.svg";
import lockIcon from "../assets/img/lock.svg";

import { ApiCall } from "../Services/Api";
import { userloginUrl } from "../Utils/Constants";
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    // console.log(email,password);
    if ([email, password].some((field) => field.trim() === "")) {
      toast("Please fill in both email and password fields");
      return;
    }
    try {
      setIsLoading(true);

      const response = await ApiCall("post", userloginUrl, { email, password });

      console.log(response);

      if (response?.status === 200) {
        sessionStorage.setItem("User", response?.data?.access_token);

        if (response?.data?.isOTPVerified) {
          toast.success("Logined successfully");
          navigate("/home");
        } else {
          sessionStorage.setItem("userId", response?.data?._id);
          toast.success("Verification OTP sent ");
          navigate("/verify");
        }
      }
      if (response?.response?.status === 401) {
        toast.error(response?.response?.data?.msg);
        return;
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
      setIsLoading(false);
      // console.log("error occured at login handler",error)
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    
    <div className="fixed top-0 left-0 right-0  w-full h-[100vh] flex flex-col-reverse lg:flex-row justify-start lg:items-center font-poppins">
      <div className="h-[67%] lg:h-[100vh] lg:w-[50%]">
      <div className=" rounded-md p-2 lg:p-8  flex flex-col h-full  justify-center items-center lg:gap-4">
          <div className="hidden lg:flex flex-col items-center  -space-y-2.5">
          <img src={rubLogo} alt="" className="lg:w-36" />
            <img src={rubText} alt="" className="lg:w-52" />
          </div>
          <div className="text-center text-4xl font pb-4 lg:pb-0 lg:py-4">
            Welcome Back
          </div>
          <div  className="flex flex-col w-fit gap-1  items-center">
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
            <div className="px-5  flex flex-row rounded-xl border-2 border-[#A3D4FF]  lg:w-96 h-10 items-center">
              <div className="flex flex-row ">
                <img src={lockIcon} alt="" className="" />
                <input
                  type={isVisible ? "text" : "password"}
                  className="pl-4 outline-none border-none bg-transparent w-60 lg:w-76 h-full"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              {isVisible ? (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  style={{
                    color: "#A3D4FF",
                  }}
                />
              ) : (
                <FaEye
                  onClick={togglePasswordVisibility}
                  style={{
                    color: "#A3D4FF",
                  }}
                />
              )}
            </div>
            <div className="flex w-full  justify-end text-xs lg:text-sm"> <button className=" text-[#427BBD]" onClick={()=>navigate("/forgotpassword")}>
                Forgot Your Password
              </button></div>
            <div className="w-78 mt-5 lg:mt-8 lg:w-96 h-10 lg:h-12 rounded-md bg-[#184AC0] text-white">
              <button className="w-full h-full font-semibold text-sm lg:text-base" onClick={loginHandler}>{isLoading?<ClipLoader color="white" size={20}/>:"Login"}</button>
            </div>
            
            <div className="text-center my-1 lg:my-2 w-full">
              <div className="flex items-center justify-center">
                <hr className="flex-grow border-solid border border-slate-500" />
                <div className="px-2">OR</div>
                <hr className="flex-grow border-solid border border-slate-500" />
              </div>
            </div>
            <div className="w-78  lg:w-96 h-10 rounded-md bg-[#315280] text-white font-semibold text-sm">
              <button className="w-full h-full  rounded-lg text-sm lg:text-base" style={{background:"rgb(59,89,152)"}} onClick={()=>navigate("/signup")}>Create an account</button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[33%] lg:h-[100vh] lg:w-[50%]  bg-[#407BFF] bg-opacity-0 lg:bg-opacity-20 flex justify-center items-center">
        <img src={logImg} alt="" className=" w-[230px]  lg:w-96" />
      </div>
    </div>
  );
};

export default Login;
