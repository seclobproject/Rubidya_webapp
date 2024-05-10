import { useDispatch, useSelector } from "react-redux";
import noProfilePic from "../assets/img/noProfile.png";
import { useEffect, useState } from "react";
import { setFollowing } from "../config/rubidyaSlice";
import { followUser, unFollowUser } from "../Utils/Constants";
import { ClipLoader } from "react-spinners";
import { ApiCall } from "../Services/Api";
import toast from "react-hot-toast";
const SingleSearchCard = ({ user }) => {
  const userId = useSelector((state) => state.userProfile._id);
  const [follow, setFollow] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch()
  

  const handleFollow = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await ApiCall("post", followUser, {
        followerId: user?._id,
      });
      if (response?.data?.sts == "01") {
        setFollow(true)
        toast("Followed " + user?.firstName);
        dispatch(setFollowing(1));
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
          followerId:user?._id
        })
        if (response?.data?.sts=="01") {
          toast("UnFollowed "+user?.firstName)
          setFollow(false)
          dispatch(setFollowing(-1))
          
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }
 

  useEffect(()=>{
    user.followers.forEach((element) => {
      if (element === userId) {
        setFollow(true);
      }
    });

  },[])
  return (
    <div className="w-full h-fit py-3 flex justify-between items-center border-b-2 border-[#000000] border-opacity-[8%]">
      <div className="flex gap-2 items-center">
        {user?.profilePic?.filePath ? (
          <img
            src={user?.profilePic?.filePath}
            alt=""
            className="w-[42px] h-[42px] rounded-full"
          />
        ) : (
          
            <img src={noProfilePic} alt="" className="w-[42px] h-[42px] rounded-full" />
         
        )}

        <div>{user.firstName}</div>
      </div>
      {
        follow ? (
          <div className="text-[#1E3167] bg-[#A7ACD0] text-sm bg-opacity-20 px-4 py-1.5 rounded-full cursor-pointer font-medium">
            Following
          </div>
        ) : (
          <div className="text-white bg-[#1E3167] text-sm  px-4  py-1.5 rounded-full cursor-pointer font-medium" onClick={handleFollow}>
           {loading?<ClipLoader color="white" size={12}/>:"Follow"} 
          </div>
        )
      }
    </div>
  );
};

export default SingleSearchCard;
