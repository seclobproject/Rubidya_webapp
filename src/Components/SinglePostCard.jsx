import unlike from "../assets/img/unlike.png";
import whitecomment from "../assets/img/whitecomment.png";
import cardImage from "../assets/img/jack.png";

const SinglePostCard = ({data}) => {
 
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={data?.filePath} alt="" className="w-[122px] h-[160px]" />
      <div className="absolute bottom-3 right-0  w-full flex gap-5 justify-center ">
        <div className="flex flex-col w-fit h-fit">
          <img src={unlike} alt="" className="w-[17px] h-[15px]" />
          <div className="text-white text-xs">{data?.likeCount}</div>
        </div>
        <div className="flex flex-col w-fit h-fit">
          <img src={whitecomment} alt="" className="w-[17px] h-[15px]" />
          <div className="text-white text-xs">{data?.commentCount}</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostCard;
