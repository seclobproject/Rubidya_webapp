import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function Outletconnection() {
  return (
    <div className="w-full h-full ">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
      <div className=" w-full flex flex-row">
       
        <div className="w-full flex justify-center ">
          <Outlet />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
          <Footer/>
      </div>
    </div>
  );
}

export default Outletconnection;
