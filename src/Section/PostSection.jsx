import React from 'react'
import SinglePostCard from '../Components/SinglePostCard'

const PostSection = ({postData}) => {
  return (
    <div className='grid grid-cols-3 gap-2 pb-32 '>
      {postData && postData.map((single,index)=>{
        return <SinglePostCard data={single} key={index}/>
      })}
      
     </div>
  )
}

export default PostSection
