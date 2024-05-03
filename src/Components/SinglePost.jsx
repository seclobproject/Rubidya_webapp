import avatar from "../assets/img/avatar.png"
import postImg from "../assets/img/postImg.png"
import likeIcon from "../assets/img/like.png"
import commentIcon from "../assets/img/comment.png"


const SinglePost = () => {
  return (
    <div className='w-[685px] h-fit bg-white py-[22px] px-[75px] flex justify-center rounded-xl'  style={{boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
      <div className='flex flex-col gap-2.5 bg--400'>
        <div className='flex flex-row gap-[7px] '>
            <div>
                <img src={avatar} alt=""  className="w-[50px] h-[50px] rounded-full" />
            </div>
            <div className="flex flex-col">
                <div className="font-semibold text-[#1E3167]">Monica.2829</div>
                <div className="text-[#707070] text-sm">5h ago</div>
            </div>
        </div>
        <div className="w-full h-[373px] rounded-lg">
            <img src={postImg} alt="" className="w-full h-full" />
        </div>
        <div className="flex gap-4 ">
            <img src={likeIcon} alt="" className="w-[26px] h-[23px]" />
            <img src={commentIcon} alt="" className="w-[23px] h-[23px]" />
        </div>
        <div className="flex flex-col  text-sm">
            <div className="mb-[3px]">Liked by <span className="font-semibold">faizal</span> and 78 Others</div>
            <div className="mb-[3px]"><span className="font-semibold">monica.2839</span> Have you ever wondered how many hours you spend in your car? 🚗<span className="text-[#005C9A]"> #trip</span></div>
            <div className="text-[#7E7C7C]">View all 182 comments</div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
