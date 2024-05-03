import logImg from "../assets/Images/forgot.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";

import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

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

    if (password.length<8) {
      toast("Password must be of atleast 8 characters");
      return;
    }
    if (password!==cpass) {
        toast("Password and Confirm password should be same")
        return;
    }

    try {
      setIsLoading(true);
      const response = await ApiCall("put", changePasswordUrl, {
        email: sessionStorage.getItem("userEmail"),
        password:password
      });

if (response?.data?.sts==="01") {
    toast.success("Password changed successfully")
    navigate("/home")
}else{
    toast.error("Password changing unsuccessful")
    
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
    <div className="w-full h-[100vh] flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-center">
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className=" rounded-md p-2 lg:p-16 lg:bg-[#e9edf4] flex flex-col justify-center items-center lg:gap-8">
          <div className="hidden lg:flex flex-col items-center gap-">
            <img src={rubLogo} alt="" className="lg:w-40" />
            <img src={rubText} alt="" className="lg:w-52" />
          </div>
          <form className="flex flex-col justify-center items-center gap-4" onSubmit={submitHandler}>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-3xl text-[#1e3167] text-center">
              Create new password
              </div>
              <div className="text-[#1e3167] text-wrap text-center lg:text-start">
              Choose a strong and secure password. It should be a <br /> combination of letters,numbers, and special characters.
              </div>
            </div>
            <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-12 items-center">
              <input
                type={isVisible?"text":"password"}
                className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
                placeholder=" New Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {isVisible ? (
                <FaEyeSlash
                  onClick={toggleVisibility}
                  style={{
                    position: "absolute",
                    right: "30px",
                    color: "#427BBD",
                  }}
                />
              ) : (
                <FaEye
                  onClick={toggleVisibility}
                  style={{
                    position: "absolute",
                    right: "30px",
                    color: "#427BBD",
                  }}
                />
              )}
            </div>
            <div className="px-5 relative flex flex-row rounded-md border border-slate-500 w-[99%] h-12 items-center">
              <input
                 type={isVisible?"text":"password"}
                className="outline-none border-none bg-transparent w-60 lg:w-72 h-full"
                placeholder=" Confirm Password"
                value={cpass}
                required
                onChange={(e) => setCpass(e.target.value)}
              />
              {isVisible ? (
                <FaEyeSlash
                  onClick={toggleVisibility}
                  style={{
                    position: "absolute",
                    right: "30px",
                    color: "#427BBD",
                  }}
                />
              ) : (
                <FaEye
                  onClick={toggleVisibility}
                  style={{
                    position: "absolute",
                    right: "30px",
                    color: "#427BBD",
                  }}
                />
              )}
            </div>

            <div className="w-[99%] mt-3 lg:w-96 h-12 rounded-md bg-blue-700 text-white">
              <button
                className="w-full h-full text-lg"
                onClick={submitHandler}
                disabled={isLoading}
              >
                {isLoading ? <ClipLoader size={20} color="white" /> : "Submit"}
              </button>
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

export default ResetPassword;
