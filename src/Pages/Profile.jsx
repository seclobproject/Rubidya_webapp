import React, { useEffect, useState } from 'react'
import ProfileSection from '../Section/ProfileSection'
import PostSection from '../Section/PostSection'
import PayIdSection from '../Section/PayIdSection'
import { ApiCall } from '../Services/Api'
import { getProfilePic, getUserPost, getUserProfile } from '../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from '../config/rubidyaSlice'
import arrowIcon from "../assets/img/arrow.png";
import moreIcon from "../assets/img/more.png";
import WalletSection from '../Section/WalletSection'
const Profile = () => {
  const [selectedBut,setSelectedBut]=useState("")
  const [profileData,setProfileData]=useState()
  const [profilePic,setProfilePic]=useState()
  const [postCount,setPostCount]=useState();
  const [posts,setPosts]=useState([])
  const [page,setPage]=useState(1)
  const [hasMore,setHasMore]=useState(true)
  const dispatch=useDispatch()
  // const showProfile=useSelector(state=>state.showProfile)
  const fetchProfile=async()=>{
      try {
        const response=await ApiCall("get",getUserProfile)
        // console.log(response);
        if (response?.data?.sts==="01") {
          setProfileData(response?.data?.user)
         dispatch(setProfile(response?.data?.user))
        }
      } catch (error) {
        console.log(error);
      }
  }
  const fetchPosts=async(pageNumber)=>{
    try {
      const response=await ApiCall("get",`${getUserPost}?page=${pageNumber}`)
      // console.log(response);
      if (response?.data?.sts==="01") {
        console.log(posts);
        console.log(response.data);
        setPosts((prev)=>[...prev,...response?.data?.media])
      
        setPostCount(response?.data?.postCount)
        setPage(pageNumber+1)
        if (posts.length>=response?.data?.postCount) {
          setHasMore(false)
        }
        console.log()
        // setProfilePic(response?.data?.media[0]?.profilePic)
       
      }
    } catch (error) {
      console.log(error);
    }
}
  const getProfilePicOfUser=async()=>{
    const response=await ApiCall("get",getProfilePic)

    if (response?.data?.sts==="01") {
      setProfilePic(response?.data?.profilePic?.filePath)
    }
  }
  useEffect(()=>{
    fetchProfile()
    fetchPosts(page);
   
    getProfilePicOfUser()
    return ()=>{
      window.scrollTo(0,0)
    } 
  },[])
  
  return (
    <div className={`w-full sm:[380px] md:[400px] lg:w-[500px] h-screen py-2 px-2 lg:px-10 bg-white rounded-t-lg transform transition-all ease-in-out  duration-500 lg:mt-[90px]
   
     `}
     >
      <div className="flex w-full justify-between px-5  pt-10">
        <div className={`w-8 h-8 rounded-full border flex justify-center items-center bg-gradient-to-t from-[#04477039]  to-[#d6eee13f] `}>
          <img src={arrowIcon} alt="" className={`w-[13px] h-[11px] `} onClick={()=>setSelectedBut("")} />
        </div>
        <div className="w-8 h-8 rounded-full border flex justify-center items-center bg-gradient-to-t from-[#04477039]  to-[#d6eee13f]">
          <img src={moreIcon} alt="" className="w-[11px] h-[4px] " />
        </div>
      </div>
        {/* ${showProfile ? "translate-x-0":"-translate-x-full" } */}
      {/* {selectedBut==="" && <ProfileSection seStelectedBut={setSelectedBut}  postCount={postCount} profilePic={profilePic}/>}
      {(selectedBut==="" && posts) &&  <PostSection postData={posts} fetchPosts={fetchPosts} page={page} hasMore={hasMore}/>}
      {selectedBut==="wallet" &&  <PayIdSection/>} */}
      <WalletSection/>
     
    </div>
  )
}

export default Profile
