import noProfilePic from "../assets/img/noProfile.png";

import userIcon from "../assets/img/user.png";
import { useDispatch, useSelector } from "react-redux";
import { setShowProfile } from "../config/rubidyaSlice";
const ProfileSection = ({ seStelectedBut, postCount, profilePic }) => {
  const profileData = useSelector((state) => state.userProfile);
  const dispatch=useDispatch()
  return (
    <div className=" w-full h-  flex flex-col px-4 font-poppins ">
      
      <div className="flex flex-row justify-between pt-6">
        <div className="pt- w-[86px] h-[86px] rounded-full">
          {profilePic ? (
            <img
              src={profilePic}
              alt=""
              className="w-full h-full rounded-full"
            />
          ) : (
            
              <img src={noProfilePic} alt="" className="w-full h-full rounded-full" />
    
          )}
        </div>
        <div className="flex flex-row gap-[30px] pt-4 lg:pr-4">
          <div className="flex flex-col gap-[1px] items-center ">
            <div className="text-[#1E3167] font-medium ">
              {postCount ? postCount : "0"}
            </div>
            <div className="text-[#1e31678f] font-medium text-xs">Post</div>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <div className="text-[#1E3167] font-medium ">
              {profileData?.followersCount || "0"}
            </div>
            <div className="text-[#1e31678f] font-medium text-xs">
              Followers
            </div>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <div className="text-[#1E3167] font-medium ">
              {profileData?.followingCount || "0"}
            </div>
            <div className="text-[#1e31678f] font-medium text-xs">
              Following
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[1px]">
        <div className="flex flex-col items-start gap-[1px] ">
          <div className="font-medium text-sm text-[#1E3167] flex pt-2">
            {profileData?.firstName} {profileData?.lastName}
          </div>
          <div className="text-xxs2 text-[#1E3167]">
            {profileData?.profession}
          </div>
        </div>
        <div className="text-xxs2 flex justify-start w-full  text-[#1E3167] ">
          <div className="">{profileData?.bio}</div>
        </div>
      </div>
      <div className="flex flex-row  py-2 justify-between">
        <button
          className=" font-medium text-xs flex justify-center items-center text-white bg-[#184AC0] px-7 lg:px-9 py-3 rounded-2xl"
          onClick={() => seStelectedBut("")}
        >
          Edit profile
        </button>
        <button
          className=" font-medium text-xs flex justify-center items-center text-white bg-[#28426B] px-7 lg:px-[50px] py-3 rounded-2xl"
          onClick={() => seStelectedBut("wallet")}
        >
          Wallet
        </button>
        <button
          className=" font-medium text-xs flex justify-center items-center text-white bg-[#184ac0b0] px-[14px] py-[14px] rounded-2xl"
          onClick={() => seStelectedBut("")}
        >
          <img src={userIcon} alt="" className="w-[14px] h-[14px]" />
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
