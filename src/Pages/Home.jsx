import React from 'react'
import SuggestUserCard from '../Components/SuggestUserCard'
import SuggestionSection from '../Section/SuggestionSection'
import SinglePost from '../Components/SinglePost'
import SinglePostCard from '../Components/SinglePostCard'
import PostSection from '../Section/PostSection'
import Profile from './Profile'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className=''>
      {/* flex flex-col gap-2 justify-center items-center w-full  */}
     {/* <SuggestionSection/>
     <SinglePost/>
     <SinglePost/>
     <SinglePost/>
     <SinglePost/>
     <SinglePostCard/>
     <PostSection/>
     <Profile /> */}
     <Navbar/>
    </div>
  )
}

export default Home