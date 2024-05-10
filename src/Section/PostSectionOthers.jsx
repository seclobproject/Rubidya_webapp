
import React from 'react'
import SinglePostCard from '../Components/SinglePostCard'
import noPostIcon from '../assets/img/nopost.png'
const PostSectionOthers = ({postData}) => {
  console.log(postData);
  if (postData[0].post===0) {
    return(
      <div className='py-32  flex flex-col justify-center items-center font-poppins'>
        <div className='p-3 h-fit w-fit flex justify-center items-center border-[3px] border-[#45537A] rounded-full'>
          <img src={noPostIcon} alt="" className='w-[25px] h-[25px]' />
        </div>
        <div className='text-[#45537A] font-semibold text-sm'>No Posts yet</div>
      </div>
    )
  }
  return (
    <div
     className='grid grid-cols-3 gap-1 pb-32  justify-center items-center '>
      {postData && postData.map((single,index)=>{
        return <SinglePostCard data={single} key={index}/>
      })}
      
     </div>
  )
}

export default PostSectionOthers
