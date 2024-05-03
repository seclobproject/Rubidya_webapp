import pic from "../assets/img/suggesionCardPic.png";
import RIcon from "../assets/img/RIcon.png";

const SuggestUserCard = () => {
  return (
    <div className="w-[125px] h-fit py-[11px] bg-[#FFFFFF]   rounded-lg flex flex-col    justify-center items-center " style={{boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
      <div className="relative mb-[8px]">
        <img src={pic} alt="" className="w-16 h-16 rounded-full" />
        <img src={RIcon} alt="" className="absolute -right-1 -bottom-1 w-6 h-6" />
      </div>
      <div className="text-[#1E3167] text-xs mb-[6px]">Rayan Moon</div>
      <div className="">
        <button className="text-white bg-[#45537A] rounded-md py-1 px-6 text-xxs2">
          Follow
        </button>
      </div>
    </div>
  );
};

export default SuggestUserCard;
