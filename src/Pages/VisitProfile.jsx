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
        navigate("/search");
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
  }, []);
  return (
    <div className="w-full h-screen md:w-[400px] lg:mt-24  ">
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
