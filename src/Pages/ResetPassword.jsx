import logImg from "../assets/Images/forgot.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";

import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import mailIcon from "../assets/img/mail.svg";
import confirmIcon from "../assets/img/confirm.svg";
import lockIcon from "../assets/img/lock.svg";
import signUpIcon from "../assets/img/signupicon.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { ApiCall } from "../Services/Api";
import { changePasswordUrl, sendforgototpUrl } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast("Password must be of atleast 8 characters");
      return;
    }
    if (password !== cpass) {
      toast("Password and Confirm password should be same");
      return;
    }

    try {
      setIsLoading(true);
      const response = await ApiCall("put", changePasswordUrl, {
        email: sessionStorage.getItem("userEmail"),
        password: password,
      });

      if (response?.data?.sts === "01") {
        toast.success("Password changed successfully");
        sessionStorage.clear()
        navigate("/login");
      } else {
        toast.error("Password changing unsuccessful");
      }
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      toast.error("Failed");
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-[100vh] flex flex-col-reverse justify-center items-center lg:flex-row">
      <div className="lg:w-[50%]">
      <div className="flex flex-col h-full items-center justify-center gap-10">
          <div className="hidden lg:flex flex-col items-center ">
            <img src={rubLogo} alt="" className="lg:w-36" />
            <img src={rubText} alt="" className="lg:w-52" />
          </div>
          <div className="flex flex-col items-center gap-3 lg:gap-4">
            <div className=" text-[#1E3167] font-semibold  text-center justify-center  w-full text-2xl">
            Create new password
            </div>
            <div className="text-xxs2 md:text-sm lg:w-96 text-[#545F71]">
            Choose a strong and secure password. It should be a  combination of letters, numbers, and special characters.
            </div>
            
            
            <div className="px-5  flex flex-row rounded-xl border-2 border-[#A3D4FF]  lg:w-96 h-12 items-center">
              <div className="flex flex-row ">
                <img src={lockIcon} alt="" className="" />
                <input
                  type={isVisible ? "text" : "password"}
                  className="pl-4 outline-none border-none bg-transparent w-60 lg:w-80 h-full text-sm"
                  placeholder="New Password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              {isVisible ? (
                <FaEyeSlash
                  onClick={toggleVisibility}
                  style={{
                    color: "#427BBD80",
                  }}
                />
              ) : (
                <FaEye
                  onClick={toggleVisibility}
                  style={{
                    color: "#427BBD80",
                  }}
                />
              )}
            </div>
            <div className="px-5  flex flex-row rounded-xl border-2 border-[#A3D4FF]  lg:w-96 h-12 items-center">
              <div className="flex flex-row ">
                <img src={confirmIcon} alt="" className="" />
                <input
                  type={isVisible ? "text" : "password"}
                  className="pl-4 outline-none border-none bg-transparent w-60 lg:w-80 h-full text-sm"
                  placeholder="Confirm password"
                  name="confirmpassword"
                  value={cpass}
                  onChange={(e)=>setCpass(e.target.value)}
                />
              </div>
              {isVisible ? (
                <FaEyeSlash
                  onClick={toggleVisibility}
                  style={{
                    color: "#427BBD80",
                  }}
                />
              ) : (
                <FaEye
                  onClick={toggleVisibility}
                  style={{
                    color: "#427BBD80",
                  }}
                />
              )}
            </div>
            <div className="w-[99%] mt-1 lg:mt-3 lg:w-96 h-10 lg:h-12 rounded-xl bg-blue-700 text-white">
              <button className="w-full h-full" 
              onClick={submitHandler}
              >
                {isLoading ? <ClipLoader color="white" size={20} /> : "Submit"}
              </button>
            </div>
           
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:h-full bg-[#407BFF] bg-opacity-0 lg:bg-opacity-20 flex justify-center items-center">
        <img src={logImg} alt="Icon" className="w-[130px]  lg:w-96" />
      </div>
    </div>
  );
};

export default ResetPassword;
