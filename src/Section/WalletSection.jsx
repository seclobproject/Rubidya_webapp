import rubIcon from "../assets/img/rubicon.svg"
import walletIcon from "../assets/img/walletIcon.svg"

const WalletSection = () => {
  return (
    <div className="w-full md:w-[435px] h-full bg-red-50 flex flex-col gap-4 justify-center items-center font-poppins">
        <div className="w-full text-2x flex justify-center py-3">Wallet</div>
        <div className=" px-12 flex flex-col justify-center gap-[20px] w-[345px] h-[145px] rounded-[5px] bg-gradient-to-b from-[#1e3167d3] to-[#3c63cdb7]">
            <div className="text-white text-xs">Available balance</div>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div>
                        <img src={rubIcon} alt="" className="w-7 h-7" />
                        
                    </div>
                    <div className="text-white font-bold text-4xl">21.39</div>
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
                    <div className="text-white font-bold text-4xl">21.39</div>
                </div>
                <img src={walletIcon} alt="" className="w-[52px] h-[44px]" />
            </div>
        </div>
        <div className="w-[345px] overflow-x-scroll">
            
        </div>
      
    </div>
  )
}

export default WalletSection
