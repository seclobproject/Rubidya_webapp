import React from 'react'
import SuggestUserCard from '../Components/SuggestUserCard'
import SuggestionSection from '../Section/SuggestionSection'
import SinglePost from '../Components/SinglePost'
import SinglePostCard from '../Components/SinglePostCard'
import PostSection from '../Section/PostSection'
import Profile from './Profile'
import Navbar from '../Components/Navbar'
import PostPage from './PostPage'

const Home = () => {
  return (
    <div className='flex flex-1 overflow-hidden'>
    <div className='w-full flex justify-center pt-20  overflow-y-auto right-0'><PostPage/></div>
    
    </div>
  )
}

export default Home