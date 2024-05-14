import noProfilePic from "../assets/img/noProfile.png";
import more from "../assets/img/moreonpost.png";
import share from "../assets/img/share.png";
import likedIcon from "../assets/img/like.png";
import likeIcon from "../assets/img/likepost.svg";
import commentIcon from "../assets/img/comment.png";
import shareBlue from "../assets/img/shareBlue.svg";
import bookmarkIcon from "../assets/img/bookmark.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApiCall } from "../Services/Api";
import { deleteCommentByCommentOwner, likeAPost, postComment } from "../Utils/Constants";
import "./SinglePost.css";
import { Link } from "react-router-dom";
import SingleComment from "./SingleComment";
import toast from "react-hot-toast";
import "./Style.css";

const SinglePost = ({ postData }) => {
  const [timeDifference, setTimeDifference] = useState();
  const [liked, setLiked] = useState(false);
  const [animateLiked, setAnimatedLike] = useState(false);
  const [isCommentOn, setIsCommentOn] = useState(false);
  const [commentContent, setCommentContent] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const userId = useSelector((state) => state?.userProfile?._id);

  const handleDoubleLike = async () => {
    setAnimatedLike(true);
    setTimeout(() => {
      setAnimatedLike(false);
    }, 1000);
    if (!liked) {
      handleLike();
    }
  };
  const handleLike = async () => {
    try {
      // console.log("hitted like")
      const response = await ApiCall("post", likeAPost, {
        postId: postData._id,
      });
      // console.log("after");
      console.log(response);
      if (response?.data?.status === "01") {
        if (liked) {
          postData.likeCount -= 1;
        } else {
          postData.likeCount += 1;
        }
        setLiked(!liked);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePostComment = async (e) => {
    if (commentContent === "") {
      return;
    }
    e.preventDefault();
   
    try {
      const response = await ApiCall("post", postComment, {
        mediaId: postData._id,
        comment: commentContent,
      });
      if (response?.data?.sts === "01") {
        postData.commentId.push(response?.data?.comment);
        postData.commentCount++;
        setCommentContent("");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCommentByOwner = async (id) => {
    console.log(id);
    if (!id) {
      return;
    }
    setConfirmLoading(true)
    try {
      const response = await ApiCall(
        "delete",
        `${deleteCommentByCommentOwner}/${id}`
      );
      // toast("deletd comment")
      console.log(response)
    } catch (error) {
      console.log(error)
    }finally{
      setConfirmLoading(false)
    }
  };

  useEffect(() => {
    // console.log(postData.likedBy);
    postData.likedBy.forEach((element) => {
      if (element === userId) {
        setLiked(true);
      }
      // setComments(postData?.commentId)
    });

    const calculateTimeDifference = () => {
      const updatedAtTime = new Date(postData?.createdAt);
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
  }, [commentContent]);
  return (
    <div
      className="relative w-full xs:w-[300px] sm:w-[400px] md:w-[500px] lg:w-[525px] h-fit bg-white py-[22px] px-2 lg:px-5 flex items-start justify-center lg:rounded-xl"
      style={{ boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}
    >
      <div className=" flex flex-col h-fit w-full gap-2.5 bg--400 overflow-hidden">
        <div className=" flex flex-row justify-between items-center">
          <Link
            to={`/user/${postData?.userId}`}
            className="flex flex-row gap-[7px] "
          >
            <div>
              {postData?.profilePic ? (
                <img
                  src={postData?.profilePic}
                  alt=""
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
                />
              ) : (
                <img
                  src={noProfilePic}
                  alt=""
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
                />
              )}
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="font-semibold text-[#1E3167]">
                {postData?.username}
              </div>
              <div className="text-[#707070] text-xs">{timeDifference} ago</div>
            </div>
          </Link>
          <div>
            <img src={more} alt="" className="w-1 h-[15px]" />
          </div>
        </div>
        <div className="w-full h-full post ">
          <img
            src={postData?.filePath}
            alt=""
            className={`w-full h-full lg:rounded-2xl ${
              animateLiked ? "liked" : ""
            } `}
            onDoubleClick={handleDoubleLike}
          />
          {animateLiked && <div className="heart-animation">&#10084;</div>}
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className=" flex gap-4 items-center">
            {liked ? (
              <img
                src={likedIcon}
                alt=""
                className="w-[26px] h-[23px] cursor-pointer"
                onClick={handleLike}
              />
            ) : (
              <img
                src={likeIcon}
                alt=""
                className="w-[26px] h-[23px] cursor-pointer"
                onClick={handleLike}
              />
            )}

            <img
              src={commentIcon}
              alt=""
              className="w-[23px] h-[23px] cursor-pointer"
              onClick={() => setIsCommentOn(true)}
            />
            {isCommentOn && (
              <div
                className={`absolute z-10 left-0 right-0 bottom-0 bg-white w-[525px] h-fit rounded-[40px] px-5 pt-7 flex flex-col transform transition-all ease-in-out duration-300 ${
                  isCommentOn ? "-translate-y-0" : "translate-y-full"
                }`}
              >
                <div className="flex flex-row justify-between text-[#7E7C7C]">
                  <div className="">
                    View all {postData?.commentCount} comments{" "}
                  </div>
                  <div
                    className="rotate-45 text-2xl cursor-pointer "
                    onClick={() => setIsCommentOn(false)}
                  >
                    +
                  </div>
                </div>
                <div className="custom-scrollbar flex flex-col w-full h-64 overflow-y-scroll ">
                  {postData?.commentId?.map((comment, index) => {
                    return <SingleComment key={index} data={comment} handleDeleteCommentByOwner={handleDeleteCommentByOwner} confirmLoading={confirmLoading} />;
                  })}
                </div>
                <div className="my-4 w-full h-full rounded-lg border-2 border-slate-200 flex flex-row items-center px-3">
                  <textarea
                    style={{ resize: "none" }}
                    placeholder="Write a comment...."
                    className="w-full h-[93px] bg-transparent border-none outline-none rounded-[15px]   p-1 placeholder:text-[#7E7C7C] "
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                  />
                  <div
                    className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#37474F] bg-opacity-15 cursor-pointer "
                    onClick={handlePostComment}
                  >
                    <img src={shareBlue} alt="" />
                  </div>
                </div>
              </div>
            )}
            <img
              src={bookmarkIcon}
              alt=""
              className="w-[20px] h-[25px] cursor-pointer"
            />
          </div>
          <div>
            <img src={share} alt="" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="flex flex-col items-start  text-sm w-full">
          {postData?.likeCount > 1 && (
            <div className="mb-[3px]">
              Liked by{" "}
              <span className="font-semibold">
                {postData?.lastLikedUserName}
              </span>{" "}
              {postData?.likeCount > 1 && (
                <span>and {postData?.likeCount - 1} Others </span>
              )}
            </div>
          )}
          {postData?.description && (
            <span className="mb-[3px]   text-start w-full">
              <b className="font-semibold">{postData?.username}</b>{" "}
              {postData?.description}
            </span>
          )}
          {postData?.commentCount > 0 && (
            <div className="text-[#7E7C7C]">
              View all {postData?.commentCount} comments
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
