import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RightSideBar from "./Components/RightSideBar";
function Outletconnection() {
  return (
    <div className="w-full h-full ">
      <div className="fixed top-0 right-0 left-0 z-10">
        <Navbar />
      </div>
      <div className=" w-full flex flex-row">
       
        <div className="sticky w-full flex justify-center  gap-3 mt-2 ">
          {/* <div className="hidden md:flex h-screen fixed top-20 left-0"><Profile /></div> */}
          <Outlet />
          <div className="h-screen fixed top-20 right-0"><RightSideBar /></div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
          <Footer/>
      </div>
    </div>
  );
}

export default Outletconnection;
