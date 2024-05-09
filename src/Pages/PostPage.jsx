import React, { useEffect, useMemo, useState } from "react";
import SinglePost from "../Components/SinglePost";
import InfiniteScroll from "react-infinite-scroll-component";
import { ApiCall } from "../Services/Api";
import { getLatestPosts } from "../Utils/Constants";

const PostPage = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  let uniqueIds = useMemo(() => new Set(), []);
  const [page, setPage] = useState(1);
  const fetchPosts = async (pageNumber) => {
    // setIsLoading(true);
    try {
      const response = await ApiCall("get", `${getLatestPosts}?page=${pageNumber}`);
      if (response?.data?.status === "01") {
     

let uniqueData = response?.data?.posts.filter(item => {
    // Check if the ID is already in the Set
    if (uniqueIds.has(item._id)) {
        // If it's a duplicate, return false to filter it out
        return false;
    } else {
        // If it's not a duplicate, add its ID to the Set and return true to keep it
        uniqueIds.add(item._id);
        return true;
    }
});
        setLatestPosts((prev) => [...prev, ...uniqueData]);

        setPage(pageNumber + 1);
        // setIsLoading(false);
        if (latestPosts.length >= response?.data?.postCount) {
          setHasMore(false);
        }
      }
      console.log(response?.data?.posts)
      // console.log(latestPosts);
    } catch (error) {
      // setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts(page);
    return ()=>{
      window.scrollTo(0,0)
    } 
  }, []);
  return (
    <div className=" w-full pb-12 px-2 lg:px-0 ">
      <InfiniteScroll className="w-full flex flex-col items-center justify-center  "
        dataLength={latestPosts.length}
        next={()=>fetchPosts(page)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more items</p>}
      >
        {latestPosts &&
      
          <div className="flex flex-col gap-2 items-center w-full ">
            {latestPosts.map((post, index) => {
            return <SinglePost postData={post} key={index} />;
          })}
          </div>
          }
      </InfiniteScroll>
    </div>
  );
};

export default PostPage;
