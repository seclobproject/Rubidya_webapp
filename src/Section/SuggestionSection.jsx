import React, { useEffect, useState } from 'react'
import SuggestUserCard from '../Components/SuggestUserCard'
import { ApiCall } from '../Services/Api'
import { getSuggestions } from '../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSuggestion } from '../config/rubidyaSlice'

const SuggestionSection = () => {
  const suggestUsers=useSelector(state=>state.userSuggestion)
  const dispatch=useDispatch()
  const fetchSuggestions=async()=>{
    const response=await ApiCall("get",getSuggestions)
    // console.log(response);
    
    dispatch(setUserSuggestion(response?.data?.result))
  }

  useEffect(()=>{
    fetchSuggestions()
  },[])

  if (suggestUsers.length>0) {
    return (
      <div className='flex flex-col gap-1 bg-white bg-opacity-55 h-ft px-4 py-4 w-fit overflow-x-scroll rounded-lg font-poppins'>
        <div className='flex flex-row w-full mb-[17px] justify-between'>
          <div className='text-[#1E3167]  font-semibold text-base '>New People</div>
          <div className='text-[#8996BC]'>see all</div>
        </div>
        <div className='flex px-2 gap-3 mb-[10px]  overflow-x-auto'>
          {suggestUsers && suggestUsers.slice(0,4).map((user,index)=>{
            return  <SuggestUserCard user={user} key={index}/>
          })}   
        </div>
      </div>
    )
  }
  
}

export default SuggestionSection
