import navlogo from "../assets/img/rubnavlogo.png";
import home from "../assets/img/home.png";
import search from "../assets/img/search.png";
import reel from "../assets/img/reel.png";
import camera from "../assets/img/camera.png";
import profileImg from "../assets/img/profilePicMain.png";
import bellIcon from "../assets/img/bellicon.png";
import usersIcon from "../assets/img/users.png";
import chatIcon from "../assets/img/chat.png";
const Navbar = () => {
  return (
    <div className="w-full h-20  bg-white px-11 flex justify-between items-center">
      <div className="">
        <img src={navlogo} alt="" className="w-[230px]" />
      </div>
      <div className="flex flex-row">
        <div className="w-20 h-full flex justify-center">
          <img src={home} alt="" className="w-7 h-7" />
        </div>
        <div className="w-20 h-full flex justify-center">
          <img src={search} alt="" className="w-7 h-7" />
        </div>
        <div className="w-20 h-full flex justify-center">
          <img src={camera} alt="" className="w-7 h-7" />
        </div>
        <div className="w-20 h-full flex justify-center">
          <img src={reel} alt="" className="w-7 h-7" />
        </div>
        <div className="w-20 h-full flex justify-center">
          <div className="w-8 h-8 flex justify-center items-center bg-[#1E3167] rounded-full">
            <img src={profileImg} alt="" className="w-7 h-7 rounded-full" />
          </div>
        </div>
      </div>
      <div className=" flex flex-row">
        <div className="w-20 h-full flex justify-center">
          <img src={usersIcon} alt="" className="w-[53px] h-[35px]" />
        </div>
        <div className="w-20 h-full flex justify-center">
          <img src={chatIcon} alt="" className="w-7 h-7" />
        </div>
        <div className="w-20 h-full flex justify-center">
          <img src={bellIcon} alt="" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
