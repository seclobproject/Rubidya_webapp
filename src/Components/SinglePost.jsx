import avatar from "../assets/img/avatar.png"
import postImg from "../assets/img/postImg.png"
import likedIcon from "../assets/img/like.png"
import likeIcon from "../assets/img/unlike.png"
import commentIcon from "../assets/img/comment.png"


const SinglePost = ({postData}) => {
  return (
    <div className='w-[685px] h-fit bg-white py-[22px] px-[75px] flex items-start justify-center rounded-xl'  style={{boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
      <div className='flex flex-col h-fit w-fit gap-2.5 bg--400'>
        <div className='flex flex-row gap-[7px] '>
            <div>
                <img src={postData?.profilePic?.filePath} alt=""  className="w-[50px] h-[50px] rounded-full" />
            </div>
            <div className="flex flex-col items-start">
                <div className="font-semibold text-[#1E3167]">{postData?.username}</div>
                <div className="text-[#707070] text-sm">5h ago</div>
            </div>
        </div>
        <div className="w-full h-full ">
            <img src={postData?.filePath} alt="" className="w-[532px] h-full rounded-2xl" />
        </div>
        <div className="flex gap-4 ">
            <img src={likedIcon} alt="" className="w-[26px] h-[23px]" />
            <img src={commentIcon} alt="" className="w-[23px] h-[23px]" />
        </div>
        <div className="flex flex-col items-start  text-sm">
            <div className="mb-[3px]">Liked by <span className="font-semibold">{postData?.lastLikedUserName}</span> {postData?.likeCount>1 && <span>and {postData?.likeCount-1} Others </span>}</div>
           {postData?.description && <span className="mb-[3px]  text-start"><span className="font-semibold">{postData?.username} </span>{postData?.description} </span>}
            {postData?.commentCount>0 && <div className="text-[#7E7C7C]">View all {postData?.commentCount} comments</div>}
        </div>
      </div>
    </div>
  )
}

export default SinglePost
