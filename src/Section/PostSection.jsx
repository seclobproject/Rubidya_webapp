import React from 'react'
import SinglePostCard from '../Components/SinglePostCard'
import noPostIcon from '../assets/img/nopost.png'
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from 'react-spinners';
const PostSection = ({postData,fetchPosts,page,hasMore}) => {
  console.log(postData);
  if (postData.length===0) {
    return(
      <div className='pt-32 flex flex-col justify-center items-center font-poppins'>
        <div className='p-3 h-fit w-fit flex justify-center items-center border-[3px] border-[#45537A] rounded-full'>
          <img src={noPostIcon} alt="" className='w-[25px] h-[25px]' />
        </div>
        <div className='text-[#45537A] font-semibold text-sm'>No Posts yet</div>
      </div>
    )
  }
  // fetchPosts()
  return (
  <div className='w-full h-full flex justify-center pt-5'>
     <div className='w-fit flex justify-center'>
     <InfiniteScroll
    dataLength={postData.length}
        next={()=>fetchPosts(page)}
        hasMore={hasMore}
        loader={<ClipLoader size={25} color='black' />}
        endMessage={<p></p>}
     className='grid grid-cols-3 gap-1 lg:gap-4 pb-32  justify-center items-center '>
      {postData && postData.map((single,index)=>{
        return <SinglePostCard data={single} key={index}/>
      })}
     </InfiniteScroll>
   </div>
  </div>
  )
}

export default PostSection
