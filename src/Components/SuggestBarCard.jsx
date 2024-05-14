import noProfilePic from "../assets/img/noProfile.png";
import RIcon from "../assets/img/RIcon.png";
import { ApiCall } from "../Services/Api";
import { followUser } from "../Utils/Constants";
import toast from "react-hot-toast";
import { useEffect, useLayoutEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import {
  removeFromUserSuggestions,
  setFollowing,
} from "../config/rubidyaSlice";
import { Link } from "react-router-dom";

const SuggestBarCard = ({ user }) => {
  const [status, setStatus] = useState(false);
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleFollow = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await ApiCall("post", followUser, {
        followerId: user?._id,
      });
      if (response?.data?.sts == "01") {
        toast("Followed " + user?.firstName);
        dispatch(setFollowing(1));
        dispatch(removeFromUserSuggestions(user?._id));
        setStatus(true);
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // const handleUnfollow=async()=>{
  //   setLoading(true)
  //   try {
  //     const response=await ApiCall("post",unFollowUser,{
  //       followerId:user?._id
  //     })
  //     if (response?.data?.sts=="01") {
  //       toast("UnFollowed "+user?.firstName)
  //       dispatch(setFollowing(-1))
  //       setStatus(false)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }finally{
  //     setLoading(false)
  //   }
  // }
  useEffect(() => {
    setStatus(false); // Reset status when user changes
  }, [user._id]);

  return (
    <Link
      to={`/user/${user._id}`}
      className="relative w-full  h-full py-[11px] bg-[#FFFFFF]   rounded-lg flex  md:flex-col lg:flex-col xl:flex-row    justify-between items-center  cursor-pointer"
      style={{
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        padding: "1rem",
      }}
    >
      <div
        className="absolute top-1 right-1.5 rotate-45 text-2xl text-[#45537A] cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeFromUserSuggestions(user?._id));
        }}
      >
        +
      </div>
      <div className="flex lg:flex-col xl:flex-row justify-center items-center gap-4">
        <div className="relative mb-[8px]">
          {user?.profilePic?.filePath ? (
            <img
              src={user?.profilePic?.filePath}
              alt=""
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <img src={noProfilePic} alt="" className="w-16 h-16 rounded-full" />
          )}
          <img
            src={RIcon}
            alt=""
            className="absolute -right-1 -bottom-1 w-6 h-6"
          />
        </div>
        <div className="text-[#1E3167] text-xs mb-[6px]">{user?.firstName}</div>
      </div>

      <div className="">
        {!status && (
          <button
            className="text-white bg-[#45537A]  rounded-md py-1 px-6 text-xxs2"
            onClick={handleFollow}
            disabled={Loading}
          >
            {Loading ? <ClipLoader size={8} color="white" /> : "Follow"}
          </button>
        )}
      </div>
    </Link>
  );
};

export default SuggestBarCard;
