import React, { useEffect } from 'react'
import SuggestUserCard from '../Components/SuggestUserCard'
import SuggestionSection from '../Section/SuggestionSection'
import SinglePost from '../Components/SinglePost'
import SinglePostCard from '../Components/SinglePostCard'
import PostSection from '../Section/PostSection'
import Profile from './Profile'
import Navbar from '../Components/Navbar'
import PostPage from './PostPage'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  useEffect(()=>{
   
  },[])
  return (
    <div className='h-full flex flex-col  lg:mt-[60px] '>
      <div className='flex justify-center'><SuggestionSection/></div>
    <div className='w-full flex justify-center mt-2 h-full'><PostPage/></div>
    
    </div>
  )
}

export default Home