import { useState } from "react";
import upload_area from "../assets/img/uploadArea.png"
import { ApiCall } from "../Services/Api";
import { uploadImage } from "../Utils/Constants";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const PostAdd = () => {
    const [image,setImage]=useState(false)
    const [loading,setLoading]=useState(false)
    const [description,setDescription]=useState("")
    const navigate=useNavigate()

    
    const uploadPost = async () => {
        if (!image || !description) {
            toast("All fields required");
            return;
        }
    
        const formData = new FormData();
        formData.append("media", image);
        formData.append("description", description);
        setLoading(true)
        try {
            
            const response =await ApiCall("post",uploadImage,formData)
            console.log(response);
            setLoading(false)
            if (response?.data?.sts==="01") {
                toast.success("Post Added Successfully")
                navigate("/home")
            }

        } catch (error) {
           
            toast.error("Post creation failed")
            console.error(error);
            // Handle error as needed
        }finally{
            setLoading(false)
        }
    }
    
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="h-screen py-32 flex justify-center items-center overflow-y-hidden    ">
      <div className="flex flex-col items-center justify-center w-fit h-full  gap-5 bg-white p-10 rounded-md">
        <div className="text-[#45537A] font-semibold">upload your pics</div>
        <div className="itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className="h-40 w-full rounded-lg"
              alt=""
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <textarea placeholder="Add description"  className="border-[#45537A] border-2 outline-none rounded-md lg:w-96 p-2" onChange={(e)=>setDescription(e.target.value)} />
        <button className="bg-[#45537A] text-white w-fit text-sm px-4 py-2 rounded-md " onClick={uploadPost}>{loading?<ClipLoader color="white" size={20}/>:"Upload With Rubidya"}</button>
      </div>
    </div>
  );
};

export default PostAdd;
