import home from "../assets/img/home.png";
import search from "../assets/img/search.png";
import reel from "../assets/img/reel.png";
import camera from "../assets/img/camera.png";
import profileImg from "../assets/img/profilePicMain.png";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  return (
    <div className="hidden md:flex w-[400px] h-full bg-white ">
      <div className="flex flex-col gap-[30px] p-10">
        <Link to="/home" className="flex flex-row gap-[14px] justify-start items-center">
            <img src={home} alt="" className="w-[29px] h-[30px]" />
            <div className="text-[#1E316]">Home</div>
        </Link>
        <Link to="/search" className="flex flex-row gap-[14px] justify-start items-center">
            <img src={search} alt="" className="w-[29px] h-[30px]" />
            <div className="text-[#1E316]">Search</div>
        </Link>
        <div className="flex flex-row gap-[14px] justify-start items-center">
            <img src={reel} alt="" className="w-[29px] h-[30px]" />
            <div className="text-[#1E316]">Reel</div>
        </div>
        <Link to="/addpost" className="flex flex-row gap-[14px] justify-start items-center ">
            <img src={camera} alt="" className="w-[29px] h-[30px]" />
            <div className="text-[#1E316]">Add Post</div>
        </Link>
        <Link to="/profile" className="flex flex-row gap-[14px] justify-start items-center">
            <img src={profileImg} alt="" className="w-[29px] h-[30px]" />
            <div className="text-[#1E316]">Profile</div>
        </Link>
      </div>
    </div>
  );
};

export default RightSideBar;
