import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
function Outletconnection() {
  return (
    <div className="   overflow-y-scroll">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-row">
       
        <div className="flex justify-center ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Outletconnection;
