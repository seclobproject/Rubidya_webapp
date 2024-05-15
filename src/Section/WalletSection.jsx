import { useEffect, useState } from "react"
import SubscriptionPlanCard from "../Components/SubscriptionPlanCard"
import { ApiCall } from "../Services/Api"
import { getAllPackages } from "../Utils/Constants"
import rubIcon from "../assets/img/rubicon.svg"
import walletIcon from "../assets/img/walletIcon.svg"

const WalletSection = () => {
    const [packages,setPackages]=useState([])

    const fetchAllPackages=async()=>{
        const response=await ApiCall("get",getAllPackages)
        console.log(response);
        if (response?.data?.sts==="01") {
            setPackages(response?.data?.packages)
        }
    }
    useEffect(()=>{
        fetchAllPackages()
    },[])
  return (
    <div className="w-full md:w-[435px] h-screen  flex flex-col gap-4 justify-center items-center font-poppins">
        <div className="w-full text-2x flex justify-center pb-3">Wallet</div>
        <div className=" px-12 flex flex-col justify-center gap-[20px] w-[345px] h-[145px] rounded-[5px] bg-gradient-to-b from-[#1e3167d3] to-[#3c63cdb7]">
            <div className="text-white text-xs">Available balance</div>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div>
                        <img src={rubIcon} alt="" className="w-7 h-7" />
                        
                    </div>
                    <div className="text-white font-bold text-4xl">0</div>
                </div>
                <img src={walletIcon} alt="" className="w-[52px] h-[44px]" />
            </div>
        </div>
        <div className=" px-12 flex flex-col justify-center gap-[20px] w-[345px] h-[145px] rounded-[5px] bg-gradient-to-b from-[#1e3167d3] to-[#3c63cdb7]">
            <div className="text-white text-xs">Available ARS balance</div>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div>
                        <img src={rubIcon} alt="" className="w-7 h-7" />
                        
                    </div>
                    <div className="text-white font-bold text-4xl">0</div>
                </div>
                <img src={walletIcon} alt="" className="w-[52px] h-[44px]" />
            </div>
        </div>
        <div className="w-[345px] flex flex-col gap-4">
        <div className="w-[345px] flex flex-row gap-[14px] overflow-x-scroll ">
            {packages && packages.map((data,index)=>{
                return <SubscriptionPlanCard key={index} data={data} index={index} />
            })}
        </div>
        </div>
       <div className="w-[345px] flex flex-col gap-4">
       <div className="text-[#1E3167] font-medium">Performance income</div>
        <div className="w-[345px] flex flex-row gap-[14px] overflow-x-scroll">
        {packages && packages.map((data,index)=>{
                return <SubscriptionPlanCard key={index} data={data} index={index} />
            })}
        </div>
       </div>
       <div className="w-[345px] flex flex-col gap-4">
       <div className="text-[#1E3167] font-medium"> Team Performance income</div>
        <div className="w-[345px] flex flex-row gap-[14px] overflow-x-scroll">
        {packages && packages.map((data,index)=>{
                return <SubscriptionPlanCard key={index} data={data} index={index} />
            })}
        </div>
       </div>
        
      
    </div>
  )
}

export default WalletSection
