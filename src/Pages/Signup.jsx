import logImg from "../assets/Images/register.svg";
import img1 from "../assets/Images/splash.svg";
import rubLogo from "../assets/Images/applogo.svg";
import rubText from "../assets/Images/Name.svg";
import signUpIcon from "../assets/img/signupicon.png";
import userIcon from "../assets/img/user.svg";
import phoneIcon from "../assets/img/phone.svg";
import mailIcon from "../assets/img/mail.svg";
import confirmIcon from "../assets/img/confirm.svg";
import lockIcon from "../assets/img/lock.svg";
import { useNavigate, useParams } from "react-router-dom";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import { ApiCall } from "../Services/Api";
import { Base_url } from "../Services/Base_url";
import { userregisterUrl } from "../Utils/Constants";
import { ClipLoader } from "react-spinners";
const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const param = useParams();
  // const path = location?.pathname.split("/").slice(-1)[0];
  // console.log(param)

  const togglePasswordVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  const [phone, setPhone] = useState("91");
  const [countryCode, setCountryCode] = useState("");
  // console.log(value);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    // userId:'' by reffeels
  });

  const handleChange = (value, country, event, formattedValue) => {
    setPhone(value);
    setCountryCode(country?.dialCode); // Access dialCode from the country object
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    if (
      [
        formData.email,
        formData.confirmpassword,
        formData.firstName,
        formData.lastName,
        formData.password,
      ].some((field) => field.trim() === "")
    ) {
      toast("Please fill all the fields");
      return;
    }
    if (formData.password !== formData.confirmpassword) {
      toast("Password and Confirm password should be the same");
      return;
    }
    if (formData.password.length < 8) {
      toast("password must consist atleast 8 character");
      return;
    }

    let phoneNumber = phone.slice(countryCode.length);
    const refferalId = param?.refId || false;
    setIsLoading(true)
    try {
      const response = await ApiCall("post", userregisterUrl, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: phoneNumber,
        countryCode: countryCode,
        email: formData.email,
        password: formData.password,
        userId: refferalId,
      });

      if (response.status === 200) {
        localStorage.setItem("userId", response?.data?.userId);
        toast.success("Verification OTP email sent");
        navigate("/verify");
        return;
      }
      if (response?.response?.status === 400) {
        toast.error(response?.response?.data?.msg);
        return;
      }
    } catch (error) {
      toast.error("Sign Up failed");
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-[100vh] flex flex-col-reverse justify-center lg:flex-row">
      <div className="h-[67%] lg:h-[100vh] lg:w-[50%] flex justify-center">
        <div className="flex flex-col items-center gap-5">
          <div className="hidden lg:flex flex-col items-center ">
            <img src={rubLogo} alt="" className="lg:w-36" />
            <img src={rubText} alt="" className="lg:w-52" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="hidden lg:flex text-[#1E3167]  text-center justify-center  w-full text-2xl">
              Please fill the information below
            </div>
            <div className=" lg:hidden text-blue-700 font-bold text-3xl">
              Sign Up
            </div>
            <div className="px-5 relative flex flex-row-reverse rounded-xl border-2 border-[#A3D4FF]  h-10 items-center">
              <input
                type="text"
                className="outline-none border-none bg-transparent w-60 lg:w-79 h-full"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <img src={userIcon} alt="" className="absolute left-5" />
            </div>
            <div className="px-5 relative flex flex-row-reverse rounded-xl border-2 border-[#A3D4FF]  h-10 items-center">
              <input
                type="text"
                className="outline-none border-none bg-transparent w-60 lg:w-79 h-full"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <img src={userIcon} alt="" className="absolute left-5" />
            </div>
            <div className="px-5 relative flex flex-row-reverse rounded-xl border-2 border-[#A3D4FF]  h-10 items-center">
              <div className="outline-none border-none bg-transparent w-full lg:w-full h-full">
                <PhoneInput
                  value={phone}
                  onChange={handleChange}
                  //  defaultCountry="UN"

                  placeholder="Phone number"
                  inputStyle={{
                    background: "transparent",
                    border: "none",
                    width: "90%",
                  }}
                />
              </div>
            </div>
            <div className="px-5 relative flex flex-row-reverse rounded-xl border-2 border-[#A3D4FF]  h-10 items-center">
              <input
                type="email"
                className="outline-none border-none bg-transparent w-60 lg:w-79 h-full"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <img src={mailIcon} alt="" className="absolute left-5" />
            </div>
            <div className="px-5  flex flex-row rounded-xl border-2 border-[#A3D4FF]  lg:w-96 h-10 items-center">
              <div className="flex flex-row ">
                <img src={lockIcon} alt="" className="" />
                <input
                  type={isVisible ? "text" : "password"}
                  className="pl-4 outline-none border-none bg-transparent w-60 lg:w-76 h-full"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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
            <div className="px-5  flex flex-row rounded-xl border-2 border-[#A3D4FF]  lg:w-96 h-10 items-center">
              <div className="flex flex-row ">
                <img src={confirmIcon} alt="" className="" />
                <input
                  type={isVisible ? "text" : "password"}
                  className="pl-4 outline-none border-none bg-transparent w-60 lg:w-76 h-full"
                  placeholder="Confirm password"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleInputChange}
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
            <div className="w-[99%] mt-1 lg:mt-3 lg:w-96 h-10 lg:h-12 rounded-xl bg-blue-700 text-white">
              <button className="w-full h-full" onClick={signupHandler}>
                {isLoading ? <ClipLoader color="white" size={20} /> : "Signup"}
              </button>
            </div>
            <div className="w-full lg:w-96 h-8">
              <button
                className="w-full h-full text-blue-400"
                onClick={() => navigate("/login")}
              >
                Already have an account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] bg-[#407BFF] bg-opacity-0 lg:bg-opacity-20 flex justify-center items-center">
        <img src={signUpIcon} alt="Icon" className="w-[130px]  lg:w-96" />
      </div>
    </div>
  );
};

export default Signup;
