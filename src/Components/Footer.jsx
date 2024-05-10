import home from "../assets/img/homewhite.png";
import search from "../assets/img/searchwhite.png";
import reel from "../assets/img/reelwhite.png";
import camera from "../assets/img/camerawhite.png";
import profileImg from "../assets/img/profilePicMain.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='lg:hidden flex px-[40px] justify-between items-center w-full h-12 rounded-t-2xl bg-[#1E2E5D]'>
      <Link to="/home"><img src={home} alt="" className="w-5 h-5" /></Link>
      <Link to="/search"><img src={search} alt="" className="w-5 h-5" /></Link>
      <Link to="/addpost"><img src={camera} alt="" className="w-[25px] h-[22px]" /></Link>
      <Link><img src={reel} alt="" className="w-5 h-5" /></Link>
      <Link to="/profile"><img src={profileImg} alt="" className="w-5 h-5" /></Link>
      
      
      
      
    </div>
  )
}

export default Footer
