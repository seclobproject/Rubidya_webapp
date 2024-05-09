import { useSelector } from "react-redux";
import noProfilePic from "../assets/img/noProfile.png";
import { useEffect, useState } from "react";
const SingleSearchCard = ({ user }) => {
  const userId = useSelector((state) => state.userProfile._id);
  const [follow, setFollow] = useState(false);

 

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
          <div className="w-[42px] h-[42px] flex justify-center items-center border-2 border-[#45537A] rounded-full">
            <img src={noProfilePic} alt="" className="w-[15px] h-[19px]" />
          </div>
        )}

        <div>{user.firstName}</div>
      </div>
      {follow ? (
        <div className="text-[#1E3167] bg-[#A7ACD0] text-sm bg-opacity-20 px-4 py-1.5 rounded-full cursor-pointer font-medium">
          Following
        </div>
      ) : (
        <div className="text-white bg-[#1E3167] text-sm  px-4 py-1.5 rounded-full cursor-pointer font-medium">
          Follow
        </div>
      )}
    </div>
  );
};

export default SingleSearchCard;
