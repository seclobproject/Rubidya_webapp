import React, { useEffect } from "react";
import GetStarted from "./Pages/GetStarted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import OtpVarify from "./Pages/OtpVarify";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./Pages/ResetPassword";
import Home from "./Pages/Home";
import "./App.css";
import Outletconnection from "./Outletconnection";
import PostAdd from "./Pages/PostAdd.jsx";
import Profile from "./Pages/Profile";
import { setProfile } from "./config/rubidyaSlice";
import { useDispatch, useSelector } from "react-redux";
import { ApiCall } from "./Services/Api";
import { getUserProfile } from "./Utils/Constants";
import Search from "./Pages/Search.jsx";
import VisitProfile from "./Pages/VisitProfile.jsx";

const App = () => {
  const dispatch = useDispatch();
  const userId=useSelector(state=>state.userId)
  const fetchProfile = async () => {
    try {
      const response = await ApiCall("get", getUserProfile);
      // console.log(response);
      if (response?.data?.sts === "01") {
        dispatch(setProfile(response?.data?.user));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem('User')) {
      fetchProfile()
    }
  }, [userId]);
  return (
    <div className="font-poppins w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}>
            <Route path=":refId" element={<Signup />} />
          </Route>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verify" element={<OtpVarify />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route element={<Outletconnection />}>
            <Route path="/home" element={<Home />} />
            <Route path="/addpost" element={<PostAdd />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user" element={<VisitProfile/>}>
              <Route path=":userId" element={<VisitProfile/>} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
