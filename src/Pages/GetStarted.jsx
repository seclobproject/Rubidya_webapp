import img1 from  "../assets/Images/splash.svg"
import rubLogo from "../assets/Images/applogo.svg"
import rubText from "../assets/Images/Name.svg"
import { useNavigate } from "react-router-dom"
const GetStarted = () => {
  const navigate=useNavigate()
  return (
    <div className='w-full  h-[100vh] flex flex-col lg:flex-row justify-center items-center'>
      <div className="h-[40%] lg:w-[50%] lg:h-[100%] flex flex-col justify-center items-center" >
        <img src={img1} alt="" className="h-[100%] lg:w-[85%]"/>
      </div>
      <div className='flex flex-col gap-4 lg:gap-6 items-center'>
        <div className="flex flex-col lg:w-52 items-center">
        <img src={rubLogo} alt="" className="w-[40%] lg:w-44"/>
        <img src={rubText} alt=""className=" lg:w-52" />
        </div>
        <div className="text-xl lg:text-4xl font-bold text-center">Best social app to make new friends</div>
        <div className=""><button className=" px-20 py-1 text-white bg-blue-700  rounded-md hover:scale-105 hover:shadow-blue-600 hover:shadow-sm" 
        onClick={()=>navigate("/login")}
        >Get started</button></div>
      </div>
    </div>
  )
}

export default GetStarted
