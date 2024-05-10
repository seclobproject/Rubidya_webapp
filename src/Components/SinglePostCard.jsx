import unlike from "../assets/img/unlike.png";
import whitecomment from "../assets/img/whitecomment.png";
import {Image} from "antd"

const SinglePostCard = ({data}) => {
 
  return (
    <div className="relative w-fit h-fit overflow-hidden">
      <div className="hidden lg:flex"><Image src={data?.filePath} alt="" className="" 
        width={140} height={130}/></div>
        <div className="flex lg:hidden">
        <Image src={data?.filePath} alt="" className="" 
        width={100} height={100}/>
        </div>
      <div className="absolute bottom-1 right-0  w-full flex gap-5 justify-center ">
        <div className="flex flex-col items-center w-fit h-fit">
          <img src={unlike} alt="" className="w-[17px] h-[15px]" />
          <div className="text-white text-xs">{data?.likeCount}</div>
        </div>
        <div className="flex flex-col items-center w-fit h-fit">
          <img src={whitecomment} alt="" className="w-[17px] h-[15px]" />
          <div className="text-white text-xs">{data?.commentCount}</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostCard;
