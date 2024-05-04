import React, { useEffect, useState } from 'react'
import ProfileSection from '../Section/ProfileSection'
import PostSection from '../Section/PostSection'
import PayIdSection from '../Section/PayIdSection'
import { ApiCall } from '../Services/Api'
import { getUserPost, getUserProfile } from '../Utils/Constants'

const Profile = ({right}) => {
  const [selectedBut,setSelectedBut]=useState('posts')
  const [profileData,setProfileData]=useState()
  const [profilePic,setProfilePic]=useState()
  const [postCount,setPostCount]=useState();
  const [posts,setPosts]=useState()

  const fetchProfile=async()=>{
      try {
        const response=await ApiCall("get",getUserProfile)
        // console.log(response);
        if (response?.data?.sts==="01") {
          setProfileData(response?.data?.user)
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
        setProfilePic(response?.data?.media[0]?.profilePic)
       
      }
    } catch (error) {
      console.log(error);
    }
}

  useEffect(()=>{
    fetchProfile()
    fetchPosts()
  },[])
  if (right===true) {
    return(
      <div className=" bg-white ">

      </div>
    )
   
  }
  return (
    <div className='w-[400px] h-full py-6 px-2 bg-white'>
      <ProfileSection setSelectedBut={setSelectedBut} profileData={profileData}  postCount={postCount} profilePic={profilePic}/>
      {selectedBut==="posts" &&  <PostSection postData={posts} />}
      {selectedBut==="wallet" &&  <PayIdSection/>}
     
    </div>
  )
}

export default Profile
