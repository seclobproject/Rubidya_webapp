import React, { useEffect, useState } from 'react'
import ProfileSection from '../Section/ProfileSection'
import PostSection from '../Section/PostSection'
import PayIdSection from '../Section/PayIdSection'
import { ApiCall } from '../Services/Api'
import { getProfilePic, getUserPost, getUserProfile } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { setProfile } from '../config/rubidyaSlice'

const Profile = ({right}) => {
  const [selectedBut,setSelectedBut]=useState('')
  const [profileData,setProfileData]=useState()
  const [profilePic,setProfilePic]=useState()
  const [postCount,setPostCount]=useState();
  const [posts,setPosts]=useState()
  const dispatch=useDispatch()
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
  const fetchPosts=async()=>{
    try {
      const response=await ApiCall("get",getUserPost)
      // console.log(response);
      if (response?.data?.sts==="01") {
        setPosts(response?.data?.media)
      
        setPostCount(response?.data?.postCount)
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
    fetchPosts()
    getProfilePicOfUser()
  },[])
  if (right===true) {
    return(
      <div className=" bg-white  ">

      </div>
    )
   
  }
  return (
    <div className='w-[400px] h-full py-2 px-2 bg-white'>
      <ProfileSection setSelectedBut={setSelectedBut}  postCount={postCount} profilePic={profilePic}/>
      {selectedBut==="posts" &&  <PostSection postData={posts} />}
      {selectedBut==="wallet" &&  <PayIdSection/>}
     
    </div>
  )
}

export default Profile
