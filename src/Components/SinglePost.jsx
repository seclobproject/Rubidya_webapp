import avatar from "../assets/img/avatar.png"
import postImg from "../assets/img/postImg.png"
import likedIcon from "../assets/img/like.png"
import likeIcon from "../assets/img/likepost.svg"
import commentIcon from "../assets/img/comment.png"
import bookmarkIcon from "../assets/img/bookmark.png"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ApiCall } from "../Services/Api"
import { likeAPost } from "../Utils/Constants"


const SinglePost = ({postData}) => {
  const [timeDifference,setTimeDifference]=useState()
  const [liked,setLiked]=useState(false)
  const userId=useSelector(state=>state?.userProfile?._id)


  const handleLike=async()=>{
    try {
      console.log("hitted like")
      const response=await ApiCall("post",likeAPost,{
        postId:postData._id
      })
      console.log("after");
      console.log(response)
      if (response?.data?.sts==="01") {
        
        setLiked(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    postData.likedBy.forEach(element => {
      if (element===userId) {
        setLiked(true)
      }
    });
    
    
    const calculateTimeDifference = () => {
      const updatedAtTime = new Date(postData?.createdAt);
      const currentTime = new Date();

      const timeDiff = Math.abs(currentTime - updatedAtTime);
      
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const days = Math.floor(hours / 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);

      let formattedTimeDifference = '';
      if (days > 0) {
        formattedTimeDifference = `${days}d `;
      }
      if (hours > 0) {
        formattedTimeDifference += `${hours % 24}h `;
      }
      if (minutes > 0) {
        formattedTimeDifference += `${minutes}min `;
      }


     formattedTimeDifference= formattedTimeDifference.split(" ")
      setTimeDifference(formattedTimeDifference[0]);
    };

    // Call calculateTimeDifference function
    calculateTimeDifference();

  },[])
  return (
    <div className='w-[525px] h-fit bg-white py-[22px] px-5 flex items-start justify-center rounded-xl'  style={{boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
      <div className='flex flex-col h-fit w-full gap-2.5 bg--400'>
        <div className='flex flex-row gap-[7px] '>
            <div>
                <img src={postData?.profilePic} alt=""  className="w-[50px] h-[50px] rounded-full" />
            </div>
            <div className="flex flex-col items-start">
                <div className="font-semibold text-[#1E3167]">{postData?.username}</div>
                <div className="text-[#707070] text-xs">{timeDifference } ago</div>
            </div>
        </div>
        <div className="w-full h-full ">
            <img src={postData?.filePath} alt="" className="w-full h-full rounded-2xl" />
        </div>
        <div className="flex gap-4 items-center">
            {
              liked? <img src={likedIcon} alt="" className="w-[26px] h-[23px] cursor-pointer" />:<img src={likeIcon} alt="" className="w-[26px] h-[23px] cursor-pointer" onClick={handleLike} />
            }
           
            
            
            <img src={commentIcon} alt="" className="w-[23px] h-[23px] cursor-pointer" />
            <img src={bookmarkIcon} alt="" className="w-[20px] h-[25px] cursor-pointer" />
            
        </div>
        <div className="flex flex-col items-start  text-sm">
           {postData?.likeCount>1 && <div className="mb-[3px]">Liked by <span className="font-semibold">{postData?.lastLikedUserName}</span> {postData?.likeCount>1 && <span>and {postData?.likeCount-1} Others </span>}</div>}
           {postData?.description && <span className="mb-[3px]  text-start"><span className="font-semibold">{postData?.username} </span>{postData?.description} </span>}
            {postData?.commentCount>0 && <div className="text-[#7E7C7C]">View all {postData?.commentCount} comments</div>}
        </div>
      </div>
    </div>
  )
}

export default SinglePost
