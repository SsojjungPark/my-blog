import { useState, useEffect } from "react";
import { fake_data } from "../../apis/blog";
import PostingCard from "./PostingCard";

const MainPosting = () => {
  const [postingList, setPostingList] = useState([]);

  useEffect(() => {
    setPostingList(fake_data);
  }, []);

  return (
    <div className="mainPosting">
      {postingList.map(post => (
        <PostingCard key={post.postingID} post={post} />
      ))}
    </div>
  );
};

export default MainPosting;
