import React from "react";

const SubscriptionPlanCard = ({data,index}) => {
  return (
    <div className="w-[165px] h-[100px] rounded-[7px] border-2 border-[#CFAC71] flex flex-col">
      <div className={`w-full px-1 h-[34px] flex justify-center items-center text-center text-xxs2  ${index %2===0 ?"bg-[#E88B23]":"bg-[#CFAC71]"} `}>
        {data?.packageName}
      </div>
      <div className="w-full h-full px-5 flex items-center justify-center gap-2">
        <div className="flex flex-col items-center">
            <div className="text-[#1E3167] text-xxs1 font-semibold">Members</div>
            <div className="text-[#1E3167] text-sm font-semibold">{data?.usersCount}</div>
        </div>
        <div className="w-[1px] h-[16px] bg-[#1E3167] bg-opacity-20"></div>
        <div className="flex flex-col items-center">
            <div className="text-[#1E3167] text-xxs1 font-semibold">Amount</div>
            <div className="text-[#1E3167] text-sm font-semibold">{data?.monthlyDivident}</div>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPlanCard;
