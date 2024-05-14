import React, { useEffect, useState } from 'react'
import noProfile from "../assets/img/noProfile.png"
import { useSelector } from 'react-redux';
import { getProfilePic } from '../Utils/Constants';
import { ApiCall } from '../Services/Api';
import deleteIcon from "../assets/img/deleteIcon.svg";
import { Button, Modal } from 'antd';

const SingleComment = ({data,handleDeleteCommentByOwner,confirmLoading}) => {
    
    const [timeDifference, setTimeDifference] = useState();
    const [profilePic,setProfilePic]=useState()
    const [open, setOpen] = useState(false);

    const user=useSelector(state=>state.userProfile)
    // console.log(user._id,data.userId._id)
    const getProfilePicOfUser=async()=>{
        if (data.userId._id!==user._id) {
            
            return;
        }
        try {
            const response=await ApiCall("get",getProfilePic)
    
        if (response?.data?.sts==="01") {
          setProfilePic(response?.data?.profilePic?.filePath)
          setTimeDifference("0min")
        }
            
        } catch (error) {
            console.log(error)
        }
        
      }
      const showModal = () => {
        setOpen(true);
      };
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };
      const handleOk = () => {
        handleDeleteCommentByOwner(data?._id)
      };

      
    useEffect(() => {
        getProfilePicOfUser()
        const calculateTimeDifference = () => {
          const updatedAtTime = new Date(data?.createdAt);
          const currentTime = new Date();
    
          const timeDiff = Math.abs(currentTime - updatedAtTime);
    
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const days = Math.floor(hours / 24);
          const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    
          let formattedTimeDifference = "";
          if (days > 0) {
            formattedTimeDifference = `${days}d `;
          }
          if (hours > 0) {
            formattedTimeDifference += `${hours % 24}h `;
          }
          if (minutes > 0) {
            formattedTimeDifference += `${minutes}min `;
          }
    
          formattedTimeDifference = formattedTimeDifference.split(" ");
          setTimeDifference(formattedTimeDifference[0]);
        };
    
        // Call calculateTimeDifference function
        calculateTimeDifference();
      }, []);
  return (
    <div className='flex flex-row w-full py-3 pr-3 border-b-2 border-[#1E3167] border-opacity-15 justify-between items-center'>
        <div className='flex flex-row justify-center items-center gap-2'>
            <div>
                <img src={data?.userId.profilePic?.filePath || profilePic ||noProfile} alt="" className='w-[30px] h-[30px] rounded-full' />

            </div>
            <div className='flex flex-col justify-between'>
                <div className='text-xs font-semibold'>{data?.userId?.firstName}</div>
                
                <div className='text-sm'>{data?.comment}</div>
            </div>
        </div>
       <div className='flex flex-col justify-between items-end'>
       <div className='text-gray-400 text-xs'>{timeDifference}</div>
       {data.userId._id===user._id &&<Button type='text' onClick={showModal}><img src={deleteIcon} alt="" className='w-2 h-3' /></Button>}
       <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Do you want to delete the comment</p>
      </Modal>
       </div>
      
    </div>
  )
}

export default SingleComment
 