import userIcon from '../assets/img/userGray.png'
import userV from '../assets/img/userV.png'


const PayIdSection = () => {
  return (
    <div className='py-4 flex flex-col gap-4  bg-[#EAEEF4] px-3 '>
        <div className='text-sm px-3'>
        Please provide your Pay ID from your <br />exchange
        </div>
        <div>
            <div className='flex items-center px-[14px] py-[12px] rounded-xl border-[3px] border-[#A3D4FF] w-full'>
                <img src={userIcon} alt="" className='w-3 h-3' />
                <input type="text" className='w-full bg-transparent border-none pl-4 px-2 outline-none' placeholder='Pay ID'/>
            </div>
        </div>
        <div>
            <div className='flex items-center px-[14px] py-[12px] rounded-xl border-[3px] border-[#A3D4FF] w-full'>
                <img src={userV} alt="" className='w-[18px] h-3' />
                <input type="text" className='w-full bg-transparent border-none px-2 outline-none' placeholder='Google authentication code'/>
            </div>
        </div>
        <div className='pt-[14px]'>
            <button className='w-full text-white bg-[#1E3167] h-12 rounded-md'>Submit</button>
        </div>

        <div className='w-full pt-5 flex justify-center'>
            <div>Don't have Pay ID? <span className='text-[#617DE0]'>Sign Up</span></div>
        </div>

    </div>
  )
}

export default PayIdSection
