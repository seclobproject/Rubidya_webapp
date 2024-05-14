import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiCall } from "../Services/Api";
import { getUser } from "../Utils/Constants";
import VisitProfileSection from "../Section/VisitProfileSection";
import arrowIcon from "../assets/img/arrow.png";
import moreIcon from "../assets/img/more.png";
import PostSectionOthers from "../Section/PostSectionOthers";

const VisitProfile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { userId } = params;
  const [userDetails, setUserDetails] = useState([]);
  console.log(userId);

  const getUserDetails = async () => {
    console.log("try");
    try {
      const response = await ApiCall("get", `${getUser}/${userId}`);

      if (response?.data?.sts === "01") {
        setUserDetails(response?.data?.media);
      } else {
        navigate(-1);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!userId) {
      navigate("/home");
    }
    getUserDetails();
  }, [userId]);

  if (!userDetails) {
    return(
      <div></div>
    )
  }
  return (
    <div className="`w- sm:[380px] md:[400px] lg:w-[500px] h-full py-4 px-2 lg:px-10 bg-white rounded-t-lg transform transition-all ease-in-out  duration-500 lg:mt-[90px] ">
      <div className="w-full h-fit bg-white ">
        <div className="flex w-full justify-between px-5 py-5">
          <div
            className={`w-8 h-8 rounded-full border flex justify-center items-center bg-gradient-to-t from-[#04477039]  to-[#d6eee13f] `}
          >
            <img
              src={arrowIcon}
              alt=""
              className={`w-[13px] h-[11px] `}
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="w-8 h-8 rounded-full border flex justify-center items-center bg-gradient-to-t from-[#04477039]  to-[#d6eee13f]">
            <img src={moreIcon} alt="" className="w-[11px] h-[4px] " />
          </div>
        </div>
        {userDetails.length > 0 && (
          <>
            <VisitProfileSection profileData={userDetails[0]} />
            <PostSectionOthers postData={userDetails}/>
          </>
        )}
      </div>
    </div>
  );
};

export default VisitProfile;
