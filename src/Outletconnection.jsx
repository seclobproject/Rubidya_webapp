
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
function Outletconnection() {
  return (
    <div className="w-full h-screen">
    <div className='fixed  top-0 left-0 right-0 z-10'><Navbar/></div>
   <div className=' h-full overflow-y-auto fixed left-0 top-[90px] bottom-0 hidden lg:block'><Profile right={true} /></div>
    <div className='w-full flex justify-center   overflow-y-auto top-0 '><Outlet/></div>
    <div className='h-full overflow-y-auto fixed right-0 top-[90px] bottom-0 hidden lg:block'><Profile right={false}/></div>
    </div>
  );
}

export default Outletconnection;
