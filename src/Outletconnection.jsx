import { Outlet,useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RightSideBar from "./Components/RightSideBar";
import { useEffect } from "react";
import SuggestionSection from "./Section/SuggestionSection.jsx";
import SuggestionBar from "./Components/SuggestionBar.jsx";
function Outletconnection() {
  const user=localStorage.getItem('User')
  const navigate=useNavigate()

  useEffect(()=>{
    if (!user) {
      navigate("/login")
    }
  },[user])
  return (
    <div className="w-full h-full  ">
      <div className="fixed top-0 right-0 left-0 z-10">
        <Navbar />
      </div>
      <div className=" w-full flex flex-row">
       
        <div className="sticky w-full flex justify-center  gap-3 mt-2 ">
          <div className="hidden lg:flex h-full fixed top-[105px] left-8 "><SuggestionBar /></div>
          <Outlet />
          <div className=" hidden lg:flex h-full fixed top-[105px] right-8"><RightSideBar /></div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
          <Footer/>
      </div>
    </div>
  );
}

export default Outletconnection;
