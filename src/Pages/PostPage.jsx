import React, { useEffect, useState } from "react";
import SinglePost from "../Components/SinglePost";
import InfiniteScroll from "react-infinite-scroll-component";
import { ApiCall } from "../Services/Api";
import { getLatestPosts } from "../Utils/Constants";

const PostPage = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);
  const fetchPosts = async (pageNumber) => {
    setIsLoading(true);
    try {
      const response = await ApiCall("get", `${getLatestPosts}?page=${pageNumber}`);
      if (response?.data?.status === "01") {
        setLatestPosts((prev) => [...prev, ...response?.data?.posts]);
        setPage(pageNumber + 1);
        setIsLoading(false);
        if (latestPosts.length >= response?.data?.postCount) {
          setHasMore(false);
        }
      }
      console.log(response?.data?.posts)
      console.log(latestPosts);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts(page);
  }, []);
  return (
    <div className="">
      <InfiniteScroll
        dataLength={latestPosts.length}
        next={()=>fetchPosts(page)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more items</p>}
      >
        {latestPosts &&
      
          <div className="flex flex-col gap-2 items-center">
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
