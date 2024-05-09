import { useEffect, useState } from "react";
import SingleSearchCard from "../Components/SingleSearchCard.jsx";
import searchIcon from "../assets/img/searchblue.png";
import { ApiCall } from "../Services/Api.jsx";
import { allUsers } from "../Utils/Constants.js";
import {toast} from "react-hot-toast"
import {ClipLoader} from "react-spinners"
const Search = () => {
  const [search,setSearch]=useState("")
  const [loading,setLoading]=useState(false)
  const [users,setUsers]=useState([])
  const [results,setResults]=useState([])

  const handleSearch=async()=>{
   
    if (users.length!==0) {
      let regex = new RegExp('\\b' + search.trim(), 'i');
      
      setResults(users.filter((user)=>regex.test(user?.firstName)))
    }else{
      setLoading(true)
      try {
        const response=await ApiCall("get",allUsers)
        
        if (response?.data?.sts==="01") {
          console.log(response);
          setLoading(false)
          setUsers(response?.data?.result)
          setResults(response?.data?.result)
          
        }else{
          toast("Failed to fetch")
          
        }
  
      } catch (error) {
        toast("Failed to fetch")
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
  }
  useEffect(()=>{
    handleSearch()
  },[search])
  return (
    <div className="w-full h-screen pb-16 lg:pt-24  lg:w-[685px] px-4 py-6 flex justify-center items-center font-poppins">
      <div className=" w-full h-full px-5  lg:px-[24px]  bg-white rounded-t-md flex flex-col">
        <div className="py-5 lg:py-[30px]">
          <div className="w-full h-10 px-3 rounded-md flex flex-row justify-between items-center bg-[#A7ACD0] bg-opacity-25">
            <input
              type="text"
              className="w-full bg-transparent outline-none h-full"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <img src={searchIcon} alt="" className="w-[14px] h-[14px] cursor-pointer" onClick={handleSearch} />
          </div>
        </div>
        <div className={`flex flex-col h-full overflow-y-scroll items-center ${loading && "justify-center"}`}>
          {
            loading?<ClipLoader color="gray"/>:(
              results && results.slice(0,50).map((user,index)=>{
                return <SingleSearchCard user={user} key={index}/>
              })
            )
          }
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Search;
