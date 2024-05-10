import { useEffect, useState } from "react";
import noProfilePic from "../assets/img/noProfile.png";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { ApiCall } from "../Services/Api";
import { followUser, unFollowUser } from "../Utils/Constants";

const VisitProfileSection = ({profileData }) => {
    console.log(profileData);

    const [isFollowed,setIsFollowed]=useState(false)
    const [loading,setLoading]=useState(false)
    
    const handleFollow = async () => {
      setLoading(true);
      try {
        const response = await ApiCall("post", followUser, {
          followerId: profileData?.userId,
        });
        console.log("pro",profileData);
        if (response?.data?.sts == "01") {
          setIsFollowed(true)
          toast("Followed " + profileData?.firstName);
        }
        // console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    const handleUnfollow=async()=>{
        setLoading(true)
        try {
          const response=await ApiCall("post",unFollowUser,{
            followerId:profileData?.userId,
          })
          if (response?.data?.sts=="01") {
            toast("UnFollowed "+profileData?.firstName)
            setIsFollowed(false)
   
            
          }
        } catch (error) {
          console.log(error);
        }finally{
          setLoading(false)
        }
      }
      
    useEffect(()=>{
      if (profileData?.isFollowing) {
        setIsFollowed(true)
      }
    },[profileData?.userId])
  return (
    <div className=" w-full h-  flex flex-col px-4 pb-6 font-poppins border-b-2 border-slate-300 ">
      
      <div className="flex flex-row justify-between pt-6">
        <div className="pt- w-[86px] h-[86px] rounded-full">
          {profileData.profilePic ? (
            <img
              src={profileData.profilePic}
              alt=""
              className="w-full h-full rounded-full"
            />
          ) : (

              <img src={noProfilePic} alt="" className="w-full h-full rounded-full" />
   
          )}
        </div>
        <div className="flex flex-row gap-5 lg:gap-[30px] pt-4 lg:pr-4">
          <div className="flex flex-col gap-[1px] items-center ">
            <div className="text-[#1E3167] font-medium ">
              {profileData.post ? profileData.post : "0"}
            </div>
            <div className="text-[#1e31678f] font-medium text-xs">Post</div>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <div className="text-[#1E3167] font-medium ">
              {profileData?.followers || "0"}
            </div>
            <div className="text-[#1e31678f] font-medium text-xs">
              Followers
            </div>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <div className="text-[#1E3167] font-medium ">
              {profileData?.following || "0"}
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
      <div className="flex flex-row  py-2 justify-center  gap-3 pt-5">
        <button
          className=" font-medium text-xs flex justify-center items-center text-white bg-[#1E3167] px-7 lg:px-9 py-3 rounded-2xl"
          onClick={()=>{
            isFollowed? handleUnfollow():handleFollow()
          }}
          disabled={loading}
        >
        {loading?<ClipLoader color="white" size={15}/>:( isFollowed?"Unfollow":"Follow" )}
        </button>
      </div>
    </div>
  );
};

export default VisitProfileSection;
